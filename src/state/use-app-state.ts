import create from "zustand";
import { QuestionData } from "@/types";
// import questions from "@/config/questions";

type AnsweredQuestion = QuestionData & {
  answer: string;
};

type Questions = {
  [prop: string]: QuestionData[];
};

type AppState = {
  answeredQuestions: {
    [categoryId: string]: AnsweredQuestion[];
  };
  answerQuestion: (
    categoryId: string,
    question: QuestionData,
    answer: string
  ) => void;
  questions: {
    [categoryId: string]: QuestionData[];
  };
  question: (categoryId: string, question: QuestionData[]) => void;
  isCategoryComplete: (categoryId: string) => boolean;
  reset: () => void;
};

export const useAppState = create<AppState>((set, get) => {
  return {
    answeredQuestions: {},
    answerQuestion(categoryId, question, answer) {
      const answeredQuestions = { ...get().answeredQuestions };
      if (!answeredQuestions.hasOwnProperty(categoryId)) {
        answeredQuestions[categoryId] = [];
      }
      const answered = answeredQuestions[categoryId].some(
        (answeredQuestion) => {
          return answeredQuestion.id === question.id;
        }
      );
      if (!answered) {
        answeredQuestions[categoryId].push({ ...question, answer });
        set({ answeredQuestions });
      }
    },
    questions: {},
    question(categoryId, question) {
      const questions = { ...get().questions };

      const newQuestions = {
        ...questions,
        [categoryId]: [...question],
      };

      if (newQuestions) {
        set({ questions: newQuestions });
      }
    },
    isCategoryComplete(categoryId) {
      const answeredQuestions = { ...get().answeredQuestions };
      const questions = { ...get().questions };
      const categoryAnswers = answeredQuestions[categoryId] ?? [];
      const numOfQuestions = (questions[categoryId] ?? []).length;
      return numOfQuestions === 0
        ? false
        : categoryAnswers.length === (questions[categoryId] ?? []).length;
    },
    reset() {
      set({ answeredQuestions: {} });
    },
  };
});

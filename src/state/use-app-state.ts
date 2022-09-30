import create from "zustand";
import { QuestionData } from "@/types";
import questions from "@/config/questions";

type AnsweredQuestion = QuestionData & {
  answer: string;
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
    isCategoryComplete(categoryId) {
      const answeredQuestions = { ...get().answeredQuestions };
      const categoryAnswers = answeredQuestions[categoryId] ?? [];
      return categoryAnswers.length === questions[categoryId].length;
    },
    reset() {
      set({ answeredQuestions: {} });
    },
  };
});
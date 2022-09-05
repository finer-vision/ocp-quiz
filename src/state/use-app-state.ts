import create from "zustand";
import { QuestionData } from "@/types";
import questions from "@/config/questions";
import winningCodes from "@/config/winning-codes";

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
  getCode: () => number[];
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
    getCode() {
      const now = new Date().getTime();
      const index = winningCodes.findIndex((winningCode) => {
        if (winningCode.used) return false;
        return now > winningCode.validAfter.getTime();
      });
      const winningCode = winningCodes[index] ?? null;
      const randomDigits = (total = 4): number[] => {
        const digits: number[] = [];
        for (let i = 0; i < total; i++) {
          digits.push(Math.floor(Math.random() * 9));
        }
        return digits;
      };
      return winningCode?.digits ?? randomDigits();
    },
  };
});

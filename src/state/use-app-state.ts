import create from "zustand";
import { QuestionData } from "@/types";
import config from "@/config/config";
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
  generateCode: () => number[];
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
    generateCode() {
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

      function setCode(code: string) {
        const formData = new FormData();
        formData.set("new_code", code);
        const init: RequestInit = {
          method: "POST",
          body: formData,
        };
        fetch(`${config.apiUrl}/code`, init)
          .then((res) => res.json())
          .then((json) => console.log(json))
          .catch((err) => console.error(err));
      }

      /**
       * No winning code, so make sure the box cannot have this code win.
       */
      if (winningCode === null) {
        // Send a fixed code to the box so the user won't win
        setCode("000000");
        return randomDigits();
      }

      /**
       * We have a winning code here, so send that winning code to the box.
       */
      const code = winningCode.digits.join("");
      // Send the winning code to the box so the user will win
      setCode(code);
      return winningCode.digits;
    },
  };
});

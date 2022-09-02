import { QuestionData } from "@/types";

type Questions = {
  [categoryId: string]: QuestionData[];
};

const questions: Questions = {
  "myths-or-facts": [
    {
      id: 1,
      question: "Question goes here?",
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 0,
    },
  ],
  "meta-pop-culture": [
    {
      id: 1,
      question: `Question goes here?`,
      type: "boolean",
      answers: [
        "Lorem ipsum dolor sit amet, consectetur",
        "Excepteur sint occaecat cupidatat non proident",
        "Sed ut perspiciatis unde omnis iste natus error",
      ],
      correctAnswerIndex: 2,
    },
  ],
  "our-hardware": [
    {
      id: 1,
      question: "Question goes here?",
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 0,
    },
  ],
  "data-centers": [
    {
      id: 1,
      question: `Question goes here?`,
      type: "boolean",
      answers: [
        "Lorem ipsum dolor sit amet, consectetur",
        "Excepteur sint occaecat cupidatat non proident",
        "Sed ut perspiciatis unde omnis iste natus error",
      ],
      correctAnswerIndex: 2,
    },
  ],
};

export default questions;

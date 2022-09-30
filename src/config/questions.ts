import { QuestionData } from "@/types";

type Questions = {
  [categoryId: string]: QuestionData[];
};

const questions: Questions = {
  "myths-or-facts": [
    {
      id: 1,
      question:
        "The Meta logo signifies the infinity loop that symbolizes endless possibilities and endless universes.",
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 1,
    },
    {
      id: 2,
      question: "The first OCP Summit was in June 2014.",
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 0,
    },
    {
      id: 3,
      question:
        "The four core OCP tenets are Effciency, Scalability, Openness and Impact.",
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 1,
    },
    {
      id: 4,
      question:
        "OCP requires that all contibutions meet at least one out of four of the core OCP tenets.",
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 0,
    },
    {
      id: 5,
      question: "The Bay Area has the highest number of data centers in the US",
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 0,
    },
    {
      id: 6,
      question:
        "About 2% of the total energy in the US is used by data centers",
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 1,
    },
    {
      id: 7,
      question:
        "The largest data center in the world is the Range International Information Group, located in Langfang, China.",
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 1,
    },
    {
      id: 8,
      question:
        "The countries that have the most data centers in 2022 are the US, Germany, UK, China, and Canada.",
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 1,
    },
    {
      id: 9,
      question:
        "Meta's first data center was opened in Altoona, Pennsylvania in 2011",
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 0,
    },
    {
      id: 10,
      question: "Over 100 billion Whatsapp messages are sent everyday day",
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 1,
    },
  ],
  "meta-pop-culture": [
    {
      id: 1,
      question: `Which Meta product has the highest monthly active users?`,
      type: "multi",
      answers: ["Whatsapp", "Facebook", "Instagram", "Workplace"],
      correctAnswerIndex: 1,
    },
    {
      id: 2,
      question: `Aside from @instagram, which Instagram account has the most followers?`,
      type: "multi",
      answers: [
        "Justin Bieber",
        "Kylie Jenner",
        "Cristiano Ronaldo",
        "Virat Kohli",
      ],
      correctAnswerIndex: 2,
    },
    {
      id: 3,
      question: ` Mark Zuckerberg graduated from Harvard`,
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 1,
    },
    {
      id: 4,
      question: ` Before landing the name 'Facebook', what was the company going to be called?`,
      type: "multi",
      answers: [
        "Lorem ipsum dolor sit amet, consectetur",
        "Excepteur sint occaecat cupidatat non proident",
        "Sed ut perspiciatis unde omnis iste natus error",
      ],
      correctAnswerIndex: 1,
    },
    {
      id: 5,
      question: ` Facebook live views doubled during which event?`,
      type: "multi",
      answers: [
        "Lorem ipsum dolor sit amet, consectetur",
        "Excepteur sint occaecat cupidatat non proident",
        "Sed ut perspiciatis unde omnis iste natus error",
      ],
      correctAnswerIndex: 1,
    },
  ],
  "our-hardware": [
    {
      id: 1,
      question: "Question1 goes here?",
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 0,
    },
    {
      id: 1,
      question: "Question2 goes here?",
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 0,
    },
    {
      id: 3,
      question: "Meta’s Hardware Engineering team names most of its hardware after what?",
      type: "boolean",
      answers: ["yes", "no"],
      correctAnswerIndex: 0,
    },
  ],
  "data-centers": [
    {
      id: 1,
      question: `Question1 goes here?`,
      type: "multi",
      answers: [
        "Lorem ipsum dolor sit amet, consectetur",
        "Excepteur sint occaecat cupidatat non proident",
        "Sed ut perspiciatis unde omnis iste natus error",
      ],
      correctAnswerIndex: 2,
    },
    {
      id: 2,
      question: `Question2 goes here?`,
      type: "multi",
      answers: [
        "Lorem ipsum dolor sit amet, consectetur",
        "Excepteur sint occaecat cupidatat non proident",
        "Sed ut perspiciatis unde omnis iste natus error",
      ],
      correctAnswerIndex: 2,
    },
    {
      id: 3,
      question: `Question3 goes here?`,
      type: "multi",
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

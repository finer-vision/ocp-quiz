import { QuestionData } from "@/types";
import questionsJSON from "./questions.json";

export interface Questions {
  [category: string]: QuestionData[]
}

let questions: Questions = questionsJSON;

Object.keys(questionsJSON).map((category: string) => {
  questions[category] = questions[category].map((question: QuestionData) => {
    question.answers = (question.answers as string).split(", ");
    question.answer = question.answer?.toLowerCase();
    question.correctAnswerIndex = (question.answers as string[])
      .findIndex((answer: string) => answer.toLowerCase() === question.answer)
    return question;
  })
})

export default questions;
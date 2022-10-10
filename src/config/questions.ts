import { QuestionData } from "@/types";
import questionsJSON from "./questions.json";

export interface Questions {
  [category: string]: QuestionData[]
}

const questions: Questions = questionsJSON;

Object.keys(questionsJSON).map((category: string) => {
  questions[category] = questions[category].map((question: QuestionData) => {
    question.answers = (question.answers as string).split(", ");
    question.correctAnswerIndex = (question.answers as string[])
      .findIndex((answer: string) => answer === question.answer)
    return question;
  })
})

export default questions;
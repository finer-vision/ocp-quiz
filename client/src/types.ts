export enum HomeState {
  initial,
  intro,
}

export type QuestionData = {
  id: number;
  question: string;
  type: "multi" | "boolean";
  answers: string[];
  correctAnswerIndex: number;
};

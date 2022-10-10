export enum HomeState {
  initial,
  intro,
}

export type QuestionData = {
  id: number;
  question: string;
  answers: string[] | string;
  correctAnswerIndex?: number;
  answer?: string
};

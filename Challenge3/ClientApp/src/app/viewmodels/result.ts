export class Result {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  questWiseOptions: QuestWiseOption[];
  //mcq: string[];
  id: number;
  isSelected: boolean;
}

export class ResponseGroup {
  response_Code: string;
  results: Result[];
  //selectedAnswers: string[];
}

export class QuestWiseOption {
  option: string;
  selected: boolean;
}

export class SelectedAnswer {
  id: number;
  answer: string;
  isCorrect: boolean;
}

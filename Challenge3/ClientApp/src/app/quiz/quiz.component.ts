import { Component, OnInit } from '@angular/core';
import { QuestionbankService } from '../service/questionbank.service';
import { QuestWiseOption, ResponseGroup, Result, SelectedAnswer} from '../viewmodels/result';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  qnas: Result[];
  response: ResponseGroup;
  answers: string[] = [];
  selectedAnswers: SelectedAnswer[] = [];
  message: string;

  constructor(private qbservice: QuestionbankService) { }

  ngOnInit() {
    this.qbservice.getQuestions().subscribe(response => {
      if (response) {
        this.response = response;
        this.qnas = response.results;
        let count: number=1;
        this.qnas.forEach(qa => {
          if (qa.incorrect_answers) {
            qa.id = count++;
            qa.questWiseOptions = [];
            qa.incorrect_answers.forEach(ina => {
              let qwo= new QuestWiseOption();
              qwo.option = ina;
              qwo.selected = false;
              qa.questWiseOptions.push(qwo);
            });
            let qwo = new QuestWiseOption();
            qwo.option = qa.correct_answer;
            qwo.selected = false;
            qa.questWiseOptions.push(qwo);

            for (let i = qa.questWiseOptions.length - 1; i > 0; i--) {
              const j = Math.floor(Math.random() * i)
              const temp = qa.questWiseOptions[i];
              qa.questWiseOptions[i] = qa.questWiseOptions[j]
              qa.questWiseOptions[j] = temp
            }





            //for (let i = qwo.option.length - 1; i > 0; i--) {
            //  const j = Math.floor(Math.random() * i)
            //  const temp = qwo.option[i];
            //  qwo.option[i] = qwo.option[j];
            //  qwo.option[j] = temp
            //}

            //qa.mcq = [];
            //qa.mcq.push(qa.correct_answer);
            //qa.mcq = qa.incorrect_answers.concat(qa.correct_answer);

            //for (let i = qa.mcq.length - 1; i > 0; i--) {
            //  const j = Math.floor(Math.random() * i)
            //  const temp = qa.mcq[i]
            //  qa.mcq[i] = qa.mcq[j]
            //  qa.mcq[j] = temp
            //}
          }
        });
        console.log(JSON.stringify(this.qnas));
      }
    });
  }

  addAnswers(id: number, selectedAnswer: string) {
    let sa = new SelectedAnswer();
    sa.id = id;
    sa.answer = selectedAnswer;
    if (this.qnas) {
      sa.isCorrect = this.qnas.some(qa => qa.correct_answer === selectedAnswer && qa.id === id);
    }
    this.selectedAnswers.push(sa);
  }

  verifyanswers() {
    let count = this.selectedAnswers.filter(sa => sa.isCorrect === true).length;
    this.message = "You got " + count + " correct answers";
  }

  selectOnlyOnePerQuestion(id: number, isChecked: boolean, selectedanswer: string) {
    console.log(id);
    console.log(isChecked);
    console.log(selectedanswer);
    this.qnas.find(qa => qa.id === id).questWiseOptions.forEach(ipa => {
      if (ipa.option !== selectedanswer && ipa.selected === true) {
        ipa.selected = false;
      }
    });
    console.log(JSON.stringify(this.qnas));
  }

}

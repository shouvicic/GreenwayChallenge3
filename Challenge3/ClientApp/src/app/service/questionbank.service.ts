import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QuestionbankService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {

    var resps: Observable<any>;
    resps = this.http.get("http://localhost:32156/api/home/randomquestions");
    //const reply = this.http.get("http://localhost:4200/api/home/randomquestions").map((response:any) => {
    //  return response;
    //});

    return resps;
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';

import { QuestionbankService } from './service/questionbank.service';

@NgModule({
  declarations: [
    AppComponent,
    //NavMenuComponent,
    //HomeComponent,
    //CounterComponent,
    //FetchDataComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: QuizComponent, pathMatch: 'full' },
    ])
  ],
  providers: [QuestionbankService],
  bootstrap: [AppComponent]
})
export class AppModule { }

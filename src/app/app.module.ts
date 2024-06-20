import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BankInterestComponent } from './bank-interest/bank-interest.component';
import { BankLoanComponent } from './bank-loan/bank-loan.component';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [AppComponent, BankInterestComponent, BankLoanComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ]
})
export class AppModule { }

import { Component, Input, numberAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-bank-loan',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './bank-loan.component.html',
  styleUrl: './bank-loan.component.css'
})
export class BankLoanComponent {
  deposit:number|undefined;
  term:number|undefined;
  interest:number|undefined;
  total:string|undefined;
  totalInterest:string|undefined;
  typeCalculate:boolean = true;
  isError:boolean = false;
  isActive:boolean = false;
  remain:number = 0;
  sum:number = 0;
  calculateType1():any {
    if(this.deposit === undefined || this.interest === undefined || this.term === undefined) {
      this.isError = true;
      return;
    }
    if(typeof this.deposit === 'string') {
      this.deposit = parseFloat(this.deposit);
    }
    if(typeof this.term === 'string') {
      this.term = parseFloat(this.term);
    }
    if(typeof this.interest === 'string') {
      this.interest = parseFloat(this.interest);
    }
    if(isNaN(this.deposit) || isNaN(this.term) || isNaN(this.interest)) {
      this.isError = true;
      this.deposit = this.term = this.interest = undefined;
      return;
    }
    this.isActive = true;
    this.isError = false;
    this.totalInterest = Math.round((this.deposit*((this.interest/100)/12))*this.term).toLocaleString('de-DE');
    this.total = Math.round((this.deposit*((this.interest/100)/12))*this.term+this.deposit).toLocaleString('de-DE');
  }
  calculateType2():any {
    if(this.deposit === undefined || this.interest === undefined || this.term === undefined) {
      this.isError = true;
      return;
    }
    if(typeof this.deposit === 'string') {
      this.deposit = parseFloat(this.deposit);
    }
    if(typeof this.term === 'string') {
      this.deposit = parseFloat(this.term);
    }
    if(typeof this.interest === 'string') {
      this.deposit = parseFloat(this.interest);
    }
    this.isActive = true;
    if(isNaN(this.deposit) || isNaN(this.term) || isNaN(this.interest)) {
      this.isError = true;
      this.deposit = this.term = this.interest = undefined;
      return;
    }
    this.isError = false;
    // this.deposit = parseInt(this.deposit);
    this.sum = this.deposit;
    this.remain = this.deposit;
    for(let i:number = 1; i <= this.term; i++) {
      this.sum = this.sum + (this.remain*(Number(this.interest/1200)));
      this.remain = this.remain - (this.deposit/this.term);
    }
    this.totalInterest = Math.round(this.sum-this.deposit).toLocaleString('de-DE');
    this.total = Math.round(this.sum).toLocaleString('de-DE');
  }
 }

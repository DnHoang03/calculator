import { Component, Input, OnInit, numberAttribute} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-bank-interest',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './bank-interest.component.html',
  styleUrl: './bank-interest.component.css'
})
export class BankInterestComponent {
  deposit:number|undefined;
  term:number|undefined;
  interest:number|undefined;
  allInterest:string|undefined;
  total:string|undefined;
  interestPerMonth:string|undefined;
  isActive:boolean = false;
  isError:boolean = false;
  calculateInterest():any {
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
    this.isError = false;
    console.log(this.total);
    this.total = Math.round(this.deposit+((this.deposit*((this.interest/100)/12))*this.term)).toLocaleString('de-DE');
    console.log(this.total);
    this.allInterest = Math.round(((this.deposit*(this.interest/100))/12)*this.term).toLocaleString('de-DE');
    this.interestPerMonth = Math.round(((this.deposit*(this.interest/100))/12)).toLocaleString('de-DE');
    console.log(this.total);
    this.isActive = true;
  }
}

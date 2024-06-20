import { Routes } from '@angular/router';
import { BankInterestComponent } from './bank-interest/bank-interest.component';
import { BankLoanComponent } from './bank-loan/bank-loan.component';
import { LoanResultComponent } from './loan-result/loan-result.component';
export const routes: Routes = [
    {path: 'bank-interest', component: BankInterestComponent},
    {path: 'bank-loan', component:BankLoanComponent}
];

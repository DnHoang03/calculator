import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankInterestComponent } from './bank-interest.component';

describe('BankInterestComponent', () => {
  let component: BankInterestComponent;
  let fixture: ComponentFixture<BankInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankInterestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

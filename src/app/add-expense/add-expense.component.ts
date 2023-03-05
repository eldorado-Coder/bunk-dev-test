import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Expense } from '../expense';
import { ExpensesService } from '../expense.service';

@Component({
    selector: 'app-add-expense',
    templateUrl: './add-expense.component.html',
    styleUrls: ['./add-expense.component.css'],
})
export class AddExpenseComponent implements OnInit {
    expenseForm: Expense = {
        name: '',
        amount: 0,
    };

    addExpenseForm!: FormGroup;
    constructor(private expenseService: ExpensesService, private router: Router, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.addExpenseForm = this.fb.group({
            name: ['', Validators.required],
            amount: ['', Validators.compose([Validators.required, Validators.min(Number.EPSILON)])],
        });
    }

    create() {
        this.addExpenseForm.valid &&
            this.expenseService.create(this.expenseForm).subscribe(() => {
                this.router.navigate(['/']);
            });
    }
}

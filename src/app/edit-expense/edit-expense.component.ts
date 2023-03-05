import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from '../expense';
import { ExpensesService } from '../expense.service';

@Component({
    selector: 'app-edit-expense',
    templateUrl: './edit-expense.component.html',
    styleUrls: ['./edit-expense.component.css'],
})
export class EditExpenseComponent implements OnInit {
    expenseForm: Expense = {
        name: '',
        amount: 0,
    };

    editExpenseForm!: FormGroup;
    constructor(
        private expenseService: ExpensesService,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
    ) {}

    ngOnInit(): void {
        this.editExpenseForm = this.fb.group({
            name: [, Validators.required],
            amount: [, Validators.compose([Validators.required, Validators.min(Number.EPSILON)])],
        });
        this.route.paramMap.subscribe((param) => {
            var id = String(param.get('id'));
            this.getById(id);
        });
    }

    getById(id: string) {
        this.expenseService.getById(id).subscribe((data) => {
            this.expenseForm = data;
        });
    }

    update() {
        this.editExpenseForm.valid &&
            this.expenseService.update(this.expenseForm).subscribe(() => {
                this.router.navigate(['/']);
            });
    }
}

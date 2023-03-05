import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExpensesService } from '../expense.service';

@Component({
    selector: 'app-calculate-dialog-expense',
    templateUrl: './calculate-dialog-expense.component.html',
    styleUrls: ['./calculate-dialog-expense.component.css'],
})
export class CalculateDialogExpenseComponent implements OnInit {
    displayedColumns: string[] = ['owes', 'owed', 'amount'];

    constructor(
        public dialogRef: MatDialogRef<CalculateDialogExpenseComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private expenseService: ExpensesService,
    ) {}

    ngOnInit(): void {}
}

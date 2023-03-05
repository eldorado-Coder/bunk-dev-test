import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { throttle } from 'cypress/types/lodash';
import { ExpensesService } from '../expense.service';

@Component({
    selector: 'app-delete-dialog-expense',
    templateUrl: './delete-dialog-expense.component.html',
    styleUrls: ['./delete-dialog-expense.component.css'],
})
export class DeleteDialogExpenseComponent implements OnInit {
    loading: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<DeleteDialogExpenseComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private expenseService: ExpensesService,
    ) {}

    ngOnInit(): void {}

    confirmDelete() {
        this.loading = true;
        this.expenseService.delete(this.data.id).subscribe(() => {
            this.dialogRef.close(this.data.id);
            this.loading = false;
        });
    }
}

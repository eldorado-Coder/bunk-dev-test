import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense';
import { ExpensesService } from '../expense.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogExpenseComponent } from '../delete-dialog-expense/delete-dialog-expense.component';
import { CalculateDialogExpenseComponent } from '../calculate-dialog-expense/calculate-dialog-expense.component';

@Component({
    selector: 'app-all-expense',
    templateUrl: './all-expense.component.html',
    styleUrls: ['./all-expense.component.css'],
})
export class AllExpensesComponent implements OnInit {
    allExpensesSource: Expense[] = [];
    displayedColumns: string[] = ['name', 'amount', 'actions'];
    constructor(private expenseService: ExpensesService, public dialog: MatDialog) {}

    ngOnInit(): void {
        this.get();
    }

    get() {
        this.expenseService.get().subscribe((data) => {
            this.allExpensesSource = data;
        });
    }

    openDeleteModal(id: number) {
        const dialogRef = this.dialog.open(DeleteDialogExpenseComponent, {
            width: '250px',
            data: { id },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.allExpensesSource = this.allExpensesSource.filter((_) => _.id !== id);
            }
        });
    }
    openCalcModal() {
        this.expenseService.calculate(this.allExpensesSource).subscribe((result) => {
            this.dialog.open(CalculateDialogExpenseComponent, {
                width: '500px',
                data: { result },
            });
        });
    }
}

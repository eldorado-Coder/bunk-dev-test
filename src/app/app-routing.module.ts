import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { AllExpensesComponent } from './all-expense/all-expense.component';
import { CalculateDialogExpenseComponent } from './calculate-dialog-expense/calculate-dialog-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';

const routes: Routes = [
    {
        path: '',
        component: AllExpensesComponent,
    },
    {
        path: 'add-expense',
        component: AddExpenseComponent,
    },
    {
        path: 'edit-expense/:id',
        component: EditExpenseComponent,
    },
    {
        path: 'calculate-expense',
        component: CalculateDialogExpenseComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AllExpensesComponent } from './all-expense/all-expense.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';
import { MatIconModule } from '@angular/material/icon';
import { DeleteDialogExpenseComponent } from './delete-dialog-expense/delete-dialog-expense.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CalculateDialogExpenseComponent } from './calculate-dialog-expense/calculate-dialog-expense.component';
import { LoadingDirective } from './loading.directive';

@NgModule({
    declarations: [
        AppComponent,
        AllExpensesComponent,
        AddExpenseComponent,
        EditExpenseComponent,
        DeleteDialogExpenseComponent,
        CalculateDialogExpenseComponent,
        LoadingDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        HttpClientModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatButtonModule,
        FormsModule,
        MatIconModule,
        MatDialogModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

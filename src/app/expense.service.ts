import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Expense } from './expense';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ExpensesService {
    constructor(private httpClient: HttpClient) {}

    get(): Observable<Expense[]> {
        return this.httpClient.get<Expense[]>('http://localhost:3000/expenses');
    }

    create(payload: Expense) {
        return this.httpClient.post<Expense>('http://localhost:3000/expenses', payload);
    }

    getById(id: string): Observable<Expense> {
        return this.httpClient.get<Expense>(`http://localhost:3000/expenses/${id}`);
    }

    update(payload: Expense): Observable<Expense> {
        return this.httpClient.put<Expense>(`http://localhost:3000/expenses/${payload.id}`, payload);
    }

    delete(id: string) {
        return this.httpClient.delete(`http://localhost:3000/expenses/${id}`);
    }

    calculate(payload: Expense[]) {
        return this.httpClient.post<Expense[]>(`http://localhost:3000/payouts`, payload);
    }
}

const request = require('supertest');
const baseURL = 'http://localhost:3000';
import {expect} from '@jest/globals';
import { calc } from './services/payouts';

describe('Expense test', () => {
    let expense = {
        id: '',
        name: 'Momin',
        amount: 11.5,
    };

    it('should create expense', async () => {
        const response = await request(baseURL).post('/expenses').send(expense);
        expect(response.statusCode).toBe(200);
    });

    it('should get expenses', async () => {
        const response = await request(baseURL).get('/expenses');
        expense = response.body[response.body.length - 1];
        expect(response.statusCode).toBe(200);
        expect(response.body.length >= 1).toBe(true);
    });

    it('should delete expense', async () => {
        const response = await request(baseURL).del(`/expenses/${expense.id}`);
        expect(response.statusCode).toBe(200);
        expect(response.body.result).toStrictEqual(expense);
    });

    it('should calculate payout', async () => {
        const allList  = await request(baseURL).get('/expenses');
        let expectedPayouts = calc(allList.body);
        const response = await request(baseURL).post('/payouts');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expectedPayouts);

    });
});

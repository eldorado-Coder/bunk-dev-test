import * as express from 'express';
import { Database } from 'fakebase';

const router = express.Router();
const db = new Database('./data');
interface Expense {
    id: string;
    name: string;
    amount: number;
    owes: string;
}

const Expenses = db.table<Expense>('expenses');

export function updateExpense(router: express.Router) {
    router.put('/expenses/:id', async function (request, response) {
        const { name, amount, owes } = request.body;
        const { id } = request.params;
        await Expenses.update({ id: id, name: name, amount: amount, owes: owes }).catch((error) => {
            throw new Error(error);
        });
        response.json(Expenses.findAll());
    });
}

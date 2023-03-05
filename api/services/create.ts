import * as express from 'express';

const router = express.Router();
import { Database } from 'fakebase';

const db = new Database('./data');
interface Expense {
    id: string;
    name: string;
    amount: number;
}
const Expenses = db.table<Expense>('expenses');
 /**
  * 
  * @param router 
  */
export function createExpense(router: express.Router) {
    router.post('/expenses', async function (request, response) {
        const { name, amount, owes } = request.body;
        await Expenses.create({ name: name, amount: amount }).catch(error => {
            throw new Error(error)
        });
        response.json(Expenses.findAll());
    });
}

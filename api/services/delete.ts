import * as express from 'express';
import { Database } from 'fakebase';
const db = new Database('./data');
const Expenses = db.table('expenses');

const router = express.Router();

/**
 * delete expense using fakebase
 * @param router 
 */
export function deleteExpense(router: express.Router) {
    router.delete('/expenses/:id', function (request, response) {
        const { id } = request.params;
        Expenses.delete(id)
            .then((res) => {
                response.json({result: res});
            })
            .catch((error) => {
                throw new Error(error);
            });
    });
}

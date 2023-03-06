import { Request, Response, Router } from 'express';

import { Database } from 'fakebase';
const db = new Database('./data');
const Expenses = db.table('expenses');

/**
 * get expenses list using fakebase
 * @param router 
 */

export function getList(router: Router) {
    router.get('/expenses', async function (request: Request, response: Response) {
        let data = await Expenses.findAll().catch((error) => {
            throw new Error(error);
        });
        response.json(data);
    });
    router.get('/expenses/:id', async function (request: any, response: any) {
        const { id } = request.params;
        let data = await Expenses.findById(id).catch((error) => {
            throw new Error(error);
        });
        response.json(data);
    });
}

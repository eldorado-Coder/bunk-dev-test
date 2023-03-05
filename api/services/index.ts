import * as express from 'express';
import { createExpense } from './create';
import { deleteExpense } from './delete';

import { getList } from './get';
import { getPayouts } from './payouts';
import { updateExpense } from './update';

export function init(router: express.Router) {
    getList(router);
    deleteExpense(router);
    createExpense(router);
    updateExpense(router);
    getPayouts(router);
}

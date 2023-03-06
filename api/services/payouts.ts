import * as express from 'express';
import { Database } from 'fakebase';

const router = express.Router();
interface Expense {
    id: string;
    name: string;
    amount: number;
    // owes: string;
    // owed: string;
}
const db = new Database('./data');
const Expenses = db.table<Expense>('expenses');

interface IHashMap {
    [key: string | number]: any;
}

interface IPayout {
    owes: string;
    owed: string;
    amount: number;
}

/**
 * 
 * @param Expense[]
 * @returns
 */
export function calc(expenses: Expense[]) {
    let totalAmount: number = 0;
    const hashMap: IHashMap = {};
    console.log('expenses ---- ', expenses)
    expenses.forEach((element) => {
        totalAmount += element.amount;
        if (hashMap[element.name] === undefined) {
            hashMap[element.name] = element.amount;
        } else {
            hashMap[element.name] += element.amount;
        }
    });

    const totalPeople: number = Object.keys(hashMap).length;
    const people = Object.keys(hashMap);

    const con = new Array(totalPeople).fill(0).map(() => new Array(totalPeople).fill(0));

    const equalShare = totalAmount / totalPeople;

    const payouts: IPayout[] = [];

    for (let i = 0; i < totalPeople; i++) {
        for (let j = 0; j < totalPeople; j++) {
            if (i === j || con[i][j] === 1 || con[j][i] === 1) continue;
            con[i][j] = con[j][i] = 1;

            const obj: IPayout = {
                amount: 0,
                owes: '',
                owed: '',
            };

            if (hashMap[people[i]] < hashMap[people[j]]) {
                obj.owes = people[i];
                obj.owed = people[j];
            } else {
                obj.owes = people[j];
                obj.owed = people[i];
            }
            obj.amount = Math.abs(hashMap[people[i]] - hashMap[people[j]]) / 2;

            payouts.push(obj);
        }
    }
    return {
        total: totalAmount,
        equalShare: equalShare,
        payouts: payouts,
    };
}

export function getPayouts(router: express.Router) {
    router.post('/payouts', async function (request, response) {
        response.json(calc(await Expenses.findAll()));
    });
}

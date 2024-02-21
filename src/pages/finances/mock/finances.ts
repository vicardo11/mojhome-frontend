import { FinanceType } from "../../../constants/FinanceType";
import { FinanceRecord } from "../model/FinanceRecord";

export const DATA: FinanceRecord[] = [
  {
    id: 1,
    name: "Groceries",
    type: FinanceType.EXPENSE,
    amount: 50.25,
    date: new Date("2024-02-15"),
  },
  {
    id: 2,
    name: "Transportation",
    type: FinanceType.EXPENSE,
    amount: 30.5,
  },
  {
    id: 3,
    name: "Insurance",
    type: FinanceType.EXPENSE,
    amount: 75.75,
    date: new Date("2024-02-13"),
  },
  {
    id: 4,
    name: "Salary",
    type: FinanceType.INCOME,
    amount: 100,
    date: new Date("2024-02-12"),
  },
  {
    id: 5,
    name: "Rental",
    type: FinanceType.INCOME,
    amount: 45.0,
    date: new Date("2024-02-11"),
  },
  {
    id: 6,
    name: "Stock Investments",
    type: FinanceType.INCOME,
    amount: 60.3,
    date: new Date("2024-02-10"),
  },
  {
    id: 7,
    name: "Clothing",
    type: FinanceType.EXPENSE,
    amount: 25.75,
    date: new Date("2024-02-09"),
  },
  {
    id: 8,
    name: "Royalties",
    type: FinanceType.INCOME,
    amount: 80.5,
    date: new Date("2021-02-08"),
  },
  {
    id: 9,
    name: "Utilities",
    type: FinanceType.EXPENSE,
    amount: 120.75,
    date: new Date("2024-03-07"),
  },
  {
    id: 10,
    name: "Loans",
    type: FinanceType.EXPENSE,
    amount: 55.2,
    date: new Date("2023-02-06"),
  },
  {
    id: 11,
    name: "Side Hustle",
    type: FinanceType.INCOME,
    amount: 70.4,
    date: new Date("2021-02-05"),
  },
  {
    id: 12,
    name: "Salary",
    type: FinanceType.INCOME,
    amount: 35.0,
    date: new Date("2024-02-04"),
  },
  {
    id: 13,
    name: "Gym Membership",
    type: FinanceType.EXPENSE,
    amount: 90.25,
    date: new Date("2024-01-03"),
  },
  {
    id: 14,
    name: "Concert",
    type: FinanceType.EXPENSE,
    amount: 130.0,
    date: new Date("2024-02-02"),
  },
  {
    id: 15,
    name: "Investment",
    type: FinanceType.INCOME,
    amount: 65.75,
    date: new Date("2024-02-01"),
  },
];

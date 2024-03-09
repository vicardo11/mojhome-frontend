import { FinanceRecord } from "../model/FinanceRecord";
import { FinanceType } from "../../../types/FinanceType";

export interface FinanceData {
  month: string;
  totalAmount: number;
}

export class FinanceChartService {
  getLast3MonthsFinanceDataByType(
    type: FinanceType,
    financeRecords: FinanceRecord[],
  ): FinanceData[] {
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

    const financeData: { [key: string]: number } = {};

    financeRecords
      .filter((record) => record.type === type && new Date(record.date) >= threeMonthsAgo)
      .forEach((record) => {
        const month = new Date(record.date).toISOString().slice(0, 7);
        financeData[month] = (financeData[month] || 0) + record.amount;
      });

    return Object.entries(financeData)
      .map(([month, totalAmount]) => ({ month, totalAmount }))
      .sort((a, b) => (a.month > b.month ? 1 : -1));
  }
}

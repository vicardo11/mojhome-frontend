import { FinanceRecord } from "../model/FinanceRecord";
import { FinanceType } from "../../../types/FinanceType";

export function getFinancesBetweenMonthsAndYears(
  finances: FinanceRecord[],
  type: FinanceType,
  startMonth: number,
  startYear: number,
  endMonth: number,
  endYear: number,
) {
  return finances.filter((finance) => {
    const date = new Date(finance.date);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return (
      finance.type === type &&
      (year > startYear || (year === startYear && month >= startMonth)) &&
      (year < endYear || (year === endYear && month <= endMonth))
    );
  });
}

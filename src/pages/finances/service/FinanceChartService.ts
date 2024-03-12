import { FinanceType } from "../../../types/FinanceType";
import { FinanceRecord } from "../model/FinanceRecord";

export function getFinanceDataByType(
  type: FinanceType,
  financeRecords: FinanceRecord[],
  toDate: Date,
): number[] {
  const fourMonthsAgo = getFourMonthsBack(toDate);
  const map = new Map<string, number>();
  initializeMap(map, toDate);

  financeRecords
    .filter((record) => record.type === type && new Date(record.date) >= fourMonthsAgo)
    .forEach((record) => {
      const date = new Date(record.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const key = `${year}-${month}`;
      map.set(key, (map.get(key) ?? 0) + record.amount);
    });

  return Array.from(map.values());
}

/**
 * Returns a Date object representing the start of the day four months ago.
 * The month is calculated by subtracting 3 from the current month.
 * The day is set to the first day of the month.
 * The time is set to the start of the day (00:00:00).
 *
 * @returns {Date} - A Date object set to the start of the day four months ago.
 */
function getFourMonthsBack(toDate: Date): Date {
  const fourMonthsAgo = new Date(toDate);
  fourMonthsAgo.setMonth(fourMonthsAgo.getMonth() - 3);
  fourMonthsAgo.setDate(1);
  fourMonthsAgo.setHours(0, 0, 0, 0);
  return fourMonthsAgo;
}

/**
 * Initializes a map with keys for the last four months and a default total amount of 0.
 * The keys are strings in the format "year-month".
 *
 * @param {Map<string, number>} map - The map to initialize.
 * @param toDate
 */
function initializeMap(map: Map<string, number>, toDate: Date) {
  // Iterate over the last four months
  for (let i = 3; i >= 0; i--) {
    // Create a new date object and subtract the current iteration number from the month
    const date = new Date(toDate);
    date.setMonth(date.getMonth() - i);

    // Get the year and month from the date object
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    // Create a key in the format "year-month"
    const key = `${year}-${month}`;

    // Set the key in the map with a default total amount of 0
    map.set(key, 0);
  }
}

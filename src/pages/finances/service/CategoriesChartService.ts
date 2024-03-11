import { FinanceType } from "../../../types/FinanceType";
import { FinanceRecord } from "../model/FinanceRecord";

export function getCategories(type: FinanceType, financeRecords: FinanceRecord[]): string[] {
  // Filter the records by the provided type
  const filteredRecords = financeRecords.filter((record) => record.type === type);

  // Extract the category names from the filtered records
  const categoryNames = filteredRecords.map((record) => record.categoryName);

  // Use a Set to remove duplicates
  return Array.from(new Set(categoryNames));
}

// Create a function that returns the total amount of money for each category
export function getFinanceDataByCategory(
  type: FinanceType,
  financeRecords: FinanceRecord[],
): number[] {
  // Get the categories
  const categories = getCategories(type, financeRecords);

  // Create an array to store the total amount of money for each category
  const financeData: number[] = [];

  // Loop through the categories
  for (const category of categories) {
    // Filter the records by the provided type and category
    const filteredRecords = financeRecords.filter(
      (record) => record.type === type && record.categoryName === category,
    );

    // Calculate the total amount of money for the category
    const totalAmount = filteredRecords.reduce((acc, record) => acc + record.amount, 0);

    // Add the total amount to the financeData array
    financeData.push(totalAmount);
  }

  return financeData;
}

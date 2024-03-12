/**
 * Generates an array of labels for the last four months, including the provided date.
 * Each label is a string in the format "MMM YY".
 *
 * @param {Date} toDate - The date up to which labels are to be generated.
 * @return {string[]} An array of labels for the last four months.
 */
export function getLabels(toDate: Date) {
  const labels = [];
  const date = new Date(toDate);

  for (let i = 0; i < 4; i++) {
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear().toString().slice(-2);
    date.setMonth(date.getMonth() - 1);
    labels.push(`${month} ${year} `);
  }
  labels.reverse();
  return labels;
}

/**
 * Returns a date that is four months prior to the provided date.
 *
 * @param {Date} toDate - The date from which four months are to be subtracted.
 * @return {Date} A date that is four months prior to the provided date.
 */
export function getDateFourMonthsBack(toDate: Date) {
  const date = new Date(toDate);
  date.setMonth(date.getMonth() - 3);
  date.setDate(1);
  return date;
}

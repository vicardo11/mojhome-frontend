export function isCorrectAmountFormat(num?: number): boolean {
  if (num === undefined) {
    return false;
  }
  const numStr: string = num.toString();
  const regex = /^\d+(\.\d{1,2})?$/;
  return regex.test(numStr);
}

export function isGreaterThanZero(num?: number): boolean {
  if (num === undefined) {
    return false;
  }
  return num > 0;
}

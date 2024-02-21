export function isCorrectAmount(num?: number): boolean {
  if (num === undefined) {
    return false;
  }
  const numStr: string = num.toString();
  const regex = /^\d+(\.\d{1,2})?$/;
  return regex.test(numStr);
}

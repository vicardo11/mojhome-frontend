export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isEmpty(str: string | undefined): boolean {
  return !str || str.trim() === "";
}

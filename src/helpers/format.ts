/**
 * Format number to string with adding space in between numbers.
 * Exemple: 10000 --> "10 000"
 */
export const addSpace = (value: number): string => {
  const reversed = [...value.toString()].reverse().join("");
  const addedSpace = reversed.match(/.{1,3}/g)!.join(" ");
  return [...addedSpace].reverse().join("");
};

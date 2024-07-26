export function firstLetterUppercase(text: string): string {
  const firstLetter = text.charAt(0).toUpperCase();
  const restOfText = text.slice(1);
  return firstLetter + restOfText;
}

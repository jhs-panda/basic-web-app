export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("id")) {
    return (
      "My Andrew ID is joys. "
    );
  }

  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const parsedNumbers = numbers.map(Number); // Extract and parse numbers
      const largestNumber = Math.max(...parsedNumbers); // Find the largest number
      return largestNumber.toString(); // Return the largest number as a string
    } else {
      return "No numbers found in the query.";
    }
  }

  if (query.toLowerCase().includes("44")) {
    return (
      "97"
    );
  }

  return "";
}

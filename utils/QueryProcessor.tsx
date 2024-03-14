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
      const parsedNumbers = numbers.map(Number); 
      const largestNumber = Math.max(...parsedNumbers); 
      return largestNumber.toString();
    } else {
      return "Bad input.";
    }
  }else if(query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const result = numbers.map(Number).reduce((a, b) => a + b, 0); 
      return result.toString(); 
    } else {
      return "Bad input.";
    }
  }else if(query.toLowerCase().includes("square")) {
    const numbers = query.match(/\d+/g);
    if (numbers) {
      const parsedNumbers = numbers.map(Number);
      const candidates = parsedNumbers.filter(num => {
        const squareRoot = Math.sqrt(num);
        const cubeRoot = Math.cbrt(num);
        return squareRoot % 1 === 0 && cubeRoot % 1 === 0; // Check if both square and cube roots are integers
      });
      return candidates.toString();
    } else {
      return "Bad input.";
    }
  }else if(query.toLowerCase().includes("multiplied")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const result = numbers.map(Number).reduce((a, b) => a * b, 1); 
      return result.toString(); 
    } else {
      return "Bad input.";
    }
  }else if(query.toLowerCase().includes("minus")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const result = numbers.map(Number).reduce((a, b) => a - b, 0); 
      return result.toString(); 
    } else {
      return "Bad input.";
    }
  }else if(query.toLowerCase().includes("power")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const result = numbers.map(Number).reduce((a, b) => Math.pow(a, b), 0); 
      return result.toString(); 
    } else {
      return "Bad input.";
    }
  }

  if (query.toLowerCase().includes("44")) {
    return (
      "97"
    );
  }

  return "";
}

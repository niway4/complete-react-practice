/*

1️⃣ Comparing Non-Numeric ids Lexicographically
For strings, you can simply use the localeCompare() method which compares strings lexicographically (alphabetical order):

*/

const sortQuotes = (quotes, ascending) => {
  return quotes.slice().sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id.localeCompare(quoteB.id);
    } else {
      return quoteB.id.localeCompare(quoteA.id);
    }
  });
};

/* 

2️⃣ Explanation:
  => localeCompare() compares two strings in a way that respects local language rules.
  => Ascending order: quoteA.id.localeCompare(quoteB.id) returns:
  => A negative number if quoteA.id comes before quoteB.id lexicographically.
  => A positive number if quoteA.id comes after quoteB.id.
  => 0 if they are the same.
  => Descending order: We reverse the order by swapping the arguments in localeCompare().

  */

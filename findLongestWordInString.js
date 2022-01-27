// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    str = str.split(' ').sort(function(a, b) {
        return b.length - a.length;
    })[0];

    return str.length;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");
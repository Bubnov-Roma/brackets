module.exports = function check(str, bracketsConfig) {
  // your solution
  if (str.length === 0 || undefined) return true; 
  if (str.length % 2 !== 0) return false;

  let open = "", close = "", stack = [str[0]]; 
  
  for (let el of bracketsConfig) {
    open += el[0];
    close += el[1]; }

  for (let i = 1; i < str.length; i++) {
    let currentBracket = str[i], lastBracket = stack[stack.length - 1];

    if (close.includes(currentBracket) && close.indexOf(currentBracket) == open.indexOf(lastBracket)) {
      stack.pop()  
    }
    else stack.push(currentBracket); 
  }
  return stack.length === 0;
  };

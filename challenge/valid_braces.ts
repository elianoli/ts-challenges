export function validBraces(braces: string): boolean {
  
    // stack will receive buffer characters
    let bufferBraces: string = braces;
    let stackBraces: string = "";
    
    // inputs are guarante nonempty and only brace types "()[]{}" 
    do {
      // get first character from buffer
      stackBraces = stackBraces + bufferBraces[0];
      // removes it from buffer
      bufferBraces = bufferBraces.slice(1);
          
      // if at least two braces are in stack
      if (stackBraces.length > 1 ) {
        // check if the last two are equal and remove then from stack
        switch (stackBraces.slice(-2)) {
          case "()": {
            stackBraces = stackBraces.slice(0, -2);
            break;
          }
          case "[]": {
            stackBraces = stackBraces.slice(0, -2);
            break;
          }
          case "{}": {
            stackBraces = stackBraces.slice(0, -2);
            break;
          }
        }
      }
    } while (bufferBraces.length > 0) // continues while buffer is no empty
    
    // if stack is not empty, then braces are not valid
    if (stackBraces.length > 0) {
      return false;
    } 
    return true;  
  }
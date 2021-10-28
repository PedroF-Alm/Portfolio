function rot13(str) {
  const regexAlphabetic = /[a-z]/i
  let newStr = ""
  for (let i in str) {  
      if (regexAlphabetic.test(str[i])) {
        const charCode = str[i].charCodeAt()
        newStr += String.fromCharCode(charCode >= 110 ||charCode >= 78 ? charCode - 13 : charCode + 13)          
      }
      else {
        newStr += str[i]
      }
  }
  return newStr;
}

rot13("SERR PBQR PNZC");
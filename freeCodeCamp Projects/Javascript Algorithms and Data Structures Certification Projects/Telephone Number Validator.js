function telephoneCheck(str) {
  const validCases = [ 
      /^1?\s*\([0-9]{3}\)-?\s*[0-9]{3}-?\s*[0-9]{4}$/,
      /^1?\s*[0-9]{3}-?\s*[0-9]{3}-?\s*[0-9]{4}$/
  ];  
  return validCases.some(e => e.test(str));
}

telephoneCheck("555-555-5555");
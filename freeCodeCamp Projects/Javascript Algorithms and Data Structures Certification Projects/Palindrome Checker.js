const palindrome = str => {
  const matchAlfaNum = str.match(/[a-z0-9]/ig).map(e => e.toLowerCase())
  return matchAlfaNum.join('') === matchAlfaNum.reverse().join('')
}

palindrome("eye");
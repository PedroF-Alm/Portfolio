function convertToRoman(num) {

  const romanNumbers = {
    1:    'I',
    4:    'IV', 
    5:    'V', 
    9:    'IX',
    10:   'X', 
    40:   'XL',
    50:   'L',
    90:   'XC',    
    100:  'C', 
    400:  'CD', 
    500:  'D', 
    900:  'CM',
    1000: 'M'
  };

  const divisors = Object.keys(romanNumbers).reverse();

  let str = '';
  let i = 0;

  while (num > 0) {
    if (num - divisors[i] >= 0) {
      num -= divisors[i];
      str += romanNumbers[divisors[i]];      
    }
    else {
      i++;
    }
  }

  return str;

}

convertToRoman(36);
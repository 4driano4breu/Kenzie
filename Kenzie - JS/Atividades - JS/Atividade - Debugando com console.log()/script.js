function verificaNumero(num) {
    let str = '';
    
    if (num % 2 == 0) {
      str = 'par';
    } else {
      str = 'impar';
    }
  
    str += ', ';
  
    if (num > 0) {
      str += 'positivo';
    } else {
      str += 'negativo';
    }
  
    str += ' e ';
  
    if (num === parseInt(num)) {
      str += 'não possui casas decimais';
    } else {
      str += 'possui casas decimais';
    }
  
    str = 'O numero ' + num + ' é ' + str;
  
    return str;
  }
  
  console.log(verificaNumero(-12.1));


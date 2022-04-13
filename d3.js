let totalDias = 800;

let qtdAnos, qtdMeses;

qtdAnos = parseInt(totalDias / 365);
qtdMeses = parseInt((totalDias % 365) / 30)

totalDias = Math.abs((parseInt((totalDias % 365) / 30) * 30) - (totalDias % 365))


console.log(qtdAnos);
console.log(qtdMeses);
console.log(totalDias);

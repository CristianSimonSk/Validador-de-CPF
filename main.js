let cpf = '129.007.239-65';
const cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfLimpo);
const cpfArrayMult = cpfArray.map(function(valor, indice){
    if(indice===0) return valor * 10;
    if(indice===1) return valor * 9;
    if(indice===2) return valor * 8;
    if(indice===3) return valor * 7;
    if(indice===4) return valor * 6;
    if(indice===5) return valor * 5;
    if(indice===6) return valor * 4;
    if(indice===7) return valor * 3;
    if(indice===8) return valor * 2;
    if(indice===9) return valor * 0;
    if(indice===10) return valor * 0;
});
const cpfArrayRed = cpfArrayMult.reduce(function(acumulador,valor){
    acumulador+= valor;
    return acumulador;
},0);

const cpfArrayMult2 = cpfArray.map(function(valor, indice){
    if(indice===0) return valor * 11;
    if(indice===1) return valor * 10;
    if(indice===2) return valor * 9;
    if(indice===3) return valor * 8;
    if(indice===4) return valor * 7;
    if(indice===5) return valor * 6;
    if(indice===6) return valor * 5;
    if(indice===7) return valor * 4;
    if(indice===8) return valor * 3;
    if(indice===9) return valor * 2;
    if(indice===10) return valor * 0;
});
const cpfArrayRed2 = cpfArrayMult2.reduce(function(acumulador,valor){
    acumulador+= valor;
    return acumulador;
},0);
const digVerf = `${digito(cpfArrayRed)}${digito(cpfArrayRed2)}`;

function digito (num){
    return 11 - (num % 11);
}

if((digVerf[0] === cpfLimpo[9]) && (digVerf[1] === cpfLimpo[10])){
    console.log('CPF VALIDO');
}else {
    console.log('CPF INVALIDO');
}

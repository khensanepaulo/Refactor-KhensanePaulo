function returnRandomNumber() {
  return Math.random();
}

function round(num){
    return Math.round(num * 100) ;
}
function toString(result){
    return `Seu número é ${result}!`;
}

function operacao (num, operador){
    const nrToOperate = returnRandomNumber();

    switch (operador){
        case "sum":
            return toString(round(num) + nrToOperate);
        case "subtract":
            return toString(round(num) - nrToOperate);
        case "multiply":
            return toString(round(num) * nrToOperate);
        case "divide":
            return toString(round(num) / nrToOperate);
    }
}



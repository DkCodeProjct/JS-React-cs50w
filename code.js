
function Add(x, y) {
    return x + y;
}

function Sub(x, y) {
    return x - y;
}

function Mul(x, y) {
    return x - y;
}

function Div(x, y) {
    return x / y
}

function Rem(x, y) {
    return x % y
}

while (true) {
    console.log('0.Exit\n1.Addn\n2.Sub\n3.Mul\n4.Div\n5.Rem')

    let user = prompt('Choos Op; ');

    if (user === '1') {
        break;
    }
    let getX = parseInt(prompt('x; ')) // parseInt in === int(input)
    let getY = parseInt(prompt('y; ' ))
    
    if (user === '2'){
        console.log((`${getX} + ${getY} = ${Add(getX,getY)}`));
    }
    else if (user === '3'){
        console.log((`${getX} + ${getY} = ${Sub(getX,getY)}`));
    }
    else if (user === '4'){
        console.log((`${getX} + ${getY} = ${Mul(getX,getY)}`));
    }
    else if (user === '5'){
        console.log((`${getX} + ${getY} = ${Rem(getX,getY)}`));
    }
    else {
        console.log('invalid input...')
    }
};
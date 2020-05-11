var op = Number(prompt("OP: "));

if(op>=1 && op<5){
    var x = Number(prompt("Ingresar el primer numero: "));
    var y = Number(prompt("Ingresar el segundo numero: "));
}else{
    var x = Number(prompt("Ingresar el numero: "));
}
function suma(x,y){
    return x+y;
}
function resta(x,y){
    return x-y;
}
function multiplicacion(x,y){
    return x*y;
}
function division(x,y){
    return x/y;
}
function raizcubica(x){
    return Math.pow(x,(1/3));
}
function factorial(x){
    var fac = 1;
    while(x!=0){
        fac = fac*x;
        x--;
    }
    return fac;
}
function potenciacuadrado(x){
    return Math.pow(x,2);
}

switch(op){
    case 1: document.write("Resultado: ",suma(x,y));
        break;
    case 2: document.write("Resultado: ",resta(x,y));
        break;
    case 3: document.write("Resultado: ",multiplicacion(x,y));
        break;
    case 4: document.write("Resultado: ",division(x,y));
        break;
    case 5: document.write("Resultado: ",raizcubica(x));
        break;
    case 6: document.write("Resultado: ",factorial(x));
        break;
    case 7: document.write("Resultado: ",potenciacuadrado(x));
        break;
    default: document.write("Thanks");
        break;
}
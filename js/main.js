var a=parseFloat(prompt("Enter A value"));
var operator=(prompt("Enter the operator"));
var b=parseFloat(prompt("Enter B value"));
var c;
switch(operator){
    case "+": c=a+b;
    break;

    case "-": c=a-b;
    break;

    case "*": c=a*b;
    break;

    case "/": c=a/b;
    break;

    case "%": c=a%b;
    break;
}
document.write(c);
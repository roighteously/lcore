// Interpreted by LangCore
const _ctpio={l:console.log,r:require("readline-sync")};_ctpio.q=_ctpio.r.question

function main() {

  var first_number, second_number, sum;
    
  _ctpio.l( "Enter two varegers: ")
   first_number = _ctpio.q();
   second_number = _ctpio.q();

  // sum of two numbers in stored in variable sumOfTwoNumbers
  sum = first_number + second_number;
  sum = parseInt(parseInt(first_number) + parseInt(second_number));

  // prvars sum 
  _ctpio.l( first_number + " + " +  second_number + " = " + sum)     

  return 0;
}
console.log('Process exited with exit code ' + main())
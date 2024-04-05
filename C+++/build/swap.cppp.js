// Interpreted by LangCore
const _ctpio={l:console.log,r:require("readline-sync")};_ctpio.q=_ctpio.r.question

function main()
{
    var a = 5, b = 10, temp;

    _ctpio.l( "Before swapping." + "\n")
    _ctpio.l( "a = " + a + ", b = " + b + "\n")

    temp = a;
    a = b;
    b = temp;

    _ctpio.l( "\nAfter swapping." + "\n")
    _ctpio.l( "a = " + a + ", b = " + b + "\n")

    return 0;
}
console.log('Process exited with exit code ' + main())
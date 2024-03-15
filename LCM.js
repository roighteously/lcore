const lcore = require('./src/index.js');

lcore.addModule({
	namespace: '',
	name: 'LCM Syntax',
	do: {
		'@': 'LCM_',
		'set': 'let',
		'equal to': '=',
	}
})
lcore.addModule({
	namespace: 'for the love of god, please ',
	name: 'LCM English Sanity',
	do: {
		'please': '',
		'can you': '',
		'could you': '',
		'would you': '',
		'will you': '',
		'out of the kindness of your heart, could you': '',
		'log this to the console ': 'console.log',
	}
})


lcore.addModule({
	namespace: '',
	name: 'LCM English Syntax',
	do: {
		', but set': ' =',
		', but add': ' +=',
		', but subtract': ' -=',
		', but multiply': ' *=',
		', but divide': '/=',
		'and': '&&',
		'or': '||',
		'not': '!',
		'greater than': '>',
		'less than': '<',
		'greater than or equal to': '>=',
		'less than or equal to': '<=',
		'equal to': '==',
		'not equal to': '!=',
		'plus': '+',
		'minus': '-',
		'times': '*',
		'divided by': '/',
		'is equal to': '===',
		'is not': '!==',
		'is a': 'instanceof',
		'which is ': '(',
		' end': ')',
	}
})
lcore.addModule({
	namespace: 'a value that is ',
	name: '0',
	do: {
		'a string': 'String',
		'text ': 'String',
	}
})
lcore.addModule({
	namespace: '',
	name: 'LCM English Syntax 2',
	do: {
		'i want': 'let',
		'give me': 'return',
		'to equal': '=',
		'please': ')',
		'maybe': '(',
	}
})


lcore._core.QUIET = true;
let t = Date.now();
const interpreted = lcore.interpretFile('TestLCM.lcm');
let e = Date.now();
console.log(e - t + 'ms to compile back to JS');
console.log(interpreted);

console.log('\n--eval() ing--\n\n')

eval(interpreted)
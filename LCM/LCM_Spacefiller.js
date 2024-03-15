const lcoreClass = require('../src/index.js');
const lcore = new lcoreClass();

lcore.addModule({
	namespace: '',
	name: 'LCM Syntax',
	do: {
		'@': '<variable prefix>',
		'set': '<variable declaration>',
		'equal to': '<equals>',
	}
})
lcore.addModule({
	namespace: 'for the love of god, please ',
	name: 'LCM English Sanity',
	do: {
		'please': '<empty>',
		'can you': '<empty>',
		'could you': '<empty>',
		'would you': '<empty>',
		'will you': '<empty>',
		'out of the kindness of your heart, could you': '<empty>',
		'log this to the console ': '<log>',
	}
})


lcore.addModule({
	namespace: '',
	name: 'LCM English Syntax',
	do: {
		', but set': '<variable set>',
		', but add': '<variable add to>',
		', but subtract': '<variable subtract from>',
		', but multiply': '<variable multiply by>',
		', but divide': '<variable divide by>',
		'and': '<and>',
		'or': '<or>',
		'not': '<not>',
		'greater than': '<gt>',
		'less than': '<lt>',
		'greater than or equal to': '<gte>',
		'less than or equal to': '<lte>',
		'equal to': '<eqeq>',
		'not equal to': '<neq>',
		'plus': '<plus>',
		'minus': '<minus>',
		'times': '<times>',
		'divided by': '<divide>',
		'is equal to': '<eqeqeq>',
		'is not': '<neqeq>',
		'is a': '<instanceof>',
		'which is ': '<open paren>',
		' end': '<close paren>',
	}
})
lcore.addModule({
	namespace: 'a value that is ',
	name: '0',
	do: {
		'a string': '<string type>',
		'text ': '<string type>',
	}
})
lcore.addModule({
	namespace: '',
	name: 'LCM English Syntax 2',
	do: {
		'i want': '<variable declaration>',
		'give me': '<return>',
		'to equal': '<eq>',
		'please': '<close paren>',
		'maybe': '<open paren>',
	}
})


lcore._core.QUIET = true;
let t = Date.now();
const interpreted = lcore.interpretFile('tests/concat-log-exit120.lcm');
let e = Date.now();
console.log(e - t + 'ms to compile back to JS');
console.log(interpreted);

console.log('\n--eval() ing--\n\n')

eval(interpreted)
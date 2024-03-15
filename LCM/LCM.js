const lcoreClass = require('../src/index.js');
const lcore = new lcoreClass();
const fs = require('fs');
const compiler = require('./PackageCompiler.js');

const show_ifo = true;

let cT = Date.now();
let pC = 0;
if (show_ifo) console.group('(Build [1/3]) Hold on, compiling packages...');

fs.readdirSync('./lcm_packages').forEach(file => {
	if (file.endsWith('.synmod')) {
		let cO = compiler(file.split('.synmod')[0]);
		let cMod = cO.eval;
		if (cMod.disabled) return;
		lcore.addModule(cMod);
		if (show_ifo) console.log('Compiled package ' + file.split('.synmod')[0] +' (' + cMod.name +')');
		if(!fs.existsSync('./lcm_packages/build')) fs.mkdirSync('./lcm_packages/build')
		fs.writeFileSync('./lcm_packages/build/' + file.split('.synmod')[0] + '.js', cO.raw);
		pC++;
	}
});
if (show_ifo) console.groupEnd();
if (show_ifo) console.log('(Build [2/3]) Compiled ' + pC + ' packages in ' + (Date.now() - cT) + 'ms');


let iT = Date.now();
lcore._core.QUIET = true;
const interpreted = lcore.interpretFile(require('path').resolve(__dirname, './tests/concat-log-exit120.lcm'));
if (show_ifo) console.log('(Build [3/3]) ' + (Date.now() - cT) + 'ms to compile back to JS (Starting from package compilation), ' + (Date.now() - iT) + 'ms to run interpret action');
if (show_ifo) console.log('\n--eval() ing--\n');
let rT = Date.now();
eval(interpreted);
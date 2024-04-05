const lcoreClass = require('../src/index.js');
const lcore = new lcoreClass();
const fs = require('fs');
const path = require('path');
const compiler = require('../LCC/PackageCompiler.js');

const ext = '.cppp';
const extMod = '.hppp';

const folderBase = 'proj';

const show_ifo = true;

let cT = Date.now();
let pC = 0;
if (show_ifo) console.group('(Build [1/3]) Hold on, compiling packages...');

fs.readdirSync('./lcc_packages').forEach(file => {
	if (file.endsWith('.synmod')) {
		let cO = compiler(path.resolve(__dirname, './lcc_packages/' + file));
		let cMod = cO.eval;
		if (cMod.disabled) return;
		lcore.addModule(cMod);
		if (show_ifo) console.log('Compiled package ' + file.split('.synmod')[0] +' (' + cMod.name +')');
		console.log(cMod)
		pC++;
	}
});
if (show_ifo) console.groupEnd();
if (show_ifo) console.log('(Build [2/3]) Compiled ' + pC + ' packages in ' + (Date.now() - cT) + 'ms');


const interpret = (f) => {
	let iT = Date.now();

	const interpreted = lcore.interpretFile(require('path').resolve(__dirname, './' + folderBase +'/' + f));
	let lines = [];
	interpreted.split('\n').forEach(line => {
	lines.push(line.replaceAll('>>', ',').replaceAll('<<', '+'))
	})
	lines.push('console.log(\'Process exited with exit code \' + main())')
	if (show_ifo) console.log('(Build [3/3]) ' + (Date.now() - cT) + 'ms to compile back to JS (Starting from package compilation), ' + (Date.now() - iT) + 'ms to run interpret action');

	fs.writeFileSync('./build/' + f.split(ext)[0]+ext+'.js', lines.join('\n'));
}

const interpretMod = (f) => {
	let iT = Date.now();

	const interpreted = lcore.interpretFile(require('path').resolve(__dirname, './' + folderBase +'/' + f));

	if (show_ifo) console.log('(Build [3/3]) ' + (Date.now() - cT) + 'ms to compile back to JS (Starting from package compilation), ' + (Date.now() - iT) + 'ms to run interpret action');
	
	if(!fs.existsSync('./build/mod')) fs.mkdirSync('./build/mod');
	fs.writeFileSync('./build/mod/' + f.split('.mod' + ext)[0]+extMod+'.js', interpreted);
}

lcore._core.QUIET = true;

if(fs.existsSync('./build')) fs.rmdirSync('./build', { recursive: true });
if(fs.existsSync('./lcc_packages/build')) fs.rmdirSync('./lcc_packages/build', { recursive: true });

if(!fs.existsSync('./build')) fs.mkdirSync('./build')
if(!fs.existsSync('./build/lib')) fs.mkdirSync('./build/lib')

fs.readdirSync('./' + folderBase).forEach(file => {
	if (file.endsWith(extMod)) {
		interpretMod(file);
 	} else if (file.endsWith(ext)) {
		interpret(file);
	}
});

if (show_ifo) console.log('\nNow launching WSH2 project.\n');

require('./build/' + (process.argv[2] ? process.argv[2] : 'main') + ext)

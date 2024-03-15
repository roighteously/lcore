const lcoreClass = require('../src/index.js');
const lcore = new lcoreClass();
const fs = require('fs');
const path = require('path');
const compiler = require('../LCC/PackageCompiler.js');

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
		if(!fs.existsSync('./lcc_packages/build')) fs.mkdirSync('./lcc_packages/build')
		fs.writeFileSync('./lcc_packages/build/' + file.split('.synmod')[0] + '.js', cO.raw);
		pC++;
	}
});
if (show_ifo) console.groupEnd();
if (show_ifo) console.log('(Build [2/3]) Compiled ' + pC + ' packages in ' + (Date.now() - cT) + 'ms');


const interpret = (f) => {
	let iT = Date.now();

	const interpreted = lcore.interpretFile(require('path').resolve(__dirname, './' + folderBase +'/' + f));

	if (show_ifo) console.log('(Build [3/3]) ' + (Date.now() - cT) + 'ms to compile back to JS (Starting from package compilation), ' + (Date.now() - iT) + 'ms to run interpret action');
	
	fs.writeFileSync('./build/' + f.split('.ws')[0]+'.ws.js', interpreted);
}

const interpretMod = (f) => {
	let iT = Date.now();

	const interpreted = lcore.interpretFile(require('path').resolve(__dirname, './' + folderBase +'/' + f));

	if (show_ifo) console.log('(Build [3/3]) ' + (Date.now() - cT) + 'ms to compile back to JS (Starting from package compilation), ' + (Date.now() - iT) + 'ms to run interpret action');
	
	if(!fs.existsSync('./build/mod')) fs.mkdirSync('./build/mod');
	fs.writeFileSync('./build/mod/' + f.split('.mod.ws')[0]+'.wsm.js', interpreted);
}

lcore._core.QUIET = true;

if(fs.existsSync('./build')) fs.rmdirSync('./build', { recursive: true });
if(fs.existsSync('./lcc_packages/build')) fs.rmdirSync('./lcc_packages/build', { recursive: true });

if(!fs.existsSync('./build')) fs.mkdirSync('./build')
if(!fs.existsSync('./build/lib')) fs.mkdirSync('./build/lib')

fs.copyFileSync(path.resolve(__dirname, './lib/WSH2Files.js'), path.resolve(__dirname, './build/lib/_wf.js'));
fs.copyFileSync(path.resolve(__dirname, './lib/WSH2Package.json'), path.resolve(__dirname, './build/package.json'));

fs.readdirSync('./' + folderBase).forEach(file => {
	if (file.endsWith('.mod.ws')) {
		interpretMod(file);
 	} else if (file.endsWith('.ws')) {
		interpret(file);
	}
});

if (show_ifo) console.log('\nNow launching WSH2 project.\n');

require('./build/main.ws')

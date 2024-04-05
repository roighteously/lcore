const lcoreo = require('../src/index.js');
const lcore = new lcoreo();

lcore.addModule({
	namespace: '',
	name: 'LangCore Compiler',
	do: {
		'@decl ': 'let dls_',
		'@var ': 'dls_',
		'@pkg/pkg-init': 'const synpkg = {name: "",do:{},namespace:""}',
		'@pkg/pkg-end': 'module.exports = synpkg',
		'My package is called ': 'synpkg.name = ',
		'It\'s namespace is ': 'synpkg.namespace = ',
		'Regex:On': 'synpkg.regex = true',
		'Regex:Off': 'synpkg.regex = false',
		'@disabled': 'synpkg.disabled = true',
		'<NamespaceGlobal>': '""',
		'@pkg/definitions-start': 'synpkg.do = {',
		'@pkg/definitions-end': '}',

		// pkg-v2
		'@pkg-v2/create/init': 'const synpkg = {name: "",do:{},namespace:"",regex:false}',
		'@pkg-v2/create/name': 'synpkg.name = ',
		'@pkg-v2/create/space': 'synpkg.namespace = ',
		'@pkg-v2/create/regex': 'synpkg.regex = ',
		'@pkg-v2/create/defs': 'synpkg.do = {',
	}
})

lcore._core.QUIET = true;
const compilePackage = (packageName) => {
	const lines = lcore.interpretFile(packageName);
	return {
		eval: eval(lines),
		raw: lines
	}
}

module.exports = compilePackage;
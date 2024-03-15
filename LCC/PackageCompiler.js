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
		'@disabled': 'synpkg.disabled = true',
		'<NamespaceGlobal>': '""',
		'@pkg/definitions-start': 'synpkg.do = {',
		'@pkg/definitions-end': '}',
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
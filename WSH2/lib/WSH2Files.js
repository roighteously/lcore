const _wf = {
	wf: require('fs'),
	init: () => {
		if (!require('fs').existsSync('./fileSandbox')) require('fs').mkdirSync('./fileSandbox')
	}
};
module.exports = _wf;
const _wf = {
	wf: require('fs'),
	init: () => {
		if (!require('fs').existsSync('./_wf_sandbox')) require('fs').mkdirSync('./_wf_sandbox')
	}
};
module.exports = _wf;
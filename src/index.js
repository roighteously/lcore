const LCore = require('./LCore');
const config = require('../config') || {};

const LangcoreWrapper = {
	_core: LCore,
	_config: config,
	_cache: [],
	addModule: (module) => {
		LangcoreWrapper._core.modules.push(module);
	},
	interpretFile: (file) => {
		LangcoreWrapper._cache = ['// Interpreted by LangCore'];
		const fs = require('fs');
		const data = fs.readFileSync(file, 'utf8').split('\n');
		data.forEach(line => {
			LangcoreWrapper._cache.push(LangcoreWrapper._core.exec(line));
		})
		return LangcoreWrapper._cache.join('\n');
	},
	interpretLines: (lines) => {
		LangcoreWrapper._cache = ['// Interpreted by LangCore'];
		lines.forEach(line => {
			LangcoreWrapper._cache.push(LangcoreWrapper._core.exec(line));
		});
		return LangcoreWrapper._cache.join('\n');
	},
	get: (key) => {
		return LangcoreWrapper._config[key];
	},
	set: (key, value) => {
		LangcoreWrapper._config[key] = value;
	}
}

module.exports = LangcoreWrapper;
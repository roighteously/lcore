const LCore = require('./LCore');
const config = require('../config') || {};

class LangcoreWrapper {
	_core= new LCore()
	_config= config
	_cache= []
	addModule= (module) => {
		this._core.modules.push(module);
	}
	interpretFile= (file) => {
		this._cache = ['// Interpreted by LangCore'];
		const fs = require('fs');
		const data = fs.readFileSync(file, 'utf8').split('\n');
		data.forEach(line => {
			this._cache.push(this._core.exec(line));
		})
		return this._cache.join('\n');
	}
	interpretLines= (lines) => {
		this._cache = ['// Interpreted by LangCore'];
		lines.forEach(line => {
			this._cache.push(this._core.exec(line));
		});
		return this._cache.join('\n');
	}
	get= (key) => {
		return this._config[key];
	}
	set= (key,value) => {
		this._config[key] = value;
	}
	constructor() {
		return this;
	}
}

module.exports = LangcoreWrapper;
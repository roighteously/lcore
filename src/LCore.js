const Langcore = {
	modules: [],
	QUIET: false,
	exec: (s) => {
		Langcore.modules.forEach(modIfo => {
			const changes = Object.keys(modIfo.do);
			changes.forEach(key => {
				if (s.includes(modIfo.namespace + key)) {
					if(!Langcore.QUIET) console.log(modIfo.name + ' used on ' + key)
					s = s.replaceAll(modIfo.namespace + key, modIfo.do[key]);
				} else if (key.includes('@') && s.includes(key)) {
					if (!Langcore.QUIET) console.log(modIfo.name + ' used on ' + key)
					s = s.replaceAll(key, modIfo.do[key]);
				}
			});
		});
		return s;
	}
}

module.exports = Langcore;
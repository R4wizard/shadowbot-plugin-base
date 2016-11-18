"use strict";

const events = require('events');
const Shadow = require('shadowbot-core').Interface;

class PluginBase extends events.EventEmitter {

	constructor() {
		super();

		this._commands = [];
	}

	command(name, helptext, handler) {
		this._commands.push(name);
		Shadow.registerCommandHandler(name, helptext, handler);
	}

	_destroy() {
		this._commands.forEach(cmd => Shadow.unregisterCommandHandler(cmd));
		this.destroy();
	}

	destroy() {

	}

}

module.exports = PluginBase;

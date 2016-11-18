"use strict";

const events = require('events');
const Shadow = require('shadowbot-core').Interface;

class PluginBase extends events.EventEmitter {

	constructor() {
		super();

		this._commands = [];
		this._messages = [];
	}

	command(name, helptext, handler) {
		this._commands.push(name);
		Shadow.registerCommandHandler(name, helptext, handler);
	}

	message(regex, handler) {
		this._messages.push(regex);
		Shadow.registerMessageHandler(regex, handler);
	}

	_destroy() {
		this._commands.forEach(cmd => Shadow.unregisterCommandHandler(cmd));
		this._messages.forEach(msg => Shadow.unregisterMessageHandler(msg));
		this.destroy();
	}

	destroy() {

	}

}

module.exports = PluginBase;

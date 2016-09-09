"use strict";

const events = require('events');

class PluginBase extends events.EventEmitter {

	constructor() {
		super();
	}

}

module.exports = PluginBase;

const sendHelpTo= require('./helper.js');

const message = sendHelpTo("Dora");
console.log("Hello, Node");
console.log(message);

const cowsay = require('cowsay');
console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));
// function sendHelp(){
//     return "help is on the way";
// }

// Arrow functions are always anonymous
// const sendHelp = (whom) => {
//     return `Don't worry, ${whom}, help is on the way`;
// }

// If you only have a single line in the body
// and that line is a 'return', you can omit the curly braces
// and you can omit the return keyword and the semi-colon
// const sendHelp = (whom) => `Don't worry, ${whom}, help is on the way`;

// If there is only one argument, you can omit the parens
const sendHelpTo = whom => `Don't worry, ${whom}, help is on the way`;

module.exports = sendHelp;
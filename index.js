function introduction(name) {

return `Hi, my name is ${name}.`;
}

console.log(`Hi, my name is ${"Josh"}.`);
console.log(`Hi, my name is ${"Nancy"}.`)

function introductionWithLanguage(name,language) {
return `Hi, my name is ${name} and I am learning to program in ${language}.`;

}
console.log(`Hi, my name is ${"Josh"} and I am learning to program in ${"Ember.js"}`)

function introductionWithLanguageOptional(name, language = "JavaScript") {
return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(`Hi, my name is ${"Gracie"} and I am learning to program in ${language}.`)


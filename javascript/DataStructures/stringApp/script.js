// Demo : Strings

var sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny business. ";

var url = "http://sadikturan.com/Modern Javascipt KURSU sıfırdan ileri seviye ü ö ş";


console.log(sentence.length);
console.log(sentence.trim().split(" ").length);

console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

console.log(sentence.trim());

console.log(sentence.replace("-", ""));

var str = "http://";
console.log(url.substring(str.length));
console.log(url.slice(str.length));


console.log(url.startsWith("http"));
console.log(url.startsWith("https"));

console.log(url.indexOf(".com"));
console.log(url.includes(".comm"))


console.log(url.toLowerCase()
    .replace(/ /g, "-")
    .replace(/ı/g, "i")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
);
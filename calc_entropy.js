let fs = require("fs"); 
let arg = process.argv; 

let inText = fs.readFileSync(arg[2], "utf-8");

// make an Array to account for signts 
let alph = new Array();
for(let i = 0; i < inText.length; i++){
    if (inText.charAt(i) in alph){
        alph[inText.charAt(i)]++;
    }
    else{
        alph[inText.charAt(i)] = 1;
    }
}

console.log(alph)

let n = 0;
for(i in alph){
    alph[i] /= inText.length;
    n++;
}

let h = 0;
for(i in alph){
    h -= alph[i] * Math.log(alph[i]);

}
h /= Math.log(n)

console.log(`Энтропия равна: ${h}`)
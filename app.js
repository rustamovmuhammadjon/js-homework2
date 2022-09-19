let name = prompt("Ism familiyanfiz: ");
function ism(kiriting) {
    let ism = kiriting.toString().split(" ");
    let x = ism[0];
    let y = ism[1];
    let m = x[0].toUpperCase() + ism[0].slice(1) + " " + y[0].toUpperCase() + ism[1].slice(1);
    return m;
}

console.log(ism(name));
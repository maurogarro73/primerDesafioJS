alert("Detectaremos cúantos numeros par o impar se ingresaron");
let contPar = 0;
let contImpar = 0;
let contPalabra = 0;

for(let i = 0; i<10; i++){
    let num = Number(prompt("Ingrese un numero"));
    if(Number(num)){
        if(num%2 === 0) {
            contPar++;
        }else{
            contImpar++;
        }
    }else {
        contPalabra++;
    }
}

alert(`Se ingresaron ${contPar} números par y ${contImpar} números impar, ingresaste ${contPalabra} palabras`);
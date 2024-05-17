const mais = document.querySelector("#mais");
const menos = document.querySelector("#menos");
const valor = document.querySelector("#valor");
const resetar = document.querySelector("#resetar");

const atualizarConta = function(){
    valor.innerHTML = conta;
}

let conta = 0

mais.addEventListener("click", function atualizarValor(){

    conta += 1;
    atualizarConta();
  
});

menos.addEventListener("click", function atualizarValor(){

    conta -= 1;
    atualizarConta();
  
});

resetar.addEventListener("click", function atualizarValor(){

    conta = 0;
    atualizarConta();
  
});
const botoes= querySelectorAll(".botao");

for(let i= 0;<botoes.length; i++) {
    botoes [i].onclick = function (){
        for (j=; j < botoes.lenght; j++){
            botoes[j].remove ("ativo");

        }
        botoes[j].classlist.add("ativo")
    }

}
        botoes 

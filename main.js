class ListaConvidados {
    constructor() {
        this.convidados = [];
    }

    adicionar(nome, idade, cpf){
        this.convidados.push({nome: nome, idade: idade, cpf: cpf});
        console.log(this.convidados);
    }
}

var lista = new ListaConvidados();

document.getElementById("adicionarConvidado").onclick = function(){
    adicionarConvidado("Roberto", 43, "123456789")
};
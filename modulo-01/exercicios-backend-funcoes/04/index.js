// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Sistema de transações bancárias

// function exibirArrayDeObjetos (historicos) {
//     let exibir = "";
//     for (let i = 0; i < historicos.length; i++) {
//         exibir += `${historicos[i].tipo} de R$ ${(historicos[i].valor/100).toFixed(2)}\n`;
//     }

//     return exibir;
// }

const contaBancaria = {
    nome: "Bernardo",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.saldo += valor;
        this.historicos.push(
            {
                tipo: "Depósito",
                valor: valor
            }
        );

        return `Depósito de R$ ${(valor/100).toFixed(2)} realizado para o cliente: ${this.nome}.`;
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}`;
        } else {
            this.saldo -= valor;
            this.historicos.push(
                {
                    tipo: "Saque",
                    valor: valor
                }
            );

            return `Saque de R$ ${(valor/100).toFixed(2)} realizado para o cliente: ${this.nome}`;
        }
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo R$ ${(this.saldo/100).toFixed(2)}`);
        console.log("Histórico:");

        for(let i = 0; i < this.historicos.length; i++) {
            console.log(`${this.historicos[i].tipo} de R$ ${(this.historicos[i].valor/100).toFixed(2)}`);
        }

    }
};

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));

console.log("\n");

contaBancaria.extrato();
// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Carro

function statusDoCarro (carro) {
    let status;

    if(carro.ligado)
        status = "ligado";
    else
        status = "desligado";

    console.log(`Carro ${status}.\tVelocidade: ${carro.velocidade}.`);
}

const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if(this.ligado)
            console.log("Este carro já está ligado");
        else {
            this.ligado = true;
            statusDoCarro(carro);
        }
    },
    desligar: function () {
        if(!this.ligado)
            console.log("Este carro já está desligado");
        else {
            this.velocidade = 0;
            if(this.velocidade === 0)
                this.ligado = false;
            statusDoCarro(carro);
        }
    },
    acelerar: function () {
        if(!this.ligado)
            console.log("Não é possível acelerar um carro desligado");
        else {
            this.velocidade += 10;
            statusDoCarro(carro);
        }
    },
    desacelerar: function () {
        if(!this.ligado)
            console.log("Não é possível desacelerar um carro desligado");
        else {
            this.velocidade -= 10;
            statusDoCarro(carro);
        }
    },
};

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();
// Autor: Bernardo de Brito Cruz
// Curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy
// Carrinho de um e-commerce

function encontrarItemMaisBarato (carrinho) {
    let itemMaisBarato = carrinho.produtos[0].precoUnit;

    for (item of carrinho.produtos) {
      if (item.precoUnit < itemMaisBarato) 
        itemMaisBarato = item.precoUnit;
    }

    return itemMaisBarato;
}

function calcularDescontoComPorcentagem (valor) {
    const porcentagemDesconto = 10/100;
    desconto = valor * porcentagemDesconto;

    return desconto;
}

const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 30,
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 50,
    },
  ],

  calcularTotalDeItens: function () {
    let totalDeItens = 0;

    for (let i = 0; i < this.produtos.length; i++)
      totalDeItens += this.produtos[i].qtd;
    return totalDeItens;
  },

  calcularTotalAPagar: function () {
    let valorTotal = 0;

    for (let i = 0; i < this.produtos.length; i++)
      valorTotal += this.produtos[i].precoUnit * this.produtos[i].qtd;
    return valorTotal;
  },

  exibirTotais: function () {
    let itens = this.calcularTotalDeItens();
    let valor = this.calcularTotalAPagar();

    console.log(`Total de itens: ${itens} itens`);
    console.log(`Total a pagar: R$ ${valor.toFixed(2)}`);
  },

  imprimirResumo: function () {
    console.log(`Cliente ${this.nomeDoCliente}`);
    this.exibirTotais();
  },

  addProduto: function (produto) {
    let produtoRepetido = false;

    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].id === produto.id) {
        this.produtos[i].qtd += produto.qtd;
        produtoRepetido = true;
        break;
      }
    }

    if (!produtoRepetido) this.produtos.push(produto);
  },

  imprimirDetalhes: function () {
    console.log(`Cliente ${this.nomeDoCliente}`);

    for (let i = 0; i < this.produtos.length; i++) {
      console.log(`Item ${i + 1} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${(this.produtos[i].qtd * this.produtos[i].precoUnit).toFixed(2)}`);
    }
    this.exibirTotais();
  },

  calcularDesconto: function () {
      let totalDeItensDaCompra = this.calcularTotalDeItens();
      let valorDaCompra = this.calcularTotalAPagar();
      let desconto = 0;

      if (totalDeItensDaCompra <= 4 && valorDaCompra > 100) {
        desconto = calcularDescontoComPorcentagem(valorDaCompra);
      } else if (totalDeItensDaCompra > 4 && valorDaCompra < 100) {
        desconto = encontrarItemMaisBarato(carrinho);
      } else {
        let descontoOpcao1 = encontrarItemMaisBarato(carrinho);
        let descontoOpcao2 = calcularDescontoComPorcentagem(valorDaCompra);

        if (descontoOpcao1 > descontoOpcao2)
            desconto = descontoOpcao1;
        else
            desconto = descontoOpcao2;
      }

      console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
      return desconto;
  },
};

const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 50,
};

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 100,
};

carrinho.imprimirResumo();

console.log("\n");

carrinho.addProduto(novaBermuda);
carrinho.imprimirResumo();

console.log("\n");

carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();

console.log("\n");

carrinho.imprimirDetalhes();

console.log("\n");

carrinho.calcularDesconto();
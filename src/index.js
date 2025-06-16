// Desafio Classificador de nível de Herói com classe em Node.js

const readline = require('readline');

// Classe Heroi
class Heroi {
  constructor(nome, xp) {
    this.nome = nome;
    this.xp = xp;
    this.nivel = this.definirNivel();
  }

  definirNivel() {
    if (this.xp < 1000) {
      return "Ferro";
    } else if (this.xp >= 1001 && this.xp <= 2000) {
      return "Bronze";
    } else if (this.xp >= 2001 && this.xp <= 5000) {
      return "Prata";
    } else if (this.xp >= 5001 && this.xp <= 7000) {
      return "Ouro";
    } else if (this.xp >= 7001 && this.xp <= 8000) {
      return "Platina";
    } else if (this.xp >= 8001 && this.xp <= 9000) {
      return "Ascendente";
    } else if (this.xp >= 9001 && this.xp <= 10000) {
      return "Imortal";
    } else {
      return "Radiante";
    }
  }

  apresentar() {
    return `O Herói de nome ${this.nome} está no nível de ${this.nivel}`;
  }
}

// Interface de leitura no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Entrada do usuário
rl.question("Digite o nome do herói: ", function (nome) {
  rl.question("Digite a quantidade de experiência (XP): ", function (xpInput) {
    const xp = parseInt(xpInput);

    // Cria uma instância da classe Heroi
    const heroi = new Heroi(nome, xp);

    // Mostra o resultado
    console.log("\n" + heroi.apresentar());

    rl.close();
  });
});

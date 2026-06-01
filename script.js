function somar(a, b) {
    return a + b;
}

function mensagemBoasVindas(nome) {
    return `Olá, ${nome}!`;
}

// ex01
function maiorValor(a, b) {
    if (a > b) return `${a} é o maior valor`;
    if (b > a) return `${b} é o maior valor`;
    return `Os valores são iguais`;
}




// ex02
function parOuImpar(a, b) {
    const resultA = a % 2 === 0 ? `${a} é par` : `${a} é ímpar`;
    const resultB = b % 2 === 0 ? `${b} é par` : `${b} é ímpar`;
    return `${resultA} | ${resultB}`;
}




// ex03
function podeVotar(idade) {
    if (idade < 16) return "Não pode votar";
    if (idade === 16 || idade === 17 || idade >= 70) return "Voto opcional";
    return "Voto obrigatório";
}




// ex04
function classificarNumero(valor) {
    if (valor > 0) return `${valor} é positivo`;
    if (valor < 0) return `${valor} é negativo`;
    return "O valor é igual a zero";
}




// ex05
function calcularBonus(salario) {
    if (salario < 2000) {
        const bonus = salario * 0.2;
        return `Bônus de 20%: R$ ${bonus.toFixed(2)}`;
    }
    if (salario <= 5000) {
        const bonus = salario * 0.1;
        return `Bônus de 10%: R$ ${bonus.toFixed(2)}`;
    }
    const bonus = salario * 0.05;
    return `Bônus de 5%: R$ ${bonus.toFixed(2)}`;
}




// ex06
function podeDirigir(idade) {
    if (idade >= 18) return "Pode dirigir";
    return "Não pode dirigir";
}




// ex07
function semestreDoMes(mes) {
    const mesesNormalizados = mes.trim().toLowerCase();
    const primeiroSemestre = ["janeiro", "fevereiro", "março", "abril", "maio", "junho"];
    const segundoSemestre = ["julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    if (primeiroSemestre.includes(mesesNormalizados)) return `${mes} pertence ao primeiro semestre`;
    if (segundoSemestre.includes(mesesNormalizados)) return `${mes} pertence ao segundo semestre`;
    return "Mês inválido";
}




// ex08
function vogalOuConsoante(letra) {
    const letraNormalizada = letra.trim().toLowerCase();
    if (letraNormalizada.length !== 1 || !/[a-záéíóúãõâêô]/.test(letraNormalizada)) {
    return "Entrada inválida";
    }
    const vogais = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú", "ã", "õ", "â", "ê", "ô"];
    if (vogais.includes(letraNormalizada)) return `"${letra}" é uma vogal`;
    return `"${letra}" é uma consoante`;
}




// ex09
function mediaArray(valores) {
    if (!Array.isArray(valores) || valores.length !== 5) return "Informe um array com exatamente 5 valores";
    const soma = valores.reduce((acc, val) => acc + val, 0);
    const media = soma / valores.length;
    return `A média dos valores é: ${media.toFixed(2)}`;
}



// ex10
function login(usuario, senha) {
    if (usuario === "Admin" && senha === "123") return "Conectado com sucesso!";
    return "Acesso negado! Usuário ou senha incorretos!";
}

module.exports = {
    somar,
    mensagemBoasVindas,
    maiorValor,
    parOuImpar,
    podeVotar,
    classificarNumero,
    calcularBonus,
    podeDirigir,
    semestreDoMes,
    vogalOuConsoante,
    mediaArray,
    login
};
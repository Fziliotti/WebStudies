// Gisele está desenvolvendo um sistema de controle de passageiros. Ela criou a simples classe que representa um passageiro, que pode ser de avião, ônibus, não importa:

class Passageiro {

    constructor(nome, profissao) {

        this.nome = nome;
        this.profissao = profissao;
    }
}
// Em seguida, ela criou uma lista de passageiros:

let passageiros = []

passageiros.push(new Passageiro('Orlando', 'Dentista'));
passageiros.push(new Passageiro('Suzada', 'Advogada'));
passageiros.push(new Passageiro('Hélio', 'Médico'));
passageiros.push(new Passageiro('Salen', 'Programador'));
passageiros.push(new Passageiro('Francisca', 'Médica'));
// A ideia de Gisele é poder acelerar a busca por médicos ou profissionais que sejam necessários em casos de emergência.


let achou = passageiros.some(passageiro => /médic/i.test(passageiro.profissao));

console.log(achou);

// A função some itera sobre o array, assim como forEach, filter e map. No entanto, seu retorno é true ou false. Ela retorna true logo assim que encontrar o primeiro elemento que for condizente com o critério de comparação utilizado. Quando dizemos, "logo assim", significa que a função parará de iterar nos elementos da lista, porque já encontrou pelo menos algum (some) que atenda ao critério.

// Veja que o critério de comparação usa a expressão regular criada literalmente com //. Nela, procuramos pela parte médic, sem levar em consideração se o caractere é maiúsculo ou minúsculo, com o modificador i.
// Michele já havia usado o modificador const na declaração de suas variáveis para evitar que novos valores fossem atribuídos a elas. Inclusive ela deu um novo exemplo para seu amigo Gerônimo:

const hoje = new Date();
hoje = new Date();  // dá erro!
// Gerônimo, muito calmo, a alertou que neste caso a variável hoje, apesar de não permitir a atribuição de novos valores ainda é passível de mudança. Ele fez o seguinte:

const hoje = new Date();
hoje.setDate(5);
console.log(hoje.getDate()) ; // alterou o dia para 5!

// Ele explicou para Michele que neste caso não estamos atribuindo um novo valor a variável usando o operador =, mas estamos alterando as propriedades do objeto Date por meio de seus métodos. Sendo assim, const não garante a imutabilidade, apenas a atribuição de um novo valor para a variável.
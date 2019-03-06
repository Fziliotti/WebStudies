EventEmitter.emit('bond', '007');

// Marque a opção que responde corretamente ao evento 
// (tópico) bond realizando alguma operação ao dado associado:

EventEmitter.on('bond', code => 
    console.log(`My names is bond, agent ${code}`));
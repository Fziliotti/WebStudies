const scream1 = 'Leeroy Jenkins!';
String.prototype.shout = function() {
    alert(this);
};
const scream2 = 'Atheon, raid Boss!';
scream1.shout();
scream2.shout();

// O código funcionará sem problema algum, pois qualquer modificação 
// realizada no prototype é disponibilizada para 
// todos os objetos daquele tipo, pois eles referenciam o mesmo prototype.
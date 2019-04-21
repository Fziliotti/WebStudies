// código anterior omitido
for (let [key, value] of stores) {
    if(transactionalConn.objectStoreNames.contains(store)) 
        transactionalConn.deleteObjectStore(store);
    transactionalConn.createObjectStore(store, { autoIncrement: true });
}


// Podemos reescrevê-lo da seguinte maneira:

const storeExists = (conn, store) => conn.objectStoreNames.contains(store);
const createStore = (conn, store) => conn.createObjectStore(store, { autoIncrement: true });
const deleteStore = (conn, store) => conn.deleteObjectStore(store);

for (let [key, value] of stores) {
    if(storeExists(conn, store)) deleteStore(conn, store);
    createStore(conn, store);
}
//Separar as responsabilidades tornou o código mais fácil de ler e de manter.
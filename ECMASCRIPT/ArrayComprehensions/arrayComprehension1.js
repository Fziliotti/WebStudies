[for (x of iterable) x]
[for (x of iterable) if (condition) x]
[for (x of iterable) for (y of iterable) x + y]

// Dentro de array comprehensions dois tipos de components são permitidos: 

for...of e
if
// A iteração por for-of deve sempre, ser a primeira componente. Multiplos for-of ou ifs podem  também ser permitidos.
export const takeUntil = (times, fn) => {
    return () => {
        if(times-- > 0) fn();
    };
};

// times fica uma variavel acessivel e que será lembrada, devido ao CLosure

// EXEMPLO
const takeUntil = (times, fn) => () => times-- > 0 && fn();

const operation1 = takeUntil(3, () => 
 console.log('rodou essa vez')
);

operation1()
operation1()
operation1()
operation1() //esse nao vai rodar
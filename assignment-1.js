const fib = (num) => {
    if (num === 1) return [0];
    if (num === 2) return [1];
    let prev = 0;
    let current = 1;
    const fibSequence = [0, 1];
    for (let i = 3; i <= num; i++){
        fibSequence.push(fibSequence[prev] + fibSequence[current]);
        prev++;
        current++;
    }
    return fibSequence;
}

const fibRec = (num, fibSequence = []) => {
    if (num <= 0) return fibSequence;

    let len = fibSequence.length;  

    if (len === 0 || len === 1){
        fibSequence.push(len);
    } else {
        fibSequence.push(fibSequence[len - 1] + fibSequence[len - 2]);
    }

    return fibRec(num - 1, fibSequence);
}
console.log(fib(8));
console.log(fibRec(8));
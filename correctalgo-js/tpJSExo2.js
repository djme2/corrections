function factorielle(n){ // n: paramètre formel
    let f = 1;
    let i = 1;
    while (i <= n) {
        f *= i; // f = f * i;
        i++;
    }
    resultat.innerHTML = f;
    return f;
}
//factorielle(7); // 7 : paramètre effectif 
function sommeFactorielle(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += factorielle(i);
    }
    somFact.innerHTML = s;
}
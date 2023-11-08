function progressaoAritmetica(n, a1, r){
    const an = a1 + r*(n - 1)
    const soma = ((a1 + an)*n)/2
    const termos = [a1]
    while(a1 < an){
        a1 += r
        termos.push(a1)
    }
    console.log({soma, termos})
}

function progressaoGeometrica(n, a1, q){
    const an = a1*(q**(n-1))
    const soma = (a1*((q**n)-1))/(q-1)
    const termos = [a1]
    while(a1 < an){
        a1 *= q
        termos.push(a1)
    }
    console.log({soma, termos})
}

progressaoGeometrica(10, 1, 2)
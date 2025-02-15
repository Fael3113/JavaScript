function contar(){
    let txinicio = document.getElementById('inicio')
    let inicio = Number(txinicio.value)

    let txfim = document.getElementById('fim')
    let fim = Number(txfim.value)

    let txpasso = document.getElementById('passo')
    let passo = Number(txpasso.value)

    let res = document.getElementById('msg')

    if (inicio == 0){
        res.innerHTML = `Não há inicio!`
        return
    } else if (fim == 0){
        res.innerHTML = `Não há fim!`
        return
    } else if (passo == 0){
        res.innerHTML = `Não há passos!`
        return
    }

    if (inicio < fim){
        res.innerHTML = `Contando: <br>`

        // for(let c = inicio; c <= fim; c += passo){
        //     res.innerHTML += `${c} \u27A1`
        // }

        let c = inicio
        while (c <= fim){
            res.innerHTML += `${c} \u27A1`
            c += passo
        }

        res.innerHTML += `\u{1F3C1}`
    } else if (inicio > fim){
        res.innerHTML = `Contando: <br>`

        for(let c = inicio; c >= fim; c -= passo){
            res.innerHTML += `${c} \u27A1 `
        }
        
        res.innerHTML += `\u{1F3C1}`
    }   
}    
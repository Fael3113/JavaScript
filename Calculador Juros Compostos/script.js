function contar(){
    const fmt = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

    let montante = Number(document.getElementById('montante').value); // capital inicial
    let taxaAnual = Number(document.getElementById('taxa').value) / 100; // em decimal
    let tempoAnos = Number(document.getElementById('tempo').value);
    let aporteMensal = Number(document.getElementById('aporte').value || 0);

    let res = document.getElementById('res');

    // Converte taxa anual para mensal equivalente
    let i = Math.pow(1 + taxaAnual, 1/12) - 1;   // taxa mensal
    let n = Math.round(tempoAnos * 12);          // meses

    let montanteFinal;
    if (i === 0) {
        // Sem juros
        montanteFinal = montante + aporteMensal * n;
    } else {
        // Aportes no FIM de cada mês (anuidade ordinária)
        montanteFinal =
        montante * Math.pow(1 + i, n) +
        aporteMensal * ((Math.pow(1 + i, n) - 1) / i);
    }

    let totalInvestido = montante + aporteMensal * n;
    let juros = montanteFinal - totalInvestido;

    res.innerHTML = `
        <h3>Resumo</h3>
        <p>Tempo: ${tempoAnos} ano(s) (${n} meses)</p>
        <p>Taxa mensal equivalente: ${(i * 100).toFixed(4)}%</p>
        <p>Capital inicial: ${fmt.format(montante)}</p>
        <p>Aporte mensal: ${fmt.format(aporteMensal)}</p>
        <hr>
        <p><strong>Montante final:</strong> ${fmt.format(montanteFinal)}</p>
        <p>Total investido (capital + aportes): ${fmt.format(totalInvestido)}</p>
        <p>Juros acumulados: ${fmt.format(juros)}</p>
    `
}
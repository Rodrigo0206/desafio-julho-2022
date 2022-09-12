
   
gerarRelatorioFaturamentoPorDia();

function gerarRelatorioFaturamentoPorDia(){

    lerArquivoJson("data.json").then(retorno => {

        mostrarFaturamentoDia(retorno);
        console.log("terminou");
    });

    
}

function mostrarFaturamentoDia(faturamento){

    let total = 0;
    let quantidade =0;
    let menorValor = 0;
    let maiorValor = 0;
   
    let media = 0;


    faturamento["faturamento"].forEach(obj => {

        let dia = obj["dia"];
        let faturamentoDiario = obj["faturamentoDiario"];
        
        console.log(`${dia} ${faturamentoDiario}`);
        
        if(faturamentoDiario > 0){
            total += faturamentoDiario;
            quantidade++;
        }
            
      if(faturamentoDiario > 0){
        if (menorValor == 0) {
        menorValor = faturamentoDiario;
      } else {
        if (faturamentoDiario < menorValor ){
            menorValor = faturamentoDiario
        }
      }
      }
      if(faturamentoDiario > 0){
        if (maiorValor == 0) {
        maiorValor = faturamentoDiario;
      } else {
        if (faturamentoDiario > maiorValor ){
            maiorValor = faturamentoDiario
        }
      }
      }
      
        
        console.log('-------------------');

    });
    

    media = total/quantidade;
    console.log(`Media : ${media.toFixed(2)}`);

    let quantosDiasSuperiorMedia = 0;

    faturamento["faturamento"].forEach(obj => {
      let faturamentoDiario = obj["faturamentoDiario"];
      let dia = obj["dia"];
      if (faturamentoDiario > media ){
        console.log(`${dia} `);
        quantosDiasSuperiorMedia++;
      }

    });

    console.log('-------------------');
    console.log(`menorValor ${menorValor}`);
    console.log(`maiorValor ${maiorValor}`);
    console.log(`quantosDiasSuperiorMedia ${quantosDiasSuperiorMedia}`);
}

async function  lerArquivoJson(arquivoJsonNome){
   
    const fsp = require('fs').promises;

    return await fsp.readFile(arquivoJsonNome).then(data => {

        return converterJsonParaFaturamento(data);
        
    });
}

function converterJsonParaFaturamento(data){
    
    const faturamento = JSON.parse(data);     
    return faturamento;    
}

SP = 67836.43;
RJ = 36678.66;
MG = 29229.88;
ES = 27165.48;
Outros = 19849.53;
total = SP + RJ + MG + ES + Outros;
var percentualSp = (SP / (total/100)  );
var arredondadoSp = parseFloat(percentualSp.toFixed(2));
console.log("O percentual referente a SP é de: " + arredondadoSp + " %");

var percentualRj = (RJ / (total/100)  );
var arredondadoRj = parseFloat(percentualRj.toFixed(2));
console.log("O percentual referente a RJ é de: " + arredondadoRj + " %");

var percentualMg = (MG / (total/100)  );
var arredondadoMg = parseFloat(percentualMg.toFixed(2));
console.log("O percentual referente a MG é de: " + arredondadoMg + " %");

var percentualEs = (ES / (total/100)  );
var arredondadoEs = parseFloat(percentualEs.toFixed(2));
console.log("O percentual referente a ES é de: " + arredondadoEs + " %");

var percentualOutros = (Outros / (total/100)  );
var arredondadoOutros = parseFloat(percentualOutros.toFixed(2));
console.log("O percentual referente a Outros é de: " + arredondadoOutros + "%");

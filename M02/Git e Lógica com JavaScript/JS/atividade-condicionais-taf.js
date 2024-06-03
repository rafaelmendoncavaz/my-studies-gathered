// Não altere o nome das variavéis ou o texto do prompt! 
// Modifique apenas o tipo da variavel!            
var gender = prompt('Genero');
var height = prompt('Altura');
var barReps = prompt('Repetições com barra');
var barSeconds = prompt('Tempo das repetições com barra');
var abs = prompt('Abdominais');
var runDistance = prompt('Distância da corrida');
var runTime = prompt('Tempo da corrida');
var swimDistance = prompt('Distância da natação');
var swimTime = prompt('Tempo da natação');
var diveTime = prompt(' Tempo de mergulho');

var result = false;

//Desenvolva seu código aqui:
if(gender == "male"
&& height >= 1.7
&& (barReps >= 6 || barSeconds >= 15)
&& abs >= 41
&& (runDistance >= 3000 && runTime <= 720
|| runDistance >= 5000 && runTime <= 1200)
&& (swimDistance >= 100 && swimTime <= 60
|| diveTime <= 30)
){
    result = true;
} else if (gender == "female"
&& height >= 1.6
&& (barReps >= 5 || barSeconds >= 12)
&& abs >= 41
&& (runDistance >= 4000 && runTime <= 900
|| runDistance >= 6000 && runTime <= 1320)
&& (swimDistance >= 100 && swimTime <= 60
|| diveTime <= 30)) {
    result = true;
} else {
    result = false
}
function createTable(row, colms){
    let testTable = document.getElementById('test')
    let testBody = document.getElementById("testBody");

    for (let i = 0; i < row; i++){
        let tr = testBody.insertRow();
        for (let j = 0; j < colms; j++){
            let td = tr.insertCell();
            td.appendChild(document.createTextNode('----'));
        }
    }
    testTable.appendChild(testBody);

}

function sumMinutes(values){
    const validate = time =>{
        if(time > 59 || time < 0){
            throw new Error(
                "Hours, minutes and seconds values have to be between 0 and 59."
            );
        }
        return time;
    };

    const seconds = values
        .map(e => validate(Number(e.split(":").reverse()[0])))
        .reduce((a, b) => a + b);

    let minutes = values
        .map(e => validate(Number(e.split(":").reverse()[1])))
        .reduce((a, b) => a + b);

    let hours = values
        .map(e =>
        e.split(":").reverse()[2] ? Number(e.split(":").reverse[2]) : 0)
        .reduce((a, b) => a + b);

    minutes *= 60;
    hours *= 3600;

    let result = new Date((hours + minutes + seconds) * 1000)
        .toISOString()
        .substr(11, 8);

    return result.split(":").reverse()[2] === "00" ? result.slice(3) : result;
}

function showTableNoShowform(){
    let styleTable = document.getElementById("registro");
    styleTable.style.display ='block';
    let styleButton = document.getElementById("formatos");
    styleButton.style.display ='none';
}

function getRandomArbitrary(max, min){
    let i = max*1.8;
    let x = min - 2;
    if (x <= 0){x = 1};
    return parseFloat((Math.random() * (i - x) + x).toFixed(2));
}

function arrayCompletation(max){
    let min = 0;
    if(max == 8){
        min = 5.5;
    }else{
        min = 1;
    }

    for (i = 0; i < m; i++) {
        sumA[i] = getRandomArbitrary(max, min);
    }
}

function averangeAbsortionArray(){
    let o = 0;
    let sumTotal = 0;
    for (let o = 0; o < m; o++){
        sumTotal = sumTotal + sumA[o];
    }
    averangeAb = sumTotal / m;
    return averangeAb;
}

function getRandomArbitrarySeal(){
    let p = m + 5;
    let max = parseFloat((Math.random() * (999999 - 1000) + 1000).toFixed());
    let min = max - 100;
    for (let n = 0; n < p; n++){
        numberSeal[n] = parseFloat((Math.random() * (max - min) + min).toFixed());
    }
}

function getRandomArbitrarychicken(avChicken){
    let max = avChicken + 0.950;
    let min = avChicken - 0.950;
    let p = m + 5;
    for (let n = 0; n < p; n++){
        numberChicken[n] = parseFloat((Math.random() * (max - min) + min).toFixed(3));
    }
}

function subtrationChicken(){
    for (let n = 0; n < m; n++){
        subtrationChickenArray[n] = parseFloat((finalChickenW[n] - numberChicken[n]).toFixed(3))
    }

}

function finalChickenWeight (){
    for(let n = 0; n < m; n++){
        finalChickenW[n] = (((sumA[n] / 100) * numberChicken[n]) + numberChicken[n]);
    }
}

let finalChickenW = [];
let subtrationChickenArray = []; 
let numberChicken = [];
let numberSeal = [];
let i = 0;
let sumA = [];
let m = 20; 

let $buttonGenerateTable = document.getElementById("show-table");

$buttonGenerateTable.onclick = function(){
    createTable(25, 6);

    let chickenAv = parseFloat(document.getElementById("average-chicken-weight").value);
    let waterMaxForm = parseFloat(document.querySelector('input[name="water-max"]:checked').value);
    let customAbs =  parseFloat(document.querySelector('input[name="custom').value);
    let waterMin = 0;
    let waterMax = 0;

    if(waterMaxForm == 100){
        waterMax = customAbs;
    } else{
        waterMax = waterMaxForm;
    }

    function comprobation(){
        if(averangeAbsortionArray() <= waterMax && averangeAbsortionArray() >= waterMin){
            return true;
        }else{
            return false;
        }
    }
    
    function callTail(){
        if(comprobation() === true){
    
        }else{
            arrayCompletation(waterMax, waterMin);
            averangeAbsortionArray();
            comprobation()
            callTail();
        }
    }
    

    arrayCompletation(waterMax);
    averangeAbsortionArray();
    comprobation(); 
    callTail();
    getRandomArbitrarySeal();
    getRandomArbitrarychicken(chickenAv);
    finalChickenWeight();
    subtrationChicken();

    showTableNoShowform();

    let x = document.getElementById('testBody').getElementsByTagName('td');

    let b = 1;
    for(let k = 0; k < 150; k+=6){
        x[k].textContent = b;
        b++;
    }

    b = 0;
    for (let k = 1; k < 150; k+=6){
        x[k].textContent = numberSeal[b];
        b++;
    }

    b = 0;
    for(let k = 2; k < 150; k+=6){
        x[k].textContent = numberChicken[b].toFixed(3);
        b++;
    }

    b = 0;
    for(let k = 5; k < 120; k+=6){
        x[k].textContent = sumA[b].toFixed(2);
        b++;
    }

    b = 0;
    for(let k = 3; k < 120; k+=6){
        x[k].textContent = finalChickenW[b].toFixed(3);
        b++;
    }

    b = 0;
    for(let k = 4; k < 120; k+=6){
        x[k].textContent = subtrationChickenArray[b].toFixed(3);
        b++;
    }

    //lost seal check box
    
    let checkBox = document.getElementById('seal-lost').checked;
    let array = [21, 22, 23, 24, 25];
    let randSeal = parseFloat((Math.random() * (3 - 0) + 0).toFixed());
    let proNumb = 0;

    if (checkBox == true){

        function testProNumb(){
            proNumb = parseFloat((Math.random() * (20 - 1) + 1).toFixed());
            if(!array.includes(proNumb)){
                return proNumb;
            } else{
                return testProNumb();
            }
        }

        for(randSeal; randSeal >= 0; randSeal--){
            array[randSeal] = testProNumb();
        }

        array.sort(function(a,b){
            return a - b;
        });
    }

    if(array[0] != 21){
        x[122].textContent = numberChicken[array[0]-1].toFixed(3);
        x[123].textContent = finalChickenW[array[0]-1].toFixed(3);
        x[124].textContent = subtrationChickenArray[array[0]-1].toFixed(3);
        x[125].textContent = sumA[array[0]-1].toFixed(2);

        let sealLost1C = ((array[0] - 1) * 6);

        x[sealLost1C+2].textContent = numberChicken[20].toFixed(3);
        x[sealLost1C+3].textContent = "----";
        x[sealLost1C+4].textContent = "----";
        x[sealLost1C+5].textContent = "----";
    }

    if(array[1] != 22){
        x[128].textContent = numberChicken[array[1]-1].toFixed(3);
        x[129].textContent = finalChickenW[array[1]-1].toFixed(3);
        x[130].textContent = subtrationChickenArray[array[1]-1].toFixed(3);
        x[131].textContent = sumA[array[1]-1].toFixed(2);

        let sealLost2C = ((array[1] - 1) * 6);
        
        x[sealLost2C+2].textContent = numberChicken[21].toFixed(3);
        x[sealLost2C+3].textContent = "----";
        x[sealLost2C+4].textContent = "----";
        x[sealLost2C+5].textContent = "----";
    }

    if(array[2] != 23){
        x[134].textContent = numberChicken[array[2]-1].toFixed(3);
        x[135].textContent = finalChickenW[array[2]-1].toFixed(3);
        x[136].textContent = subtrationChickenArray[array[2]-1].toFixed(3);
        x[137].textContent = sumA[array[2]-1].toFixed(2);

        let sealLost3C = ((array[2] - 1) * 6);
        
        x[sealLost3C+2].textContent = numberChicken[22].toFixed(3);
        x[sealLost3C+3].textContent = "----";
        x[sealLost3C+4].textContent = "----";
        x[sealLost3C+5].textContent = "----";
    }

    if(array[3] != 24){
        x[140].textContent = numberChicken[array[3]-1].toFixed(3);
        x[141].textContent = finalChickenW[array[3]-1].toFixed(3);
        x[142].textContent = subtrationChickenArray[array[3]-1].toFixed(3);
        x[143].textContent = sumA[array[3]-1].toFixed(2);

        let sealLost4C = ((array[3] - 1) * 6);
        
        x[sealLost4C+2].textContent = numberChicken[23].toFixed(3);
        x[sealLost4C+3].textContent = "----";
        x[sealLost4C+4].textContent = "----";
        x[sealLost4C+5].textContent = "----";
    }

    if(array[4] != 25){
        x[146].textContent = numberChicken[array[4]-1].toFixed(3);
        x[147].textContent = finalChickenW[array[4]-1].toFixed(3);
        x[148].textContent = subtrationChickenArray[array[4]-1].toFixed(3);
        x[149].textContent = sumA[array[4]-1].toFixed(2);

        let sealLost5C = ((array[4] - 1) * 6);
        
        x[sealLost5C+2].textContent = numberChicken[24].toFixed(3);
        x[sealLost5C+3].textContent = "----";
        x[sealLost5C+4].textContent = "----";
        x[sealLost5C+5].textContent = "----";
    }
    
    let promedioHidratacionResult = document.getElementById('promediohidratacionresult');
    promedioHidratacionResult.textContent = averangeAb.toFixed(2);

    let timeAsk = document.getElementById('hour-test').value;
    let timeSpan2 = document.getElementById('bannerhoraF')
    let timeSpan = document.getElementById('bannerhora');
    
    let mina = parseFloat((Math.random() * (50 - 45) + 45).toFixed());
    let secondTime = '00:' + mina;

    let finalTime = sumMinutes([timeAsk, secondTime]);


    timeSpan.textContent = `Hora: ${timeAsk} HS`;
    timeSpan2.textContent = `Hora de finalización: ${finalTime} HS`;
    
    let dateAsk = document.getElementById('date-test').value.toString();
    let dateSpan = document.getElementById('bannerfecha');
    let dateAskInv = dateAsk.split('-').reverse().join('-');
    dateSpan.textContent = `Fecha: ${dateAskInv}`;

    let observacionFinal = document.getElementById('medidascorretivas');
    let observacionInicial = document.getElementById('observacionForm').value;

    observacionFinal.textContent = `Observaciones: ${observacionInicial}`;

    return false;
}







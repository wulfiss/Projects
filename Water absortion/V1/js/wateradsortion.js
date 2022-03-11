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

function showTableNoShowform(){
    let styleTable = document.getElementById("registro");
    styleTable.style.display ='block';
    let styleButton = document.getElementById("formdatos");
    styleButton.style.display ='none';
}

function getRandomArbitrary (){
    return parseFloat((Math.random() * (15 - 4) + 4).toFixed(2));
}

function arrayCompletation(){
    for (i = 0; i < m; i++) {
        sumA[i] = getRandomArbitrary();
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

function getRandomArbitrarySeal(max, min){
    let p = m + 2;
    for (let n = 0; n < p; n++){
        numberSeal[n] = parseFloat((Math.random() * (max - min) + min).toFixed());
    }
}

function getRandomArbitrarychicken(avChicken){
    let max = avChicken + 0.350;
    let min = avChicken - 0.350;
    let p = m + 2;
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
    createTable(22, 6);

    let chickenAv = parseFloat(document.getElementById("average-chicken-weight").value);
    let sealMax = parseFloat(document.getElementById("seal-max").value);
    let sealMin = parseFloat(document.getElementById("seal-min").value);
    let waterMax = parseFloat(document.getElementById("water-max").value);
    let waterMin = parseFloat(document.getElementById("water-min").value);
    let sealLost1 = parseFloat(document.getElementById("seal-lost1").value);
    let sealLost2 = parseFloat(document.getElementById("seal-lost2").value);

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
            arrayCompletation();
            averangeAbsortionArray();
            comprobation()
            callTail();
        }
    }
    

    arrayCompletation();
    averangeAbsortionArray();
    comprobation(); 
    callTail();
    getRandomArbitrarySeal(sealMin,sealMax);
    getRandomArbitrarychicken(chickenAv);
    finalChickenWeight();
    subtrationChicken();

    showTableNoShowform();

    let x = document.getElementById('testBody').getElementsByTagName('td')

    let b = 1;
    for(let k = 0; k <132; k+=6){
        x[k].textContent = b;
        b++;
    }

    b = 0;
    for (let k = 1; k < 132; k+=6){
        x[k].textContent = numberSeal[b];
        b++;
    }

    b = 0;
    for(let k = 2; k < 132; k+=6){
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

    if(sealLost1 != 21){
        x[122].textContent = numberChicken[sealLost1-1].toFixed(3);
        x[123].textContent = finalChickenW[sealLost1-1].toFixed(3);
        x[124].textContent = subtrationChickenArray[sealLost1-1].toFixed(3);
        x[125].textContent = sumA[sealLost1-1].toFixed(2);

        let sealLost1C = ((sealLost1 - 1) * 6);

        x[sealLost1C+2].textContent = numberChicken[20].toFixed(3);
        x[sealLost1C+3].textContent = "----";
        x[sealLost1C+4].textContent = "----";
        x[sealLost1C+5].textContent = "----";
    }

    if(sealLost2 != 22){
        x[128].textContent = numberChicken[sealLost2-1].toFixed(3);
        x[129].textContent = finalChickenW[sealLost2-1].toFixed(3);
        x[130].textContent = subtrationChickenArray[sealLost2-1].toFixed(3);
        x[131].textContent = sumA[sealLost2-1].toFixed(2);

        let sealLost2C = ((sealLost2 - 1) * 6);
        
        x[sealLost2C+2].textContent = numberChicken[21].toFixed(3);
        x[sealLost2C+3].textContent = "----";
        x[sealLost2C+4].textContent = "----";
        x[sealLost2C+5].textContent = "----";
    }
    
    tr = testBody.insertRow();
    td = tr.insertCell();
    td.appendChild(document.createTextNode('----'));

    
    let promedioHidratacionResult = document.getElementById('promediohidratacionresult');
    promedioHidratacionResult.textContent = averangeAb.toFixed(2);

    let timeAsk = document.getElementById('hour-test').value;
    let timeSpan = document.getElementById('value');

    timeSpan.textContent = `Hora: ${timeAsk}hs`;

    let dateAsk = document.getElementById('date-test').value.toString();
    let dateSpan = document.getElementById('date-span');
    let dateAskInv = dateAsk.split('-').reverse().join('-');
    dateSpan.textContent = `Fecha: ${dateAskInv}`;

    return false;
}



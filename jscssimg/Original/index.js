//Related to percentage of water absortion
function getRandomArbitrary (){
    return Number((Math.random() * (8 - 1) + 1).toFixed(2));
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

function comprobation(){
    if(averangeAbsortionArray() <= 4.5 && averangeAbsortionArray() >= 1){
        return true;
    }else{
        return false;
    }
}

function callTail(){
    if(comprobation() === true){
        console.log(sumA);
        console.log(averangeAbsortionArray());
        //document.getElementById('water-absortion').innerHTML = '<li>' + sumA.join('</li><li>') + '</li>';
       //document.getElementById('averange-adsortion').innerHTML = 'The averange absortion is ' + Number((averangeAbsortionArray()).toFixed(2));
    }else{
        arrayCompletation();
        averangeAbsortionArray();
        comprobation()
        callTail();
    }
}
//up to here

function getRandomArbitrarySeal(max, min){
    let p = m + 2;
    for (let n = 0; n < p; n++){
        numberSeal[n] = Number((Math.random() * (max - min) + min).toFixed());
    }
}


function getRandomArbitrarychicken(max, min){
    let p = m + 2;
    for (let n = 0; n < p; n++){
        numberChicken[n] = Number((Math.random() * (max - min) + min).toFixed(3));
    }
}

function subtrationChicken(){
    for (let n = 0; n < m; n++){
        subtrationChickenArray[n] = Number((finalChickenW[n] - numberChicken[n]).toFixed(3))
    }

}

function finalChickenWeight (){
    for(let n = 0; n < m; n++){
        finalChickenW[n] = Number((((sumA[n] / 100) * numberChicken[n]) + numberChicken[n]).toFixed(3));
    }
}

let finalChickenW = [];
let subtrationChickenArray = []; 
let numberChicken = [];
let numberSeal = [];
let i = 0;
let sumA = [];
let m = 20; //Number of chickens
// percentage of water adsortion
arrayCompletation();
averangeAbsortionArray();
comprobation(); 
callTail();
//up to here
getRandomArbitrarySeal(9999, 4500);
console.log(numberSeal);
getRandomArbitrarychicken(1.758, 3.221);
console.log(numberChicken);
finalChickenWeight();
console.log(finalChickenW);
subtrationChicken();

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Precintos";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Peso inicial (kg)";
let heading_3 = document.createElement('th');
heading_3.innerText = "Peso final (kg)";
let heading_4 = document.createElement('th');
heading_4.innerText = "Diferencia (kg)";
let heading_5 = document.createElement('th');
heading_5.innerText = "Porcentaje de hidratación";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
thead.appendChild(row_1);

let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerText = numberSeal[0];
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerText = numberChicken[0];
let row_2_data_3= document.createElement('td');
row_2_data_3.innerText = finalChickenW[0];
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerText = subtrationChickenArray[0];
let row_2_data_5 = document.createElement('td');
row_2_data_5.innerText = sumA[0];

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
row_2.appendChild(row_2_data_5);
tbody.appendChild(row_2);

let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerText = numberSeal[1];
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerText = numberChicken[1];
let row_3_data_3= document.createElement('td');
row_3_data_3.innerText = finalChickenW[1];
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerText = subtrationChickenArray[1];
let row_3_data_5 = document.createElement('td');
row_3_data_5.innerText = sumA[1];

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
row_3.appendChild(row_3_data_5);
tbody.appendChild(row_3);

let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerText = numberSeal[2];
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerText = numberChicken[2];
let row_4_data_3= document.createElement('td');
row_4_data_3.innerText = finalChickenW[2];
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerText = subtrationChickenArray[2];
let row_4_data_5 = document.createElement('td');
row_4_data_5.innerText = sumA[2];

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
row_4.appendChild(row_4_data_5);
tbody.appendChild(row_4);

let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerText = numberSeal[3];
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerText = numberChicken[3];
let row_5_data_3= document.createElement('td');
row_5_data_3.innerText = finalChickenW[3];
let row_5_data_4 = document.createElement('td');
row_5_data_4.innerText = subtrationChickenArray[3];
let row_5_data_5 = document.createElement('td');
row_5_data_5.innerText = sumA[3];

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
row_5.appendChild(row_5_data_4);
row_5.appendChild(row_5_data_5);
tbody.appendChild(row_5);

let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.innerText = numberSeal[4];
let row_6_data_2 = document.createElement('td');
row_6_data_2.innerText = numberChicken[4];
let row_6_data_3= document.createElement('td');
row_6_data_3.innerText = finalChickenW[4];
let row_6_data_4 = document.createElement('td');
row_6_data_4.innerText = subtrationChickenArray[4];
let row_6_data_5 = document.createElement('td');
row_6_data_5.innerText = sumA[4];

row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
row_6.appendChild(row_6_data_3);
row_6.appendChild(row_6_data_4);
row_6.appendChild(row_6_data_5);
tbody.appendChild(row_6);

let row_7 = document.createElement('tr');
let row_7_data_1 = document.createElement('td');
row_7_data_1.innerText = numberSeal[5];
let row_7_data_2 = document.createElement('td');
row_7_data_2.innerText = numberChicken[5];
let row_7_data_3= document.createElement('td');
row_7_data_3.innerText = finalChickenW[5];
let row_7_data_4 = document.createElement('td');
row_7_data_4.innerText = subtrationChickenArray[5];
let row_7_data_5 = document.createElement('td');
row_7_data_5.innerText = sumA[5];

row_7.appendChild(row_7_data_1);
row_7.appendChild(row_7_data_2);
row_7.appendChild(row_7_data_3);
row_7.appendChild(row_7_data_4);
row_7.appendChild(row_7_data_5);
tbody.appendChild(row_7);

let row_8 = document.createElement('tr');
let row_8_data_1 = document.createElement('td');
row_8_data_1.innerText = numberSeal[6];
let row_8_data_2 = document.createElement('td');
row_8_data_2.innerText = numberChicken[6];
let row_8_data_3= document.createElement('td');
row_8_data_3.innerText = finalChickenW[6];
let row_8_data_4 = document.createElement('td');
row_8_data_4.innerText = subtrationChickenArray[6];
let row_8_data_5 = document.createElement('td');
row_8_data_5.innerText = sumA[6];

row_8.appendChild(row_8_data_1);
row_8.appendChild(row_8_data_2);
row_8.appendChild(row_8_data_3);
row_8.appendChild(row_8_data_4);
row_8.appendChild(row_8_data_5);
tbody.appendChild(row_8);

let row_9 = document.createElement('tr');
let row_9_data_1 = document.createElement('td');
row_9_data_1.innerText = numberSeal[7];
let row_9_data_2 = document.createElement('td');
row_9_data_2.innerText = numberChicken[7];
let row_9_data_3= document.createElement('td');
row_9_data_3.innerText = finalChickenW[7];
let row_9_data_4 = document.createElement('td');
row_9_data_4.innerText = subtrationChickenArray[7];
let row_9_data_5 = document.createElement('td');
row_9_data_5.innerText = sumA[7];

row_9.appendChild(row_9_data_1);
row_9.appendChild(row_9_data_2);
row_9.appendChild(row_9_data_3);
row_9.appendChild(row_9_data_4);
row_9.appendChild(row_9_data_5);
tbody.appendChild(row_9);

let row_10 = document.createElement('tr');
let row_10_data_1 = document.createElement('td');
row_10_data_1.innerText = numberSeal[8];
let row_10_data_2 = document.createElement('td');
row_10_data_2.innerText = numberChicken[8];
let row_10_data_3= document.createElement('td');
row_10_data_3.innerText = finalChickenW[8];
let row_10_data_4 = document.createElement('td');
row_10_data_4.innerText = subtrationChickenArray[8];
let row_10_data_5 = document.createElement('td');
row_10_data_5.innerText = sumA[8];

row_10.appendChild(row_10_data_1);
row_10.appendChild(row_10_data_2);
row_10.appendChild(row_10_data_3);
row_10.appendChild(row_10_data_4);
row_10.appendChild(row_10_data_5);
tbody.appendChild(row_10);

let row_11 = document.createElement('tr');
let row_11_data_1 = document.createElement('td');
row_11_data_1.innerText = numberSeal[9];
let row_11_data_2 = document.createElement('td');
row_11_data_2.innerText = numberChicken[9];
let row_11_data_3= document.createElement('td');
row_11_data_3.innerText = finalChickenW[9];
let row_11_data_4 = document.createElement('td');
row_11_data_4.innerText = subtrationChickenArray[9];
let row_11_data_5 = document.createElement('td');
row_11_data_5.innerText = sumA[9];

row_11.appendChild(row_11_data_1);
row_11.appendChild(row_11_data_2);
row_11.appendChild(row_11_data_3);
row_11.appendChild(row_11_data_4);
row_11.appendChild(row_11_data_5);
tbody.appendChild(row_11);


let row_12 = document.createElement('tr');
let row_12_data_1 = document.createElement('td');
row_12_data_1.innerText = numberSeal[10];
let row_12_data_2 = document.createElement('td');
row_12_data_2.innerText = numberChicken[10];
let row_12_data_3= document.createElement('td');
row_12_data_3.innerText = finalChickenW[10];
let row_12_data_4 = document.createElement('td');
row_12_data_4.innerText = subtrationChickenArray[10];
let row_12_data_5 = document.createElement('td');
row_12_data_5.innerText = sumA[10];

row_12.appendChild(row_12_data_1);
row_12.appendChild(row_12_data_2);
row_12.appendChild(row_12_data_3);
row_12.appendChild(row_12_data_4);
row_12.appendChild(row_12_data_5);
tbody.appendChild(row_12);

let row_13 = document.createElement('tr');
let row_13_data_1 = document.createElement('td');
row_13_data_1.innerText = numberSeal[11];
let row_13_data_2 = document.createElement('td');
row_13_data_2.innerText = numberChicken[11];
let row_13_data_3= document.createElement('td');
row_13_data_3.innerText = finalChickenW[11];
let row_13_data_4 = document.createElement('td');
row_13_data_4.innerText = subtrationChickenArray[11];
let row_13_data_5 = document.createElement('td');
row_13_data_5.innerText = sumA[11];

row_13.appendChild(row_13_data_1);
row_13.appendChild(row_13_data_2);
row_13.appendChild(row_13_data_3);
row_13.appendChild(row_13_data_4);
row_13.appendChild(row_13_data_5);
tbody.appendChild(row_13);


let row_14 = document.createElement('tr');
let row_14_data_1 = document.createElement('td');
row_14_data_1.innerText = numberSeal[12];
let row_14_data_2 = document.createElement('td');
row_14_data_2.innerText = numberChicken[12];
let row_14_data_3= document.createElement('td');
row_14_data_3.innerText = finalChickenW[12];
let row_14_data_4 = document.createElement('td');
row_14_data_4.innerText = subtrationChickenArray[12];
let row_14_data_5 = document.createElement('td');
row_14_data_5.innerText = sumA[12];

row_14.appendChild(row_14_data_1);
row_14.appendChild(row_14_data_2);
row_14.appendChild(row_14_data_3);
row_14.appendChild(row_14_data_4);
row_14.appendChild(row_14_data_5);
tbody.appendChild(row_14);


let row_15 = document.createElement('tr');
let row_15_data_1 = document.createElement('td');
row_15_data_1.innerText = numberSeal[13];
let row_15_data_2 = document.createElement('td');
row_15_data_2.innerText = numberChicken[13];
let row_15_data_3= document.createElement('td');
row_15_data_3.innerText = finalChickenW[13];
let row_15_data_4 = document.createElement('td');
row_15_data_4.innerText = subtrationChickenArray[13];
let row_15_data_5 = document.createElement('td');
row_15_data_5.innerText = sumA[13];

row_15.appendChild(row_15_data_1);
row_15.appendChild(row_15_data_2);
row_15.appendChild(row_15_data_3);
row_15.appendChild(row_15_data_4);
row_15.appendChild(row_15_data_5);
tbody.appendChild(row_15);


let row_16 = document.createElement('tr');
let row_16_data_1 = document.createElement('td');
row_16_data_1.innerText = numberSeal[14];
let row_16_data_2 = document.createElement('td');
row_16_data_2.innerText = numberChicken[14];
let row_16_data_3= document.createElement('td');
row_16_data_3.innerText = finalChickenW[14];
let row_16_data_4 = document.createElement('td');
row_16_data_4.innerText = subtrationChickenArray[14];
let row_16_data_5 = document.createElement('td');
row_16_data_5.innerText = sumA[14];

row_16.appendChild(row_16_data_1);
row_16.appendChild(row_16_data_2);
row_16.appendChild(row_16_data_3);
row_16.appendChild(row_16_data_4);
row_16.appendChild(row_16_data_5);
tbody.appendChild(row_16);


let row_17 = document.createElement('tr');
let row_17_data_1 = document.createElement('td');
row_17_data_1.innerText = numberSeal[15];
let row_17_data_2 = document.createElement('td');
row_17_data_2.innerText = numberChicken[15];
let row_17_data_3= document.createElement('td');
row_17_data_3.innerText = finalChickenW[15];
let row_17_data_4 = document.createElement('td');
row_17_data_4.innerText = subtrationChickenArray[15];
let row_17_data_5 = document.createElement('td');
row_17_data_5.innerText = sumA[15];

row_17.appendChild(row_17_data_1);
row_17.appendChild(row_17_data_2);
row_17.appendChild(row_17_data_3);
row_17.appendChild(row_17_data_4);
row_17.appendChild(row_17_data_5);
tbody.appendChild(row_17);

//17
let row_18 = document.createElement('tr');
let row_18_data_1 = document.createElement('td');
row_18_data_1.innerText = numberSeal[16];
let row_18_data_2 = document.createElement('td');
row_18_data_2.innerText = numberChicken[16];
let row_18_data_3= document.createElement('td');
row_18_data_3.innerText = finalChickenW[16];
let row_18_data_4 = document.createElement('td');
row_18_data_4.innerText = subtrationChickenArray[16];
let row_18_data_5 = document.createElement('td');
row_18_data_5.innerText = sumA[16];

row_18.appendChild(row_18_data_1);
row_18.appendChild(row_18_data_2);
row_18.appendChild(row_18_data_3);
row_18.appendChild(row_18_data_4);
row_18.appendChild(row_18_data_5);
tbody.appendChild(row_18);

//18
let row_19 = document.createElement('tr');
let row_19_data_1 = document.createElement('td');
row_19_data_1.innerText = numberSeal[17];
let row_19_data_2 = document.createElement('td');
row_19_data_2.innerText = numberChicken[17];
let row_19_data_3= document.createElement('td');
row_19_data_3.innerText = finalChickenW[17];
let row_19_data_4 = document.createElement('td');
row_19_data_4.innerText = subtrationChickenArray[17];
let row_19_data_5 = document.createElement('td');
row_19_data_5.innerText = sumA[17];

row_19.appendChild(row_19_data_1);
row_19.appendChild(row_19_data_2);
row_19.appendChild(row_19_data_3);
row_19.appendChild(row_19_data_4);
row_19.appendChild(row_19_data_5);
tbody.appendChild(row_19);

//19
let row_20 = document.createElement('tr');
let row_20_data_1 = document.createElement('td');
row_20_data_1.innerText = numberSeal[18];
let row_20_data_2 = document.createElement('td');
row_20_data_2.innerText = numberChicken[18];
let row_20_data_3= document.createElement('td');
row_20_data_3.innerText = finalChickenW[18];
let row_20_data_4 = document.createElement('td');
row_20_data_4.innerText = subtrationChickenArray[18];
let row_20_data_5 = document.createElement('td');
row_20_data_5.innerText = sumA[18];

row_20.appendChild(row_20_data_1);
row_20.appendChild(row_20_data_2);
row_20.appendChild(row_20_data_3);
row_20.appendChild(row_20_data_4);
row_20.appendChild(row_20_data_5);
tbody.appendChild(row_20);

//20

let row_21 = document.createElement('tr');
let row_21_data_1 = document.createElement('td');
row_21_data_1.innerText = numberSeal[19];
let row_21_data_2 = document.createElement('td');
row_21_data_2.innerText = numberChicken[19];
let row_21_data_3= document.createElement('td');
row_21_data_3.innerText = finalChickenW[19];
let row_21_data_4 = document.createElement('td');
row_21_data_4.innerText = subtrationChickenArray[19];
let row_21_data_5 = document.createElement('td');
row_21_data_5.innerText = sumA[19];

row_21.appendChild(row_21_data_1);
row_21.appendChild(row_21_data_2);
row_21.appendChild(row_21_data_3);
row_21.appendChild(row_21_data_4);
row_21.appendChild(row_21_data_5);
tbody.appendChild(row_21);

//21
let row_22 = document.createElement('tr');
let row_22_data_1 = document.createElement('td');
row_22_data_1.innerText = numberSeal[20];
let row_22_data_2 = document.createElement('td');
row_22_data_2.innerText = numberChicken[20];
let row_22_data_3= document.createElement('td');
row_22_data_3.innerText = '---';
let row_22_data_4 = document.createElement('td');
row_22_data_4.innerText = '---';
let row_22_data_5 = document.createElement('td');
row_22_data_5.innerText = '---';

row_22.appendChild(row_22_data_1);
row_22.appendChild(row_22_data_2);
row_22.appendChild(row_22_data_3);
row_22.appendChild(row_22_data_4);
row_22.appendChild(row_22_data_5);
tbody.appendChild(row_22);

//22
let row_23 = document.createElement('tr');
let row_23_data_1 = document.createElement('td');
row_23_data_1.innerText = numberSeal[21];
let row_23_data_2 = document.createElement('td');
row_23_data_2.innerText = numberChicken[21];
let row_23_data_3= document.createElement('td');
row_23_data_3.innerText = '---';
let row_23_data_4 = document.createElement('td');
row_23_data_4.innerText = '---';
let row_23_data_5 = document.createElement('td');
row_23_data_5.innerText = '---';


row_23.appendChild(row_23_data_1);
row_23.appendChild(row_23_data_2);
row_23.appendChild(row_23_data_3);
row_23.appendChild(row_23_data_4);
row_23.appendChild(row_23_data_5);
tbody.appendChild(row_23);

let row_24 = document.createElement('tr');
let row_24_data_1 = document.createElement('td');
row_24_data_1.setAttribute("colspan", 5);
row_24_data_1.innerText = "El promedio de hidratación es: " + averangeAb.toFixed(2);

row_24.appendChild(row_24_data_1);
tbody.appendChild(row_24);

// another easiest way 

function calculateEllipseArea(){

    const majorLength = getInputValueById('major-length');
    console.log('value of majorLength', majorLength);

    const minorLength = getInputValueById('minor-length');
    console.log('value of minorLength', minorLength);


    const area = Math.PI * majorLength * minorLength;
    console.log('area of ellipse is', area);

setInnerTextById('ellipse-area', area);


}

function getInputValueById(inputFieldId) {
const inputField = document.getElementById(inputFieldId);
const inputValueText = inputField.value;
const inputValue = parseFloat(inputValueText);
return inputValue;
}
 // display ellipse area
function setInnerTextById(elementId,area){
const element = document.getElementById(elementId);
element.innerText = area;
}






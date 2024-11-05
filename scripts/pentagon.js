
function PentagonArea() {
    // get pentagon Perimeter value
const pentagonPerimeterInput = document.getElementById('pentagon-perimeter');
const pentagonPerimeterText = pentagonPerimeterInput.value;
const perimeter = parseFloat(pentagonPerimeterText);
console.log(perimeter);

// get pentagon Apothem value
const pentagonApothemInput = document.getElementById('pentagon-apothem');
const pentagonApothemText = pentagonApothemInput.value;
const Apothem = parseFloat(pentagonApothemText);
console.log(Apothem);

// Area calculation
const area = 0.5 * perimeter * Apothem;
console.log('area of the pentagon is: ', area);

// display pentagon area
const pentagonAreaSpan = document.getElementById('pentagon-area');
pentagonAreaSpan.innerText = area;

}
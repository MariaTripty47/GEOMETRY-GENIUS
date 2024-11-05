
function rhombusArea() {
    // get rhombus diagonal-1 value
const rhombusDiagonalInput = document.getElementById('rom-diagonal');
const rhombusDiagonalText = rhombusDiagonalInput.value;
const Diagonal = parseFloat(rhombusDiagonalText);
console.log(Diagonal);

// get rhombus diagonal-2 value
const rhombusDiagonallInput = document.getElementById('rom-diagonall');
const rhombusDiagonallText = rhombusDiagonallInput.value;
const Diagonall = parseFloat(rhombusDiagonallText);
console.log(Diagonall);

// Area calculation
const area = 0.5 * Diagonal * Diagonall;
console.log('area of the rhombus is: ', area);

// display rhombus area
const rhombusAreaSpan = document.getElementById('rhombus-area');
rhombusAreaSpan.innerText = area;

}
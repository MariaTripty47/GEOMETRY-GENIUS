function ParallelogramArea() {
    // get Parallelogram base value
const ParallelogramBaseInput = document.getElementById('paral-base');
const ParallelogramBaseText = ParallelogramBaseInput.value;
const base = parseFloat(ParallelogramBaseText);
console.log(base);

// get Parallelogram height value
const ParallelogramHeightInput = document.getElementById('paral-height');
const ParallelogramHeightText = ParallelogramHeightInput.value;
const height = parseFloat(ParallelogramHeightText);
console.log(height);

// Area calculation
const area = base * height;
console.log('area of the Parallelogram is: ', area);

// display triangle area
const ParallelogramAreaSpan = document.getElementById('Parallelogram-area');
ParallelogramAreaSpan.innerText = area;


}
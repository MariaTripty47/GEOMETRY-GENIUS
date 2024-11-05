function calculateRectangleArea() {
    // get rectangle width value
const rectangleWidthInput = document.getElementById('rect-width');
const rectangleWidthText = rectangleWidthInput.value;
const width = parseFloat(rectangleWidthText);
console.log(width);

// get  rectangle length value
const rectangleLengthInput = document.getElementById('rect-length');
const rectangleLengthText = rectangleLengthInput.value;
const length = parseFloat(rectangleLengthText);
console.log(length);
// Area calculation
const area = width * length;
console.log('area of the rectangle is: ', area);

// display triangle area
const rectangleAreaSpan = document.getElementById('rectangle-area');
rectangleAreaSpan.innerText = area;






}
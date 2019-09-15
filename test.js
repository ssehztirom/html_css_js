function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
   }

function hover(element) {
// element.setAttribute('src', 'kermitpiggy.jpg');
element.style.setAttribute('width', '600px');
element.style.setAttribute('height', '600px');
}

function unhover(element) {
// <element.setAttribute('src', 'kermit.jpg');
element.style.setAttribute('width', '200px');
element.style.setAttribute('height', '200px');
}
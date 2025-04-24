const display = document.querySelector("main");
const button = document.querySelector("button"); // przy większej ilości przycisków najlepiej użyć klas


let i = 1;

button.addEventListener("click", function (event) {
    const paragraf = document.createElement("p");
    paragraf.innerText = `nowy paragraf nr ${i}`;

    paragraf.addEventListener("click", function () {
        this.remove();
    });

    display.append(paragraf);
    i++;
});
    

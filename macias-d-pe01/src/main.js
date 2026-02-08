import { randomElement } from "./utils.js";

let words1 = [];
let words2 = [];
let words3 = [];

const loadBabble = () => {
    fetch('./data/babble-data.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); 
        })  
        .then(data => {
            console.log('Success:', data);
            
            words1 = data.words1;
            words2 = data.words2;
            words3 = data.words3;
            
            init();
        })
        .catch(error => {
            console.error('Babble load failed:', error);
        });
}

const init = () => {
    document.querySelector("#btn-gen-1")
        .addEventListener("click", () => generateTechno(1));
    document.querySelector("#btn-gen-5")
        .addEventListener("click", () => generateTechno(5));
}

const generateTechno= (num) => {
    const outputDiv = document.querySelector("#output");
    
    for (let i = 0; i < num; i++) {
        const newP = document.createElement('p');
        newP.textContent = 
            `${randomElement(words1)} ${randomElement(words2)} ${randomElement(words3)}`;
        outputDiv.appendChild(newP);
    }
}	

window.addEventListener("load", loadBabble);
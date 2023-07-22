const container = document.querySelector('.container');
let number = 0;

for (let i = 0; i < 16; i++) {
    const content = document.createElement('div');
    content.classList.add('content');
    content.setAttribute('id', `${number}`)
    container.appendChild(content);
    for (let j = 0; j < 16; j++) {
        const parentDiv = document.getElementById(`${number}`);
        const div = document.createElement('div');
        div.classList.add('div-grid');
        parentDiv.appendChild(div);
        const cote =  3125 / 100;
        div.style.width = `${cote}px`;
        div.style.height = `${cote}px`;
    }
    number++
}



function changeSquare () {
    let numberOfSquare = parseInt(prompt('Veuillez choisir le nombre de carrés par côté (max: 64): '));
    let number = 0;
    if (numberOfSquare > 64 || numberOfSquare < 0) {
        alert("Vous avez choisi un nombre de carrés suppérieur à 64 ou inférieur à 0 !");
    } else if (typeof numberOfSquare != 'number') {
        alert("Vous n'avez pas choisi un nombre !");
    } else {
        container.innerHTML = "";
        for (let i = 0; i < numberOfSquare; i++) {
            const content = document.createElement('div');
            content.classList.add('content');
            content.setAttribute('id', `${number}`)
            container.appendChild(content);
            for (let j = 0; j < numberOfSquare; j++) {
                const parentDiv = document.getElementById(`${number}`);
                const div = document.createElement('div');
                div.classList.add('div-grid');
                parentDiv.appendChild(div);
                const cote = 500 / numberOfSquare;
                div.style.width = `${cote}px`;
                div.style.height = `${cote}px`;
            }
            number++
        }
    }
    const allDiv = document.querySelectorAll('.div-grid');

    allDiv.forEach((div) => {
    div.addEventListener('click', () => {
    const currentColor = div.style.backgroundColor;
    div.style.backgroundColor = currentColor === "black" ? "white" : "black";
  });
});
}

const allDiv = document.querySelectorAll('.div-grid');

allDiv.forEach((div) => {
  div.addEventListener('click', () => {
    const currentColor = div.style.backgroundColor;
    div.style.backgroundColor = currentColor === "black" ? "white" : "black";
  });
});
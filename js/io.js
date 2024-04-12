 export function print(tekst){
    let line = document.createElement("p")
    line.textContent = tekst

    let body = document.querySelector('body')

    body.appendChild(line)


 }
let Input = document.getElementById('InputBox');
let buttons = document.querySelectorAll('button');

let string = '';
let list = Array.from(buttons);
console.log(list)

list.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            Input.value = string;
        } else if (e.target.innerHTML === 'Ac') {
            string = '';
            Input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            Input.value = string;
        } else {
            string += e.target.innerHTML;
            Input.value = string;
        }
    });
});

console.log('Hello World')

let count = 0;
// h1 node
const headerOne = document.getElementById('counter');


const increase = () => {
     count++;
     headerOne.innerText = count;
}
const decrease = () => {
    count --;
    headerOne.innerText = count;
};

const reset = () => {
    count = 0;
   headerOne.innerHTML = '<mark>'  + count + '</mark>'
}

function selectTheme(theme) { // can use const, let, or var = selectTheme(theme) => {Arrow Function with logig performed here.}
    document.getElementsByTagName('body')[0].className = theme;
    document.getElementsByTagName('main')[0].className = theme;
    let buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme;
    }
}

// for(let i = 0, i < buttons.length; i++) {
//     buttons[i].className = theme;
// };
    // console.dir(document.getElementsByTagName('body')[0] = theme;




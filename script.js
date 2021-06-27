const reslut = document.querySelector('#result');
const btnNodeLit = document.querySelectorAll('.btn');
const buttons = Array.from(btnNodeLit);
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
let isDark = true;

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        if(reslut.innerHTML === 'Type...' && e.target.innerText !== '=') { 
            reslut.innerHTML = '';
        }
        if(e.target.innerText === 'Del') {
            if(reslut.innerHTML === '' || reslut.innerHTML.length === 1) { 
                reslut.innerHTML = 'Type...';
            } else {
                reslut.innerHTML = reslut.innerHTML.slice(0, -1);
            }
        } else if(e.target.innerText === 'Reset') {
            reslut.innerHTML = 'Type...';
        } else if(e.target.innerText === '='){
            if(reslut.innerHTML !== 'Type...') {
                const answer = eval(reslut.innerHTML.replaceAll('x', '*'));
                reslut.innerHTML = answer;
            }
        } else {
            reslut.innerHTML += e.target.innerText;
        }
    })
})

toggle.addEventListener('click', e => {
    if(isDark) {
        circle.setAttribute('class', 'circle move-right')
        document.querySelector(':root').setAttribute('theme', 'light')
    } else { 
        circle.setAttribute('class', 'circle move-left')
        document.querySelector(':root').setAttribute('theme', '')
    }
    isDark = !isDark;
})
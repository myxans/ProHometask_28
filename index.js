const text = document.querySelector('p');
const box = document.createElement('div');
text.after(box);

function start() {
    box.style.background = '#000';
}

function end() {
    box.style.background = 'none';
}

text.onmouseover = start;
text.onmouseout = end;
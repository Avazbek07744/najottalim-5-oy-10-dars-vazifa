const btn = document.querySelector('button');
const input = document.querySelector('#input');
const ui = document.querySelector('#ui');

btn && btn.addEventListener('click', function (event) {
    event.preventDefault();

    let res = document.createElement('div');
    res.classList.add('div1');
    res.innerHTML = `
    <p>${input.value}</p>
    <a href="#"><img src="./img/deteyls.svg" width="20" alt=""></a>
    `;
    
    input.value = '';

    const aTag = res.querySelector('a');
    aTag.addEventListener('click', function (e) {
        e.preventDefault();
        res.remove();
        countDivs();
    });

    ui.appendChild(res);

    countDivs();

    let clear = document.querySelector('#clear');
    clear.addEventListener('click', function (e) {
        e.preventDefault();
        ui.innerHTML = '';
        countDivs();
    });
});

function countDivs() {
    const div = ui.querySelectorAll('.div1');
    const span = document.querySelector('#span');
    span.innerHTML= div.length
}

// var counter = 0;
// Btn = document.getElementById('btn-increase');
// num = document.getElementById('number');
// Btn.addEventListener('click', function() {
//     counter = counter + 1;
//     num.innerText = counter;
//     if (counter > 0) {
//         num.style.color = 'green';
//     }
//     if (counter == 0) {
//         num.style.color = 'gray';
//     }

// })
// decBtn = document.getElementById('btn-decrease');
// decBtn.addEventListener('click', function() {
//     counter = counter - 1;
//     num.innerText = counter;
//     if (counter < 0) {
//         num.style.color = 'red';
//     }
//     if (counter == 0) {
//         num.style.color = 'gray';
//     }

// })
// midBtn = document.getElementById('btn-neutral');
// midBtn.addEventListener('click', function() {
//     counter = 0;
//     num.innerText = 0;
//     if (counter == 0) {
//         num.style.color = 'gray';
//     }
// })

let count = 0;
const value = document.querySelector('#number');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList;

        if (styles.contains('btn-danger')) {
            count--;
        } else if (styles.contains('btn-success')) {
            count++;
        } else {
            count = 0;
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count > 0) {
            value.style.color = 'green';
        }
        if (count == 0) {
            value.style.color = 'black';
        }
        value.textContent = count;
    })
})
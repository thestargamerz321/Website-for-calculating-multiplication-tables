let input = document.getElementById('number-input');
let btn = document.getElementById('btn');
let showMessage = document.getElementById('show-message');

function calculater(){
    let number = Number(input.value);
    let inHtml = '';

    if (number < 1){
        showMessage.innerHTML = '0 x 0 = 0';
        return;
    }else{
        for (let i = 1; i <= 12; i ++){
            inHtml += '<p>';
            inHtml += number + ' x ' + i + ' = '  + (number * i);
        }
    }

    showMessage.innerHTML = inHtml;
}

btn.addEventListener('click', calculater);
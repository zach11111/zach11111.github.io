const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
    let myChapter = input.value;
    input.value = '';

    const listChapter = document.createElement('li');
    const listBtn = document.createElement('button');
    const listText = document.createElement('span');

    listChapter.appendChild(listText);
    listText.textContent = myChapter;
    listBtn.textContent = '❌';
    listChapter.appendChild(listBtn);
    list.appendChild(listChapter);

    listBtn.addEventListener('click', function() {
        list.removeChild(listChapter);
    })

    input.focus();

})

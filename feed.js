const inputName = document.getElementById('inputName');
const textComment = document.getElementById('inputText');
const form = document.getElementById('formulario');
const commentPost = document.getElementById('commentPost');

form.addEventListener('submit', (Event) => {
    Event.preventDefault();

    let p = document.createElement('p');
    p.classList = 'p-2 d-flex text-wrap flex-wrap';
    p.innerHTML = `<strong> ${inputName.value}:  &nbsp ${textComment.value}</strong>`;
    commentPost.appendChild(p);
    inputName.value = '';
    textComment.value = '';
    inputName.focus();

});
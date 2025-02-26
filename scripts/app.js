const postArea = document.getElementById('forum-post-area');
const postTitle = document.getElementById('post-title');
const postUsername = document.getElementById('post-user');
const postMessage = document.getElementById('post-message');
const postButton = document.getElementById('post-button');

postButton.addEventListener('click', function(evento){
    evento.preventDefault();

    if (postTitle.value === '' || postUsername.value === '' || postMessage.value === '') {
        alert('Preencha todos os campos!');
        return;
    }

    const newPostDiv = document.createElement('div');
    newPostDiv.classList.add('main__forum__post');

    // Criar campos para o título, usuário e mensagem

    const newPostTitle = document.createElement('h2');
    newPostTitle.classList.add('main__forum__new__post__title')
    newPostTitle.innerText = postTitle.value;

    const newPostUsername = document.createElement('p');
    newPostUsername.classList.add('main__forum__new__post__user')
    newPostUsername.innerText = postUsername.value;

    const newPostMessage = document.createElement('p');
    newPostMessage.innerText = postMessage.value;

    let newPostDate = document.createElement('p');
    newPostDate.innerText = new Date().toLocaleDateString("pt-BR") // Set the date as content of the p element
    
    newPostDiv.appendChild(newPostTitle);
    newPostDiv.appendChild(newPostUsername);
    newPostDiv.appendChild(newPostDate); // newPostDate is now a DOM node
    newPostDiv.appendChild(newPostMessage);

    postArea.appendChild(newPostDiv);

    postTitle.value = '';
    postUsername.value = '';
    postMessage.value = '';

});

let counter = 1;

const qnt = 20;

document.addEventListener('DOMContentLoaded',load);

window.onscroll = () => {
    if (window.innerHeight + window.screenY >= document.body.offsetHeight) {
        load();
    }
}

function load() {

    const start = counter;
    const end = start + qnt  - 1;

    counter = end + 1;
    fetch(`posts?start=${start}&end=${end}`)
    .then(req => res.json())
    .then(data => {
        data.posts.forEach(add_post)
    })
}

function add_post(content){
    const post = document.createElement('div');
    post.className = 'post';
    post.innerHTML = content;

    document.querySelector('#posts').append(post)
}
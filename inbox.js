document.addEventListener('DOMContentLoaded', function() {

  // Use buttons to toggle between views
  document.querySelector('#inbox').addEventListener('click', () => load_mailbox('inbox'));
  document.querySelector('#sent').addEventListener('click', () => load_mailbox('sent'));
  document.querySelector('#archived').addEventListener('click', () => load_mailbox('archive'));
  document.querySelector('#compose').addEventListener('click', compose_email);

  // By default, load the inbox
  load_mailbox('inbox');
});

function compose_email() {

  // Show compose view and hide other views
  document.querySelector('#emails-view').style.display = 'none';
  document.querySelector('#compose-view').style.display = 'block';

  // Clear out composition fields
  document.querySelector('#compose-recipients').value = '';
  document.querySelector('#compose-subject').value = '';
  document.querySelector('#compose-body').value = '';
}

function load_mailbox(mailbox) {
  
  // Show the mailbox and hide other views
  document.querySelector('#emails-view').style.display = 'block';
  document.querySelector('#compose-view').style.display = 'none';

  // Show the mailbox name
  document.querySelector('#emails-view').innerHTML = `<h3>${mailbox.charAt(0).toUpperCase() + mailbox.slice(1)}</h3>`;
}

let form = document.getElementById('compose-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

});


// sumry; this is the func that give user to send email,[{its quite done}],
// next func [ `sent email box` ] and render to it 


document.querySelector('#compose').addEventListener('click', function() {
  fetch('/emails', {
    method:'POST',
    body: JSON.stringify({
      recipients: document.querySelector('#compose-recipients').value,
      subject:  document.querySelector('#compose-subject').value,
      body: document.querySelector('#compose-body').value,
    })
  })
  .then(res => res.json())
  .then(result => {
    console.log(result)
  });
}); // be cautius bout this ; } ) 

document.querySelector('#sent').addEventListener('click',()=> {
  fetch('/emails/sent')
  .then(res => res.json())
  .then(result => {
    result.forEach(email => {
      const div = document.createElement('div');
      div.innerHTML = `${email.recipients}, ${email.subject}, ${email.body}`

    });
  });

});
/*
document.querySelectorAll('button').forEach(button => {
    button.onclick = () => {
    document.querySelector("#hello").style.color = button.dataset.color;
  }*/
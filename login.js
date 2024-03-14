// Insert your code here
// for registration
document.querySelector('#register').addEventListener('click', () => {
     const user = {
         name: document.querySelector('#registerName').value,
         email: document.querySelector('#registerEmail').value,
         password: document.querySelector('#registerPassword').value,
     }
    fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    })
        .then(res => res.json())
        .then(data => {
            if(data.result){
                window.location.assign("index.html");
            }
        });
});

//for connection

document.querySelector("#connection").addEventListener("click", function() {
    const info = {
        email: document.querySelector("#connectionEmail").value,
        password: document.querySelector("#connectionPassword").value,
    }
    fetch("http://localhost:3000/users/signin", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(info),
    })
    .then(res => res.json())
    .then(data => {
        if(data.result){
            window.location.assign("index.html");
        }
    });
});

            


//document.addEventListener("DOMContentLoaded", event=>{
    const form = document.querySelector('form');
    const formContainer= document.querySelector('formContainer');
    const nom = document.querySelector('input[name="name"]');
    const surname = document.querySelector('input[name="surname"]');
    const email = document.querySelector('input[name="email"]');
    const password = document.querySelector('input[name="password"]');
    const message = document.querySelector('#message');
    const messageContainer = document.querySelector('#messageContainer');


    form.addEventListener("submit", event=> {
        event.preventDefault();

        const reqObj = {
            name: nom.value,
            surname: surname.value,
            email: email.value,
            password: password.value,
        };

        //fais une requête
        fetch("https://expressmongotypescript.herokuapp.com/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reqObj),
        })
            .then((response) => {
                console.log("fetch res =>", response);
                return response.json();
            })
            .then((data) => {
                console.log("data =>", data);
                message.innerHTML = data.message;
                messageContainer.classList.toggle("hidden");
                if (data.success===true){
                    formContainer.classList.add("hidden")
                }
                setTimeout(() => {
                    messageContainer.classList.toggle("hidden");
                }, 3000);
            })

    })
//})


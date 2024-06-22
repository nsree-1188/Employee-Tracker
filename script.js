let all = [];

function giveUsers() {

    for (let i = 0; i < 10; i++) {
        fetch('https://randomuser.me/api/')
            .then(function(response) {
                return response.json();
            })

        .then(function(data) {
            showUsers(data.results);
        })

        .catch(function(error) {
            console.log("error", error);
        });

        let showUsers = (users) => {
            users.forEach(user => {
                for (k = 0; k < 10; k++) {
                    all[k] = user.login.username;
                }

                let firstName = user.name.first;
                let password = user.login.password;
                let email = user.login.username;
                console.log(email, password);
                localStorage.setItem('allUsers', JSON.stringify(all));
                localStorage.setItem('pass', password)
            });
        };

    }
}

function verify() {
    var user = document.getElementById("Username").value;
    var pass = document.getElementById("Password").value;

    if (localStorage.getItem('allUsers') == user && localStorage.getItem('pass') == pass) {
        window.location.href = "main.html";
    } else {
        document.getElementById("res").innerHTML = "Invalid Credentials";
    }

}
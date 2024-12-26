function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById("userlogin").value;
    const password = document.getElementById("pass").value;

    if (username === "admin" && password === "123") {
        alert("Login sukses");
        window.location.href = "index.html";
    } else {
        alert("Login gagal");
        document.getElementById("userlogin").value = "";
        document.getElementById("pass").value = ""; 
    }
}

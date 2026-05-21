function login(){

let email = document.getElementById("email").value
let password = document.getElementById("password").value

if(email=="" || password==""){
    alert("Username dan Password harus diisi")
    return
} 

let akun = JSON.parse(localStorage.getItem("akun")) || []

let user = akun.find(
    u => u.email === email && u.password === password
)

if(!user){
    alert("Username dan Password Salah")
    return
}

alert("Login Berhasil")
localStorage.setItem("userLogin", JSON.stringify(user))
window.location.href="dashboard.html"

}
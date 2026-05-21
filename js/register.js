function register(){

let username = document.getElementById("username").value.trim()
let email = document.getElementById("email").value.trim()
let password = document.getElementById("password").value.trim()

if(username === "" || email === "" || password === ""){
    alert("Semua data harus diisi")
    return
}

let akun = JSON.parse(localStorage.getItem("akun")) || []

let cek = akun.find(user => user.email === email)

if(cek){
    alert("Email sudah terdaftar")
    return
}

akun.push({
    username: username,
    email: email,
    password: password
})

localStorage.setItem("akun", JSON.stringify(akun))

alert("Pendaftaran Akun Berhasil")
window.location.href = "login.html"
}
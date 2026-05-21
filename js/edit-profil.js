let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){

alert("Silakan login terlebih dahulu")

window.location.href="../index.html"

}

document.getElementById("nama").value = user.nama
document.getElementById("email").value = user.email
document.getElementById("password").value = user.password


function simpan(){

let nama = document.getElementById("nama").value
let email = document.getElementById("email").value
let password = document.getElementById("password").value

let akun = JSON.parse(localStorage.getItem("akun")) || []

let index = akun.findIndex(
u => u.email === user.email
)

akun[index] = {
    nama:nama,
    email:email,
    password:password
}

localStorage.setItem("akun", JSON.stringify(akun))
localStorage.setItem("userLogin", JSON.stringify(akun[index]))

alert("Data berhasil diubah")

window.location.href="dashboard.html"

}
let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){
    alert("Silakan login terlebih dahulu")
    window.location.href="index.html"
}

document.getElementById("welcome").innerHTML =
"Halo! Selamat Datang " + user.nama

document.getElementById("nama").innerHTML = user.nama
document.getElementById("email").innerHTML = user.email
document.getElementById("password").innerHTML = user.password

function daftarKursus(namaKursus, biaya, durasi){

let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){
    alert("Please log in first")
    window.location.href="index.html"
    return
}

let data = JSON.parse(localStorage.getItem("kursus")) || []

let sudahDaftar = data.find(
    item => item.email === user.email && item.namaKursus === namaKursus
)

if(sudahDaftar){
    alert("Anda sudah Terdaftar unutk kursus ini")
    return
}

data.push({
    email: user.email,
    namaKursus: namaKursus,
    biaya: biaya,
    durasi: durasi
})

localStorage.setItem("kursus", JSON.stringify(data))

alert("Berhasil mendaftar kursus")

window.location.href="riwayat.html"

}
function daftarKursus(namaKursus, biaya, durasi){

let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){
    alert("Silakan login terlebih dahulu")
    window.location.href="../index.html"
    return
}

let data = JSON.parse(localStorage.getItem("kursus")) || []

let sudahDaftar = data.find(
    item => item.email === user.email && item.namaKursus === namaKursus
)

if(sudahDaftar){
    alert("Anda sudah terdaftar untuk kursus ini")
    return
}

data.push({
    email: user.email,
    namaKursus: namaKursus,
    biaya: biaya,
    durasi: durasi
})

localStorage.setItem("kursus", JSON.stringify(data))

alert("Berhasil Mendaftar Kursus")

window.location.href="riwayat.html"

}
init()

function init(){

let user = JSON.parse(localStorage.getItem("userLogin"))

if(!user){
    alert("Please log in first")
    window.location.href="index.html"
    return
}

let data = JSON.parse(localStorage.getItem("kursus")) || []
let tbody = document.getElementById("list")

let no = 1

data.forEach(function(item, index){

    if(item.email === user.email){

        let tr = document.createElement("tr")

        tr.innerHTML =
        "<td>"+no+"</td>"+
        "<td>"+item.namaKursus+"</td>"+
        "<td>"+item.biaya+"</td>"+
        "<td>"+item.durasi+"</td>"+
        "<td><button onclick='hapusKursus("+index+")'>Delete</button></td>"

        tbody.appendChild(tr)

        no++

    }

})

if(no === 1){
    tbody.innerHTML = "<tr><td colspan='5'>There are no courses yet</td></tr>"
}

}

function hapusKursus(index){

let konfirmasi = confirm("Apa kamu yakin ingin menghapus kursus ini?")

if(!konfirmasi){
return
}

let data = JSON.parse(localStorage.getItem("kursus")) || []

data.splice(index,1)

localStorage.setItem("kursus", JSON.stringify(data))

alert("kursus telah di hapus")

location.reload()

}
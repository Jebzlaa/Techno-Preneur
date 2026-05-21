function logout(){
    localStorage.removeItem("userLogin")
    alert("You have successfully logged out")
    window.location.href="../index.html"
}
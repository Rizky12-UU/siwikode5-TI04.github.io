function login(){
    let uname = document.getElementById("username");
    let pass = document.getElementById("password");

    console.log("Username : " + uname.value);
    console.log("Password : " + pass.value);
    if(uname.value=="siwikode" && pass.value=="siwikode12"){
        alert("Selamat Datang Di Program Kami !!");
        window.location = "kelola-wisata.html";
    }else{
        alert("Username atau Password Salah !!");
    }
}

function daftar(){
    let fi = document.getElementById("First");
    let se = document.getElementById("Second");

    console.log("Username : " + fi.value);
    console.log("Password : " + se.value);
    if(fi.value=="" && se.value==""){
        alert("Selamat Datang Di Program Kami !!");
        window.location = "kelola-wisata.html";
    }else{
        alert("Username atau Password Salah !!");
    }
}
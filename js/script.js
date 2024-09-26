document.getElementById("messageForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

  
    const nama = document.getElementById("nama").value;
    const tglLahir = document.getElementById("tglLahir").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById("pesan").value;

    const currentTime = new Date().toLocaleString();
    document.getElementById("currentTime").textContent = currentTime;

    document.getElementById("displayNama").textContent = nama;
    document.getElementById("displayTglLahir").textContent = tglLahir;
    document.getElementById("displayGender").textContent = gender;
    document.getElementById("displayPesan").textContent = pesan;

    document.getElementById("messageForm").reset();
});

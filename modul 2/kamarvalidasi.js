function validatetambahdata(event) {
    event.preventDefault();
    
    const idKamar = document.getElementById("ID_kamar").value.trim();
    const gambar = document.getElementById("gbr").value.trim();
    const tipeKamar = document.querySelector('select[name="std"]').value;
    const harga = document.getElementById("harga").value.trim();
    const fasilitasYa = document.querySelector('input[id="Y"]:checked');
    const fasilitasTidak = document.querySelector('input[id="T"]:checked');

    let isValid = true;
    let errorMessage = "";

    if (idKamar === "" || isNaN(idKamar) || parseInt(idKamar) <= 0) {
        errorMessage += "ID Kamar harus diisi dengan angka positif.\n";
        isValid = false;
    }

    if (gambar === "") {
        errorMessage += "Gambar ruangan wajib diunggah.\n";
        isValid = false;
    }

    if (tipeKamar === "-") {
        errorMessage += "Jenis kamar harus dipilih.\n";
        isValid = false;
    }

    if (harga === "" || isNaN(harga) || parseInt(harga) <= 0) {
        errorMessage += "Harga harus diisi dengan angka positif.\n";
        isValid = false;
    }

    if (!fasilitasYa && !fasilitasTidak) {
        errorMessage += "Pilih salah satu fasilitas (Ya/Tidak).\n";
        isValid = false;
    }

    if (!isValid) {
        alert("Form tidak valid:\n" + errorMessage);
    } else {
        alert("Data kamar berhasil disimpan.");
    }
}

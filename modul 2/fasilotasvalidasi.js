function validateTambahFasilitas(event) {
    event.preventDefault();
    
    const idKamar = document.getElementById("ID_kamar").value.trim();
    const nama = document.getElementById("namaa").value.trim();
    const fasilitasYa = document.querySelector('input[id="Y"]:checked');
    const fasilitasTidak = document.querySelector('input[id="T"]:checked');
    const hargaWeekend = document.getElementById("weekend").value.trim();
    const hargaWeekday = document.getElementById("weekday").value.trim();
    const kuota = document.getElementById("Kuota").value.trim();
    const jamBuka = document.getElementById("buka").value.trim();
    const jamTutup = document.getElementById("tutup").value.trim();

    let isValid = true;
    let errorMessage = "";

    if (idKamar === "" || isNaN(idKamar) || parseInt(idKamar) <= 0) {
        errorMessage += "ID harus berupa angka positif.\n";
        isValid = false;
    }

    if (nama === "") {
        errorMessage += "Nama fasilitas wajib diisi.\n";
        isValid = false;
    }

    if (!fasilitasYa && !fasilitasTidak) {
        errorMessage += "Pilih salah satu fasilitas (Ya/Tidak).\n";
        isValid = false;
    }

    if (hargaWeekend === "" || isNaN(hargaWeekend) || parseInt(hargaWeekend) <= 0) {
        errorMessage += "Harga weekend harus berupa angka positif.\n";
        isValid = false;
    }

    if (hargaWeekday === "" || isNaN(hargaWeekday) || parseInt(hargaWeekday) <= 0) {
        errorMessage += "Harga weekday harus berupa angka positif.\n";
        isValid = false;
    }

    if (kuota === "" || isNaN(kuota) || parseInt(kuota) <= 0) {
        errorMessage += "Kuota harus berupa angka positif.\n";
        isValid = false;
    }

    if (jamBuka === "") {
        errorMessage += "Jam buka wajib diisi.\n";
        isValid = false;
    }
    if (jamTutup === "") {
        errorMessage += "Jam tutup wajib diisi.\n";
        isValid = false;
    }

    if (!isValid) {
        alert("Form tidak valid:\n" + errorMessage);
    } else {
        alert("Data fasilitas berhasil disimpan.");

    }
}

document.querySelector(".simpan").addEventListener("click", function() {
    const namaPemesan = document.getElementById("nama_pemesan").value;
    const nomorIdentitas = document.getElementById("no_identitas").value;
    const tipeKamar = document.querySelector("select[name='std']").value;
    const durasiMenginap = parseInt(document.getElementById("durasi").value, 10);
    const hargaKamar = parseInt(document.getElementById("harga").value, 10);
    const includeBreakfast = document.getElementById("brkfst").checked;
    let totalBayar = durasiMenginap * hargaKamar;

    if (durasiMenginap > 3) {
        totalBayar *= 0.9;
    }

    if (includeBreakfast) {
        totalBayar += 80000;
    }

    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });
    const totalBayarFormatted = formatter.format(totalBayar);

    alert(`Resume Pemesanan:
Nama Pemesan: ${namaPemesan}
Nomor Identitas: ${nomorIdentitas}
Tipe Kamar: ${tipeKamar.toUpperCase()}
Durasi Menginap: ${durasiMenginap} Hari
Termasuk Breakfast: ${includeBreakfast ? 'Ya' : 'Tidak'}
Total Bayar: ${totalBayarFormatted}`);
});

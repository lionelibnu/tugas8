// Fungsi untuk menampilkan nama barang dan harga berdasarkan kode yang dipilih
function tampil() {
    const form = document.forms['form2'];
    const kode = form['kode'].value;
    const jumlahBeli = parseInt(form['beli'].value) || 0;

    // Data barang
    const dataBarang = {
        B001: { nama: "Barang A", harga: 5000 },
        B002: { nama: "Barang B", harga: 7000 },
        B003: { nama: "Barang C", harga: 9000 },
    };

    // Update nama barang dan harga
    if (dataBarang[kode]) {
        form['barang'].value = dataBarang[kode].nama;
        form['harga'].value = dataBarang[kode].harga;
    } else {
        form['barang'].value = '';
        form['harga'].value = '';
    }

    hitungTotal(jumlahBeli);
}

// Fungsi untuk menghitung jumlah bayar, potongan, dan total bayar
function hitungTotal(jumlahBeli) {
    const form = document.forms['form2'];
    const harga = parseInt(form['harga'].value) || 0;

    // Hitung jumlah bayar
    const jumlahBayar = harga * jumlahBeli;
    form['jmlh'].value = jumlahBayar;

    // Hitung potongan
    let potonganPersen = 0;
    if (jumlahBeli >= 1 && jumlahBeli <= 10) {
        potonganPersen = 5;
    } else if (jumlahBeli >= 11 && jumlahBeli <= 20) {
        potonganPersen = 10;
    } else if (jumlahBeli > 20) {
        potonganPersen = 15;
    }

    const potongan = (jumlahBayar * potonganPersen) / 100;
    form['pot'].value = potongan;

    // Hitung total bayar
    const totalBayar = jumlahBayar - potongan;
    form['total'].value = totalBayar;
}

// Fungsi untuk menampilkan nota di halaman web
function tampilkanNota() {
    const form = document.forms['form2'];

    const kode = form['kode'].value;
    const namaBarang = form['barang'].value;
    const harga = form['harga'].value;
    const jumlahBeli = form['beli'].value;
    const jumlahBayar = form['jmlh'].value;
    const potongan = form['pot'].value;
    const totalBayar = form['total'].value;

    if (!kode || !namaBarang || !harga || !jumlahBeli) {
        alert("Harap lengkapi semua data terlebih dahulu!");
        return;
    }

    const notaContainer = document.getElementById('nota-container');

    // Buat isi nota
    notaContainer.innerHTML = `
        <h3>NOTA PENJUALAN</h3>
        <p><strong>Kode Barang:</strong> ${kode}</p>
        <p><strong>Nama Barang:</strong> ${namaBarang}</p>
        <p><strong>Harga Satuan:</strong> Rp${harga}</p>
        <p><strong>Jumlah Beli:</strong> ${jumlahBeli}</p>
        <p><strong>Jumlah Bayar:</strong> Rp${jumlahBayar}</p>
        <p><strong>Potongan:</strong> Rp${potongan}</p>
        <p><strong>Total Bayar:</strong> Rp${totalBayar}</p>
    `;
}

// Event listener untuk kode barang
document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms['form2'];

    form['kode'].addEventListener('change', tampil);
    form['beli'].addEventListener('input', () => {
        const jumlahBeli = parseInt(form['beli'].value) || 0;
        hitungTotal(jumlahBeli);
    });

    document.getElementById('btnTampilkan').addEventListener('click', tampilkanNota);
});

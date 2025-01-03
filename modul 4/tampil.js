function tampil(){
    const form = document.forms['form2'];
    const kode = form['kode'].value;
    const jumlahBeli = parseInt(form['beli'].value) || 0;

    const databrng = {
        B001 : { nama : "Buku", harga : 5000},
        B002 : { nama : "Penggaris", harga : 1500},
        B003 : { nama : "Pulpen", harga : 2000},
    };

    if(databrng[kode]){
        form['barang'].value = databrng[kode].nama;
        form['harga'].value = databrng[kode].harga;
    } else{
        form['barang'].value = '';
        form['harga'].value = '';
    }
    
    hittotal(jumlahBeli);
}

function hittotal(jumlahBeli){
    const form = document.forms['form2'];
    const harga = parseInt(form['harga'].value) || 0;

    const jumlahBayar = harga * jumlahBeli;
    form['jmlh'].value = jumlahBayar;

    let potpersen = 0;
    if (jumlahBeli >= 1 && jumlahBeli <= 10){
        potpersen = 5;
    } else if (jumlahBeli >= 11 && jumlahBeli <= 20) {
        potpersen = 10;
    } else if (jumlahBeli > 21 ){
        potpersen = 15;
    }

    const potongan = (jumlahBayar * potpersen) / 100;
    form['pot'].value = potongan;

    const totalbayar = jumlahBayar - potongan;
    form['total'].value = totalbayar;
}

function tampilkannota(){
    const form = document.forms['form2'];

    const kode = form['kode'].value;
    const jumlahBeli = form['beli'].value;
    const namaBarang = form['barang'].value;
    const harga = form['harga'].value;
    const jumlahBayar = form['jmlh'].value;
    const potongan = form['pot'].value;
    const totalbayar = form['total'].value;

    if (!kode || !namaBarang || !harga || !jumlahBeli) {
        alert("Harap lengkapi semua data terlebih dahulu!");
        return;
    }

    const notacontainer = document.getElementById('nota-container');

    notacontainer.innerHTML = `
        <h3>NOTA PENJUALAN</h3>
        <p><strong>Kode Barang:</strong> ${kode}</p>
        <p><strong>Nama Barang:</strong> ${namaBarang}</p>
        <p><strong>Harga Satuan:</strong> Rp${harga}</p>
        <p><strong>Jumlah Beli:</strong> ${jumlahBeli}</p>
        <p><strong>Jumlah Bayar:</strong> Rp${jumlahBayar}</p>
        <p><strong>Potongan:</strong> Rp${potongan}</p>
        <p><strong>Total Bayar:</strong> Rp${totalbayar}</p>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.forms['form2'];

    form['kode'].addEventListener('change', tampil);
    form['beli'].addEventListener('input', () => {
        const jumlahBeli = parseInt(form['beli'].value) || 0;
        hittotal(jumlahBeli);
    });
    document.getElementById('btnTampilkan').addEventListener('click', tampilkannota);
});
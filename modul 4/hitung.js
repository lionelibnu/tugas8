function hit() {
    var golongan = document.form1.gol.value;
    var anak = parseInt(document.form1.anak.value);

    var gapok = 0;
    var tunjangan = 0;
    var gajibersih = 0;

    if (isNaN(anak) || anak < 0) {
        alert("Jumlah anak harus berupa angka yang valid");
        return;
    }

    if(golongan == "I"){
        gapok = 250000;    
        tunjangan = (anak * gapok) * 0.5
    }
    else if(golongan == "II"){
        gapok = 300000;
        tunjangan = (anak * gapok) * 0.10
    }
    else if(golongan == "III"){
        gapok = 350000;
        tunjangan = (anak * gapok) * 0.15
    }
    else{
        alert("pilihan tidak valid!");
        return;
    }

    gajibersih = gapok + tunjangan;

    document.form1.gapok.value = gapok;
    document.form1.tunjangan.value = tunjangan;
    document.form1.gaji.value = gajibersih;
}
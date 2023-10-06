var nilaiMahasiswa = [];
let contNilai = document.getElementById('contNilai');

contNilai.style.display = "none";

function isAlpha(input) {
    return /^[A-Za-z\s]+$/.test(input);
}

function hitungNilai() {
    var inputNama = document.getElementById("nama").value;
    var inputNilai = parseInt(document.getElementById("nilai").value);

    if (inputNama.trim() === "" || isNaN(inputNilai) || inputNilai < 0 || inputNilai > 100) {
        alert("Nama dan Nilai harus diisi serta nilai harus berada antara 0 dan 100");
        return;
    }

    if (!isAlpha(inputNama)) {
        alert("Nama harus diisi dengan huruf dan nilai harus berada antara 0 dan 100");
        return;
    }

    if (nilaiMahasiswa.length >= 10) {
        alert("Anda sudah memasukkan 10 mahasiswa");
        return;
    }

    var hasil = "";

    if (inputNilai >= 0 && inputNilai <= 50) {
        hasil = "E";
    } else if (inputNilai <= 60) {
        hasil = "D";
    } else if (inputNilai <= 70) {
        hasil = "C";
    } else if (inputNilai <= 80) {
        hasil = "B";
    } else {
        hasil = "A";
    }

    nilaiMahasiswa.push({ nama: inputNama, nilai: inputNilai });

    var daftarNilai = document.getElementById("daftarNilai");
    var listItem = document.createElement("li");
    listItem.textContent = inputNama + ": " + inputNilai + " (" + hasil + ")";
    daftarNilai.appendChild(listItem);

    document.getElementById("nama").value = "";
    document.getElementById("nilai").value = "";
    document.getElementById("nilaiTertinggi").innerHTML = "Nilai Tertinggi: " + Math.max(...nilaiMahasiswa.map(mahasiswa => mahasiswa.nilai));
    document.getElementById("nilaiTerendah").innerHTML = "Nilai Terendah: " + Math.min(...nilaiMahasiswa.map(mahasiswa => mahasiswa.nilai));

    contNilai.style.display = "block";
}

function hapusNilai() {
    location.reload();
}
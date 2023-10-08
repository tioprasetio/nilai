// disable inspect
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.onkeydown = function (e) {
    if (event.keyCode == 1805) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "U".charCodeAt(0)) {
        return false;
    }
}
// END

//array jmlMahasiswa
var jmlMahasiswa = [];

//mengambil elemen dengan ID contNilai
let contNilai = document.getElementById('contNilai');

//container nilai display awal none
contNilai.style.display = "none";

//tombol hapus display awal none
// buttonHapus.style.display = "none";

//func untuk hanya huruf yang boleh diinput
function isAlpha(input) {
    return /^[A-Za-z\s]+$/.test(input);
}

//function untuk button tambah
function hitungNilai() {

    //mengambil nilai dari elemen dengan ID nama dan nilai
    var inputNama = document.getElementById("nama").value;
    var inputNilai = parseInt(document.getElementById("nilai").value);

    //jika input nama kosong, input nilai kosong, dan input nilai kurang dari 0 / lebih dari 100
    if (inputNama.trim() === "" || isNaN(inputNilai) || inputNilai < 0 || inputNilai > 100) {
        alert("Nama dan Nilai harus diisi serta nilai harus berada antara 0 dan 100");
        return;
    }

    //jika input nama bukan huruf dan spasi, maka eksekusi alert
    if (!isAlpha(inputNama)) {
        alert("Nama harus diisi dengan huruf");
        return;
    }

    //batas maksimal 10 mahasiswa
    if (jmlMahasiswa.length >= 10) {
        alert("Anda sudah memasukkan 10 mahasiswa");
        return;
    }

    //untuk menghitung nilai berdasarkan ketentuan
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

    //menambahkan elemen baru ke dalam array
    jmlMahasiswa.push({ nama: inputNama, nilai: inputNilai });

    //mengambil elemen dengan ID daftar nilai
    var daftarNilai = document.getElementById("daftarNilai");

    //menambahkan elemen <li> ke dalam daftarNilai
    var listItem = document.createElement("li");
    listItem.textContent = inputNama + ": " + inputNilai + " (" + hasil + ")";
    daftarNilai.appendChild(listItem);

    //setelah pengguna mengklik tombol tambah, value dari form nama dan nilai akan dikosongkan
    document.getElementById("nama").value = "";
    document.getElementById("nilai").value = "";

    //untuk mencari dan menampilkan nilai tertinggi dari daftar mahasiswa yang disimpan dalam array jmlMahasiswa
    document.getElementById("nilaiTertinggi").innerHTML = "Nilai Tertinggi: " + Math.max(...jmlMahasiswa.map(mahasiswa => mahasiswa.nilai));

    //untuk mencari dan menampilkan nilai terendah dari daftar mahasiswa yang disimpan dalam array 
    document.getElementById("nilaiTerendah").innerHTML = "Nilai Terendah: " + Math.min(...jmlMahasiswa.map(mahasiswa => mahasiswa.nilai));

    //untuk menampilkan elemen container nilai setelah pengguna menekan tombol tambah yang sebelumnya display none
    contNilai.style.display = "block";

    //untuk menampilkan elemen tombol hapus setelah pengguna menekan tombol tambah yang sebelumnya display none
    buttonHapus.style.display = "block";
}

//func untuk menghapus
function hapusNilai() {
    location.reload();
}
// MENGAMBIL ELEMEN HTML
const form = document.querySelector(".custom-form");
const password = document.getElementById("password");
const warning = document.getElementById("passwordWarning");
const noHp = document.getElementById("no_hp");
const showPassword = document.getElementById("showPassword");

// 1. VALIDASI PASSWORD SECARA LANGSUNG
password.addEventListener("input", function () {

    const panjang = password.value.length;

    if (panjang === 0) {
        warning.textContent = "";
        warning.style.color = "";
        password.style.borderColor = "";
    }

    else if (panjang < 8) {
        warning.textContent =
            `⚠️ Password kurang panjang (${panjang}/8 karakter)`;

        warning.style.color = "red";
        password.style.borderColor = "red";
    }

    else {
        warning.textContent =
            "✅ Password sudah aman";

        warning.style.color = "green";
        password.style.borderColor = "green";
    }
});

// 2. TAMPILKAN PASSWORD
showPassword.addEventListener("change", function () {

    if (showPassword.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
});

// 3. NO HP HANYA ANGKA
noHp.addEventListener("input", function () {

    this.value = this.value.replace(/[^0-9]/g, "");

    if (this.value.length > 13) {
        this.value = this.value.slice(0, 13);
    }
});

// 4. VALIDASI DAN KONFIRMASI KIRIM
form.addEventListener("submit", function (event) {

    if (password.value.length < 8) {

        event.preventDefault();

        alert("⚠️ Password harus minimal 8 karakter!");

        password.focus();
        return;
    }

    const nama = document.getElementById("nama").value;
    const jurusan = document.getElementById("jurusan");
    const pilihanJurusan =
        jurusan.options[jurusan.selectedIndex].text;

    const yakin = confirm(
        "💕 KONFIRMASI BIODATA SISWA 💕\n\n" +
        "Nama: " + nama + "\n" +
        "Jurusan: " + pilihanJurusan +
        "\n\nApakah data sudah benar?"
    );

    if (!yakin) {
        event.preventDefault();
    }
});

// 5. KONFIRMASI RESET
form.addEventListener("reset", function (event) {

    const yakin = confirm(
        "Apakah kamu yakin ingin menghapus semua isian?"
    );

    if (!yakin) {
        event.preventDefault();
        return;
    }

    // Menghapus peringatan password
    warning.textContent = "";
    warning.style.color = "";
    password.style.borderColor = "";
});
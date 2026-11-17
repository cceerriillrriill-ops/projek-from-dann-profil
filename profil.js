/* TAHUN OTOMATIS */
document.getElementById("year").textContent =
    new Date().getFullYear();

/* EFEK SAPAAN SAAT FOTO DIKLIK */
const foto = document.querySelector(".photo");

foto.addEventListener("click", function () {
    foto.classList.toggle("active");

    if (foto.classList.contains("active")) {
        alert("Hai! Makasih sudah mampir ke portofolioku ♡");
    }
});
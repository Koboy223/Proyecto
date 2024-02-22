document.addEventListener("DOMContentLoaded", function() {
    const imagesAndTexts = [
        { image: "gif/6.gif", text: "Cargando....", duration: 10000 }, // Duración de 2 segundos
        { image: "gif/1.gif", text: "Espera...", duration: 1000 }, // Duración de 2 segundos
    ];

    let currentIndex = 0;
    let intervalId; // Variable para almacenar el ID del intervalo

    function updateSplashScreen() {
        document.getElementById("splash-image").src = imagesAndTexts[currentIndex].image;
        document.getElementById("splash-text").textContent = imagesAndTexts[currentIndex].text;
        if (currentIndex === imagesAndTexts.length - 1) {
            clearInterval(intervalId); // Detener el intervalo una vez que se haya mostrado todo
            showContent(); // Mostrar el contenido de la página
        }
        currentIndex++;
    }

    function showContent() {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("content-container").classList.remove("hidden");
    }

    updateSplashScreen(); // Mostrar el primer texto
    intervalId = setInterval(updateSplashScreen, imagesAndTexts[currentIndex].duration); // Iniciar el intervalo con la duración de 2 segundos
});

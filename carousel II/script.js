function activarMiCarrusel(idCarrusel) {
    const carrusel = document.getElementById(idCarrusel);
    const slides = carrusel.querySelectorAll('.slide');
    const intervaloInput = document.getElementById('intervaloTiempo');

    let index = 0;
    let intervaloTiempo = parseInt(intervaloInput.value, 10) || 3000;
    let intervalo;

    function mostrarSlide(i) {
        slides.forEach((slide, j) => {
            slide.style.display = i === j ? 'block' : 'none';
        });
    }

    function cambiarSlide() {
        index = (index + 1) % slides.length;
        mostrarSlide(index);
    }

    function actualizarIntervalo() {
        clearInterval(intervalo);
        intervaloTiempo = parseInt(intervaloInput.value, 10) || 3000;
        intervalo = setInterval(cambiarSlide, intervaloTiempo);
    }

    intervaloInput.addEventListener('change', actualizarIntervalo);

    mostrarSlide(index);
    intervalo = setInterval(cambiarSlide, intervaloTiempo);
}


activarMiCarrusel('miCarrusel');

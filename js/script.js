// Obtener elementos
const nube = document.getElementById('nube');
const lluvia = document.getElementById('lluvia');
const flor = document.getElementById('flor');
const mensaje = document.getElementById('mensaje');

// Animación de la nube
nube.style.animation = 'nubeMovimiento 10s linear infinite';

// Función para generar lluvia y flor cuando la nube está en el centro
nube.addEventListener('animationiteration', () => {
    if (parseInt(nube.style.left) < window.innerWidth / 2) {
        lluvia.style.display = 'block';
        flor.style.display = 'block';
        mensaje.innerText = '¡Qué hermoso y caluroso día!';
    } else {
        lluvia.style.display = 'none';
        flor.style.display = 'none';
        mensaje.innerText = '';
    }
});

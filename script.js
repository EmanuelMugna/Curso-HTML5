// Configuración del canvas
const canvas = document.getElementById('juego');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

// Parámetros de la pelota
const pelota = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radio: 10,
    dx: 4,
    dy: -4
};

// Parámetros de la barra
const barra = {
    alto: 10,
    ancho: 100,
    x: (canvas.width - 100) / 2,
    movimientoDerecha: false,
    movimientoIzquierda: false
};

// Función para dibujar la pelota
function dibujarPelota() {
    ctx.beginPath();
    ctx.arc(pelota.x, pelota.y, pelota.radio, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
}

// Función para dibujar la barra
function dibujarBarra() {
    ctx.beginPath();
    ctx.rect(barra.x, canvas.height - barra.alto - 10, barra.ancho, barra.alto);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
}

// Movimiento de la barra
function moverBarra() {
    if (barra.movimientoDerecha && barra.x < canvas.width - barra.ancho) {
        barra.x += 7;
    } else if (barra.movimientoIzquierda && barra.x > 0) {
        barra.x -= 7;
    }
}

// Detección de colisiones
function detectarColisiones() {
    // Colisión con las paredes
    if (pelota.x + pelota.dx > canvas.width - pelota.radio || pelota.x + pelota.dx < pelota.radio) {
        pelota.dx = -pelota.dx;
    }
    if (pelota.y + pelota.dy < pelota.radio) {
        pelota.dy = -pelota.dy;
    }

    // Colisión con la barra
    if (
        pelota.y + pelota.dy > canvas.height - pelota.radio - barra.alto - 10 &&
        pelota.x > barra.x &&
        pelota.x < barra.x + barra.ancho
    ) {
        pelota.dy = -pelota.dy;
    }

    // Si la pelota toca el fondo, se pierde
    if (pelota.y + pelota.dy > canvas.height - pelota.radio) {
        alert('¡Perdiste!');
        document.location.reload();
    }
}

// Actualizar el juego
function actualizar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarPelota();
    dibujarBarra();
    moverBarra();
    detectarColisiones();

    pelota.x += pelota.dx;
    pelota.y += pelota.dy;

    requestAnimationFrame(actualizar);
}

// Eventos de teclado
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        barra.movimientoDerecha = true;
    } else if (e.key === 'ArrowLeft') {
        barra.movimientoIzquierda = true;
    }
});

document.addEventListener('keyup', function (e) {
    if (e.key === 'ArrowRight') {
        barra.movimientoDerecha = false;
    } else if (e.key === 'ArrowLeft') {
        barra.movimientoIzquierda = false;
    }
});

// Iniciar el juego
actualizar();
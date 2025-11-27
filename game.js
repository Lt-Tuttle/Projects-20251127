const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game state variables
let width, height;

const player = {
    x: 50,
    y: 50,
    size: 30,
    dx: 2,
    dy: 2,
    color: '#00d2ff'
};

// Handle window resizing
function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

// Update game objects
function update() {
    player.x += player.dx;
    player.y += player.dy;

    // Bounce off walls
    if (player.x + player.size > width || player.x < 0) {
        player.dx *= -1;
    }
    if (player.y + player.size > height || player.y < 0) {
        player.dy *= -1;
    }
}

// Render game objects
function draw() {
    // Clear screen
    ctx.fillStyle = '#222';
    ctx.fillRect(0, 0, width, height);

    // Draw player
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);
}

// Main Game Loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

// Event Listeners
window.addEventListener('resize', resize);

// Initialization
resize();
gameLoop();


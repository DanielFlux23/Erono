function drawGameOver() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height); // fundo
  
  ctx.fillStyle = "red";
  ctx.font = "80px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 40);
  
  ctx.fillStyle = "white";
  ctx.font = "30px sans-serif";
  ctx.fillText("Clique para tentar novamente", canvas.width / 2, canvas.height / 2 + 40);
}

canvas.addEventListener("click", () => {
  location.reload(); // Simples: recarrega a página
});

// Simula fim de jogo
setTimeout(drawGameOver, 1000); // Mostra depois de 1s
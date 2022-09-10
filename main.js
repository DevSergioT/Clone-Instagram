let imagen = document.getElementById('img2')
function trocarImg() {
  if (imagen.style.opacity == 0) {
    imagen.style.opacity = 1
  } else {
    imagen.style.opacity = 0
  }
}
setInterval(() => {
  trocarImg()
}, 4000);
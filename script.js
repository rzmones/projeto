function toggleMode() {
  console.log("entrou")
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("div img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar2.png')
  } else {
    // se tiver sem light mode, manter o normal
    img.setAttribute('src', './assets/avatar.png')
  }
}

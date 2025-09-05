function mostrarCuriosidade() {
  const curiosidades = [
    "O caldo de cana é chamado de 'garapa' em várias regiões do Brasil.",
    "Muitas pessoas adoram tomar caldo de cana acompanhado de pastel nas feiras.",
    "A cana-de-açúcar chegou ao Brasil com os portugueses no século XVI.",
    "Além do Brasil, a bebida é popular em países da Ásia e da África.",
    "O caldo de cana é extraído na hora, garantindo frescor e sabor único."
  ];

  const indice = Math.floor(Math.random() * curiosidades.length);
  document.getElementById("curiosidade-texto").textContent = curiosidades[indice];
}

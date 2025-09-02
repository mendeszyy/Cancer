function obterLocalizacao() {
  const container = document.getElementById("hospitais-container");

  if (navigator.geolocation) {
    container.innerHTML = "<p>Buscando localização...</p>";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const mapsLink = `https://www.google.com/maps/search/hospitais+tratamento+cancer/@${latitude},${longitude},14z`;

        container.innerHTML = `
          <p>Hospitais próximos:</p>
          <a href="${mapsLink}" target="_blank">Ver no Google Maps</a>
        `;
      },
      () => {
        container.innerHTML = "<p>Não foi possível acessar sua localização.</p>";
      }
    );
  } else {
    container.innerHTML = "<p>Seu navegador não suporta geolocalização.</p>";
  }
}

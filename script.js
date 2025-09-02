function obterLocalizacao() {
  const container = document.getElementById("hospitais-container");
  if (navigator.geolocation) {
    container.textContent = "Buscando localização...";
    navigator.geolocation.getCurrentPosition(
      pos => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const mapsLink = `https://www.google.com/maps/search/hospitais+oncologia+próximos/@${lat},${lng},13z`;
        container.innerHTML = `<p>Hospitais próximos encontrados:</p><a href="${mapsLink}" target="_blank">Abrir no Google Maps</a>`;
      },
      () => {
        container.textContent = "Não foi possível obter sua localização.";
      }
    );
  } else {
    container.textContent = "Geolocalização não suportada no seu navegador.";
  }
}

async function loadRSS() {
    const rssFeed = "https://www.sciencedaily.com/rss/all.xml"; // Feed de noticias científicas
    const proxyUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent(rssFeed);

    try {
        let response = await fetch(proxyUrl);
        let data = await response.json();
        let parser = new DOMParser();
        let xml = parser.parseFromString(data.contents, "application/xml");
        let items = xml.querySelectorAll("item");
        let output = "<h3>📰 Últimas Noticias Científicas</h3><ul>";

        items.forEach((el, index) => {
            if (index < 5) { // Mostrar solo 5 titulares
                let title = el.querySelector("title").textContent;
                let link = el.querySelector("link").textContent;
                output += `<li><a href="${link}" target="_blank">${title}</a></li>`;
            }
        });

        output += "</ul>";
        document.getElementById("news-feed").innerHTML = output;
    } catch (error) {
        console.error("Error cargando el feed RSS:", error);
    }
}

window.onload = loadRSS;

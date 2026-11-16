const WHATSAPP_NUMERO = "525575198425";

function linkWhatsApp(mensaje) {
    return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}

// ---------- Íconos de productos ----------
const ICONOS = {
    bocina: '<path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm5 2.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm0 6a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z"/>',
    camara: '<path d="M4 5h11a2 2 0 0 1 2 2v1.5l4-2.5v12l-4-2.5V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm5.5 3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>',
    proyecto: '<path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>',
    cable: '<path d="M16 7V3h-2v4h-4V3H8v4a2 2 0 0 0-2 2v4.5L9.5 17v4h5v-4l3.5-3.5V9a2 2 0 0 0-2-2z"/>',
    tv: '<path d="M21 3H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 14H3V5h18v12z"/>',
    audifonos: '<path d="M12 3a9 9 0 0 0-9 9v7a2 2 0 0 0 2 2h3v-8H5v-1a7 7 0 0 1 14 0v1h-3v8h3a2 2 0 0 0 2-2v-7a9 9 0 0 0-9-9z"/>'
};

function crearEl(tag, clase, texto) {
    const el = document.createElement(tag);
    if (clase) el.className = clase;
    if (texto) el.textContent = texto;
    return el;
}

// ---------- Promo del mes ----------
function pintarPromo() {
    const cont = document.getElementById("promo");
    if (typeof PROMO === "undefined" || !PROMO.activa) return;

    cont.append(
        crearEl("span", "promo-tag", PROMO.etiqueta),
        crearEl("h2", "promo-title", PROMO.titulo),
        crearEl("p", "promo-desc", PROMO.descripcion)
    );
    const btn = crearEl("a", "promo-btn", PROMO.boton);
    btn.href = linkWhatsApp(PROMO.mensajeWhatsApp);
    btn.target = "_blank";
    btn.rel = "noopener";
    cont.append(btn);
    if (PROMO.vigencia) cont.append(crearEl("p", "promo-valid", PROMO.vigencia));
    cont.hidden = false;
}

// ---------- Lo que más vendo ----------
function pintarProductos() {
    const lista = document.getElementById("product-list");
    if (typeof PRODUCTOS === "undefined" || !PRODUCTOS.length) {
        lista.closest("section").hidden = true;
        return;
    }

    PRODUCTOS.forEach((p) => {
        const card = crearEl("article", "product");

        const media = crearEl("div", "product-media");
        if (p.imagen) {
            media.classList.add("has-img");
            const img = document.createElement("img");
            img.src = p.imagen;
            img.alt = p.nombre;
            img.loading = "lazy";
            media.append(img);
        } else {
            media.innerHTML = `<svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true" fill="currentColor">${ICONOS[p.icono] || ICONOS.bocina}</svg>`;
        }

        const modelo = p.modelo ? ` (modelo ${p.modelo})` : "";
        const btn = crearEl("a", "product-btn", "Cotizar esto");
        btn.href = linkWhatsApp(`Hola Angelica, me interesa cotizar: ${p.nombre}${modelo}.`);
        btn.target = "_blank";
        btn.rel = "noopener";
        btn.setAttribute("aria-label", `Cotizar ${p.nombre} por WhatsApp`);

        card.append(media, crearEl("h3", "product-name", p.nombre));
        if (p.modelo) card.append(crearEl("p", "product-sku", `Modelo ${p.modelo}`));
        card.append(crearEl("p", "product-desc", p.descripcion), btn);

        lista.append(card);
    });
}

pintarPromo();
pintarProductos();

// ---------- Compartir la tarjeta ----------
const shareData = {
    title: "Angelica Fragoso | Asesora Steren Tláhuac",
    text: "Te comparto la tarjeta de Angelica, asesora en Steren Tláhuac (audio, video y proyectos):",
    url: window.location.origin + window.location.pathname
};

const shareBtn = document.getElementById("btn-share");
const shareMsg = document.getElementById("share-msg");

function showMessage(text) {
    shareMsg.textContent = text;
    setTimeout(() => { shareMsg.textContent = ""; }, 3000);
}

async function copyLink() {
    try {
        await navigator.clipboard.writeText(shareData.url);
        showMessage("¡Enlace copiado! Pégalo donde quieras.");
    } catch {
        // Último recurso si el navegador no permite copiar
        window.prompt("Copia este enlace:", shareData.url);
    }
}

shareBtn.addEventListener("click", async () => {
    // En celulares abre el menú nativo (WhatsApp, Messenger, etc.)
    if (navigator.share) {
        try {
            await navigator.share(shareData);
        } catch (err) {
            // Si la persona cancela no hacemos nada
            if (err.name !== "AbortError") copyLink();
        }
    } else {
        // En computadoras sin menú de compartir, copia el enlace
        copyLink();
    }
});

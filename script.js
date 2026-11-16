// Compartir la tarjeta digital
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

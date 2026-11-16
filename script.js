// Datos del contacto (sin teléfono ni correo: el contacto se hace por WhatsApp)
const contact = {
    firstName: "Angelica",
    lastName: "Fragoso",
    organization: "Steren Tláhuac",
    title: "Asesora de Soluciones Tecnológicas",
    note: "Especialista en Audio, Video y Proyectos",
    url: window.location.origin + window.location.pathname
};

// Escapa caracteres especiales según el estándar vCard
function escapeVCard(value) {
    return String(value)
        .replace(/\\/g, "\\\\")
        .replace(/\n/g, "\\n")
        .replace(/,/g, "\\,")
        .replace(/;/g, "\\;");
}

function downloadVCard() {
    const e = escapeVCard;
    const lines = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:${e(contact.lastName)};${e(contact.firstName)};;;`,
        `FN:${e(contact.firstName)} ${e(contact.lastName)}`,
        `ORG:${e(contact.organization)}`,
        `TITLE:${e(contact.title)}`,
        `NOTE:${e(contact.note)}`,
        `URL:${contact.url}`,
        "END:VCARD"
    ];

    // El estándar vCard usa saltos de línea CRLF
    const blob = new Blob([lines.join("\r\n")], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Angelica-Fragoso.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Libera la memoria del archivo temporal
    setTimeout(() => URL.revokeObjectURL(url), 1000);
}

document.getElementById("btn-vcard").addEventListener("click", downloadVCard);

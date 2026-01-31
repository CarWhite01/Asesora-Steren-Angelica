function downloadVCard() {
    // Define contact details
    const contact = {
        firstName: "Tu",
        lastName: "Nombre",
        organization: "Steren",
        title: "Asesor de Soluciones Tecnológicas",
        phone: "+521234567890",
        email: "contacto@example.com", // Placeholder
        url: window.location.href
    };

    // Construct vCard 3.0 content
    const vcard = `BEGIN:VCARD
VERSION:3.0
N:${contact.lastName};${contact.firstName};;;
FN:${contact.firstName} ${contact.lastName}
ORG:${contact.organization}
TITLE:${contact.title}
TEL;TYPE=CELL:${contact.phone}
EMAIL;TYPE=WORK:${contact.email}
URL:${contact.url}
END:VCARD`;

    // Create a blob for the file
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });

    // Create a link element to trigger functionality
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "contact.vcf";

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

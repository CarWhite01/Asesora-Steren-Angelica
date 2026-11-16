/* =========================================================
   CONTENIDO EDITABLE DE LA TARJETA
   Aquí cambias la promo del mes y los productos.
   No necesitas tocar index.html ni script.js.
   ========================================================= */

// ---------- PROMO DEL MES ----------
// Para ocultar la promo, pon:  activa: false
const PROMO = {
    activa: true,
    etiqueta: "Promo del mes",
    titulo: "Pregunta por las promociones de este mes",
    descripcion: "Descuentos especiales en audio, video y seguridad. Escríbeme y te digo cuáles aplican.",
    vigencia: "Válido durante noviembre 2026 o hasta agotar existencias.",
    boton: "Quiero la promo",
    mensajeWhatsApp: "Hola Angelica, vi la promo del mes en tu tarjeta y quiero más información."
};

// ---------- LO QUE MÁS VENDO ----------
// icono: "bocina", "camara", "proyecto", "cable", "tv" o "audifonos"
// imagen (opcional): ruta a una foto, por ejemplo "img/bocina.jpg".
//   Si pones imagen, se muestra en lugar del ícono.
const PRODUCTOS = [
    {
        nombre: "Bocinas y audio",
        descripcion: "Bocinas Bluetooth, amplificadas y para fiesta.",
        icono: "bocina",
        imagen: ""
    },
    {
        nombre: "Cámaras de seguridad",
        descripcion: "Cámaras Wi-Fi y kits de videovigilancia.",
        icono: "camara",
        imagen: ""
    },
    {
        nombre: "Instalación y proyectos",
        descripcion: "Audio para negocios, salones y hogares.",
        icono: "proyecto",
        imagen: ""
    },
    {
        nombre: "Cables y accesorios",
        descripcion: "HDMI, adaptadores, cargadores y más.",
        icono: "cable",
        imagen: ""
    }
];

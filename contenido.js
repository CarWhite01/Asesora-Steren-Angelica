/* =========================================================
   CONTENIDO EDITABLE DE LA TARJETA
   Aquí cambias la promo del mes y los productos.
   No necesitas tocar index.html ni script.js.
   ========================================================= */

// ---------- PROMO DEL MES ----------
// Para ocultar la promo, pon:  activa: false
// ⚠️ El Buen Fin termina el 17 de noviembre: cambia este texto después.
const PROMO = {
    activa: true,
    etiqueta: "Buen Fin Steren",
    titulo: "¡Precios de Buen Fin en audio, video y seguridad!",
    descripcion: "Bafles, cámaras, proyectores y más con precio especial. Escríbeme y te aparto el tuyo antes de que se agote.",
    vigencia: "Válido hasta el martes 17 de noviembre de 2026 a las 23:59 h o hasta agotar existencias.",
    boton: "Quiero la promo",
    mensajeWhatsApp: "Hola Angelica, vi la promo de Buen Fin en tu tarjeta y quiero más información."
};

// ---------- LO QUE MÁS VENDO ----------
// Productos de steren.com.mx. Para cambiar uno:
//   nombre:      texto corto que se ve en la tarjeta
//   descripcion: una línea con lo más importante
//   modelo:      el SKU de Steren (sale en la página del producto)
//   imagen:      foto en la carpeta img/productos/
//   enlace:      página del producto en steren.com.mx
// No pongo precios porque cambian seguido; el cliente te los pregunta por WhatsApp.
const PRODUCTOS = [
    {
        nombre: 'Bafle de 8" Bluetooth',
        descripcion: "Profesional, True Wireless Stereo y batería recargable.",
        modelo: "BAF-0890R",
        imagen: "img/productos/baf-0890r.jpg",
        enlace: "https://www.steren.com.mx/bafle-de-8-1-500-w-pmpo-profesional-bluetooth-true-wireless-stereo-con-bateria-recargable.html"
    },
    {
        nombre: 'Bafle de 15" STAGL con DSP',
        descripcion: "Profesional, Bluetooth y cajón acústico MDF.",
        modelo: "BAF-1500PRO",
        imagen: "img/productos/baf-1500pro.jpg",
        enlace: "https://www.steren.com.mx/bafle-de-15-20-000-w-pmpo-profesional-bluetooth-con-procesador-digital-de-sonido-dsp-y-cajon-acustico-mdf.html"
    },
    {
        nombre: "2 micrófonos inalámbricos",
        descripcion: "Con receptor y batería recargable.",
        modelo: "MIC-288R",
        imagen: "img/productos/mic-288r.jpg",
        enlace: "https://www.steren.com.mx/sistema-de-2-microfonos-inalambricos-y-receptor-con-bateria-recargable.html"
    },
    {
        nombre: "Proyector Full HD Home Theater",
        descripcion: "1100 ANSI lm, función espejo y enfoque automático.",
        modelo: "PRO-8000",
        imagen: "img/productos/pro-8000.jpg",
        enlace: "https://www.steren.com.mx/proyector-multimedia-home-theater-full-hd-de-34100-lm-1100-ansi-lm-con-funcion-espejo-bluetooth-ajuste-automatico-de-enfoque-y-trapecio.html"
    },
    {
        nombre: "Cámara Wi-Fi robotizada",
        descripcion: "4 Mpx, sigue el movimiento, doble banda.",
        modelo: "CCTV-219",
        imagen: "img/productos/cctv-219.jpg",
        enlace: "https://www.steren.com.mx/camara-de-seguridad-wi-fi-ethernet-full-hd-robotizada-con-seguidor-de-movimiento.html"
    },
    {
        nombre: "Kit CCTV con 4 cámaras Wi-Fi",
        descripcion: "NVR de 8 canales y monitoreo por Internet.",
        modelo: "CCTV-990LCD",
        imagen: "img/productos/cctv-990lcd.jpg",
        enlace: "https://www.steren.com.mx/sistema-de-seguridad-cctv-con-nvr-de-8-canales-4-camaras-wi-fi-y-monitoreo-por-internet.html"
    }
];

/* =========================================================
   CONTENIDO EDITABLE DE LA TARJETA
   Aquí cambias la promo del mes y los productos.
   No necesitas tocar index.html ni script.js.
   ========================================================= */

// ---------- PROMO DEL MES ----------
// Para ocultar la promo, pon:  activa: false
// Si quieres quitar la línea de vigencia, déjala vacía: vigencia: ""
const PROMO = {
    activa: true,
    etiqueta: "Mayoreo y proyectos",
    titulo: "¿Necesitas varias piezas o un proyecto completo?",
    descripcion: "Cotizo pedidos grandes para negocios, escuelas, iglesias, eventos e instalaciones. Te armo un paquete a la medida de lo que necesitas.",
    vigencia: "Sujeto a disponibilidad en sucursal.",
    boton: "Cotizar pedido grande",
    mensajeWhatsApp: "Hola Angelica, quiero cotizar un pedido grande. Necesito:"
};

// ---------- LO QUE MÁS VENDO ----------
// Productos de steren.com.mx. Para cambiar uno:
//   nombre:      texto corto que se ve en la tarjeta
//   descripcion: una línea con lo más importante
//   modelo:      el SKU de Steren (sale en la página del producto)
//   imagen:      foto en la carpeta img/productos/
// No pongo precios porque cambian seguido; el cliente te los pregunta por WhatsApp.
const PRODUCTOS = [
    {
        nombre: 'Bafle de 8" Bluetooth',
        descripcion: "Profesional, True Wireless Stereo y batería recargable.",
        modelo: "BAF-0890R",
        imagen: "img/productos/baf-0890r.jpg"
    },
    {
        nombre: 'Bafle de 15" STAGL con DSP',
        descripcion: "Profesional, Bluetooth y cajón acústico MDF.",
        modelo: "BAF-1500PRO",
        imagen: "img/productos/baf-1500pro.jpg"
    },
    {
        nombre: "2 micrófonos inalámbricos",
        descripcion: "Con receptor y batería recargable.",
        modelo: "MIC-288R",
        imagen: "img/productos/mic-288r.jpg"
    },
    {
        nombre: "Proyector Full HD Home Theater",
        descripcion: "1100 ANSI lm, función espejo y enfoque automático.",
        modelo: "PRO-8000",
        imagen: "img/productos/pro-8000.jpg"
    },
    {
        nombre: "Cámara Wi-Fi robotizada",
        descripcion: "4 Mpx, sigue el movimiento, doble banda.",
        modelo: "CCTV-219",
        imagen: "img/productos/cctv-219.jpg"
    },
    {
        nombre: "Kit CCTV con 4 cámaras Wi-Fi",
        descripcion: "NVR de 8 canales y monitoreo por Internet.",
        modelo: "CCTV-990LCD",
        imagen: "img/productos/cctv-990lcd.jpg"
    }
];

// Lista completa y optimizada con 20 ofertas de trabajo (Datos para el scraper)
const ofertas = [
    // --- Grupo 1: Ofertas iniciales ---
    {
        titulo: "Analista de Datos Junior",
        empresa: "TechSolutions Perú S.A.",
        descripcion: "Buscamos bachiller en Estadística para el manejo de bases de datos relacionales y generación de reportes con Python y SQL.",
        salario: "Salario: S/. 2,500 al mes"
    },
    {
        titulo: "¡GANA DINERO DESDE CASA SIN EXPERIENCIA!",
        empresa: "Global Empleos S.A. (No verificada)",
        descripcion: "¡Urgente! Gana altas comisiones diarias contestando mensajes de WhatsApp. No requerimos currículum ni experiencia previa. Escribe ya.",
        salario: "Salario: S/. 9,000 al mes"
    },
    {
        titulo: "Asistente Estadístico",
        empresa: "Consultora de Opinión Pública S.A.C.",
        descripcion: "Apoyo en el procesamiento y limpieza de encuestas. Requisito indispensable manejo intermedio de lenguaje R o Python.",
        salario: "Salario: S/. 2,000 al mes"
    },
    
    // --- Grupo 2: Primer bloque de ampliación ---
    {
        titulo: "Practicante de Inteligencia de Negocios (BI)",
        empresa: "Corporación Financiera del Norte",
        descripcion: "Estudiante de últimos ciclos de carreras informáticas o estadísticas para diseño de tableros de control en Power BI.",
        salario: "Salario: S/. 1,200 al mes"
    },
    {
        titulo: "TRABAJO INMEDIATO DE MEDIO TIEMPO - S/.300 DIARIOS",
        empresa: "Inversiones Futuro Seguro (No verificada)",
        descripcion: "Buscamos personal urgente para transcripción de textos sencillos desde casa. Pagos diarios garantizados. Información al correo: dineroefectivo@gmail.com.",
        salario: "Salario: S/. 7,500 al mes"
    },
    {
        titulo: "Administrador de Base de Datos Junior",
        empresa: "Sistemas Médicos Integrales",
        descripcion: "Mantenimiento y optimización de servidores de bases de datos en entornos SQL Server y PostgreSQL. Trabajo presencial.",
        salario: "Salario: S/. 3,200 al mes"
    },
    {
        titulo: "Desarrollador Python Backend",
        empresa: "SoftPeru Innovations S.A.C.",
        descripcion: "Desarrollo de APIs REST robustas utilizando frameworks como Django o FastAPI. Trabajo 100% remoto con beneficios de ley.",
        salario: "Salario: S/. 4,500 al mes"
    },
    {
        titulo: "¡EMPLEO DE LUJO! GANA S/.12,000 SOLO POR COMENTAR VIDEOS",
        empresa: "Media Click Internacional",
        descripcion: "Empresa internacional busca personas dinámicas para dar likes a videos de plataformas digitales. Sin requisitos de educación. Cupos limitados.",
        salario: "Salario: S/. 12,000 al mes"
    },
    {
        titulo: "Analista de Control de Calidad QA",
        empresa: "Bancaria Software Group",
        descripcion: "Ejecución de pruebas de software manuales y automatizadas. Experiencia comprobada documentando casos de prueba y errores.",
        salario: "Salario: S/. 3,800 al mes"
    },
    {
        titulo: "Soporte Técnico de Redes y Conectividad",
        empresa: "Redes del Pacífico S.A.",
        descripcion: "Instalación y configuración de redes locales (LAN), enrutadores y soporte técnico preventivo a infraestructura de cómputo corporativa.",
        salario: "Salario: S/. 2,200 al mes"
    },
    {
        titulo: "INVIERTE POCO Y GENERA INGRESOS PASIVOS ALTOS",
        empresa: "CryptoInversiones Group (No verificada)",
        descripcion: "Buscamos promotores para nuestra nueva plataforma digital financiera. Trabaja desde tu celular publicitando links de afiliados. Escríbenos.",
        salario: "Salario: S/. 6,000 al mes"
    },
    {
        titulo: "Consultor de Datos y Analítica",
        empresa: "Metrics & Strategy Consulting",
        descripcion: "Modelamiento predictivo y análisis de tendencias de mercado para clientes corporativos. Indispensable manejo avanzado de Python.",
        salario: "Salario: S/. 5,000 al mes"
    },
    {
        titulo: "Asistente de Mesa de Ayuda TI",
        empresa: "Servicios Digitales Integrados",
        descripcion: "Atención de primer nivel para incidencias tecnológicas de usuarios internos, configuración de accesos y correos corporativos.",
        salario: "Salario: S/. 1,600 al mes"
    },
    {
        titulo: "¡URGENTE TRABAJO DESDE CASA CON O SIN EXPERIENCIA!",
        empresa: "Asociados Lima Confidencial",
        descripcion: "Gran convocatoria para empaquetado de productos de papelería en el hogar. Envío de materiales gratis. Respuesta inmediata vía WhatsApp.",
        salario: "Salario: S/. 4,000 al mes"
    },
    {
        titulo: "Desarrollador Web Front-End",
        empresa: "Agencia Creativa Pixel S.A.C.",
        descripcion: "Maquetación e implementación de interfaces web interactivas y responsivas utilizando tecnologías HTML5, CSS3 y JavaScript moderno.",
        salario: "Salario: S/. 2,800 al mes"
    },

    // --- Grupo 3: Las 5 nuevas ofertas para llegar a 20 ---
    {
        titulo: "Científico de Datos Senior",
        empresa: "Fintech América Latina S.A.",
        descripcion: "Diseño e implementación de modelos de aprendizaje automático (Machine Learning) para la prevención de fraudes y análisis de riesgo crediticio.",
        salario: "Salario: S/. 7,500 al mes"
    },
    {
        titulo: "¡REGÍSTRATE Y GANA S/.500 EN UNA HORA SOLAMENTE!",
        empresa: "Inversiones Express Digital",
        descripcion: "Buscamos usuarios para probar una aplicación financiera de apuestas seguras. Sin experiencia, ganancias garantizadas el mismo día. Cupos limitados.",
        salario: "Salario: S/. 15,000 al mes"
    },
    {
        titulo: "Analista de Seguridad de la Información",
        empresa: "CyberGuard Perú S.A.C.",
        descripcion: "Monitoreo de seguridad de infraestructura, gestión de vulnerabilidades y soporte en la auditoría de sistemas e implementación de normas ISO 27001.",
        salario: "Salario: S/. 4,200 al mes"
    },
    {
        titulo: "Programador Web Full-Stack",
        empresa: "Innovación Digital Creativa",
        descripcion: "Buscamos ingeniero o técnico informático con experiencia comprobada en bases de datos, Node.js para Backend y React para Frontend.",
        salario: "Salario: S/. 3,900 al mes"
    },
    {
        titulo: "TRABAJO DE ENSAMBLAJE EN CASA - EXCELENTES INGRESOS",
        empresa: "Artesanías Lima Norte SRL",
        descripcion: "Convocatoria masiva para el armado de cajas de regalo y manualidades desde la comodidad de tu hogar. Pagos semanales en efectivo. Escríbenos.",
        salario: "Salario: S/. 5,000 al mes"
    }
];

// Función para renderizar de forma automática las 20 ofertas en la página web
const contenedor = document.querySelector('.contenedor');

ofertas.forEach(oferta => {
    const tarjeta = document.createElement('article');
    tarjeta.classList.add('oferta-trabajo');
    
    tarjeta.innerHTML = `
        <h2 class="titulo-puesto">${oferta.titulo}</h2>
        <div class="empresa">${oferta.empresa}</div>
        <p class="descripcion">${oferta.descripcion}</p>
        <p class="salario">${oferta.salario}</p>
    `;
    
    contenedor.appendChild(tarjeta);
});
export type SectorCategoryKey =
  | 'food'
  | 'fashion'
  | 'tech'
  | 'culture'
  | 'ngo'
  | 'wellness'
  | 'services'
  | 'retail';

export interface ClientSector {
  sector: string;
  category: SectorCategoryKey;
  names: string[];
  descriptions: string[];
  audience: string;
  personality: string;
}

export interface DeliverableTemplate {
  name: string;
  details: string[];
}

interface BriefScenario {
  need: string;
  goal: string;
}

interface SectorCategory {
  scenarios: BriefScenario[];
  deliverables: DeliverableTemplate[];
  constraints: string[];
  additionals: string[];
}

export const CLIENT_SECTORS: ClientSector[] = [
  {
    sector: 'Cafetería de especialidad',
    category: 'food',
    names: ['Café Aurora', 'Origen Tostado', 'Barista Lab', 'Cafetería Vereda', 'Café Mirador', 'Grano Noble', 'Tinta y Café', 'Café Rincón'],
    descriptions: [
      'Cafetería de barrio que tuesta su propio grano y ofrece métodos de extracción manuales',
      'Cafetería con espacio de coworking que combina café de origen con pastelería local',
      'Micro-tostadero con cafetería que importa granos de fincas de altura y promueve el comercio justo',
    ],
    audience: 'Adultos de 25 a 40 años, urbanos, que valoran el café de origen, los espacios tranquilos y el trabajo remoto; suelen frecuentar la cafetería por las mañanas o para reuniones informales',
    personality: 'Cálida, artesanal y minimalista',
  },
  {
    sector: 'Restaurante de cocina de autor',
    category: 'food',
    names: ['Mesa Abierta', 'Sal y Tierra', 'Raíz Cocina', 'Brasa y Mar', 'El Fogón Slow', 'Otoño Mesa'],
    descriptions: [
      'Restaurante de cocina de autor con menú de temporada y producto local de kilometro cero',
      'Restaurante de tasting menu que combina técnicas tradicionales con cocina contemporánea',
      'Restaurante íntimo con solo doce comensales que ofrece una experiencia gastronómica inmersiva',
    ],
    audience: 'Foodies de 30 a 55 años con poder adquisitivo medio-alto que valoran la experiencia gastronómica, el producto local y el servicio cuidado; reservan para ocasiones especiales',
    personality: 'Sofisticada, audaz y contemporánea',
  },
  {
    sector: 'Tienda de ropa sostenible',
    category: 'fashion',
    names: ['Tierra Lenta', 'Hilo Vivo', 'Vestir Bien', 'Algodón Honesto', 'Lino y Olas', 'Trama Ética'],
    descriptions: [
      'Marca de ropa de algodón orgánico y lino con producción local y lotes limitados',
      'Tienda online de ropa sostenible que reutiliza telas y trabaja con talleres de comercio justo',
      'Boutique de barrio con colecciones cápsula y prendas atemporales fabricadas a mano',
    ],
    audience: 'Jóvenes de 20 a 35 años conscientes del medio ambiente y la moda ética; investigan el origen de las prendas, prefieren comprar poco pero de calidad y siguen a la marca en Instagram',
    personality: 'Natural, honesta y cercana',
  },
  {
    sector: 'Marca de ropa urbana',
    category: 'fashion',
    names: ['Calle Sur', 'Distrito Cero', 'Bloque Nueve', 'Zona Cruda', 'Tinta Urbana', 'Crew Norte'],
    descriptions: [
      'Marca de ropa streetwear con colecciones cápsula inspiradas en la cultura urbana y el skate',
      'Marca independiente de hoodies y camisetas con gráficos propios y drops limitados',
      'Marca de ropa urbana que colabora con artistas emergentes en cada colección',
    ],
    audience: 'Adolescentes y jóvenes de 16 a 28 años seguidores de la cultura streetwear, el skate y la música urbana; descubre marcas por TikTok y compra drops limitados antes de que se agoten',
    personality: 'Atrevida, energética y rebelde',
  },
  {
    sector: 'Emprendimiento de cosmética natural',
    category: 'fashion',
    names: ['Pura Piel', 'Botánica Lab', 'Raíz y Flor', 'Dulia Natural', 'Esencia Lenta', 'Verde Botánico'],
    descriptions: [
      'Marca de cosmética natural con productos veganos, libres de plásticos y empaques reutilizables',
      'Laboratorio artesanal de cremas y jabones con ingredientes de origen local y fórmulas simples',
      'Línea de skincare minimalista con pocos productos y fórmulas transparentes para pieles sensibles',
    ],
    audience: 'Mujeres de 25 a 45 años que buscan productos libres de químicos agresivos; leen los ingredient lists, valoran los envases sostenibles y compran principalmente online y en tiendas especializadas',
    personality: 'Pura, delicada y transparente',
  },
  {
    sector: 'Startup de tecnología educativa',
    category: 'tech',
    names: ['Aprende Más', 'Clave Edu', 'Prisma Learning', 'Aulab', 'Brújula Edu', 'Nodo Escuela'],
    descriptions: [
      'Plataforma de aprendizaje online para instituciones educativas con cursos interactivos y seguimiento de alumnos',
      'Startup que ofrece herramientas digitales para docentes con evaluaciones automáticas y reportes',
      'Aplicación móvil de microlearning para alumnos de secundaria con contenidos gamificados',
    ],
    audience: 'Docentes y coordinadores académicos de 30 a 55 años que trabajan en instituciones públicas y privadas; buscan herramientas que ahorren tiempo y mejoren el seguimiento de sus alumnos',
    personality: 'Innovadora, clara y confiable',
  },
  {
    sector: 'Panadería de barrio artesanal',
    category: 'food',
    names: ['Pan de Casa', 'Masa Madre', 'Horno del Barrio', 'Panadera Lenta', 'El Trigal', 'Masa y Levadura'],
    descriptions: [
      'Panadería artesanal que elabora pan de masa madre y bollería sin aditivos para venta diaria',
      'Panadería de barrio con producción propia y reparto a cafeterías y tiendas locales',
      'Horno familiar que combina panes tradicionales con propuestas dulces de temporada',
    ],
    audience: 'Familias y vecinos del sector de 20 a 60 años que buscan productos frescos diarios; valoran la cercanía, el trato personal y saber qué comen sus hijos',
    personality: 'Familiar, tradicional y cercana',
  },
  {
    sector: 'Festival de música independiente',
    category: 'culture',
    names: ['Festival Eco', 'Sonido Abierto', 'Raíz Fest', 'Onda Norte', 'Trama Festival', 'Bosque Sonoro'],
    descriptions: [
      'Festival de música independiente de tres días con bandas emergentes y actividades culturales',
      'Festival itinerante que combina música, arte urbano y talleres en espacios al aire libre',
      'Festival regional de música y gastronomía local que celebra la cultura de la zona',
    ],
    audience: 'Jóvenes de 18 a 30 años amantes de la música emergente y las experiencias al aire libre; planean su asistencia con amigos, compran entradas online y documentan el evento en redes',
    personality: 'Vibrante, libre y comunitaria',
  },
  {
    sector: 'ONG de protección animal',
    category: 'ngo',
    names: ['Patitas a Casa', 'Refugio Huellitas', 'Voces Animales', 'Amor de Refugio', 'Hogar Animal', 'Red Patitas'],
    descriptions: [
      'ONG que gestiona un refugio de animales y organiza campañas de adopción y esterilización',
      'Organización sin fines de lucro que rescata animales abandonados y promueve la tenencia responsable',
      'Fundación que asesora a familias en adopción y realiza campañas educativas en escuelas',
    ],
    audience: 'Voluntarios y donantes de 25 a 55 años sensibles al bienestar animal; participan en campañas, donan periódicamente y comparten contenido de la ONG en sus redes',
    personality: 'Compasiva, activa y esperanzadora',
  },
  {
    sector: 'Estudio de yoga y bienestar',
    category: 'wellness',
    names: ['Respira Yoga', 'Estudio Calma', 'Centro Aura', 'Yoga Raíz', 'Práctica Serena', 'Estudio Equilibrio'],
    descriptions: [
      'Estudio de yoga con clases presenciales y online, talleres de meditación y retiros mensuales',
      'Centro de bienestar que combina yoga, pilates y nutrición con un enfoque holístico',
      'Espacio de yoga terapéutico con grupos reducidos y atención personalizada',
    ],
    audience: 'Adultos de 25 a 50 años que buscan equilibrio físico y mental; practican yoga dos o tres veces por semana, valoran el ambiente y se suscriben a planes mensuales',
    personality: 'Serena, equilibrada y mindful',
  },
  {
    sector: 'Librería independiente',
    category: 'retail',
    names: ['Librería Página', 'Biblioteca Abierta', 'Letra Viva', 'Rincón Editorial', 'Libros y Café', 'Fondo de Letras'],
    descriptions: [
      'Librería independiente con selección curada de literatura, eventos autorales y café de especialidad',
      'Librería de barrio especializada en literatura independiente y editorial pequeña',
      'Espacio cultural que combina librería, talleres de escritura y clubes de lectura mensuales',
    ],
    audience: 'Lectores de 20 a 45 años interesados en literatura, cultura y eventos autorales; compran libros físicos, asisten a presentaciones y siguen a la librería en redes para enterarse de los eventos',
    personality: 'Introspectiva, culta y acogedora',
  },
  {
    sector: 'Marca de café de origen',
    category: 'food',
    names: ['Café Cordillera', 'Altura Coffee', 'Finca Verde', 'Café Trazable', 'Origen Café', 'Grano de Altura'],
    descriptions: [
      'Marca de café de origen que importa granos de fincas certificadas y vende online con trazabilidad completa',
      'Tostadero que trabaja directamente con productores y ofrece suscripciones mensuales de café',
      'Marca de café premium con línea de productos para hogar y regalo para entusiastas del café',
    ],
    audience: 'Consumidores de 25 a 45 años que valoran la trazabilidad y el comercio justo; compran café en grano online, se suscriben y están dispuestos a pagar más por calidad',
    personality: 'Auténtica, respetuosa y premium',
  },
  {
    sector: 'Heladería artesanal',
    category: 'food',
    names: ['Nube de Azúcar', 'Helados Sabor', 'Tazón Helado', 'Cucharita Dulce', 'Heladería Verano', 'Dulce Frío'],
    descriptions: [
      'Heladería artesanal con sabores de temporada y opciones veganas, venta en local y carrito móvil',
      'Heladería de barrio que elabora sus helados a mano con frutas locales y sin colorantes',
      'Marca de helados premium con punto de venta y línea de tarrinas para hogar y regalo',
    ],
    audience: 'Familias y jóvenes de 5 a 35 años que buscan un capricho fresco y de calidad; visitan la heladería en verano, fotografían los helados para redes y valoran los sabores naturales',
    personality: 'Divertida, fresca y artesanal',
  },
  {
    sector: 'Marca de joyería minimalista',
    category: 'fashion',
    names: ['Mínima Joya', 'Plata Fina', 'Línea Joyera', 'Aurora Joyas', 'Forma y Luz', 'Taller Plata'],
    descriptions: [
      'Marca de joyería minimalista con piezas de plata y oro de líneas limpias y producción artesanal',
      'Taller de joyería que diseña colecciones cápsula y ofrece piezas personalizadas a pedido',
      'Marca de joyería contemporánea que combina metales nobles con piedras semipreciosas',
    ],
    audience: 'Mujeres de 22 a 40 años con gusto por el diseño sutil y atemporal; compran piezas para regalo o uso personal, valoran la artesanía y siguen a la marca en Instagram',
    personality: 'Elegante, sutil y refinada',
  },
  {
    sector: 'Agencia de viajes de aventura',
    category: 'services',
    names: ['Ruta Libre', 'Expedición Norte', 'Viajes Cima', 'Brújula Aventura', 'Sendero Abierto', 'Mundo Ruta'],
    descriptions: [
      'Agencia de viajes de aventura que organiza expediciones de trekking, escalada y deportes al aire libre',
      'Operador turístico especializado en turismo activo con paquetes para grupos reducidos',
      'Agencia que diseña experiencias a medida en la naturaleza con guías locales certificados',
    ],
    audience: 'Viajeros de 25 a 45 años que buscan experiencias al aire libre fuera de lo común; viajan en pareja o con amigos, gastan en equipamiento y reservan paquetes online con anticipación',
    personality: 'Audaz, libre e inspiradora',
  },
  {
    sector: 'Cervecería artesanal',
    category: 'food',
    names: ['Cerveza Raíz', 'Lúpulo Norte', 'Toro Cervecero', 'Malta y Lúpulo', 'Cerveza Bruta', 'Olla Grande'],
    descriptions: [
      'Cervecería artesanal con línea de cervezas de autor y barril para hostelería y venta directa',
      'Micro-cervecería local que produce lotes pequeños y colabora con otros cerveceros',
      'Cervecería con taproom donde combina la producción con un espacio de degustación',
    ],
    audience: 'Adultos de 25 a 40 años interesados en sabores locales y cultura cervecera; asisten a catas, compran cerveza en botella o barril y valoran la experimentación con estilos nuevos',
    personality: 'Auténtica, creativa y sociable',
  },
  {
    sector: 'Estudio de arquitectura',
    category: 'services',
    names: ['Trazo Arquitectura', 'Estudio Vértice', 'Plano Libre', 'Volumen Arquitectura', 'Base y Muro', 'Estudio Línea'],
    descriptions: [
      'Estudio de arquitectura residencial que diseña viviendas unifamiliares y proyectos de interiorismo',
      'Estudio de arquitectura sostenible especializado en construcciones de bajo impacto ambiental',
      'Estudio de arquitectura comercial que diseña espacios para retail y hostelería',
    ],
    audience: 'Familias y empresas de 35 a 60 años que planean construir o renovar; valoran el diseño, la sostenibilidad y la atención personalizada; llegan al estudio por recomendación o portafolio online',
    personality: 'Rigurosa, creativa y atemporal',
  },
  {
    sector: 'Centro de fisioterapia',
    category: 'wellness',
    names: ['Movimiento Salud', 'Clínica Vital', 'Fisio Centro', 'Recupera Fisio', 'Centro Ágil', 'Fisio Activa'],
    descriptions: [
      'Centro de fisioterapia y rehabilitación con enfoque personalizado y seguimiento por especialista',
      'Clínica de fisioterapia deportiva que trabaja con deportistas amateur y profesional',
      'Centro de salud integral que combina fisioterapia, osteopatía y readaptación física',
    ],
    audience: 'Adultos de 30 a 65 años con lesiones o dolor crónico; buscan tratamientos personalizados y valoran la claridad en el seguimiento; llegan por recomendación médica o del entorno cercano',
    personality: 'Profesional, cercana y confiable',
  },
  {
    sector: 'Galería de arte emergente',
    category: 'culture',
    names: ['Sala Emergente', 'Galería Punto', 'Espacio Blanco', 'Galería Trama', 'Sala Abierta', 'Pared y Obra'],
    descriptions: [
      'Galería de arte contemporáneo que representa artistas emergentes y organiza exposiciones mensuales',
      'Espacio expositivo que combina galería comercial con residencias de artistas y ferias',
      'Galería online y física que vende obra gráfica limitada de artistas emergentes',
    ],
    audience: 'Colecionistas y amantes del arte de 28 a 55 años con interés en artistas emergentes; asisten a inauguraciones, compran obra gráfica o pequeñas piezas y siguen la programación en redes',
    personality: 'Contemporánea, curiosa y selecta',
  },
  {
    sector: 'Productora audiovisual',
    category: 'culture',
    names: ['Lente Abierta', 'Plano a Plano', 'Productora Norte', 'Ojo Creativo', 'Frame a Frame', 'Estudio Rodar'],
    descriptions: [
      'Productora audiovisual que realiza videoclips, anuncios y contenido para marcas',
      'Productora de contenido digital que crea series web y documentales para plataformas online',
      'Productora de bodas y eventos que combina cobertura tradicional con cine documental',
    ],
    audience: 'Marcas, agencias y particulares de 25 a 50 años que necesitan contenido audiovisual de calidad; contratan por proyecto y valoran la dirección creativa y la postproducción',
    personality: 'Creativa, ágil y narrativa',
  },
  {
    sector: 'Tienda de plantas y jardinería',
    category: 'retail',
    names: ['Verde Casa', 'Hoja Viva', 'Jardín Interior', 'Planta y Cuidado', 'Tierra Verde', 'Raíz Botánica'],
    descriptions: [
      'Tienda de plantas de interior y exterior con asesoría de cuidado y macetas de diseño',
      'Vivero urbano que combina venta de plantas con talleres de jardinería y paisajismo',
      'Tienda online de plantas que entrega en casa con guía de cuidado personalizada',
    ],
    audience: 'Adultos de 25 a 45 años urbanos que se inician en el cuidado de plantas; compran para el hogar o regalo, valoran el asesoramiento y comparten sus plantas en redes',
    personality: 'Fresca, cuidada y optimista',
  },
  {
    sector: 'Escuela de arte y dibujo',
    category: 'culture',
    names: ['Aula Trazo', 'Escuela Línea', 'Taller Dibujo', 'Estudio Pincel', 'Aula Paleta', 'Escuela de Arte Lento'],
    descriptions: [
      'Escuela de dibujo y pintura con cursos presenciales para niños, adolescentes y adultos',
      'Estudio de arte que ofrece talleres de ilustración digital y técnicas tradicionales',
      'Escuela de arte libre con metodología experimental y grupos reducidos',
    ],
    audience: 'Estudiantes de arte y aficionados de 12 a 60 años que buscan aprender o perfeccionar técnicas; valoran la cercanía del docente y el ambiente del taller',
    personality: 'Creativa, paciente y exploratoria',
  },
  {
    sector: 'Marisquería y pescadería',
    category: 'food',
    names: ['Mar y Mesa', 'Pesca del Día', 'Olas y Punto', 'La Caleta Pescados', 'Marisquería Norte', 'Fresco del Mar'],
    descriptions: [
      'Marisquería con pescadería propia que combina venta al público con cocina para llevar',
      'Pescadería de barrio que trabaja con pesca del día y cocina platos para llevar',
      'Marisquería gourmet con carta de temporada y producto de lonja directa',
    ],
    audience: 'Clientes de 35 a 65 años que valoran el producto fresco; compran pescado para casa o comen en el local; cuidan la calidad y la procedencia del producto',
    personality: 'Fresca, auténtica y marinera',
  },
  {
    sector: 'Editorial independiente',
    category: 'culture',
    names: ['Editorial Páramo', 'Letra Impresa', 'Sello Norte', 'Editorial Alba', 'Trama Editorial', 'Cuaderno Editores'],
    descriptions: [
      'Editorial independiente de literatura y ensayo con colecciones de autor contemporáneo',
      'Sello editorial especializado en cómic y novela gráfica de autores iberoamericanos',
      'Editorial que publica libros ilustrados y libros de arte en ediciones cuidadas',
    ],
    audience: 'Lectores y colecionistas de 25 a 55 años que valoran la edición cuidada; compran en librerías independientes y online, y siguen las novedades del sello en redes',
    personality: 'Culta, cuidada y con criterio',
  },
];

export const LOCATIONS = [
  'en el barrio de Condesa, Ciudad de México',
  'en el centro histórico de Medellín, Colombia',
  'en el barrio de Palermo, Buenos Aires, Argentina',
  'en el distrito de Miraflores, Lima, Perú',
  'en el barrio de Gràcia, Barcelona, España',
  'en el centro de Santiago, Chile',
  'en el barrio de Getsemaní, Cartagena, Colombia',
  'en la zona rosa de Quito, Ecuador',
  'en el barrio de Bellas Artes, Valparaíso, Chile',
  'en la colonia Roma Norte, Ciudad de México',
  'en el barrio de El Born, Barcelona, España',
  'en el centro de Montevideo, Uruguay',
  'en el barrio de Santa Teresa, Río de Janeiro, Brasil',
  'en la ciudad vieja de San José, Costa Rica',
  'en el barrio de Lastarria, Santiago, Chile',
];

export const CLIENT_PROFILES = [
  'Dos socios fundadores que llevan el negocio desde sus inicios y toman las decisiones en conjunto',
  'Una emprendedora que inició el proyecto hace dos años y ahora busca profesionalizar la marca',
  'Una familia de segunda generación que heredó el negocio y quiere modernizar su imagen',
  'Un colectivo joven de cuatro personas que comparte la gestión y la toma de decisiones',
  'Un director general con experiencia en el sector que acaba de incorporarse para impulsar el crecimiento',
  'Una gerente de marketing recién contratada que coordina el proyecto con una agencia externa',
  'Un dueño único que gestiona el negocio a diario y busca una imagen más competitiva',
  'Una cooperativa de productores que se asoció para crear una marca conjunta',
];

export const BRIEF_CATEGORIES: Record<SectorCategoryKey, SectorCategory> = {
  food: {
    scenarios: [
      { need: 'La identidad visual actual se diseñó hace más de ocho años y ya no conecta con el público joven que visita la zona; el cliente quiere renovarla para competir con locales más modernos sin perder su esencia artesanal', goal: 'Renovar la imagen para atraer a un público más joven sin perder la esencia artesanal que define al local y fideliza a su comunidad' },
      { need: 'El negocio abre una segunda sucursal y necesita unificar la imagen, ya que cada local usa estilos, tipografías y colores distintos', goal: 'Crear un sistema visual coherente que funcione en ambas sucursales y transmita la misma experiencia de calidad' },
      { need: 'El cliente lanza una línea de productos para llevar (café en grano, salsa, mermelada) y necesita packaging que comunique la calidad del producto en el punto de venta', goal: 'Transmitir el valor artesanal del producto y conseguir que el cliente lo perciba como una experiencia premium, no como un producto más del supermercado' },
      { need: 'La competencia del barrio usa un lenguaje visual muy parecido y el cliente tiene problemas para diferenciarse en el punto de venta', goal: 'Crear una identidad propia reconocible al instante que diferencie al local de su competencia directa sin cambiar su nombre' },
      { need: 'El negocio quiere profesionalizar la marca porque ha crecido de forma orgánica sin una imagen definida y ahora atiende a más clientes', goal: 'Construir una identidad coherente que transmita confianza y calidad en todos los puntos de contacto: local, redes, packaging y papelería' },
      { need: 'El cliente prepara una campaña de temporada con fechas límite ajustadas para aprovechar el pico de ventas del periodo festivo', goal: 'Comunicar frescura y modernidad con materiales visuales listos para la campaña, y conseguir que el cliente perciba la oferta como una propuesta especial' },
    ],
    deliverables: [
      { name: 'Diseño de logotipo', details: ['versión principal, versiones secundarias y versión simplificada para tamaños pequeños en etiquetas', 'logotipo en versión horizontal y vertical con variantes en color, blanco y negro', 'logotipo con símbolo y versión con tipografía sola para usos en packaging y escaparate'] },
      { name: 'Identidad visual completa', details: ['sistema visual con paleta, tipografías, iconografía y elementos gráficos de apoyo para el local y el packaging', 'sistema visual coherente con paleta, tipografías y reglas de aplicación en local, web y redes', 'sistema visual amplio con paleta primaria y secundaria, tipografías y patrones gráficos para packaging y papelería'] },
      { name: 'Manual de identidad de marca', details: ['manual con normas de uso del logo, color, tipografía y aplicaciones básicas en packaging y local', 'manual completo con normativa de marca, usos correctos e incorrectos y aplicaciones en distintos soportes del negocio', 'manual en versión digital con normativa detallada y ejemplos de aplicación en piezas reales del local y el producto'] },
      { name: 'Diseño de packaging y etiquetas', details: ['diseño de caja, etiqueta y sello para línea de productos con variantes por referencia', 'packaging primario y secundario con etiquetas e instrucciones de conservación del producto', 'diseño de envase y etiqueta con versiones para distintos tamaños del mismo producto'] },
      { name: 'Diseño editorial de catálogo o menú', details: ['menú gastronómico con portada y diseños de plato con tipografía cuidada', 'catálogo de producto con portada, índice y fichas de producto para llevar', 'carta con sección de bebidas y sección de productos de temporada con maquetación editorial'] },
      { name: 'Diseño de plantillas para redes sociales', details: ['plantillas para Instagram, Facebook y stories con variantes para promociones y novedades del menú', 'plantillas editables para Instagram y LinkedIn con versiones para anuncios y publicaciones orgánicas', 'plantillas para Instagram, stories y reels con variantes para citas, promociones y anuncios del local'] },
      { name: 'Carruseles educativos para Instagram', details: ['carruseles de hasta diez diapositivas con temática educativa sobre el producto y estilo coherente con la marca', 'serie de cuatro carruseles educativos sobre el origen del producto con portada, desarrollo y cierre', 'carruseles con plantilla base y variantes para que el cliente pueda reutilizarlas con sus textos y promociones'] },
      { name: 'Carteles y vallas publicitarias', details: ['cartel A2 y banner para escaparate con variantes para promociones de temporada', 'carteles de distintos formatos para campaña en vía pública y escaparate del local', 'valla publicitaria y cartel para punto de venta con versión para promoción específica del producto'] },
      { name: 'Diseño de señalización y rotulación', details: ['señalización interior del local con pictogramas y tipografía coherente con la marca', 'rotulación de escaparate y señalética interior del local', 'señalética exterior e interior con sistema de pictogramas para el local'] },
      { name: 'Papelería corporativa', details: ['tarjetas de visita, hojas membretadas y sobres con normativa de marca', 'tarjetas, hoja membretada, sobre y carpeta corporativa con aplicaciones de marca', 'papelería básica: tarjetas y hoja membretada con dos variantes de uso'] },
    ],
    constraints: [
      'Debe funcionar tanto en impresión a una tinta como a todo color por sus distintos soportes: etiquetas, menús y carteles',
      'La tipografía debe ser legible en tamaños pequeños por su uso en etiquetas de producto y envases',
      'Presupuesto ajustado: priorizar formatos digitales sobre impresión y optimizar el número de piezas impresas',
      'Materiales sostenibles: el diseño debe optimizar tinta y papel reciclado en empaques y papelería',
      'El logo debe verse bien en blanco y negro para sellos, troquelados y usos de bajo presupuesto',
      'Entrega máxima en tres semanas por el lanzamiento de la nueva línea de productos',
    ],
    additionals: [
      'La marca se inspira en la estética de los años setenta con formas redondeadas y colores cálidos que recuerdan al producto artesanal',
      'Toma como referencia locales como Aesop por su minimalismo y atención al detalle en el punto de venta',
      'Sus valores principales son la calidad del producto, la cercanía con el cliente y el respeto por el entorno local',
      'Le gustaría incorporar un elemento gráfico recurrente que funcione como sello en packaging, bolsas y redes',
      'Trabaja con productores locales y quiere que el diseño comunique esa filosofía sin ser literal',
      'El local tiene un espacio cálido y quiere que la identidad visual refleje esa atmósfera en todos los soportes',
    ],
  },
  fashion: {
    scenarios: [
      { need: 'La marca creció en Instagram pero todavía no tiene una identidad visual definida más allá del logo; necesita profesionalizar la imagen para etiquetas, packaging y redes', goal: 'Profesionalizar la marca con un sistema visual coherente que funcione en redes, etiquetas de prenda y packaging' },
      { need: 'El cliente lanza una nueva colección cápsula y necesita materiales que comuniquen el concepto de la colección en redes y en punto de venta', goal: 'Transmitir el concepto de la colección y conseguir que el público asocie la marca con un estilo de vida, no solo con una prenda' },
      { need: 'La marca quiere diferenciarse de otras marcas del mismo nicho que usan un lenguaje visual muy parecido en redes', goal: 'Crear una identidad propia reconocible que comunique los valores de la marca sin caer en los clichés visuales del sector' },
      { need: 'El cliente necesita packaging y etiquetas para sus productos que transmitan calidad y sostenibilidad al mismo tiempo', goal: 'Comunicar que cada producto es elaborado con materiales sostenibles y conseguir que el cliente perciba el valor ético por encima del precio' },
      { need: 'La marca quiere posicionarse como una opción premium dentro de su nicho, pero su imagen actual transmite una sensación económica', goal: 'Comunicar exclusividad y calidad, y conseguir que el público valore el producto como una experiencia premium' },
      { need: 'El negocio necesita una tienda online y materiales para redes que acompañen el lanzamiento de la nueva temporada', goal: 'Transmitir energía y modernidad, y lograr que la marca se reconozca en redes y en la experiencia de compra online' },
    ],
    deliverables: [
      { name: 'Diseño de logotipo', details: ['versión principal, versiones secundarias y versión simplificada para etiquetas de prenda', 'logotipo en versión horizontal y vertical con variantes en color, blanco y negro para etiquetas y bolsas', 'logotipo con símbolo y versión con tipografía sola para usos en packaging y care labels'] },
      { name: 'Identidad visual completa', details: ['sistema visual con paleta, tipografías, iconografía y elementos gráficos de apoyo para etiquetas y redes', 'sistema visual coherente con paleta, tipografías y reglas de aplicación en web, redes y packaging', 'sistema visual amplio con paleta primaria y secundaria, tipografías y patrones gráficos para packaging y papelería'] },
      { name: 'Manual de identidad de marca', details: ['manual con normas de uso del logo, color, tipografía y aplicaciones básicas en etiquetas y packaging', 'manual completo con normativa de marca, usos correctos e incorrectos y aplicaciones en web, redes y producto', 'manual en versión digital con normativa detallada y ejemplos de aplicación en etiquetas, bolsas y piezas reales'] },
      { name: 'Diseño de packaging y etiquetas', details: ['diseño de caja, etiqueta de prenda y bolsa con variantes por colección', 'packaging primario y secundario con etiquetas de composición y cuidados de la prenda', 'diseño de envoltorio y etiqueta con versiones para distintas prendas de la misma colección'] },
      { name: 'Diseño de etiqueta para línea de productos', details: ['etiqueta principal y contraetiqueta para línea de producto con variantes por referencia', 'etiqueta frontal y etiqueta trasera con información de composición y cuidados', 'etiqueta para tres referencias de producto con sistema cromático por tipo o colección'] },
      { name: 'Diseño de plantillas para redes sociales', details: ['plantillas para Instagram, Facebook y stories con variantes para drops y novedades de colección', 'plantillas editables para Instagram y TikTok con versiones para anuncios y publicaciones orgánicas', 'plantillas para Instagram, stories y reels con variantes para looks, promociones y anuncios'] },
      { name: 'Carruseles educativos para Instagram', details: ['carruseles sobre el origen y los materiales de las prendas con estilo coherente con la marca', 'serie de cuatro carruseles sobre la filosofía de la marca con portada, desarrollo y cierre', 'carruseles con plantilla base y variantes para que el cliente pueda reutilizarlas con sus textos'] },
      { name: 'Diseño de portadas y thumbnails para Reels', details: ['portadas para Reels con plantilla reutilizable y variantes para looks y behind-the-scenes', 'thumbnails para videos con estilo coherente y tipografía legible en tamaño pequeño', 'plantillas de portada para Reels y TikTok con variantes para series y videos sueltos'] },
      { name: 'Diseño de página web landing page', details: ['landing page de tienda online con hero, grilla de producto y checkout', 'landing page responsive con secciones de colección, lookbook y llamada a la acción', 'landing page para campaña de lanzamiento con countdown y captación de leads para el drop'] },
      { name: 'Diseño de banner para campaña de lanzamiento', details: ['banners web y redes para campaña de drop con variantes por formato', 'kit de banners para web, redes y email con variantes para anuncios y orgánicos', 'banners para landing page y redes con countdown y llamada a la acción para la nueva colección'] },
      { name: 'Ilustraciones personalizadas para la marca', details: ['serie de cinco ilustraciones para web y redes con temática de producto y estilo de vida', 'ilustración principal para hero de web y versiones secundarias para secciones de colección', 'set de iconos ilustrados para web y etiquetas con estilo coherente con la marca'] },
      { name: 'Papelería corporativa', details: ['tarjetas de visita, hojas membretadas y sobres con normativa de marca', 'tarjetas, hoja membretada, sobre y carpeta corporativa con aplicaciones de marca', 'papelería básica: tarjetas y hoja membretada con dos variantes de uso'] },
    ],
    constraints: [
      'La etiqueta debe ser legible en tamaños pequeños por su uso en etiquetas de prenda y care labels',
      'La paleta debe funcionar sobre distintos colores de tela y en fotografía de producto sin perder contraste',
      'Priorizar formatos digitales sobre impresión, ya que la marca vende principalmente online y en redes',
      'El packaging debe usar materiales sostenibles y optimizar el papel reciclado en bolsas y envoltorios',
      'La identidad debe poder escalar a futuras colecciones sin rediseñar el sistema base de la marca',
      'El diseño debe ser accesible y cumplir con contrastes mínimos en la web y en redes',
    ],
    additionals: [
      'La marca se inspira en la estética japonesa del wabi-sabi, con texturas orgánicas y formas irregulares',
      'Sus valores principales son la transparencia, la comunidad y el respeto por el entorno y las personas que hacen las prendas',
      'Le gustaría incorporar un elemento gráfico recurrente en etiquetas, bolsas y redes como sello de marca',
      'El tono de comunicación es cercano y conversacional, nunca formal ni distante',
      'Quiere que el diseño transmita movimiento, como si la marca estuviera viva y en evolución con cada colección',
      'Le fascina el estilo editorial y quiere que la identidad tenga un aire de revista de moda independiente',
    ],
  },
  tech: {
    scenarios: [
      { need: 'La startup prepara su lanzamiento oficial y todavía no tiene una identidad visual profesional que respalde el producto', goal: 'Transmitir innovación y vanguardia, y lograr que los clientes vean a la marca como una opción confiable y líder en su sector' },
      { need: 'El producto se vende a instituciones educativas y la imagen actual no transmite la confianza ni el profesionalismo necesarios para presentar a directivos', goal: 'Construir confianza y autoridad, y conseguir que los coordinadores académicos consideren a la marca como referente del sector educativo' },
      { need: 'La plataforma necesita una landing page que convierta visitantes en usuarios registrados y que comunique el valor del producto en pocos segundos', goal: 'Comunicar claridad y profesionalismo, y conseguir que los docentes se registren y prueben la plataforma' },
      { need: 'La marca quiere diferenciarse de otras edtech que usan identidades visuales muy parecidas con el mismo lenguaje de color y tipografía', goal: 'Crear una identidad propia memorable que facilite el reconocimiento en el sector educativo y diferencie a la marca al instante' },
      { need: 'El equipo necesita plantillas de presentación para sus demos con instituciones y materiales para redes que acompañen el lanzamiento', goal: 'Transmitir innovación y confianza con materiales que respalden las presentaciones comerciales y la presencia digital' },
    ],
    deliverables: [
      { name: 'Diseño de logotipo', details: ['versión principal, versiones secundarias y versión simplificada para favicon y app icon', 'logotipo en versión horizontal y vertical con variantes en color, blanco y negro para interfaz y materiales', 'logotipo con símbolo y versión con tipografía sola para usos en app, web y presentaciones'] },
      { name: 'Identidad visual completa', details: ['sistema visual con paleta, tipografías, iconografía y elementos gráficos de apoyo para interfaz y web', 'sistema visual coherente con paleta, tipografías y reglas de aplicación en interfaz, web y materiales de presentación', 'sistema visual amplio con paleta primaria y secundaria, tipografías y patrones gráficos para web y redes'] },
      { name: 'Manual de identidad de marca', details: ['manual con normas de uso del logo, color, tipografía y aplicaciones básicas en interfaz y web', 'manual completo con normativa de marca, usos correctos e incorrectos y aplicaciones en web, app y presentaciones', 'manual en versión digital con normativa detallada y ejemplos de aplicación en interfaz y materiales reales'] },
      { name: 'Diseño de página web landing page', details: ['landing page de una sola página con hero, features del producto y formulario de registro', 'landing page responsive con secciones de producto, testimonios de instituciones y llamada a la acción', 'landing page para lanzamiento con captación de leads, demo y testimonios de docentes'] },
      { name: 'Diseño de plantillas para redes sociales', details: ['plantillas para LinkedIn, Twitter y Instagram con variantes para anuncios y contenido educativo', 'plantillas editables para LinkedIn y Twitter con versiones para anuncios y publicaciones orgánicas', 'plantillas para LinkedIn, Twitter y stories con variantes para tips, casos de uso y anuncios'] },
      { name: 'Diseño de firma de correo y plantillas de presentación', details: ['plantilla de presentación editable y firma de correo para todo el equipo', 'plantilla de propuesta comercial y firma de correo con variantes por cargo', 'plantilla de presentación de producto y firma de correo con manual de uso'] },
      { name: 'Ilustraciones personalizadas para la marca', details: ['set de iconos ilustrados para web y interfaz con estilo coherente con la marca', 'ilustración principal para hero de web y versiones secundarias para secciones del producto', 'serie de ilustraciones para onboarding y materiales de presentación con temática educativa'] },
      { name: 'Diseño de banner para campaña de lanzamiento', details: ['banners web y redes para campaña de lanzamiento con variantes por formato', 'kit de banners para web, LinkedIn y email con variantes para anuncios y orgánicos', 'banners para landing page y redes con countdown y llamada a la acción para el lanzamiento'] },
    ],
    constraints: [
      'El diseño debe ser accesible y cumplir con contrastes mínimos para inclusión en interfaz y web',
      'La identidad debe funcionar en interfaces digitales y en materiales impresos para ferias educativas',
      'Priorizar formatos digitales: la marca se comunica principalmente online y en presentaciones',
      'La tipografía debe ser legible en tamaños pequeños por su uso en la interfaz del producto',
      'Evitar el color azul por su uso generalizado en la competencia del sector tecnológico',
    ],
    additionals: [
      'La marca se inspira en el diseño suizo, con retículas claras y tipografía sans-serif precisa',
      'Sus valores principales son la innovación, la claridad y la accesibilidad para todos los usuarios',
      'Le importa mucho la tipografía y le gustaría una solución personalizada o poco común',
      'Quiere que el diseño funcione bien en motion graphics para animaciones en redes y en el producto',
      'El tono de comunicación es profesional pero cercano, nunca frío ni corporativo tradicional',
    ],
  },
  culture: {
    scenarios: [
      { need: 'El festival, galería o editorial necesita una identidad renovada para su próxima edición o temporada que conecte con un público más joven', goal: 'Comunicar energía cultural y contemporaneidad, y lograr que el público asocie la marca con vanguardia artística' },
      { need: 'El cliente necesita materiales para promover su programación (exposiciones, conciertos, lanzamientos) en redes y en vía pública con fechas definidas', goal: 'Transmitir la experiencia cultural y conseguir que el público asista, compre entradas o adquiera la publicación' },
      { need: 'La marca quiere atraer a un público más joven sin perder a su comunidad actual de seguidores y colecionistas', goal: 'Comunicar tradición y vanguardia al mismo tiempo, y conseguir que la marca sea un puente entre generaciones de público' },
      { need: 'El cliente publica o lanza una nueva colección o ciclo y necesita una imagen editorial coherente que refleje el cuidado de la curaduría', goal: 'Transmitir el cuidado editorial y la calidad de curaduría, y conseguir que el público valore el producto cultural como una pieza cuidada' },
      { need: 'La marca necesita profesionalizar su imagen porque ha crecido de forma orgánica sin una identidad definida y ahora programa más eventos', goal: 'Crear una identidad coherente que posicione a la marca como referente cultural de su sector y facilite el reconocimiento' },
      { need: 'El cliente quiere crear una identidad flexible que pueda renovarse en cada edición o exposición sin perder reconocimiento de marca', goal: 'Constrir una identidad modular que se renueve en cada edición manteniendo el reconocimiento, y lograr que el público identifique la marca año tras año' },
    ],
    deliverables: [
      { name: 'Diseño de logotipo', details: ['versión principal, versiones secundarias y versión simplificada para uso en carteles y redes', 'logotipo en versión horizontal y vertical con variantes en color, blanco y negro para impresión editorial', 'logotipo con símbolo y versión con tipografía sola para usos en publicaciones y redes'] },
      { name: 'Identidad visual completa', details: ['sistema visual con paleta, tipografías, iconografía y elementos gráficos de apoyo para impresión y redes', 'sistema visual coherente con paleta, tipografías y reglas de aplicación en publicaciones, carteles y redes', 'sistema visual amplio con paleta primaria y secundaria, tipografías y patrones gráficos para identidad editorial'] },
      { name: 'Manual de identidad de marca', details: ['manual con normas de uso del logo, color, tipografía y aplicaciones básicas en publicaciones y carteles', 'manual completo con normativa de marca, usos correctos e incorrectos y aplicaciones en edición, exposición y redes', 'manual en versión digital con normativa detallada y ejemplos de aplicación en piezas editoriales y de exposición'] },
      { name: 'Diseño editorial de catálogo o menú', details: ['catálogo de exposición con portada, índice y fichas de obra con maquetación editorial', 'programa de festival con portada, cronograma y fichas de artistas con tipografía cuidada', 'libro o publicación con maquetación editorial, portada y páginas interiores con retícula flexible'] },
      { name: 'Carteles y vallas publicitarias', details: ['cartel A2 y banner para escaparate con variantes para cada exposición o evento del ciclo', 'carteles de distintos formatos para campaña en vía pública y en sede del festival o galería', 'valla publicitaria y cartel para punto de venta con versión para cada edición o exposición'] },
      { name: 'Diseño de plantillas para redes sociales', details: ['plantillas para Instagram, Facebook y stories con variantes para programación y novedades', 'plantillas editables para Instagram y Twitter con versiones para anuncios y publicaciones de programación', 'plantillas para Instagram, stories y reels con variantes para eventos, avisos y cuenta atrás'] },
      { name: 'Carruseles educativos para Instagram', details: ['carruseles sobre los artistas o autores del ciclo con estilo coherente con la marca editorial', 'serie de cuatro carruseles sobre la programación con portada, desarrollo y cierre', 'carruseles con plantilla base y variantes para que el cliente pueda reutilizarlas con cada evento'] },
      { name: 'Diseño de portadas y thumbnails para Reels', details: ['portadas para Reels con plantilla reutilizable y variantes para entrevistas y behind-the-scenes', 'thumbnails para videos con estilo coherente y tipografía legible en tamaño pequeño', 'plantillas de portada para Reels y YouTube con variantes para series y videos sueltos del ciclo'] },
      { name: 'Ilustraciones personalizadas para la marca', details: ['serie de cinco ilustraciones para web y redes con temática de la programación cultural', 'ilustración principal para hero de web y versiones secundarias para secciones de programación', 'set de iconos ilustrados para web y redes con estilo coherente con la identidad editorial'] },
      { name: 'Diseño de página web landing page', details: ['landing page de exposición o evento con hero, programación y formulario de entradas', 'landing page responsive con secciones de programación, artistas y llamada a la acción', 'landing page para publicación con ficha de producto, reseñas y compra online'] },
      { name: 'Diseño de banner para campaña de lanzamiento', details: ['banners web y redes para campaña de exposición o lanzamiento editorial con variantes por formato', 'kit de banners para web, redes y email con variantes para anuncios y publicaciones orgánicas', 'banners para landing page y redes con countdown y llamada a la acción para la apertura o lanzamiento'] },
    ],
    constraints: [
      'El diseño debe funcionar tanto en impresión de gran formato (carteles) como en redes sociales (formato pequeño)',
      'La identidad debe poder adaptarse a cada edición o exposición sin rediseñar el sistema base de la marca',
      'Presupuesto ajustado: priorizar formatos digitales y optimizar la impresión de piezas clave como el cartel',
      'La tipografía debe ser legible en tamaños pequeños (programa, catálogo) y en gran formato (carteles, vallas)',
      'Sin limitaciones especiales: el cliente da libertad creativa total y confía en la propuesta del diseñador',
    ],
    additionals: [
      'La marca se inspira en el diseño editorial de revistas independientes, con retículas y tipografía expresiva',
      'Sus valores principales son la curiosidad, la comunidad y la apertura al diálogo cultural',
      'Le fascina el estilo editorial y quiere que la identidad tenga un aire de revista contemporánea',
      'Toma como referencia instituciones culturales como la Tate o la Filmoteca por su claridad visual y atemporalidad',
      'Quiere que el diseño transmita movimiento, como si la programación estuviera viva y en evolución',
      'Le gustaría incorporar un elemento gráfico recurrente que cambie en cada edición como sello de la marca',
    ],
  },
  ngo: {
    scenarios: [
      { need: 'La ONG necesita renovar su imagen para atraer a más voluntarios y donantes jóvenes que se involucren con la causa animal', goal: 'Comunicar compromiso y esperanza, y conseguir que los seguidores se involucren, compartan y apoyen activamente la causa' },
      { need: 'La organización necesita materiales para una campaña de adopción con fechas límite ajustadas y necesita que la imagen genere empatía sin ser dramática', goal: 'Transmitir cercanía y esperanza, y lograr que más familias adopten durante el periodo de la campaña' },
      { need: 'El cliente necesita una imagen más profesional para presentar proyectos a patrocinadores y empresas que podrían financiar la organización', goal: 'Constrir confianza y transparencia, y conseguir que las empresas patrocinadoras apoyen los proyectos con donaciones recurrentes' },
      { need: 'La ONG quiere unificar su imagen porque cada campaña usa estilos distintos y eso confunde a los seguidores sobre quién está detrás', goal: 'Crear un sistema visual coherente que transmita los valores de la organización en todos los canales y campañas' },
      { need: 'El cliente necesita una landing page para captar donaciones online que transmita el impacto real de cada aportación', goal: 'Comunicar el impacto de las donaciones, y conseguir que los visitantes se conviertan en donantes recurrentes' },
    ],
    deliverables: [
      { name: 'Diseño de logotipo', details: ['versión principal, versiones secundarias y versión simplificada para uso en web y materiales de campaña', 'logotipo en versión horizontal y vertical con variantes en color, blanco y negro para impresión económica', 'logotipo con símbolo y versión con tipografía sola para usos en redes, web y papelería'] },
      { name: 'Identidad visual completa', details: ['sistema visual con paleta, tipografías, iconografía y elementos gráficos de apoyo para web y campañas', 'sistema visual coherente con paleta, tipografías y reglas de aplicación en web, redes y materiales impresos', 'sistema visual amplio con paleta primaria y secundaria, tipografías y patrones gráficos para campañas y papelería'] },
      { name: 'Manual de identidad de marca', details: ['manual con normas de uso del logo, color, tipografía y aplicaciones básicas en materiales de campaña', 'manual completo con normativa de marca, usos correctos e incorrectos y aplicaciones en web, redes y eventos', 'manual en versión digital con normativa detallada y ejemplos de aplicación en campañas reales de la ONG'] },
      { name: 'Diseño de plantillas para redes sociales', details: ['plantillas para Instagram, Facebook y stories con variantes para campañas de adopción y donación', 'plantillas editables para Instagram y Facebook con versiones para anuncios y publicaciones de voluntariado', 'plantillas para Instagram, stories y reels con variantes para casos, campañas y llamadas a la acción'] },
      { name: 'Carruseles educativos para Instagram', details: ['carruseles sobre tenencia responsable y historias de adopción con estilo coherente con la marca', 'serie de cuatro carruseles educativos sobre el trabajo de la ONG con portada, desarrollo y cierre', 'carruseles con plantilla base y variantes para que el equipo pueda reutilizarlas en cada campaña'] },
      { name: 'Carteles y vallas publicitarias', details: ['cartel A2 y banner para eventos de adopción con variantes para campañas de temporada', 'carteles de distintos formatos para campaña en vía pública y en sedes de eventos', 'valla publicitaria y cartel para punto de adopción con versión para promoción de la campaña'] },
      { name: 'Diseño de página web landing page', details: ['landing page de donación con hero, impacto de la aportación y formulario de pago', 'landing page responsive con secciones de proyectos, historias de animales y llamada a la acción', 'landing page para campaña de adopción con fichas de animales y formulario de contacto'] },
      { name: 'Ilustraciones personalizadas para la marca', details: ['serie de cinco ilustraciones para web y redes con temática de adopción y cuidado animal', 'ilustración principal para hero de web y versiones secundarias para secciones de proyectos', 'set de iconos ilustrados para web y redes con estilo coherente con la identidad de la ONG'] },
      { name: 'Diseño de banner para campaña de lanzamiento', details: ['banners web y redes para campaña de adopción con variantes por formato', 'kit de banners para web, redes y email con variantes para anuncios y publicaciones orgánicas', 'banners para landing page y redes con countdown y llamada a la acción para la campaña'] },
      { name: 'Papelería corporativa', details: ['tarjetas de visita, hojas membretadas y sobres con normativa de marca', 'tarjetas, hoja membretada, sobre y carpeta corporativa con aplicaciones de marca', 'papelería básica: tarjetas y hoja membretada con dos variantes de uso'] },
    ],
    constraints: [
      'Presupuesto muy ajustado: priorizar formatos digitales y piezas reutilizables por el equipo de la ONG',
      'El diseño debe ser accesible y cumplir con contrastes mínimos para inclusión',
      'Las plantillas deben ser editables por el equipo de la ONG sin conocimientos de diseño avanzado',
      'La identidad debe funcionar en materiales impresos de bajo costo como fotocopias y pancartas caseras',
      'Evitar imágenes que puedan resultar impactantes; el cliente prefiere un tono esperanzador y cercano',
    ],
    additionals: [
      'Sus valores principales son la compasión, la transparencia y la acción comunitaria',
      'El tono de comunicación es cercano y esperanzador, nunca dramático ni culpabilizante',
      'Le gustaría incorporar un elemento gráfico recurrente que funcione como sello en cada campaña de la ONG',
      'Toma como referencia campañas de organizaciones como WWF por su claridad visual y conexión emocional',
      'La marca tiene un personaje mascota que podría integrarse en la identidad de forma sutil y cariñosa',
      'Quiere que el diseño transmita calidez y cercanía, como si cada animal tuviera su propia historia',
    ],
  },
  wellness: {
    scenarios: [
      { need: 'El centro necesita renovar su imagen para atraer a un público más amplio sin perder la esencia serena que define el espacio', goal: 'Comunicar tranquilidad y equilibrio, y conseguir que el cliente asocie la marca con bienestar y cuidado personal' },
      { need: 'El cliente lanza un nuevo servicio (clase, tratamiento, taller) y necesita materiales que lo comuniquen a su comunidad actual', goal: 'Transmitir cuidado y profesionalismo, y lograr que los clientes actuales prueben el nuevo servicio y lo recomienden' },
      { need: 'El centro quiere diferenciarse de otros estudios del barrio que usan un lenguaje visual muy parecido con los mismos clichés de calm y zen', goal: 'Crear una identidad propia serena y reconocible que transmita la experiencia real del centro, no un cliché de bienestar' },
      { need: 'El cliente necesita una imagen más profesional para presentar a empresas servicios de bienestar corporativo y planes para empleados', goal: 'Constrir confianza y profesionalismo, y conseguir que las empresas contraten planes de bienestar para sus equipos' },
      { need: 'El centro necesita una landing page y plantillas para redes que acompañen su crecimiento y faciliten la inscripción online', goal: 'Comunicar equilibrio y accesibilidad, y conseguir que nuevos clientes se inscriban a clases o tratamientos online' },
    ],
    deliverables: [
      { name: 'Diseño de logotipo', details: ['versión principal, versiones secundarias y versión simplificada para uso en web y señalización del centro', 'logotipo en versión horizontal y vertical con variantes en color, blanco y negro para web y papelería', 'logotipo con símbolo y versión con tipografía sola para usos en redes, web y firmas de correo'] },
      { name: 'Identidad visual completa', details: ['sistema visual con paleta, tipografías, iconografía y elementos gráficos de apoyo para web y señalización', 'sistema visual coherente con paleta, tipografías y reglas de aplicación en web, redes y espacio físico', 'sistema visual amplio con paleta primaria y secundaria, tipografías y patrones gráficos para el centro y la web'] },
      { name: 'Manual de identidad de marca', details: ['manual con normas de uso del logo, color, tipografía y aplicaciones básicas en web y señalización', 'manual completo con normativa de marca, usos correctos e incorrectos y aplicaciones en web, redes y local', 'manual en versión digital con normativa detallada y ejemplos de aplicación en el espacio físico y la web'] },
      { name: 'Diseño de página web landing page', details: ['landing page con hero, clases o servicios y formulario de inscripción', 'landing page responsive con secciones de servicios, testimonios y llamada a la acción para reservar', 'landing page para campaña de captación con planes, precios y formulario de contacto'] },
      { name: 'Diseño de plantillas para redes sociales', details: ['plantillas para Instagram, Facebook y stories con variantes para horarios, tips y novedades', 'plantillas editables para Instagram y LinkedIn con versiones para anuncios y publicaciones orgánicas', 'plantillas para Instagram, stories y reels con variantes para clases, testimonios y promociones'] },
      { name: 'Carruseles educativos para Instagram', details: ['carruseles sobre beneficios de la práctica y tips de bienestar con estilo coherente con la marca', 'serie de cuatro carruseles sobre los servicios del centro con portada, desarrollo y cierre', 'carruseles con plantilla base y variantes para que el equipo pueda reutilizarlas con sus contenidos'] },
      { name: 'Papelería corporativa', details: ['tarjetas de visita, hojas membretadas y sobres con normativa de marca', 'tarjetas, hoja membretada, sobre y carpeta corporativa con aplicaciones de marca', 'papelería básica: tarjetas y hoja membretada con dos variantes de uso'] },
      { name: 'Carteles y vallas publicitarias', details: ['cartel A2 y banner para escaparate del centro con variantes para promociones de temporada', 'carteles de distintos formatos para campaña en vía pública y en el centro', 'valla publicitaria y cartel para punto de venta con versión para promoción de servicios'] },
      { name: 'Diseño de señalización y rotulación', details: ['señalización interior del centro con pictogramas y tipografía coherente con la marca', 'rotulación de escaparate y señalética interior del centro con sistema sereno', 'señalética exterior e interior con sistema de pictogramas para los espacios del centro'] },
      { name: 'Diseño de firma de correo y plantillas de presentación', details: ['plantilla de presentación editable y firma de correo para todo el equipo', 'plantilla de propuesta comercial y firma de correo con variantes por cargo', 'plantilla de presentación de servicios y firma de correo con manual de uso'] },
    ],
    constraints: [
      'La paleta debe transmitir calma; evitar colores demasiado saturados o agresivos que rompan la atmósfera del centro',
      'El diseño debe ser accesible y cumplir con contrastes mínimos para inclusión',
      'La señalización debe ser clara y funcional para espacios de circulación tranquila',
      'Priorizar formatos digitales sobre impresión, ya que el centro se promueve principalmente online',
      'La identidad debe funcionar en el espacio físico del centro y en materiales digitales coherente con la atmósfera',
    ],
    additionals: [
      'La marca se asocia con la naturaleza y le gustaría incluir texturas orgánicas en el sistema visual',
      'Sus valores principales son el equilibrio, la atención personal y el respeto por el cuerpo',
      'El tono de comunicación es sereno y acogedor, nunca comercial ni urgente',
      'Toma como referencia marcas como Aesop por su minimalismo y atención al detalle sensorial',
      'Quiere que el diseño transmita quietud, como si el espacio mismo fuera una pausa en el día',
      'Le gustaría incorporar un elemento gráfico recurrente que evoque respiración o movimiento pausado',
    ],
  },
  services: {
    scenarios: [
      { need: 'El estudio o agencia necesita profesionalizar su marca para competir por proyectos más grandes y presentarse a clientes de mayor envergadura', goal: 'Constrir confianza y autoridad, y conseguir que los clientes consideren a la marca como referente del sector' },
      { need: 'El cliente quiere diferenciarse de la competencia local que usa un lenguaje visual similar y le hace perder oportunidades', goal: 'Crear una identidad propia que comunique experiencia y calidad, y diferencie a la marca al instante en propuestas y redes' },
      { need: 'El negocio lanza un nuevo servicio y necesita materiales que lo presenten a clientes potenciales en presentaciones y en redes', goal: 'Transmitir profesionalismo y creatividad, y lograr que los clientes soliciten una propuesta o agenden una reunión' },
      { need: 'El cliente necesita una imagen que funcione tanto en presentaciones a clientes como en redes sociales y en la web', goal: 'Comunicar rigor y creatividad, y conseguir que la marca se reconozca por su calidad y propuesta en todos los canales' },
      { need: 'El estudio o agencia creció de forma orgánica y necesita unificar su imagen en todos los canales para parecer más grande y profesional', goal: 'Profesionalizar la marca con un sistema visual coherente que transmita experiencia y confianza en propuestas, web y redes' },
      { need: 'El cliente prepara una campaña de captación con fechas límite ajustadas para conseguir nuevos proyectos antes de fin de temporada', goal: 'Transmitir audacia y capacidad, y conseguir que nuevos clientes contacten durante la campaña y pidan propuesta' },
    ],
    deliverables: [
      { name: 'Diseño de logotipo', details: ['versión principal, versiones secundarias y versión simplificada para uso en web y presentaciones', 'logotipo en versión horizontal y vertical con variantes en color, blanco y negro para propuestas y web', 'logotipo con símbolo y versión con tipografía sola para usos en redes, web y firmas de correo'] },
      { name: 'Identidad visual completa', details: ['sistema visual con paleta, tipografías, iconografía y elementos gráficos de apoyo para web y presentaciones', 'sistema visual coherente con paleta, tipografías y reglas de aplicación en web, propuestas y redes', 'sistema visual amplio con paleta primaria y secundaria, tipografías y patrones gráficos para web y papelería'] },
      { name: 'Manual de identidad de marca', details: ['manual con normas de uso del logo, color, tipografía y aplicaciones básicas en web y presentaciones', 'manual completo con normativa de marca, usos correctos e incorrectos y aplicaciones en propuestas, web y redes', 'manual en versión digital con normativa detallada y ejemplos de aplicación en presentaciones y piezas reales'] },
      { name: 'Diseño de página web landing page', details: ['landing page con hero, servicios y formulario de contacto para solicitar propuesta', 'landing page responsive con secciones de servicios, proyectos y llamada a la acción', 'landing page para campaña de captación con casos de éxito y formulario de contacto'] },
      { name: 'Diseño de firma de correo y plantillas de presentación', details: ['plantilla de presentación editable y firma de correo para todo el equipo', 'plantilla de propuesta comercial y firma de correo con variantes por cargo', 'plantilla de presentación de servicios y firma de correo con manual de uso'] },
      { name: 'Diseño de plantillas para redes sociales', details: ['plantillas para Instagram, LinkedIn y stories con variantes para proyectos y servicios', 'plantillas editables para Instagram y LinkedIn con versiones para anuncios y publicaciones orgánicas', 'plantillas para Instagram, stories y reels con variantes para casos, tips y promociones'] },
      { name: 'Diseño de portadas y thumbnails para Reels', details: ['portadas para Reels con plantilla reutilizable y variantes para behind-the-scenes y proyectos', 'thumbnails para videos con estilo coherente y tipografía legible en tamaño pequeño', 'plantillas de portada para Reels y YouTube con variantes para series y videos sueltos'] },
      { name: 'Papelería corporativa', details: ['tarjetas de visita, hojas membretadas y sobres con normativa de marca', 'tarjetas, hoja membretada, sobre y carpeta corporativa con aplicaciones de marca', 'papelería básica: tarjetas y hoja membretada con dos variantes de uso'] },
      { name: 'Diseño de banner para campaña de lanzamiento', details: ['banners web y redes para campaña de captación con variantes por formato', 'kit de banners para web, LinkedIn y email con variantes para anuncios y orgánicos', 'banners para landing page y redes con countdown y llamada a la acción para la campaña'] },
      { name: 'Ilustraciones personalizadas para la marca', details: ['serie de cinco ilustraciones para web y redes con temática de servicios y proyectos', 'ilustración principal para hero de web y versiones secundarias para secciones de servicios', 'set de iconos ilustrados para web y presentaciones con estilo coherente con la marca'] },
    ],
    constraints: [
      'La identidad debe funcionar en presentaciones a clientes (diapositivas) y en redes sociales con la misma coherencia',
      'Priorizar formatos digitales: el cliente se promueve principalmente online y por propuestas comerciales',
      'El diseño debe ser accesible y cumplir con contrastes mínimos para inclusión',
      'Las plantillas deben ser editables por el equipo sin conocimientos avanzados de diseño',
      'La tipografía debe ser legible en presentaciones proyectadas y en materiales digitales',
      'Sin limitaciones especiales: el cliente da libertad creativa total y confía en la propuesta del diseñador',
    ],
    additionals: [
      'La marca se inspira en el diseño suizo, con retículas claras y tipografía precisa',
      'Sus valores principales son el rigor, la creatividad y la atención al detalle en cada proyecto',
      'El tono de comunicación es profesional pero cercano, nunca distante ni frío',
      'Le importa mucho la tipografía y le gustaría una solución personalizada o poco común',
      'Quiere que el diseño transmita solidez y creatividad al mismo tiempo',
      'Toma como referencia estudios premiados del sector y quiere un resultado de nivel comparable',
    ],
  },
  retail: {
    scenarios: [
      { need: 'La tienda necesita renovar su imagen para atraer a un público más joven del barrio sin perder a su clientela habitual', goal: 'Transmitir frescura y contemporaneidad, y lograr que la marca se reconozca como un espacio vivo y curado' },
      { need: 'El cliente lanza una línea de productos propia y necesita packaging e imagen de la línea que comunique su cuidado y singularidad', goal: 'Comunicar la calidad y el cuidado del producto, y conseguir que el cliente lo perciba como una propuesta única' },
      { need: 'La tienda quiere combinar venta física con online y necesita una imagen que funcione en ambos canales con coherencia', goal: 'Crear una identidad coherente que transmita la experiencia de la tienda en el espacio físico y digital' },
      { need: 'El negocio quiere profesionalizar su marca porque ha crecido sin una imagen definida y ahora programa eventos y talleres', goal: 'Constrir una identidad cálida y reconocible que invite al cliente a entrar, descubrir y participar' },
      { need: 'El cliente necesita materiales para redes y escaparate que comuniquen la programación de eventos y novedades de cada mes', goal: 'Transmitir cercanía y cultura, y conseguir que el público siga la tienda y asista a sus eventos y talleres' },
    ],
    deliverables: [
      { name: 'Diseño de logotipo', details: ['versión principal, versiones secundarias y versión simplificada para uso en escaparate y redes', 'logotipo en versión horizontal y vertical con variantes en color, blanco y negro para bolsa y web', 'logotipo con símbolo y versión con tipografía sola para usos en etiquetas, redes y escaparate'] },
      { name: 'Identidad visual completa', details: ['sistema visual con paleta, tipografías, iconografía y elementos gráficos de apoyo para escaparate y redes', 'sistema visual coherente con paleta, tipografías y reglas de aplicación en tienda, web y redes', 'sistema visual amplio con paleta primaria y secundaria, tipografías y patrones gráficos para packaging y papelería'] },
      { name: 'Manual de identidad de marca', details: ['manual con normas de uso del logo, color, tipografía y aplicaciones básicas en escaparate y redes', 'manual completo con normativa de marca, usos correctos e incorrectos y aplicaciones en tienda, web y eventos', 'manual en versión digital con normativa detallada y ejemplos de aplicación en bolsas, etiquetas y escaparate'] },
      { name: 'Diseño de plantillas para redes sociales', details: ['plantillas para Instagram, Facebook y stories con variantes para novedades, eventos y talleres', 'plantillas editables para Instagram y Facebook con versiones para anuncios y publicaciones orgánicas', 'plantillas para Instagram, stories y reels con variantes para novedades, citas y promociones'] },
      { name: 'Carruseles educativos para Instagram', details: ['carruseles sobre cuidado de plantas o recomendaciones de lectura con estilo coherente con la marca', 'serie de cuatro carruseles sobre los productos y eventos de la tienda con portada, desarrollo y cierre', 'carruseles con plantilla base y variantes para que el equipo pueda reutilizarlas con sus contenidos'] },
      { name: 'Carteles y vallas publicitarias', details: ['cartel A2 y banner para escaparate con variantes para eventos y novedades del mes', 'carteles de distintos formatos para campaña en vía pública y en la entrada de la tienda', 'valla publicitaria y cartel para escaparate con versión para promoción de eventos'] },
      { name: 'Diseño de señalización y rotulación', details: ['señalización interior de la tienda con pictogramas y tipografía coherente con la marca', 'rotulación de escaparate y señalética interior de la tienda con sistema cálido', 'señalética exterior e interior con sistema de pictogramas para los espacios de la tienda'] },
      { name: 'Diseño de packaging y etiquetas', details: ['diseño de bolsa, etiqueta y sello para línea de productos con variantes por referencia', 'packaging primario y secundario con etiquetas de producto y cuidado', 'diseño de envoltorio y etiqueta con versiones para distintos productos de la tienda'] },
      { name: 'Diseño de página web landing page', details: ['landing page con hero, productos destacados y formulario de contacto', 'landing page responsive con secciones de producto, eventos y llamada a la acción', 'landing page para tienda online con grilla de producto y checkout'] },
      { name: 'Ilustraciones personalizadas para la marca', details: ['serie de cinco ilustraciones para web y redes con temática de producto y espacio', 'ilustración principal para hero de web y versiones secundarias para secciones de producto', 'set de iconos ilustrados para web y etiquetas con estilo coherente con la marca'] },
      { name: 'Papelería corporativa', details: ['tarjetas de visita, hojas membretadas y sobres con normativa de marca', 'tarjetas, hoja membretada, sobre y bolsa corporativa con aplicaciones de marca', 'papelería básica: tarjetas y hoja membretada con dos variantes de uso'] },
    ],
    constraints: [
      'El diseño debe funcionar en escaparate (gran formato) y en redes sociales (formato pequeño) con la misma coherencia',
      'Presupuesto ajustado: priorizar formatos digitales sobre impresión y optimizar el número de piezas impresas',
      'La señalización debe ser clara y funcional para el espacio de la tienda',
      'El packaging debe usar materiales sostenibles y optimizar el papel reciclado en bolsas y envoltorios',
      'La identidad debe poder escalar a una posible venta online en el futuro sin rediseñar el sistema',
    ],
    additionals: [
      'La marca se asocia con la naturaleza y le gustaría incluir texturas orgánicas en el sistema visual',
      'Sus valores principales son la cercanía, la curaduría y el respeto por el entorno y los productores',
      'El tono de comunicación es cercano y conversacional, como un vecino que recomienda algo bueno',
      'Le gustaría incorporar un elemento gráfico recurrente que funcione como sello en bolsas, etiquetas y redes',
      'Toma como referencia tiendas independientes premiadas por su identidad cálida y cuidada',
      'La tienda tiene un espacio acogedor y quiere que la identidad visual refleje esa atmósfera en todos los soportes',
    ],
  },
};

export interface DifficultyLevel {
  value: 'basico' | 'intermedio' | 'avanzado';
  label: string;
}

export const DIFFICULTIES: DifficultyLevel[] = [
  { value: 'basico', label: 'Básico' },
  { value: 'intermedio', label: 'Intermedio' },
  { value: 'avanzado', label: 'Avanzado' },
];

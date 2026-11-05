import { STYLES } from './creative-data';

export interface StyleReference {
  description: string;
  colors: string[];
  elements: string[];
  photoIds: number[];
}

export const STYLE_REFERENCES: Record<(typeof STYLES)[number], StyleReference> = {
  'Art Nouveau': {
    description:
      'Líneas orgánicas y fluidas inspiradas en la naturaleza, con formas vegetales que se enroscan y decoran cada elemento. Transmite elegancia y movimiento natural.',
    colors: ['#3b6e4f', '#d4af37', '#f2e6c9', '#8a6b3d'],
    elements: ['Líneas curvas y sinuosas tipo zarcillo', 'Motivos florales y vegetales estilizados', 'Tipografía de trazo fluido integrada en el diseño'],
    photoIds: [26796497, 35025579, 40287188, 39069100, 6593532, 6593572],
  },
  'Art Déco': {
    description:
      'Geometría elegante con simetría, líneas doradas y acabados lujosos. Inspirado en los años veinte, combina ornamentos con formas limpias.',
    colors: ['#1c1c1c', '#d4af37', '#f2e6c9', '#0e3d38'],
    elements: ['Patrones geométricos en abanico y zigzag', 'Dorados y metales pulidos', 'Vidrieras y simetría estricta'],
    photoIds: [16398768, 33684483, 12026673, 27926537, 35682319, 40067136],
  },
  'Surrealismo onírico': {
    description:
      'Escenas imposibles con objetos flotando y perspectivas extrañas. Busca provocar una sensación de sueño o de algo que no encaja.',
    colors: ['#3b3934', '#fdd5c4', '#5e8fa3', '#f2c94c'],
    elements: ['Objetos flotando sin peso', 'Escenas que mezclan lo real y lo irreal', 'Atmósferas suaves y brumosas'],
    photoIds: [39033732, 40419216, 34252704, 7700175, 10109585, 28447921],
  },
  'Cubismo': {
    description:
      'Formas fragmentadas en planos geométricos que muestran varios ángulos al mismo tiempo. Descompone la realidad en facetas y la recompone con un ritmo visual propio.',
    colors: ['#8a6b3d', '#1a1915', '#a53620', '#f2e6c9'],
    elements: ['Planos geométricos superpuestos', 'Múltiples puntos de vista en una sola figura', 'Paleta de tonos tierra y grises'],
    photoIds: [40334021, 7120424, 297394, 39824908, 3964416, 3964463],
  },
  'Expresionismo con textura': {
    description:
      'Pinceladas gruesas, colores intensos y texturas visibles. Prioriza la emoción sobre la forma exacta.',
    colors: ['#e85d3f', '#ffc02e', '#1f5f8b', '#1a1915'],
    elements: ['Pinceladas gruesas y visibles', 'Colores intensos y contrastados', 'Textura de pintura sobre lienzo'],
    photoIds: [1774301, 1994838, 30925664, 16397831, 30874918, 16669076],
  },
  'Pop Art': {
    description:
      'Colores brillantes y saturados con imágenes de la cultura popular,反复ación de iconos y puntos de media tinta. Toma elementos cotidianos y los eleva a arte.',
    colors: ['#ff3366', '#ffd153', '#3dae9c', '#1a1915'],
    elements: ['Colores planos y muy saturados', 'Puntos Benday y media tinta', 'Repetición de iconos cotidianos'],
    photoIds: [34117641, 9974285, 13312402, 15314660, 4113631, 4586864],
  },
  'Psicodelia de los 60': {
    description:
      'Tipografía distorsionada, colores vibrantes y patrones circulares que se mueven. La composición envuelve al espectador en un viaje visual.',
    colors: ['#ff3366', '#f39b25', '#22917f', '#3b3934'],
    elements: ['Tipografía curva y distorsionada', 'Patrones circulares y espirales', 'Colores complementarios de alto contraste'],
    photoIds: [8321234, 10415669, 38829375, 33011273, 34543039, 30441590],
  },
  'Low Poly': {
    description:
      'Composiciones formadas por polígonos planos con sombreado simple. Las formas se ven facetadas y geométricas, con una estética limpia y moderna.',
    colors: ['#6fcbbb', '#17776a', '#ffc02e', '#fff9e6'],
    elements: ['Polígonos planos y facetados', 'Sombreado en un solo tono por cara', 'Figuras geométricas compactas'],
    photoIds: [12604727, 9977654, 13129482, 13129480, 39407077, 28947851],
  },
  'Pixel Art': {
    description:
      'Composiciones construidas píxel a píxel con paletas limitadas, evocando los videojuegos de 8 y 16 bits. Cada cuadrado cuenta.',
    colors: ['#22917f', '#e85d3f', '#ffc02e', '#1a1915'],
    elements: ['Cuadrícula de píxeles visibles', 'Paleta de color limitada', 'Sin anti-aliasing ni degradados'],
    photoIds: [12356072, 37878824, 35247741, 2708981, 2728255, 28920048],
  },
  'Arte naíf': {
    description:
      'Composiciones simples y coloridas con perspectiva plana y figuras esquemáticas. Transmite inocencia y frescura con un trazo sin pretensión técnica.',
    colors: ['#e85d3f', '#f5a80b', '#22917f', '#1a1915'],
    elements: ['Perspectiva plana sin profundidad', 'Colores planos y vivos', 'Trazo simple sin gradiente'],
    photoIds: [37054376, 12429952, 29625840, 37302868, 37000723, 18501093],
  },
  'Ukiyo-e': {
    description:
      'Estampas japonesas con líneas precisas, colores planos y composiciones asimétricas. Representa escenas de la vida cotidiana y la naturaleza con un enfoque decorativo.',
    colors: ['#f2e6c9', '#a53620', '#0e3d38', '#1a1915'],
    elements: ['Líneas de contorno finas y precisas', 'Colores planos sin degradados', 'Composiciones asimétricas con espacio negativo'],
    photoIds: [38164607, 5746242, 10345616, 37605546, 20704788, 28914618],
  },
  'Collage digital': {
    description:
      'Composiciones que mezclan imágenes, texturas y elementos visuales de distintos orígenes en una sola pieza. Combina recorte, superposición y tratamiento digital.',
    colors: ['#3b3934', '#e85d3f', '#5e8fa3', '#f2c94c'],
    elements: ['Capas superpuestas con bordes visibles', 'Mezcla de fotografía, textura e ilustración', 'Composiciones surrealistas por yuxtaposición'],
    photoIds: [25626506, 9241895, 25626525, 4580532, 8714672, 4965820],
  },
  'Ilustración editorial': {
    description:
      'Ilustraciones que acompañan y amplían un texto, con composiciones pensadas para comunicar una idea de forma clara y simbólica. Usa metáforas visuales y un estilo reconocible.',
    colors: ['#1a1915', '#f2f0eb', '#e85d3f', '#3dae9c'],
    elements: ['Metáforas visuales que sintetizan una idea', 'Paleta limitada y composición clara', 'Trazo reconocible y estilo de autor'],
    photoIds: [31666147, 8118035, 23436817, 17352878, 13198554, 19501794],
  },
  'Ilustración infantil': {
    description:
      'Colores alegres, formas redondeadas y personajes amigables. Diseñada para captar la atención de los más pequeños con un tono cálido y cercano.',
    colors: ['#ffc4b0', '#6fcbbb', '#ffd153', '#c94527'],
    elements: ['Formas redondeadas y suaves', 'Colores vivos pero no agresivos', 'Personajes expresivos y simpáticos'],
    photoIds: [33318131, 7269539, 5624377, 29737096, 31259040, 6255768],
  },
  'Ilustración vectorial': {
    description:
      'Composiciones de formas planas y colores sólidos creadas con curvas matemáticas. Limpia, escalable y moderna, con un acabado nítido.',
    colors: ['#e85d3f', '#3dae9c', '#f5a80b', '#1a1915'],
    elements: ['Formas planas sin degradados', 'Curvas precisas y limpias', 'Colores sólidos de áreas definidas'],
    photoIds: [5849570, 5841955, 5841800, 5841802, 5841798, 6809640],
  },
  'Ilustración retro': {
    description:
      'Estética de los años 80 y 90 con neones, retículas y degradados que evocan la era del synthwave y los primeros diseños digitales.',
    colors: ['#ff3366', '#3dae9c', '#ffc02e', '#1a1915'],
    elements: ['Neones y degradados sobre fondo oscuro', 'Retículas en perspectiva y líneas de horizonte', 'Tipografía pixelada o de época'],
    photoIds: [10194139, 8108656, 12637789, 39531609, 11794335, 12641110],
  },
  'Estilo cartoon': {
    description:
      'Personajes de líneas exageradas, colores planos y expresiones amplias. Un trazo vivo y divertido que prioriza la legibilidad y la expresión.',
    colors: ['#ff3366', '#3dae9c', '#ffc02e', '#1a1915'],
    elements: ['Líneas de contorno gruesas', 'Expresiones faciales exageradas', 'Colores planos y brillantes'],
    photoIds: [33568904, 36921363, 632036, 10474131, 9213717, 38190728],
  },
  'Estética vaporwave': {
    description:
      'Degradados pastel, nubes suaves y reflejos rosados y celestes. Evoca la nostalgia digital de los años noventa con una atmósfera onírica.',
    colors: ['#ffc4b0', '#b8e0ea', '#d7b8f0', '#fff3ef'],
    elements: ['Degradados rosa y celeste', 'Elementos retro digitales', 'Sol, luna o nubes suaves'],
    photoIds: [11592813, 6581185, 7130567, 2088142, 5997863, 28812448],
  },
  'Grabado y linograbado': {
    description:
      'Texturas de tinta irregular y formas talladas con bordes marcados. El resultado tiene un carácter manual y de impresión artesanal.',
    colors: ['#1a1915', '#f2e6c9', '#a53620', '#2f5d62'],
    elements: ['Líneas talladas con textura irregular', 'Tinta sobre papel áspero', 'Pocos colores planos'],
    photoIds: [57565, 6980428, 6980575, 9017624, 6980429, 31092838],
  },
  'Acuarela': {
    description:
      'Manchas de color translúcidas con mucho papel en blanco. Los bordes se difuminan de forma natural y la composición deja espacio para respirar.',
    colors: ['#f4e9dc', '#8cb8c7', '#e0a894', '#5b7f8c'],
    elements: ['Pinceladas suaves y transparentes', 'Bordes irregulares y difuminados', 'Mucho espacio en blanco'],
    photoIds: [4006631, 24389655, 13091099, 6725138, 28936904, 5152829],
  },
  'Gouache': {
    description:
      'Pintura opaca y cubriente con colores intensos y matte. Permite capas planas y texturas densas, entre la acuarela y el óleo.',
    colors: ['#e85d3f', '#1f5f8b', '#f5a80b', '#1a1915'],
    elements: ['Capas opacas y cubrientes', 'Acabado mate sin brillo', 'Bordes definidos pero con textura de pincel'],
    photoIds: [8189143, 31052373, 9175398, 1769524, 6925015, 4178692],
  },
  'Tinta y plumilla': {
    description:
      'Trazos finos y precisos de tinta negra con líneas cruzadas, puntos y texturas construidas a mano. Alto contraste y gran detalle.',
    colors: ['#1a1915', '#f2f0eb', '#5b7f8c', '#a53620'],
    elements: ['Líneas finas de grosor variable', 'Tramas de puntos y líneas cruzadas (hatching)', 'Alto contraste blanco y negro'],
    photoIds: [15100360, 9184640, 12715960, 33306048, 19759628, 9065294],
  },
  'Dibujo a lápiz': {
    description:
      'Trazos de grafito con sombreado gradual y textura de grano. Transmite intimidad y proceso, con un acabado artesanal y expresivo.',
    colors: ['#1a1915', '#f2f0eb', '#8a8a8a', '#5b7f8c'],
    elements: ['Sombreado gradual con grafito', 'Textura de grano visible', 'Trazo expresivo y a mano alzada'],
    photoIds: [7608653, 10816482, 7283166, 7283168, 7608654, 4611246],
  },
  'Estética de cómic': {
    description:
      'Páginas con viñetas, líneas de acción y onomatopeyas. Contornos negros, colores planos y narrativa visual secuencial.',
    colors: ['#1a1915', '#e85d3f', '#3dae9c', '#ffd153'],
    elements: ['Viñetas con línea de contorno negra', 'Onomatopeyas y líneas de acción', 'Colores planos con sombreado de trama'],
    photoIds: [12113866, 34447374, 7524996, 30484348, 7809123, 4142267],
  },
  'Fantasía y arte conceptual': {
    description:
      'Paisajes imaginarios, criaturas y mundos fantásticos con atmósfera cinematográfica. Combina pintura digital, luz dramática y composición épica.',
    colors: ['#0e3d38', '#a53620', '#f2c94c', '#1a1915'],
    elements: ['Atmósfera con luz dramática y niebla', 'Pintura digital con pinceladas texturizadas', 'Composiciones épicas y paisajes imaginarios'],
    photoIds: [12966752, 13778984, 10109585, 12315778, 38570415, 15575235],
  },
  'Bauhaus geométrico': {
    description:
      'Formas básicas como círculos, cuadrados y triángulos organizados con precisión. Usa colores primarios y una composición funcional.',
    colors: ['#e11d48', '#f5a80b', '#22917f', '#1a1915'],
    elements: ['Círculos, cuadrados y triángulos', 'Colores primarios sin degradados', 'Composición funcional y ordenada'],
    photoIds: [39725693, 37272209, 16401927, 39048087, 12536340, 7508776],
  },
  'Collage de papel recortado': {
    description:
      'Formas planas recortadas a mano y superpuestas, con bordes visibles y colores vivos. Transmite un aire artesanal y lúdico.',
    colors: ['#e85d3f', '#f5a80b', '#22917f', '#1a1915'],
    elements: ['Figuras recortadas con bordes visibles', 'Capas superpuestas de papel', 'Contrastes de color intensos'],
    photoIds: [4965820, 4965822, 4965828, 4965817, 4965816, 14122051],
  },
  'Ilustración de línea gruesa': {
    description:
      'Trazos de grosor constante y contornos firmes sobre fondos claros. Las figuras son simples y expresivas, con poco sombreado.',
    colors: ['#1a1915', '#f2f0eb', '#f8775a', '#3dae9c'],
    elements: ['Contornos negros de grosor uniforme', 'Figuras simplificadas', 'Un solo color de acento'],
    photoIds: [15269511, 15269510, 28879429, 9065294, 10474401, 33568904],
  },
  'Cartel vintage de viaje': {
    description:
      'Tipografía redondeada, paisajes simplificados y colores de época. Recuerda a los carteles que anunciaban destinos en el siglo pasado.',
    colors: ['#f5a80b', '#135f56', '#f2e6c9', '#c94527'],
    elements: ['Paisajes simplificados en capas', 'Tipografía con carácter de época', 'Sol, montañas y cielos planos'],
    photoIds: [31376933, 28843275, 31315872, 28450852, 33314643, 35066322],
  },
  'Dibujo botánico científico': {
    description:
      'Láminas detalladas de plantas con trazo preciso y anotaciones. Combina el rigor científico con una estética clásica.',
    colors: ['#f2f0eb', '#3b6e4f', '#8a6b3d', '#1a1915'],
    elements: ['Trazos finos y muy detallados', 'Plantas vistas desde varios ángulos', 'Fondos claros tipo cuaderno'],
    photoIds: [6034155, 4641692, 6966593, 36910690, 9350674, 6966592],
  },
};

export function styleImageUrl(photoId: number): string {
  return `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`;
}

export function pinterestSearchUrl(style: string): string {
  return `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(style)}`;
}

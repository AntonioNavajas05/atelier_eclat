const PANDORA_IMAGES = {
  roseCharm:
    "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw14943f6f/productimages/main_rect_center/793673C01_RGB.jpg?bgcolor=F7F7F7&q=70&sfrm=png&sw=384",
  roseCharmModel:
    "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw49a3a52c/productimages/modeldetailshot_rect/Q125_A_PDP_MODEL_SINGLE_27_1x1_RGB_charm.jpg?bgcolor=F7F7F7&q=70&sfrm=png&sw=384",
  bangle:
    "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw4d27b33a/productimages/main_rect_center/590713_RGB.jpg?bgcolor=F7F7F7&q=70&sfrm=png&sw=384",
  bangleModel:
    "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw02fae055/productimages/modeldetailshot_rect/590713_ABC123_MODEL_eCOM_02_RGB.jpg?bgcolor=F7F7F7&q=70&sfrm=png&sw=384",
  snakeHeartNecklace:
    "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwcd21d4b3/productimages/main_rect_center/393091C00_RGB.jpg?bgcolor=F5F5F5&sfrm=png&sh=1200&sm=fit&sw=1200",
  snakeHeartNecklaceBack:
    "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw9f4b6095/productimages/singlepackshot_rect_center/393091C00_V2_RGB.jpg?bgcolor=F5F5F5&sfrm=png&sh=1200&sm=fit&sw=1200",
  pinkHeartCharm:
    "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw9b20a9ae/productimages/main_rect_center/794424C01_RGB.jpg?bgcolor=F7F7F7&q=70&sfrm=png&sw=384",
  pinkHeartCharmBundle:
    "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw193303c5/productimages/singlepackshot_rect_center/794424C01_V3_RGB.jpg?bgcolor=F7F7F7&q=70&sfrm=png&sw=384",
  pinkHeartEarrings:
    "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwe94bf373/productimages/main_rect_center/298427C02_RGB.jpg?bgcolor=F7F7F7&q=70&sfrm=png&sw=384",
  pinkHeartEarringsModel:
    "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwe88a5b80/productimages/modeldetailshot_rect/Q225_C_PDP_Model_Single_40_1x1_RGB_earring.jpg?bgcolor=F7F7F7&q=70&sfrm=png&sw=384",
  pinkHeartNecklace:
    "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dwd0eedd45/productimages/main_rect_center/388425C02_RGB.jpg?bgcolor=F7F7F7&q=70&sfrm=png&sw=384",
  pinkHeartNecklaceModel:
    "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw25dc6486/productimages/modeldetailshot_rect/2025Q2C_collection_moments_go_ac_tp_pdp_model_trendinglane_12_1x1_RGB_necklace.jpg?bgcolor=F7F7F7&q=70&sfrm=png&sw=384",
  blackBowRing:
    "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw062eae95/productimages/main_rect_center/193510C03_RGB.jpg?bgcolor=F7F7F7&q=70&sfrm=png&sw=384",
  blackBowRingModel:
    "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw112e711a/productimages/modeldetailshot_rect/2025Q3E_collection_timeless_go_ac_tp_pdp_model_trendinglane_12_1x1_RGB_ring.jpg?bgcolor=F7F7F7&q=70&sfrm=png&sw=384",
  sparklingHeartCharm:
    "https://es.pandora.net/dw/image/v2/BFCR_PRD/on/demandware.static/-/Sites-pandora-master-catalog/default/dw7395dcb2/productimages/modeldetailshot_rect/2026Q1A_collection_moments_go_con_ic_pdp_model_single_05_1x1_RGB_charm.jpg?bgcolor=F7F7F7&q=70&sfrm=png&sw=384"
};

const PRODUCTS = [
  {
    id: "pack-pandora-cadena-charm",
    name: "Oferta Pandora Cadena de Serpiente + Charm Corazon Rosa",
    brand: "Pandora",
    sourceUrl: "https://es.pandora.net/es/collares/cadenas/collar-de-cadena-de-serpiente-cierre-de-corazon-de-pandora-moments/393091C00.html",
    category: "sets de regalo",
    price: 169,
    originalPrice: 184,
    badge: "Oferta pack",
    bestSeller: true,
    isNew: true,
    image: PANDORA_IMAGES.pinkHeartCharmBundle,
    bundleImages: [PANDORA_IMAGES.snakeHeartNecklace, PANDORA_IMAGES.roseCharm],
    gallery: [PANDORA_IMAGES.pinkHeartCharmBundle, PANDORA_IMAGES.snakeHeartNecklace, PANDORA_IMAGES.roseCharm],
    description:
      "Pack inspirado en la promocion Pandora: collar de cadena de serpiente con cierre de corazon y charm Corazon Rosa para crear un regalo completo.",
    material: "Plata de primera ley",
    finish: "Acabado pulido Pandora",
    size: "Collar 45 cm + charm compatible Pandora Moments",
    care: "Limpiar con pano suave y guardar por separado."
  },
  {
    id: "pandora-pulsera-rigida-logo",
    name: "Pulsera Rigida con Cierre del Logotipo",
    brand: "Pandora",
    sourceUrl: "https://es.pandora.net/es/pulsera-pandora-rigida-en-plata-de-ley/590713.html",
    category: "pulseras",
    price: 69,
    bestSeller: true,
    isNew: true,
    image: PANDORA_IMAGES.bangle,
    gallery: [PANDORA_IMAGES.bangle, PANDORA_IMAGES.bangleModel, PANDORA_IMAGES.roseCharmModel],
    description:
      "Pulsera rigida Pandora Moments en plata de primera ley, pensada para llevar sola o con tus charms favoritos.",
    material: "Plata de primera ley",
    finish: "Pulido brillante",
    size: "Tallas 15, 17, 19 y 21 cm",
    care: "Retirar antes de ducharse, nadar o dormir."
  },
  {
    id: "pandora-charm-corazon-rosa",
    name: "Charm Corazon Rosa",
    brand: "Pandora",
    sourceUrl: "https://es.pandora.net/es/charms-y-pulseras/charms/charms/charm-corazon-rosa/793673C01.html",
    category: "charms",
    price: 55,
    bestSeller: true,
    isNew: false,
    image: PANDORA_IMAGES.roseCharm,
    gallery: [PANDORA_IMAGES.roseCharm, PANDORA_IMAGES.roseCharmModel, PANDORA_IMAGES.bangle],
    description:
      "Charm Pandora en plata de primera ley con esmalte rojo aplicado en capas, una pieza simbolica y romantica.",
    material: "Plata de primera ley",
    finish: "Esmalte rojo y plata pulida",
    size: "Compatible con Pandora Moments",
    care: "Evitar el contacto directo con perfumes y cosmeticos."
  },
  {
    id: "pandora-charm-candado-corazon",
    name: "Charm Colgante Candado Corazon Ceramica Rosa",
    brand: "Pandora",
    sourceUrl: "https://es.pandora.net/es/charms/charms-colgantes/charm-colgante-candado-corazon-ceramica-rosa/794424C01.html",
    category: "charms",
    price: 89,
    badge: "Nuevo",
    bestSeller: false,
    isNew: true,
    image: PANDORA_IMAGES.pinkHeartCharm,
    gallery: [PANDORA_IMAGES.pinkHeartCharm, PANDORA_IMAGES.pinkHeartCharmBundle, PANDORA_IMAGES.sparklingHeartCharm],
    description:
      "Charm colgante Pandora en plata de primera ley con corazon de ceramica rosa, circonitas y detalle de cerradura.",
    material: "Plata de primera ley y ceramica",
    finish: "Rosa brillante con circonitas",
    size: "Charm colgante Pandora Moments",
    care: "Guardar seco y limpiar con pano no abrasivo."
  },
  {
    id: "pandora-anillo-lazo-negro",
    name: "Anillo Lazo Negro Brillante",
    brand: "Pandora",
    sourceUrl: "https://es.pandora.net/es/anillos/anillo-lazo-negro-brillante/193510C03.html",
    category: "anillos",
    price: 69,
    bestSeller: false,
    isNew: true,
    image: PANDORA_IMAGES.blackBowRing,
    gallery: [PANDORA_IMAGES.blackBowRing, PANDORA_IMAGES.blackBowRingModel, PANDORA_IMAGES.pinkHeartEarrings],
    description:
      "Anillo Pandora en plata de primera ley con lazo y cristales negros, elegante y perfecto para combinar.",
    material: "Plata de primera ley",
    finish: "Cristales negros y Pave",
    size: "Varias tallas disponibles",
    care: "Evitar golpes y guardar separado de otras piezas."
  },
  {
    id: "pandora-collar-corazon-rosa",
    name: "Collar Corazon Rosa",
    brand: "Pandora",
    sourceUrl: "https://es.pandora.net/es/collares/colgantes-y-collares/collar-corazon-rosa/388425C02-45.html",
    category: "collares",
    price: 159,
    bestSeller: true,
    isNew: true,
    image: PANDORA_IMAGES.pinkHeartNecklace,
    gallery: [PANDORA_IMAGES.pinkHeartNecklace, PANDORA_IMAGES.pinkHeartNecklaceModel, PANDORA_IMAGES.pinkHeartEarrings],
    description:
      "Collar Pandora con recubrimiento en oro rosa de 14k y gema en forma de corazon rosa para un brillo romantico.",
    material: "Recubrimiento en oro rosa de 14k",
    finish: "Gema rosa en forma de corazon",
    size: "45 cm",
    care: "Evitar humedad y guardar en estuche."
  },
  {
    id: "pandora-pendientes-corazon-rosa",
    name: "Pendientes de Boton Corazon Rosa",
    brand: "Pandora",
    sourceUrl: "https://es.pandora.net/es/pendientes/pendientes-de-boton/pendientes-de-boton-corazon-rosa/298427C02.html",
    category: "pendientes",
    price: 59,
    bestSeller: false,
    isNew: false,
    image: PANDORA_IMAGES.pinkHeartEarrings,
    gallery: [PANDORA_IMAGES.pinkHeartEarrings, PANDORA_IMAGES.pinkHeartEarringsModel, PANDORA_IMAGES.pinkHeartNecklace],
    description:
      "Pendientes Pandora de boton en plata de primera ley con gemas de corazon rosa enmarcadas por Pave.",
    material: "Plata de primera ley",
    finish: "Pave brillante y gema rosa",
    size: "Pendientes de boton",
    care: "Limpiar con pano suave despues de cada uso."
  },
  {
    id: "pandora-collar-cadena-serpiente",
    name: "Collar de Cadena de Serpiente con Cierre de Corazon",
    brand: "Pandora",
    sourceUrl: "https://es.pandora.net/es/collares/cadenas/collar-de-cadena-de-serpiente-cierre-de-corazon-de-pandora-moments/393091C00.html",
    category: "collares",
    price: 129,
    bestSeller: true,
    isNew: false,
    image: PANDORA_IMAGES.snakeHeartNecklace,
    gallery: [PANDORA_IMAGES.snakeHeartNecklace, PANDORA_IMAGES.snakeHeartNecklaceBack, PANDORA_IMAGES.pinkHeartCharmBundle],
    description:
      "Collar de cadena de serpiente Pandora Moments en plata de primera ley con cierre de corazon para combinar charms.",
    material: "Plata de primera ley",
    finish: "Cadena de serpiente brillante",
    size: "45 cm",
    care: "No tensar la cadena y guardar sin charms pesados."
  }
];

const CATEGORIES = ["pulseras", "charms", "anillos", "collares", "pendientes", "sets de regalo"];


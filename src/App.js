const { useEffect, useMemo, useState } = React;

const formatPrice = (value) =>
  new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(value);

const freeShippingThreshold = 80;
const trustPoints = ["Joyas verificadas", "Pago seguro", "Cambios faciles 30 dias", "Packaging regalo incluido"];

function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-60";
  const variants = {
    primary: "bg-[#5b2e35] text-white hover:-translate-y-0.5 hover:bg-[#6e3941] hover:shadow-soft",
    secondary:
      "border border-[#d8b878] bg-white/80 text-ink hover:-translate-y-0.5 hover:bg-white hover:shadow-soft",
    gold: "bg-[#d8b878] text-ink hover:-translate-y-0.5 hover:bg-[#c9a861] hover:shadow-soft",
    ghost: "text-ink hover:bg-sand/55"
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Header({ page, setPage, cartCount, wishlistCount }) {
  const [open, setOpen] = useState(false);
  const nav = [
    ["home", "Inicio"],
    ["catalog", "Catalogo"],
    ["account", "Mi cuenta"],
    ["wishlist", `Wishlist ${wishlistCount ? `(${wishlistCount})` : ""}`],
    ["cart", `Carrito ${cartCount ? `(${cartCount})` : ""}`]
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#ead3d4]/60 bg-white/90 backdrop-blur-xl">
      <div className="bg-[#5b2e35] px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white">
        Boutique de joyeria seleccionada - envio cuidado - regalo listo desde el primer clic
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={() => setPage("home")} className="focus-ring text-left">
          <span className="serif block text-3xl font-bold tracking-normal">Atelier Eclat</span>
          <span className="text-xs uppercase tracking-[0.28em] text-rosewood">bijoux boutique</span>
        </button>
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map(([key, label]) => (
            <Button key={key} variant={page === key ? "secondary" : "ghost"} onClick={() => setPage(key)}>
              {label}
            </Button>
          ))}
        </nav>
        <button
          className="focus-ring rounded-full border border-champagne/40 px-4 py-2 text-sm font-semibold lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Abrir menu"
        >
          Menu
        </button>
      </div>
      {open && (
        <div className="border-t border-champagne/20 px-4 pb-4 lg:hidden">
          <div className="grid gap-2">
            {nav.map(([key, label]) => (
              <Button
                key={key}
                variant={page === key ? "secondary" : "ghost"}
                onClick={() => {
                  setPage(key);
                  setOpen(false);
                }}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero({ setPage }) {
  return (
    <section className="hero-media min-h-[86vh] overflow-hidden">
      <div className="mx-auto grid min-h-[86vh] max-w-7xl items-end gap-8 px-4 pb-10 pt-24 sm:px-6 lg:grid-cols-[1fr_390px] lg:px-8">
        <div className="max-w-2xl pb-10 text-white soft-rise">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.36em] text-[#f4dadd]">Atelier Eclat - Joyeria con intencion</p>
          <h1 className="serif text-5xl font-bold leading-[0.94] sm:text-7xl lg:text-8xl">
            Elegancia que se siente personal
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/86">
            Piezas Pandora seleccionadas para regalar, celebrar y recordarte que los detalles pequenos pueden decirlo todo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="gold" onClick={() => setPage("catalog")}>Comprar ahora</Button>
            <Button variant="secondary" onClick={() => setPage("catalog")}>Ver coleccion</Button>
          </div>
          <div className="mt-8 grid max-w-xl gap-3 text-sm text-white/82 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <div key={point} className="rounded-full border border-white/18 bg-white/10 px-4 py-2">{point}</div>
            ))}
          </div>
        </div>
        <aside className="mb-10 hidden rounded-lg bg-white p-5 text-ink shadow-soft lg:block soft-rise">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-rosewood">Pack recomendado</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {PRODUCTS[0].bundleImages.map((image) => (
              <img key={image} className="aspect-square rounded-lg bg-pearl object-contain p-4" src={image} alt={PRODUCTS[0].name} />
            ))}
          </div>
          <h2 className="serif mt-4 text-3xl font-bold">Regalo seguro: cadena + charm</h2>
          <div className="mt-2 flex items-center gap-3">
            <span className="price-strike">{formatPrice(PRODUCTS[0].originalPrice)}</span>
            <strong>{formatPrice(PRODUCTS[0].price)}</strong>
          </div>
          <p className="mt-3 text-sm leading-6 text-ink/62">Una combinacion femenina, luminosa y facil de acertar.</p>
          <Button className="mt-5 w-full" variant="primary" onClick={() => setPage("catalog")}>Ver oferta</Button>
        </aside>
      </div>
    </section>
  );
}

function Toast({ notice, onClose }) {
  if (!notice) return null;
  return (
    <div className="fixed bottom-5 left-1/2 z-[60] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-lg border border-champagne/30 bg-white p-4 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-bold">{notice}</p>
          <p className="mt-1 text-xs text-ink/58">Tu seleccion se ha guardado. Puedes finalizar cuando quieras.</p>
        </div>
        <button className="focus-ring rounded-full bg-pearl px-3 py-1 text-sm font-semibold" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center scroll-reveal">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-rosewood">{eyebrow}</p>
      <h2 className="serif mt-3 text-4xl font-bold sm:text-5xl">{title}</h2>
      {children && <p className="mt-4 leading-7 text-ink/68">{children}</p>}
    </div>
  );
}

function ProductCard({ product, onAddCart, onDetails, onWishlist, isWishlisted }) {
  const savings = product.originalPrice ? product.originalPrice - product.price : 0;
  return (
    <article className="product-card group overflow-hidden rounded-lg border border-[#ead3d4]/70 bg-white transition duration-300 hover:-translate-y-1 scroll-reveal">
      <div className="relative overflow-hidden bg-sand">
        {product.bundleImages ? (
          <div className="product-image grid w-full grid-cols-2 items-center gap-2 bg-white">
            {product.bundleImages.map((image) => (
              <img key={image} className="h-full w-full object-contain transition duration-700 group-hover:scale-105" src={image} alt={product.name} />
            ))}
          </div>
        ) : (
          <img className="product-image w-full transition duration-700 group-hover:scale-105" src={product.image} alt={product.name} />
        )}
        <button
          className={`focus-ring absolute right-3 top-3 rounded-full px-3 py-2 text-sm shadow-soft transition ${
            isWishlisted ? "bg-[#5b2e35] text-white" : "bg-white/92 text-ink hover:bg-white"
          }`}
          onClick={() => onWishlist(product)}
          aria-label="Guardar en wishlist"
        >
          {isWishlisted ? "Favorito" : "Guardar"}
        </button>
        {product.isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-blush px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-ink">
            Nuevo
          </span>
        )}
        {product.badge && (
          <span className="absolute bottom-3 left-3 rounded-full bg-[#5b2e35] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
            {product.badge}
          </span>
        )}
        {savings > 0 && (
          <span className="absolute bottom-3 right-3 rounded-full bg-champagne px-3 py-1 text-xs font-bold text-ink">
            Ahorras {formatPrice(savings)}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rosewood">{product.category}</p>
          {product.brand && <span className="rounded-full bg-pearl px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/60">Producto {product.brand}</span>}
        </div>
        <div className="mt-2 flex items-start justify-between gap-4">
          <h3 className="serif text-2xl font-bold">{product.name}</h3>
          <div className="text-right">
            {product.originalPrice && <p className="price-strike text-sm">{formatPrice(product.originalPrice)}</p>}
            <p className="font-semibold">{formatPrice(product.price)}</p>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/54">
          <span>Favorita para regalo</span>
          <span>Packaging cuidado</span>
          <span>Compra protegida</span>
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-ink/65">{product.description}</p>
        {product.sourceUrl && (
          <a className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-rosewood hover:text-ink" href={product.sourceUrl} target="_blank" rel="noreferrer">
            Ver fuente oficial
          </a>
        )}
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          <Button variant="gold" onClick={() => onAddCart(product)}>Anadir al carrito</Button>
          <Button variant="secondary" onClick={() => onDetails(product)}>Ver detalles</Button>
        </div>
      </div>
    </article>
  );
}

function SpecialOffer({ setPage, onAddCart, onDetails }) {
  const offer = PRODUCTS.find((product) => product.id === "pack-pandora-cadena-charm");
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="offer-glow grid overflow-hidden rounded-lg text-white shadow-soft scroll-reveal lg:grid-cols-[1fr_440px]">
        <div className="p-8 sm:p-12 lg:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-champagne">Regalo recomendado</p>
          <h2 className="serif mt-4 text-4xl font-bold sm:text-6xl">El gesto bonito que no necesita explicacion</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/78">
            Collar de cadena de serpiente + charm Corazon Rosa por {formatPrice(offer.price)}. Una pareja delicada, femenina y lista para regalar con presencia de boutique.
          </p>
          <div className="mt-6 grid max-w-xl gap-3 text-sm sm:grid-cols-3">
            <span className="rounded-full bg-white/10 px-4 py-2">Ahorro {formatPrice(offer.originalPrice - offer.price)}</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Packaging premium</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Envio gratis</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="gold" onClick={() => onAddCart(offer)}>Anadir oferta</Button>
            <Button variant="secondary" onClick={() => onDetails(offer)}>Ver detalles</Button>
          </div>
        </div>
        <div className="bg-white p-8">
          <div className="grid h-full min-h-[320px] grid-cols-2 items-center gap-4">
            {offer.bundleImages.map((image) => (
              <img key={image} className="h-full w-full object-contain" src={image} alt={offer.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductGrid({ products, onAddCart, onDetails, onWishlist, wishlist }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddCart={onAddCart}
          onDetails={onDetails}
          onWishlist={onWishlist}
          isWishlisted={wishlist.some((item) => item.id === product.id)}
        />
      ))}
    </div>
  );
}

function Benefits() {
  const items = [
    ["Joyas verificadas", "Seleccionamos piezas reconocibles, elegantes y faciles de combinar."],
    ["Packaging con encanto", "Tu pedido llega cuidado, femenino y listo para emocionar."],
    ["Asesoria de regalo", "Te destacamos combinaciones que ayudan a acertar sin dudas."],
    ["Compra tranquila", "Pago protegido, resumen claro y experiencia sin pasos confusos."]
  ];
  return (
    <section className="chic-band py-16">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map(([title, copy]) => (
          <div key={title} className="boutique-card rounded-lg p-6 scroll-reveal">
            <p className="serif text-2xl font-bold">{title}</p>
            <p className="mt-2 text-sm leading-6 text-ink/65">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    ["Clara M.", "La presentacion fue preciosa. Parecia un regalo pensado, no una compra de ultima hora."],
    ["Ines R.", "Me ayudo mucho ver combinaciones ya preparadas. Elegante, delicado y muy facil de acertar."],
    ["Marta L.", "La web transmite confianza y las piezas se ven limpias, femeninas y especiales."]
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Clientas" title="Historias que brillan">
          Confianza, emocion y detalles pensados para convertir una compra en un pequeno ritual.
        </SectionTitle>
        <div className="grid gap-5 md:grid-cols-3">
          {items.map(([name, quote]) => (
            <blockquote key={name} className="boutique-card rounded-lg p-7 scroll-reveal">
              <p className="serif text-2xl leading-8">"{quote}"</p>
              <footer className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-rosewood">{name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="bg-ink py-16 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-champagne">Newsletter</p>
          <h2 className="serif mt-3 text-4xl font-bold">Tu nueva joya favorita te esta esperando.</h2>
        </div>
        <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={(event) => event.preventDefault()}>
          <input
            className="focus-ring rounded-full border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-white/55"
            placeholder="Tu email"
            type="email"
            aria-label="Email newsletter"
          />
          <Button variant="gold">Recibir novedades</Button>
        </form>
      </div>
    </section>
  );
}

function Home({ setPage, onAddCart, onDetails, onWishlist, wishlist }) {
  const featured = PRODUCTS.filter((product) => product.bestSeller).slice(0, 3);
  const news = PRODUCTS.filter((product) => product.isNew).slice(0, 4);
  return (
    <main className="fade-in">
      <Hero setPage={setPage} />
      <section className="border-y border-[#ead3d4]/70 bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-4 text-center text-sm font-semibold text-ink/70 sm:grid-cols-4 sm:px-6 lg:px-8">
          {trustPoints.map((point) => <span key={point}>{point}</span>)}
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Favoritas" title="Productos destacados">
            Piezas con brillo limpio, intencion de regalo y ese punto chic que eleva cualquier detalle.
          </SectionTitle>
          <ProductGrid products={featured} onAddCart={onAddCart} onDetails={onDetails} onWishlist={onWishlist} wishlist={wishlist} />
        </div>
      </section>
      <Benefits />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Nueva coleccion" title="Pequenos detalles, grandes momentos">
            Seleccion femenina y luminosa para regalar sin dudar o para darte ese capricho con sentido.
          </SectionTitle>
          <ProductGrid products={news} onAddCart={onAddCart} onDetails={onDetails} onWishlist={onWishlist} wishlist={wishlist} />
        </div>
      </section>
      <SpecialOffer setPage={setPage} onAddCart={onAddCart} onDetails={onDetails} />
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="boutique-card rounded-lg p-8 text-center scroll-reveal sm:p-12">
          <p className="serif text-4xl font-bold">Tu primera joya llega con un detalle extra</p>
          <p className="mt-3 text-ink/68">Usa el codigo ECLAT10 y recibe tu pedido preparado con mimo de boutique.</p>
          <Button className="mt-6" variant="primary" onClick={() => setPage("catalog")}>Comprar ahora</Button>
        </div>
      </section>
      <Testimonials />
      <Newsletter />
    </main>
  );
}

function Filters({ filters, setFilters }) {
  return (
    <aside className="rounded-lg border border-champagne/20 bg-white p-5 shadow-sm lg:sticky lg:top-28 lg:self-start">
      <h2 className="serif text-3xl font-bold">Filtros</h2>
      <div className="mt-5">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-rosewood">Categoria</p>
        <div className="grid gap-2">
          <button
            className={`focus-ring rounded-full px-4 py-2 text-left text-sm ${filters.category === "todas" ? "bg-ink text-white" : "bg-pearl hover:bg-sand"}`}
            onClick={() => setFilters({ ...filters, category: "todas" })}
          >
            Todas
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`focus-ring rounded-full px-4 py-2 text-left text-sm capitalize ${filters.category === category ? "bg-ink text-white" : "bg-pearl hover:bg-sand"}`}
              onClick={() => setFilters({ ...filters, category })}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <label className="mt-6 block">
        <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.22em] text-rosewood">
          Precio maximo: {formatPrice(filters.maxPrice)}
        </span>
        <input
          className="w-full accent-[#d8b878]"
          type="range"
          min="25"
          max="200"
          value={filters.maxPrice}
          onChange={(event) => setFilters({ ...filters, maxPrice: Number(event.target.value) })}
        />
      </label>
      <label className="mt-6 block">
        <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.22em] text-rosewood">Ordenar</span>
        <select
          className="focus-ring w-full rounded-full border border-champagne/30 bg-pearl px-4 py-3"
          value={filters.sort}
          onChange={(event) => setFilters({ ...filters, sort: event.target.value })}
        >
          <option value="new">Novedades</option>
          <option value="priceAsc">Precio menor</option>
          <option value="priceDesc">Precio mayor</option>
          <option value="best">Mas vendidos</option>
        </select>
      </label>
    </aside>
  );
}

function Catalog({ onAddCart, onDetails, onWishlist, wishlist }) {
  const [filters, setFilters] = useState({ category: "todas", maxPrice: 200, sort: "new" });
  const filtered = useMemo(() => {
    const list = PRODUCTS.filter((product) => {
      const categoryMatch = filters.category === "todas" || product.category === filters.category;
      return categoryMatch && product.price <= filters.maxPrice;
    });
    return [...list].sort((a, b) => {
      if (filters.sort === "priceAsc") return a.price - b.price;
      if (filters.sort === "priceDesc") return b.price - a.price;
      if (filters.sort === "best") return Number(b.bestSeller) - Number(a.bestSeller);
      return Number(b.isNew) - Number(a.isNew);
    });
  }, [filters]);

  return (
    <main className="fade-in py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Catalogo" title="Joyas seleccionadas">
          Una seleccion pensada para mujeres que aman los detalles delicados, seguros y con significado.
        </SectionTitle>
        <div className="boutique-card mb-6 flex flex-wrap items-center justify-between gap-3 rounded-lg px-5 py-4">
          <p className="text-sm text-ink/64"><strong className="text-ink">{filtered.length}</strong> piezas disponibles. Menos ruido, mas acierto: piezas elegidas para regalar bien.</p>
          <Button variant="gold" onClick={() => onAddCart(PRODUCTS[0])}>Anadir pack recomendado</Button>
        </div>
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <Filters filters={filters} setFilters={setFilters} />
          <ProductGrid products={filtered} onAddCart={onAddCart} onDetails={onDetails} onWishlist={onWishlist} wishlist={wishlist} />
        </div>
      </div>
    </main>
  );
}

function ProductPage({ product, onAddCart, onBuy, onDetails, onWishlist, wishlist }) {
  const [active, setActive] = useState(product.gallery[0]);
  const [qty, setQty] = useState(1);
  const related = PRODUCTS.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  useEffect(() => {
    setActive(product.gallery[0]);
    setQty(1);
  }, [product]);

  return (
    <main className="fade-in py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <section>
          <img className="aspect-[4/5] w-full rounded-lg object-cover shadow-soft" src={active} alt={product.name} />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {product.gallery.map((image) => (
              <button key={image} className="focus-ring overflow-hidden rounded-lg" onClick={() => setActive(image)}>
                <img className="aspect-square w-full object-cover transition hover:scale-105" src={image} alt="" />
              </button>
            ))}
          </div>
        </section>
        <section className="lg:pt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-rosewood">{product.category}</p>
          {product.brand && <p className="mt-3 text-xs font-bold uppercase tracking-[0.24em] text-ink/50">Producto oficial {product.brand}</p>}
          <h1 className="serif mt-3 text-5xl font-bold">{product.name}</h1>
          <div className="mt-4 flex flex-wrap items-baseline gap-3">
            {product.originalPrice && <p className="price-strike text-xl">{formatPrice(product.originalPrice)}</p>}
            <p className="text-2xl font-semibold">{formatPrice(product.price)}</p>
            {product.badge && <span className="rounded-full bg-blush px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]">{product.badge}</span>}
          </div>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink/68">{product.description}</p>
          {product.sourceUrl && (
            <a className="mt-4 inline-block text-sm font-semibold text-rosewood underline-offset-4 hover:underline" href={product.sourceUrl} target="_blank" rel="noreferrer">
              Ver producto en Pandora
            </a>
          )}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <label className="flex items-center gap-3 rounded-full border border-champagne/30 bg-white px-4 py-2">
              <span className="text-sm font-semibold">Cantidad</span>
              <input
                className="w-16 bg-transparent text-center"
                type="number"
                min="1"
                value={qty}
                onChange={(event) => setQty(Math.max(1, Number(event.target.value)))}
              />
            </label>
            <Button variant="gold" onClick={() => onAddCart(product, qty)}>Anadir al carrito</Button>
            <Button variant="primary" onClick={() => onBuy(product, qty)}>Comprar ahora</Button>
            <Button variant="secondary" onClick={() => onWishlist(product)}>
              {wishlist.some((item) => item.id === product.id) ? "En wishlist" : "Guardar"}
            </Button>
          </div>
          <div className="mt-10 grid gap-3 rounded-lg border border-champagne/20 bg-white p-6">
            {[
              ["Material", product.material],
              ["Acabado", product.finish],
              ["Medidas", product.size],
              ["Cuidados", product.care]
            ].map(([label, value]) => (
              <div key={label} className="grid gap-1 border-b border-sand pb-3 last:border-b-0 last:pb-0 sm:grid-cols-[120px_1fr]">
                <p className="font-semibold">{label}</p>
                <p className="text-ink/66">{value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Tambien te encantara" title="Productos relacionados" />
        <ProductGrid products={related.length ? related : PRODUCTS.slice(0, 3)} onAddCart={onAddCart} onDetails={onDetails} onWishlist={onWishlist} wishlist={wishlist} />
      </section>
    </main>
  );
}

function CartItem({ item, updateQty, removeItem }) {
  return (
    <div className="boutique-card grid gap-4 rounded-lg p-4 sm:grid-cols-[96px_1fr_auto] sm:items-center">
      <img className="h-24 w-24 rounded-lg bg-white object-contain p-2" src={item.image} alt={item.name} />
      <div>
        <h3 className="serif text-2xl font-bold">{item.name}</h3>
        <p className="text-sm capitalize text-ink/60">{item.category}</p>
        <p className="mt-2 font-semibold">{formatPrice(item.price)}</p>
      </div>
      <div className="flex items-center gap-3">
        <input
          className="focus-ring w-20 rounded-full border border-champagne/30 px-3 py-2 text-center"
          type="number"
          min="1"
          value={item.qty}
          onChange={(event) => updateQty(item.id, Math.max(1, Number(event.target.value)))}
        />
        <Button variant="ghost" onClick={() => removeItem(item.id)}>Eliminar</Button>
      </div>
    </div>
  );
}

function Cart({ cart, updateQty, removeItem, setPage }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > freeShippingThreshold || subtotal === 0 ? 0 : 4.95;
  const total = subtotal + shipping;
  const remaining = Math.max(0, freeShippingThreshold - subtotal);
  const progress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  return (
    <main className="fade-in py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <section>
          <SectionTitle eyebrow="Carrito" title="Tu seleccion" />
          <div className="grid gap-4">
            {cart.length ? cart.map((item) => <CartItem key={item.id} item={item} updateQty={updateQty} removeItem={removeItem} />) : (
              <div className="rounded-lg bg-white p-8 text-center">Tu carrito esta esperando una joya especial.</div>
            )}
          </div>
        </section>
        <aside className="boutique-card rounded-lg p-6 lg:sticky lg:top-28 lg:self-start">
          <h2 className="serif text-3xl font-bold">Resumen</h2>
          <p className="mt-2 text-sm text-ink/60">Revisa tu seleccion con calma. El packaging regalo va incluido.</p>
          <div className="mt-6 grid gap-3 text-sm">
            <div className="rounded-lg bg-pearl p-4">
              <p className="font-semibold">{remaining ? `Te faltan ${formatPrice(remaining)} para envio gratis` : "Envio gratis conseguido"}</p>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-sand">
                <div className="h-full bg-champagne" style={{ width: `${progress}%` }} />
              </div>
            </div>
            <div className="flex justify-between"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
            <div className="flex justify-between"><span>Envio</span><strong>{shipping ? formatPrice(shipping) : "Gratis"}</strong></div>
            <div className="flex justify-between border-t border-sand pt-4 text-lg"><span>Total</span><strong>{formatPrice(total)}</strong></div>
          </div>
          <Button className="mt-6 w-full" variant="primary" disabled={!cart.length} onClick={() => setPage("checkout")}>Finalizar compra</Button>
        </aside>
      </div>
    </main>
  );
}

function Checkout({ cart }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > freeShippingThreshold || subtotal === 0 ? 0 : 4.95;
  return (
    <main className="fade-in py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        <section className="boutique-card rounded-lg p-6">
          <h1 className="serif text-4xl font-bold">Checkout</h1>
          <p className="mt-3 text-sm text-ink/62">Compra protegida y preparada con mimo. Revisas el resumen antes de confirmar y recibes email de seguimiento.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {["Nombre", "Email", "Telefono", "Direccion", "Ciudad", "Codigo postal"].map((label) => (
              <label key={label} className={label === "Direccion" ? "sm:col-span-2" : ""}>
                <span className="mb-2 block text-sm font-semibold">{label}</span>
                <input className="focus-ring w-full rounded-lg border border-champagne/30 bg-pearl px-4 py-3" />
              </label>
            ))}
            <label>
              <span className="mb-2 block text-sm font-semibold">Metodo de envio</span>
              <select className="focus-ring w-full rounded-lg border border-champagne/30 bg-pearl px-4 py-3">
                <option>Envio estandar 24/72h</option>
                <option>Envio express</option>
              </select>
            </label>
            <label>
              <span className="mb-2 block text-sm font-semibold">Metodo de pago</span>
              <select className="focus-ring w-full rounded-lg border border-champagne/30 bg-pearl px-4 py-3">
                <option>Tarjeta segura</option>
                <option>PayPal</option>
              </select>
            </label>
          </div>
          <Button className="mt-8" variant="primary">Confirmar pedido</Button>
          <div className="mt-5 grid gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/48 sm:grid-cols-3">
            <span>SSL seguro</span>
            <span>Pago protegido</span>
            <span>Soporte postventa</span>
          </div>
        </section>
        <aside className="boutique-card rounded-lg p-6 lg:self-start">
          <h2 className="serif text-3xl font-bold">Resumen del pedido</h2>
          <div className="mt-5 grid gap-3">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between gap-4 text-sm">
                <span>{item.name} x {item.qty}</span>
                <strong>{formatPrice(item.price * item.qty)}</strong>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-3 border-t border-sand pt-4">
            <div className="flex justify-between"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
            <div className="flex justify-between"><span>Envio</span><strong>{shipping ? formatPrice(shipping) : "Gratis"}</strong></div>
            <div className="flex justify-between text-lg"><span>Total</span><strong>{formatPrice(subtotal + shipping)}</strong></div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function Account() {
  return (
    <main className="fade-in py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[380px_1fr] lg:px-8">
        <section className="boutique-card rounded-lg p-6">
          <h1 className="serif text-4xl font-bold">Login</h1>
          <div className="mt-5 grid gap-4">
            <input className="focus-ring rounded-lg border border-champagne/30 bg-pearl px-4 py-3" placeholder="Email" />
            <input className="focus-ring rounded-lg border border-champagne/30 bg-pearl px-4 py-3" placeholder="Contrasena" type="password" />
            <Button variant="primary">Entrar</Button>
          </div>
          <h2 className="serif mt-10 text-3xl font-bold">Registro</h2>
          <div className="mt-5 grid gap-4">
            <input className="focus-ring rounded-lg border border-champagne/30 bg-pearl px-4 py-3" placeholder="Nombre" />
            <input className="focus-ring rounded-lg border border-champagne/30 bg-pearl px-4 py-3" placeholder="Email" />
            <input className="focus-ring rounded-lg border border-champagne/30 bg-pearl px-4 py-3" placeholder="Contrasena" type="password" />
            <Button variant="gold">Crear cuenta</Button>
          </div>
        </section>
        <section>
          <SectionTitle eyebrow="Panel" title="Tu espacio Atelier" />
          <div className="grid gap-5 md:grid-cols-2">
            {[
              ["Pedidos", "Consulta el estado de tus pedidos recientes y vuelve a comprar tus favoritos."],
              ["Datos personales", "Gestiona tu nombre, email y preferencias de comunicacion."],
              ["Direcciones guardadas", "Agiliza tus compras con direcciones listas para usar."],
              ["Wishlist", "Recupera las joyas que guardaste para otro momento."]
            ].map(([title, copy]) => (
              <div key={title} className="boutique-card rounded-lg p-6">
                <h3 className="serif text-3xl font-bold">{title}</h3>
                <p className="mt-2 text-ink/66">{copy}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function Wishlist({ wishlist, onAddCart, onDetails, onWishlist }) {
  return (
    <main className="fade-in py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Wishlist" title="Tus favoritos">
          Guarda deseos, compara estilos y mueve al carrito cuando llegue el momento.
        </SectionTitle>
        {wishlist.length ? (
          <ProductGrid products={wishlist} onAddCart={onAddCart} onDetails={onDetails} onWishlist={onWishlist} wishlist={wishlist} />
        ) : (
          <div className="rounded-lg bg-white p-10 text-center shadow-sm">Aun no has guardado favoritos.</div>
        )}
      </div>
    </main>
  );
}

function Footer({ setPage }) {
  const links = [
    ["home", "Inicio"],
    ["catalog", "Catalogo"],
    ["home", "Sobre nosotros"],
    ["home", "Contacto"],
    ["home", "Politica de privacidad"],
    ["home", "Envios y devoluciones"]
  ];
  return (
    <footer className="border-t border-champagne/20 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="serif text-4xl font-bold">Atelier Eclat</p>
          <p className="mt-3 max-w-sm text-ink/64">Joyas delicadas, seleccionadas con criterio boutique para regalar confianza, luz y belleza diaria.</p>
        </div>
        <nav className="grid gap-2">
          {links.map(([key, label]) => (
            <button key={label} className="focus-ring text-left text-sm hover:text-rosewood" onClick={() => setPage(key)}>
              {label}
            </button>
          ))}
        </nav>
        <div>
          <p className="font-semibold">Redes sociales</p>
          <p className="mt-3 text-sm text-ink/64">Instagram - Pinterest - TikTok</p>
          <form className="mt-5 flex gap-2" onSubmit={(event) => event.preventDefault()}>
            <input className="focus-ring min-w-0 flex-1 rounded-full border border-champagne/30 bg-pearl px-4 py-3" placeholder="Email" />
            <Button variant="gold">Unirme</Button>
          </form>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [page, setPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("atelier-cart") || "[]"));
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("atelier-wishlist") || "[]"));
  const [notice, setNotice] = useState("");

  useEffect(() => localStorage.setItem("atelier-cart", JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem("atelier-wishlist", JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".scroll-reveal").forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) element.classList.add("visible");
      });
    };
    reveal();
    window.addEventListener("scroll", reveal, { passive: true });
    return () => window.removeEventListener("scroll", reveal);
  }, [page]);

  const onAddCart = (product, qty = 1) => {
    setCart((items) => {
      const existing = items.find((item) => item.id === product.id);
      if (existing) return items.map((item) => (item.id === product.id ? { ...item, qty: item.qty + qty } : item));
      return [...items, { ...product, qty }];
    });
    setNotice(`${product.name} anadido al carrito`);
    window.setTimeout(() => setNotice(""), 2600);
  };

  const onDetails = (product) => {
    setSelectedProduct(product);
    setPage("product");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onWishlist = (product) => {
    setWishlist((items) => (items.some((item) => item.id === product.id) ? items.filter((item) => item.id !== product.id) : [...items, product]));
  };

  const updateQty = (id, qty) => setCart((items) => items.map((item) => (item.id === id ? { ...item, qty } : item)));
  const removeItem = (id) => setCart((items) => items.filter((item) => item.id !== id));
  const onBuy = (product, qty) => {
    onAddCart(product, qty);
    setPage("checkout");
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <Header page={page} setPage={setPage} cartCount={cartCount} wishlistCount={wishlist.length} />
      <Toast notice={notice} onClose={() => setNotice("")} />
      {page === "home" && <Home setPage={setPage} onAddCart={onAddCart} onDetails={onDetails} onWishlist={onWishlist} wishlist={wishlist} />}
      {page === "catalog" && <Catalog onAddCart={onAddCart} onDetails={onDetails} onWishlist={onWishlist} wishlist={wishlist} />}
      {page === "product" && <ProductPage product={selectedProduct} onAddCart={onAddCart} onBuy={onBuy} onDetails={onDetails} onWishlist={onWishlist} wishlist={wishlist} />}
      {page === "cart" && <Cart cart={cart} updateQty={updateQty} removeItem={removeItem} setPage={setPage} />}
      {page === "checkout" && <Checkout cart={cart} />}
      {page === "account" && <Account />}
      {page === "wishlist" && <Wishlist wishlist={wishlist} onAddCart={onAddCart} onDetails={onDetails} onWishlist={onWishlist} />}
      <Footer setPage={setPage} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);


import { useEffect, useState, type FormEvent, type ReactNode } from "react"
import {
  ArrowRight,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  X,
} from "lucide-react"
import { Link, NavLink, Outlet, useLocation } from "react-router"
import { districts, services, whatsappHref } from "./data"

interface ButtonLinkProps {
  children: ReactNode
  to: string
  variant?: "dark" | "light" | "outline"
  external?: boolean
}

export function ButtonLink({
  children,
  to,
  variant = "dark",
  external = false,
}: ButtonLinkProps) {
  const className = `button button-${variant}`
  if (external) {
    return (
      <a className={className} href={to} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  )
}

export function Brand() {
  return (
    <Link
      className="brand"
      to="/"
      aria-label="Lima Home Concierge, ir al inicio"
    >
      <span className="brand-mark" aria-hidden="true">
        LH
      </span>
      <span className="brand-name">
        Lima Home <strong>Concierge</strong>
      </span>
    </Link>
  )
}

const navigation = [
  { label: "Inicio", to: "/" },
  { label: "Servicios", to: "/servicios" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Contacto", to: "/contacto" },
]

export function SiteHeader() {
  const [open, setOpen] = useState<boolean>(false)
  const location = useLocation()

  useEffect((): void => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <ButtonLink to={whatsappHref()} external>
            Cotizar <ArrowRight size={16} />
          </ButtonLink>
          <button
            className="menu-button"
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Navegación móvil">
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
              <ArrowRight size={18} />
            </NavLink>
          ))}
          <div className="mobile-districts">
            <span>Distritos</span>
            {districts.map((district) => (
              <Link key={district.slug} to={`/${district.slug}`}>
                {district.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-intro">
          <Brand />
          <p>Cuidado experto para propiedades que merecen lo mejor.</p>
        </div>
        <div className="footer-column">
          <span className="footer-label">Explorar</span>
          {navigation.map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <span className="footer-label">Zonas</span>
          {districts.map((district) => (
            <Link key={district.slug} to={`/${district.slug}`}>
              {district.name}
            </Link>
          ))}
        </div>
        <div className="footer-column">
          <span className="footer-label">Conversemos</span>
          <a href={whatsappHref()} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> WhatsApp
          </a>
          <Link to="/contacto">
            <Mail size={16} /> Formulario de contacto
          </Link>
          <span className="footer-location">
            <MapPin size={16} /> Lima, Perú
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Lima Home Concierge</span>
        <span>Ingeniería de acabados y mantenimiento integral</span>
      </div>
    </footer>
  )
}

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      title="Escríbenos por WhatsApp"
      aria-label="Solicitar cotización por WhatsApp"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  )
}

export function Layout() {
  const { pathname } = useLocation()
  useEffect((): void => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={`section-header section-header-${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export function TrustBar() {
  const items = [
    {
      title: "Atención personalizada",
      text: "Cada propiedad requiere una mirada propia.",
    },
    {
      title: "Ejecución cuidadosa",
      text: "Orden y detalle durante todo el servicio.",
    },
    {
      title: "Soluciones integrales",
      text: "Un solo equipo para distintas necesidades.",
    },
  ]
  return (
    <div className="trust-bar">
      {items.map((item, index) => (
        <div className="trust-item" key={item.title}>
          <span>0{index + 1}</span>
          <div>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function FeaturedServices() {
  return (
    <div className="service-grid">
      {services.map((service) => {
        const Icon = service.icon
        return (
          <Link
            className="service-card"
            key={service.id}
            to={`/servicios#${service.id}`}
          >
            <div className="service-card-image">
              <img src={service.image} alt="" />
            </div>

            {/* Icon moved outside the overflowing container */}
            <span className="service-icon">
              <Icon size={22} />
            </span>

            <div className="service-card-content">
              <span>{service.eyebrow}</span>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <strong>
                Conocer más <ArrowRight size={16} />
              </strong>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

interface ContactFormProps {
  initialDistrict?: string
}

export function ContactForm({ initialDistrict = "" }: ContactFormProps) {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget

    if (!form.checkValidity()) return

    setSending(true)
    setError(null)

    try {
      const formData = new FormData(form)

      const response = await fetch("https://formspree.io/f/mpppbryk", {  // ← paste your Formspree ID here
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSent(true)
        form.reset()
      } else {
        const data = await response.json()
        setError(data.error || "Ocurrió un error. Intenta de nuevo.")
      }
    } catch {
      setError("No se pudo enviar. Revisa tu conexión e intenta de nuevo.")
    } finally {
      setSending(false)
    }
  }

  if (sent) {
    return (
      <div className="success-state" role="status">
        <span>
          <Check size={28} />
        </span>
        <h3>Gracias por escribirnos</h3>
        <p>
          Tu solicitud quedó preparada. También puedes continuar la conversación
          directamente por WhatsApp.
        </p>
        <ButtonLink to={whatsappHref(initialDistrict || undefined)} external>
          Abrir WhatsApp <MessageCircle size={17} />
        </ButtonLink>
        <button
          type="button"
          className="text-button"
          onClick={() => setSent(false)}
        >
          Enviar otra consulta
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* Keep all your existing fields exactly as they are */}
      <div className="form-row">
        <label>
          Nombre y apellido
          <input
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="¿Cómo te llamas?"
          />
        </label>
        <label>
          Teléfono
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            minLength={7}
            placeholder="+51 999 999 999"
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Distrito
          <span className="select-wrap">
            <select name="district" required defaultValue={initialDistrict}>
              <option value="" disabled>
                Selecciona un distrito
              </option>
              {districts.map((district) => (
                <option key={district.slug} value={district.name}>
                  {district.name}
                </option>
              ))}
              <option value="Otro distrito">Otro distrito de Lima</option>
            </select>
            <ChevronDown size={18} />
          </span>
        </label>
        <label>
          Servicio de interés
          <span className="select-wrap">
            <select name="service" required defaultValue="">
              <option value="" disabled>
                Selecciona un servicio
              </option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
              <option value="Evaluación integral">Evaluación integral</option>
            </select>
            <ChevronDown size={18} />
          </span>
        </label>
      </div>

      <label>
        Cuéntanos qué necesitas
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Describe brevemente la propiedad y el trabajo que deseas realizar."
        />
      </label>

      {/* Optional: show error message */}
      {error && (
        <p style={{ color: "#b91c1c", fontSize: "12px", marginBottom: "12px" }}>
          {error}
        </p>
      )}

      <div className="form-submit">
        <p>Al enviar, aceptas ser contactado sobre tu solicitud.</p>
        <button className="button button-dark" type="submit" disabled={sending}>
          {sending ? "Enviando..." : "Enviar solicitud"}{" "}
          {!sending && <ArrowRight size={17} />}
        </button>
      </div>
    </form>
  )
}

export function DistrictLinks() {
  return (
    <div className="district-links">
      <span>Atendemos en</span>
      {districts.map((district) => (
        <Link key={district.slug} to={`/${district.slug}`}>
          {district.name}
          <ArrowRight size={14} />
        </Link>
      ))}
    </div>
  )
}

export function ContactStrip() {
  return (
    <section className="contact-strip">
      <div>
        <span className="eyebrow eyebrow-light">Hablemos de tu propiedad</span>
        <h2>Un buen resultado empieza con una evaluación cuidadosa.</h2>
      </div>
      <ButtonLink to="/contacto" variant="light">
        Solicitar cotización <ArrowRight size={17} />
      </ButtonLink>
    </section>
  )
}

export function QualityList() {
  return (
    <div className="quality-list">
      {[
        "Diagnóstico según el espacio",
        "Materiales adecuados al uso",
        "Ejecución ordenada y detallista",
      ].map((item) => (
        <div key={item}>
          <ShieldCheck size={19} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}

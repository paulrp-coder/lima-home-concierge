import {
  ArrowDown,
  ArrowRight,
  Building2,
  Check,
  Home,
  MessageCircle,
  ShieldCheck,
  Store,
} from "lucide-react"
import { Link, useParams } from "react-router"
import {
  buildingImage,
  detailImage,
  districts,
  heroImage,
  services,
  whatsappHref,
  type District,
} from "./data"
import {
  ButtonLink,
  ContactForm,
  ContactStrip,
  DistrictLinks,
  FeaturedServices,
  QualityList,
  SectionHeader,
  TrustBar,
} from "./components"

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Mantenimiento integral · Lima</span>
          <h1>
            Cuidamos tu propiedad.
            <br />
            <em>Elevamos cada detalle.</em>
          </h1>
          <p>
            Ingeniería de acabados y mantenimiento especializado para
            residencias, edificios y espacios comerciales.
          </p>
          <div className="hero-actions">
            <ButtonLink to="/contacto">
              Solicitar cotización <ArrowRight size={17} />
            </ButtonLink>
            <ButtonLink to="/servicios" variant="outline">
              Explorar servicios
            </ButtonLink>
          </div>
          <a className="hero-scroll" href="#servicios">
            <ArrowDown size={16} /> Descubre cómo trabajamos
          </a>
        </div>
        <div className="hero-visual">
          <img
            src={heroImage}
            alt="Sala contemporánea con acabados cálidos y arquitectura minimalista"
          />
          <div className="hero-visual-note">
            <span>Residencias</span>
            <span>Edificios</span>
            <span>Comercios</span>
          </div>
        </div>
      </section>
      <TrustBar />

      <section className="section" id="servicios">
        <div className="section-heading-row">
          <SectionHeader
            eyebrow="Servicios especializados"
            title="Todo lo que tu propiedad necesita, con un solo estándar."
            description="Integramos experiencia técnica y sensibilidad por los acabados para resolver cada necesidad con criterio."
          />
          <Link className="inline-link" to="/servicios">
            Ver todos los servicios <ArrowRight size={16} />
          </Link>
        </div>
        <FeaturedServices />
      </section>

      <section className="split-section">
        <div className="split-image">
          <img
            src={detailImage}
            alt="Comedor contemporáneo con acabados de madera natural"
          />
          <span>El detalle hace la diferencia.</span>
        </div>
        <div className="split-content">
          <SectionHeader
            eyebrow="Nuestro enfoque"
            title="Precisión técnica, cuidado visible."
            description="No se trata solo de reparar o renovar. Se trata de comprender el espacio, elegir la solución correcta y ejecutar cada etapa con atención."
          />
          <QualityList />
          <ButtonLink to="/nosotros" variant="outline">
            Conoce nuestra forma de trabajar <ArrowRight size={17} />
          </ButtonLink>
        </div>
      </section>

      <section className="section audience-section">
        <SectionHeader
          eyebrow="Para cada propiedad"
          title="Experiencia adaptada a cada contexto."
          align="center"
        />
        <div className="audience-grid">
          {[
            {
              icon: Home,
              title: "Propietarios",
              text: "Cuidado y renovación de hogares con atención personal.",
            },
            {
              icon: Building2,
              title: "Edificios residenciales",
              text: "Mantenimiento de áreas, sistemas y superficies comunes.",
            },
            {
              icon: Store,
              title: "Espacios comerciales",
              text: "Soluciones funcionales con acabados a la altura de tu marca.",
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div className="audience-card" key={item.title}>
                <Icon />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="testimonial-section">
        <span className="quote-mark">“</span>
        <blockquote>
        Creemos que el mantenimiento y la conservación de una propiedad requieren más que una buena ejecución.
        Exigen criterio técnico, planificación y atención meticulosa en cada etapa del trabajo.
        </blockquote>
        <p>
        Compromiso con la calidad y el cuidado de cada propiedad
        </p>
      </section>

      <section className="section districts-section">
        <div>
          <SectionHeader
            eyebrow="Cobertura en Lima"
            title="Conocemos tu zona. Cuidamos tu espacio."
          />
          <p className="districts-copy">
            Encuentra información adaptada a los servicios disponibles en tu
            distrito.
          </p>
        </div>
        <DistrictLinks />
      </section>
      <ContactStrip />
    </>
  )
}

export function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">Servicios</span>
        <h1>
          Soluciones integrales.
          <br />
          <em>Acabados impecables.</em>
        </h1>
        <p>
          Desde una intervención puntual hasta el mantenimiento integral de una
          propiedad, abordamos cada proyecto con criterio técnico y atención al
          detalle.
        </p>
      </section>
      <section className="services-detail">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <article
              className="service-detail"
              id={service.id}
              key={service.id}
            >
              <div
                className={`detail-image ${
                  index % 2 ? "detail-image-order" : ""
                }`}
              >
                <img src={service.image} alt="" />
                <span>
                  <Icon />
                </span>
              </div>
              <div className="detail-copy">
                <span className="eyebrow">{service.eyebrow}</span>
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <div className="detail-items">
                  {service.items.map((item) => (
                    <div className="detail-item" key={item.title}>
                      <span>
                        <Check size={16} />
                      </span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <ButtonLink to="/contacto" variant="outline">
                  Consultar este servicio <ArrowRight size={17} />
                </ButtonLink>
              </div>
            </article>
          )
        })}
      </section>
      <ContactStrip />
    </>
  )
}

export function AboutPage() {
  return (
    <>
      <section className="page-hero about-hero">
        <span className="eyebrow">Nosotros</span>
        <h1>
          El cuidado de una propiedad
          <br />
          <em>se nota en los detalles.</em>
        </h1>
        <p>
          Lima Home Concierge nace para simplificar el mantenimiento de espacios
          valiosos con una atención cercana, ordenada y técnicamente
          responsable.
        </p>
      </section>
      <section className="about-intro">
        <div className="about-image">
          <img
            src={buildingImage}
            alt="Fachada contemporánea de un edificio residencial"
          />
        </div>
        <div className="about-copy">
          <SectionHeader
            eyebrow="Nuestra misión"
            title="Ser el aliado que tu propiedad necesita."
            description="Coordinamos soluciones de acabados, restauración, sistemas sanitarios y coberturas bajo una misma mirada. Nuestro propósito es que cada cliente entienda qué se hará, por qué y cómo cuidar el resultado."
          />
          <QualityList />
        </div>
      </section>
      <section className="values-section">
        <SectionHeader
          eyebrow="Cómo trabajamos"
          title="Una experiencia clara, de principio a fin."
          align="center"
        />
        <div className="values-grid">
          {[
            [
              "01",
              "Escuchamos",
              "Conocemos la propiedad, el uso del espacio y lo que esperas lograr.",
            ],
            [
              "02",
              "Evaluamos",
              "Identificamos el estado real y planteamos una solución adecuada.",
            ],
            [
              "03",
              "Ejecutamos",
              "Cuidamos el proceso, el orden y cada terminación.",
            ],
            [
              "04",
              "Entregamos",
              "Revisamos el resultado contigo y compartimos recomendaciones de cuidado.",
            ],
          ].map(([number, title, text]) => (
            <div className="value-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="about-audience">
        <div>
          <span className="eyebrow eyebrow-light">A quiénes acompañamos</span>
          <h2>
            Hogares, edificios y negocios que valoran hacer las cosas bien.
          </h2>
        </div>
        <p>
          Trabajamos para propietarios, juntas de edificios, administradores y
          responsables de espacios comerciales que buscan una ejecución cuidada
          y una comunicación directa.
        </p>
      </section>
      <ContactStrip />
    </>
  )
}

export function ContactPage() {
  return (
    <section className="contact-page">
      <div className="contact-aside">
        <span className="eyebrow eyebrow-light">Contacto</span>
        <h1>Cuéntanos qué necesita tu propiedad.</h1>
        <p>
          Comparte algunos detalles y podremos orientar la conversación hacia la
          solución adecuada.
        </p>
        <div className="contact-direct">
          <a href={whatsappHref()} target="_blank" rel="noreferrer">
            <span>
              <MessageCircle />
            </span>
            <div>
              <small>Escríbenos por</small>
              <strong>WhatsApp</strong>
            </div>
            <ArrowRight />
          </a>
        </div>
        <div className="contact-note">
          <ShieldCheck />
          <p>
            Tu información se utilizará únicamente para atender esta consulta.
          </p>
        </div>
      </div>
      <div className="contact-form-wrap">
        <span className="form-kicker">Solicitud de cotización</span>
        <h2>Empecemos por lo esencial.</h2>
        <ContactForm />
      </div>
    </section>
  )
}

interface DistrictPageProps {
  district: District
}

export function DistrictPage({ district }: DistrictPageProps) {
  return (
    <>
      <section className="district-hero">
        <div className="district-hero-copy">
          <span className="eyebrow">Lima Home Concierge · {district.name}</span>
          <h1>
            Servicios premium para tu propiedad en <em>{district.name}.</em>
          </h1>
          <p>
            Acabados y mantenimiento integral para {district.descriptor}, con
            una atención pensada alrededor de cada espacio.
          </p>
          <div className="hero-actions">
            <ButtonLink to={whatsappHref(district.name)} external>
              Solicitar cotización <MessageCircle size={17} />
            </ButtonLink>
            <ButtonLink to="/servicios" variant="outline">
              Ver servicios
            </ButtonLink>
          </div>
          <div className="district-proof">
            <ShieldCheck size={18} /> Atención para hogares, edificios y
            comercios
          </div>
        </div>
        <div className="district-hero-image">
          <img
            src={heroImage}
            alt={`Interior residencial contemporáneo en ${district.name}`}
          />
          <div>
            <span>Servicio en</span>
            <strong>{district.name}</strong>
          </div>
        </div>
      </section>
      <section className="section district-services">
        <SectionHeader
          eyebrow={`Servicios en ${district.name}`}
          title="Cuidado integral, desde la estructura hasta el último acabado."
          description={`Atendemos proyectos de mantenimiento y renovación en ${district.name} con soluciones adaptadas al tipo y uso de la propiedad.`}
        />
        <FeaturedServices />
      </section>
      <section className="district-contact">
        <div>
          <span className="eyebrow eyebrow-light">
            Cotiza en {district.name}
          </span>
          <h2>Conversemos sobre tu propiedad.</h2>
          <p>
            Completa el formulario o inicia una conversación directa por
            WhatsApp.
          </p>
          <ButtonLink to={whatsappHref(district.name)} external variant="light">
            Abrir WhatsApp <MessageCircle size={17} />
          </ButtonLink>
        </div>
        <div className="district-form">
          <ContactForm initialDistrict={district.name} />
        </div>
      </section>
    </>
  )
}

export function DistrictRoute() {
  const { districtSlug } = useParams<{ districtSlug: string }>()
  const district = districts.find((item) => item.slug === districtSlug)
  return district ? <DistrictPage district={district} /> : <NotFoundPage />
}

export function NotFoundPage() {
  return (
    <section className="not-found">
      <span className="eyebrow">Página no encontrada</span>
      <h1>Volvamos a un espacio conocido.</h1>
      <p>
        La dirección que buscas no está disponible. Puedes volver al inicio o
        explorar nuestros servicios.
      </p>
      <div className="hero-actions">
        <ButtonLink to="/">Volver al inicio</ButtonLink>
        <ButtonLink to="/servicios" variant="outline">
          Ver servicios
        </ButtonLink>
      </div>
    </section>
  )
}

// Preguntas frecuentes de /preguntas-frecuentes/. Respuestas directas y completas en el primer párrafo:
// es lo que Google y las IA (ChatGPT, Gemini, Perplexity) citan textualmente.
import type { Lang } from '../i18n';

type FaqGroup = { title: string; items: { q: string; a: string }[] };

export const faqGroups: Record<Lang, FaqGroup[]> = {
  es: [
    {
      title: 'Sobre BUILDEV',
      items: [
        {
          q: '¿Qué es BUILDEV?',
          a: 'BUILDEV es una empresa colombiana de desarrollo de software con sede en Cali. Diseñamos y construimos software a la medida, aplicaciones web, apps móviles, automatizaciones e integraciones para empresas que quieren optimizar sus procesos y crecer con tecnología.',
        },
        {
          q: '¿Dónde está ubicada BUILDEV y a qué ciudades atiende?',
          a: 'Estamos en Cali, Colombia, y trabajamos con empresas de todo el país de forma remota: Bogotá, Medellín, Barranquilla y cualquier otra ciudad. Las reuniones se hacen por videollamada y el seguimiento del proyecto es en línea.',
        },
        {
          q: '¿Qué productos propios ha desarrollado BUILDEV?',
          a: 'Tenemos dos productos en producción: Agendorio, una plataforma SaaS de agendamiento en línea para barberías, salones de belleza, consultorios, gimnasios y estudios; y Rentablo, una app móvil para Android que reparte cada venta entre insumos, sueldo y utilidad para independientes y negocios de servicios.',
        },
      ],
    },
    {
      title: 'Servicios',
      items: [
        {
          q: '¿Qué servicios de desarrollo de software ofrece BUILDEV?',
          a: 'Ofrecemos software a la medida, aplicaciones web (portales, paneles administrativos y productos SaaS), apps móviles, automatización de procesos, integraciones y APIs (pasarelas de pago, WhatsApp y servicios de terceros) e infraestructura en la nube.',
        },
        {
          q: '¿Qué es el software a la medida?',
          a: 'Es un sistema diseñado y construido específicamente para los procesos de una empresa, en lugar de adaptar la empresa a un programa genérico. La empresa es dueña de la solución, puede hacerla crecer cuando lo necesite y no depende de las limitaciones de un software empaquetado.',
        },
        {
          q: '¿Pueden integrar WhatsApp con el sistema de mi empresa?',
          a: 'Sí. Integramos WhatsApp con sistemas de agendamiento, ventas y atención al cliente para enviar confirmaciones, recordatorios y notificaciones automáticas. Agendorio, nuestro producto de agendamiento, ya funciona con WhatsApp.',
        },
        {
          q: '¿Pueden mejorar o continuar un software que ya tengo?',
          a: 'Sí. Primero revisamos el código y la infraestructura actuales para entender su estado, y luego proponemos si conviene mejorarlo por partes, migrarlo o reconstruir solo lo necesario.',
        },
      ],
    },
    {
      title: 'Proyectos, tiempos y costos',
      items: [
        {
          q: '¿Cuánto cuesta desarrollar un software a la medida?',
          a: 'Depende del alcance: número de módulos, tipos de usuario, integraciones con otros sistemas y plataformas (web, Android, iOS). Por eso no damos precios genéricos: después de una conversación inicial sin costo entregamos una propuesta con alcance, tiempos y valor definidos.',
        },
        {
          q: '¿Cuánto tiempo toma desarrollar una aplicación?',
          a: 'Un producto mínimo viable bien delimitado suele tomar entre uno y tres meses; un sistema empresarial con varios módulos e integraciones puede tomar más. Trabajamos por entregas cortas para que veas avances funcionando desde las primeras semanas.',
        },
        {
          q: '¿Cómo es el proceso para empezar un proyecto con BUILDEV?',
          a: 'Escríbenos por el formulario o por WhatsApp. Agendamos una conversación para entender tu necesidad, definimos el alcance y te enviamos una propuesta. Al aprobarla, diseñamos, desarrollamos con entregas periódicas, publicamos en producción y acompañamos la operación.',
        },
        {
          q: '¿El código y el software quedan a nombre de mi empresa?',
          a: 'En los proyectos a la medida, la propiedad del desarrollo se define por contrato desde la propuesta, para que sepas desde el inicio qué es tuyo y cómo se entrega.',
        },
        {
          q: '¿Ofrecen soporte después de entregar el software?',
          a: 'Sí. Ofrecemos acompañamiento después de la salida a producción para corregir, monitorear y seguir evolucionando la solución a medida que crece tu operación.',
        },
      ],
    },
  ],
  en: [
    {
      title: 'About BUILDEV',
      items: [
        {
          q: 'What is BUILDEV?',
          a: 'BUILDEV is a Colombian software development company based in Cali. We design and build custom software, web applications, mobile apps, automations and integrations for companies that want to streamline their processes and grow with technology.',
        },
        {
          q: 'Where is BUILDEV located and which cities does it serve?',
          a: 'We are based in Cali, Colombia, and work remotely with companies across the country: Bogotá, Medellín, Barranquilla and any other city. Meetings are held over video call and project follow-up is done online.',
        },
        {
          q: 'What products has BUILDEV built in-house?',
          a: 'We have two products in production: Agendorio, an online scheduling SaaS platform for barbershops, beauty salons, medical and professional offices, gyms and studios; and Rentablo, an Android mobile app that splits each sale into supplies, salary and profit for freelancers and service businesses.',
        },
      ],
    },
    {
      title: 'Services',
      items: [
        {
          q: 'What software development services does BUILDEV offer?',
          a: 'We offer custom software, web applications (portals, admin dashboards and SaaS products), mobile apps, process automation, integrations and APIs (payment gateways, WhatsApp and third-party services) and cloud infrastructure.',
        },
        {
          q: 'What is custom software?',
          a: "It is a system designed and built specifically around a company's processes, instead of adapting the company to a generic program. The company owns the solution, can grow it whenever it needs to and is not bound by the limitations of off-the-shelf software.",
        },
        {
          q: "Can you integrate WhatsApp with my company's system?",
          a: 'Yes. We integrate WhatsApp with scheduling, sales and customer service systems to send automatic confirmations, reminders and notifications. Agendorio, our scheduling product, already works with WhatsApp.',
        },
        {
          q: 'Can you improve or continue software I already have?',
          a: 'Yes. First we review the current code and infrastructure to understand their state, and then we recommend whether it makes sense to improve it step by step, migrate it or rebuild only what is necessary.',
        },
      ],
    },
    {
      title: 'Projects, timelines and costs',
      items: [
        {
          q: 'How much does it cost to develop custom software?',
          a: 'It depends on the scope: number of modules, user types, integrations with other systems and platforms (web, Android, iOS). That is why we do not give generic prices: after a free initial conversation, we deliver a proposal with a defined scope, timeline and price.',
        },
        {
          q: 'How long does it take to develop an application?',
          a: 'A well-defined minimum viable product usually takes between one and three months; an enterprise system with several modules and integrations can take longer. We work in short iterations so you can see working progress from the first weeks.',
        },
        {
          q: 'What is the process for starting a project with BUILDEV?',
          a: 'Write to us through the form or on WhatsApp. We schedule a conversation to understand your needs, define the scope and send you a proposal. Once you approve it, we design, develop with regular deliveries, release to production and support the operation.',
        },
        {
          q: "Will the code and software belong to my company?",
          a: 'In custom projects, ownership of the work is defined by contract starting from the proposal, so you know from the outset what is yours and how it is delivered.',
        },
        {
          q: 'Do you offer support after the software is delivered?',
          a: 'Yes. We provide ongoing support after the production release to fix, monitor and keep evolving the solution as your operation grows.',
        },
      ],
    },
  ],
};

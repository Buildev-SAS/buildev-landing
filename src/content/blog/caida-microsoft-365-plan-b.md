---
title: 'Microsoft 365 se cayó un día entero. ¿Tu empresa tenía plan B?'
description: 'Outlook y Teams fallaron en más de 70 países y una alarma de un hotel nunca llegó. Lo que la caída de Microsoft 365 enseña sobre depender de un solo canal.'
pubDate: 2026-11-17
image: '/blog/caida-microsoft.png'
sources:
  - title: 'Wikipedia: 2026 Microsoft outage'
    url: 'https://en.wikipedia.org/wiki/2026_Microsoft_outage'
  - title: 'The Register: Microsoft blames monster email outage on software defect introduced in July fix'
    url: 'https://theregister.com/saas/2026/11/16/microsoft-blames-monster-email-outage-on-software-defect-introduced-in-july-fix/5310026'
  - title: 'CNN: Microsoft says email service is approaching normal levels following widespread global outage'
    url: 'https://www.cnn.com/2026/11/12/business/live-news/microsoft-global-outage-intl-hnk'
  - title: 'Al Jazeera: Microsoft hit by global outages, what happened and why?'
    url: 'https://www.aljazeera.com/news/2026/11/13/microsoft-hit-by-global-outages-what-happened-and-why'
  - title: 'Notebookcheck: Microsoft outage disrupts email-based pool chlorine monitoring, leaving hotel guests injured'
    url: 'https://notebookcheck.net/Microsoft-outage-disrupts-email-based-pool-chlorine-monitoring-leaving-hotel-guests-injured.1450526.0.html'
  - title: 'Teknófilo: Un hotel se quedó sin aviso por exceso de cloro durante la caída de Outlook'
    url: 'https://www.teknofilo.com/caida-outlook-alerta-cloro-hotel-phantasialand/'
faqs:
  - q: '¿Qué pasó con Microsoft 365 en noviembre de 2026?'
    a: 'El 12 de noviembre de 2026 Outlook, Exchange Online, Teams y Copilot empezaron a fallar en todo el mundo. El correo fue lo más afectado y no se normalizó hasta el 13 de noviembre; algunos servicios terminaron de restablecerse el 14. Hubo reportes en más de 70 países.'
  - q: '¿Por qué se cayó Microsoft 365?'
    a: 'Según Microsoft, no fue un ciberataque. Un defecto introducido en un cambio de julio hizo que los servidores que conectan el correo dejaran de responder bajo cierta carga, y el correo no se pudo pasar a los servidores de respaldo. Al aplicar la corrección, el tráfico acumulado volvió a saturar los servidores que se estaban recuperando.'
  - q: '¿Cómo preparar a una empresa para una caída del correo o de Teams?'
    a: 'Identificando los procesos críticos que dependen del correo (alertas, aprobaciones, facturación, atención al cliente) y dándole a cada uno un segundo canal, como SMS, WhatsApp o una llamada. También conviene tener los contactos clave fuera del correo, un protocolo de comunicación acordado de antemano y probarlo al menos una vez al año.'
  - q: '¿La nube no tiene respaldo automático?'
    a: 'Sí, y Microsoft lo tenía, pero en esta caída el correo no se pudo pasar a los servidores de respaldo. La redundancia del proveedor reduce el riesgo, pero no lo elimina. Por eso el plan B de tu empresa no puede depender solo del proveedor.'
---

El viernes 13 de noviembre, una bomba dosificadora falló en la piscina del hotel Ling Bao, dentro del parque Phantasialand, en Alemania, y echó demasiado cloro al agua. El sistema detectó el problema y mandó la alarma al personal. **Por correo electrónico.**

El correo nunca llegó. Ese día Outlook llevaba horas caído en medio mundo. Según el parque, por eso nadie se enteró a tiempo: **15 huéspedes resultaron afectados** y varios necesitaron atención médica.

Es un caso extremo, pero lo que lo causó no lo es. Pasa en miles de empresas: un proceso crítico montado sobre una herramienta que todos damos por hecho que siempre funciona.

## Qué pasó

- **12 de noviembre, hacia el mediodía en Colombia.** Microsoft reconoce que los usuarios no pueden entrar a sus buzones de Exchange Online. En minutos el problema es global: Outlook, Teams, SharePoint y Copilot fallan en **más de 70 países**.
- **Toda la noche.** Microsoft devuelve servidores al servicio poco a poco. El correo es lo que más tarda: los mensajes quedan represados en colas.
- **13 de noviembre.** El correo se acerca a la normalidad. Algunos servicios terminan de restablecerse el 14.

El efecto fue enorme. En el Reino Unido, hospitales del sistema público volvieron a la historia clínica en papel y cancelaron algunas operaciones. En Toronto, una red de hospitales declaró código gris, la alerta interna por falla de sistemas. El Supremo Tribunal Federal de Brasil suspendió los plazos procesales de dos días. Empresas aplazaron la publicación de sus resultados. Un centro de estudios económicos de Estados Unidos estimó en **unos 7.000 millones de dólares** la productividad perdida.

## Por qué pasó

Según el informe preliminar de Microsoft, **no fue un ciberataque**. Fue un error propio con tres capas:

1. **Un defecto que llevaba cuatro meses dormido.** Se introdujo con un cambio en julio y nadie lo notó. Bajo cierta carga, hacía que los servidores que conectan el correo dejaran de responder.
2. **El respaldo no funcionó cuando hizo falta.** Otros servicios de Microsoft se pudieron pasar a sus servidores de respaldo. El correo, no.
3. **La recuperación causó otra caída.** Cuando aplicaron la corrección, todo el tráfico acumulado entró de golpe y volvió a tumbar los servidores que se estaban recuperando.

## Nuestra lectura

### 1. El problema no es Microsoft. Es que el correo se volvió infraestructura sin que nadie lo decidiera

Es fácil sacar la conclusión de "hay que salirse de Microsoft". No es la nuestra. Google, Amazon y cualquier otro proveedor han tenido caídas y las seguirán teniendo. Microsoft 365 sigue siendo una gran herramienta.

El problema es otro: con los años, el correo y el chat pasaron de ser herramientas de comunicación a ser **la columna vertebral de procesos críticos**. Las aprobaciones de pagos, las alertas de los sistemas, las facturas, los pedidos de los clientes, los códigos de acceso. Nadie se sentó a decidir que el correo fuera infraestructura crítica. Simplemente pasó.

### 2. Un proceso crítico con un solo canal es un proceso frágil

La alarma del hotel es el ejemplo perfecto. El sensor funcionó. El sistema de alertas funcionó. Falló el único canal por el que salía el aviso.

Esto no se resuelve con un proveedor mejor. Se resuelve con diseño: **toda alerta que importe tiene que salir por al menos dos caminos distintos**. Correo y SMS. Correo y WhatsApp. Correo y una llamada automática. Si el aviso es de los que pueden lastimar a alguien, además, una alarma local que suene en el sitio.

### 3. Tener respaldo no es lo mismo que haberlo probado

Microsoft tenía servidores de respaldo. El día que los necesitó, el correo no pudo pasar a ellos. Le pasa a empresas de todos los tamaños: la copia de seguridad que nunca se restauró, el plan de contingencia que nadie ha leído, el número de emergencia que ya no existe.

Un plan B que no se ha probado no es un plan B. Es una suposición.

### 4. El contrato con la nube no cubre lo que tu negocio pierde

Cuando un servicio en la nube incumple su disponibilidad, lo normal es que el proveedor compense con un descuento en la factura. Las ventas que no hiciste, los clientes que no atendiste o la multa por entregar tarde corren por tu cuenta. **El riesgo operativo no se terceriza, aunque la herramienta sí.**

## Qué hacer esta semana

### Si diriges una empresa

1. **Haz la lista de lo que se detuvo**, o se hubiera detenido, el 12 de noviembre. Pregúntale a cada área: "¿qué no pudiste hacer sin correo ni Teams?".
2. **Elige los tres procesos más críticos** de esa lista y dale a cada uno un segundo canal. Alertas, aprobaciones de pagos y atención al cliente suelen estar entre ellos.
3. **Ten los contactos clave fuera del correo**: clientes principales, proveedores, equipo, en un lugar al que se pueda llegar si el correo cae.
4. **Acuerda el protocolo antes de necesitarlo.** Si el correo cae, ¿por dónde nos hablamos? ¿Quién avisa a los clientes? Escríbelo en una página.
5. **Pruébalo una vez al año.** Una mañana sin correo, a propósito, enseña más que cualquier documento.

### Si construyes software

- **No hagas que una alerta crítica dependa de un solo canal.** Si tu sistema avisa de algo importante, que lo avise por dos vías y registre si el aviso llegó.
- **Diseña para fallar con elegancia.** Si un servicio externo cae, tu aplicación tiene que seguir funcionando en lo esencial, guardar lo pendiente y reintentar después, sin tumbar todo lo demás.
- **Cuidado con la recuperación.** Cuando un servicio vuelve, los reintentos acumulados pueden tumbarlo otra vez, como le pasó a Microsoft. Escalona los reintentos y limita cuántos entran a la vez.

## Nuestra posición

Ninguna empresa puede evitar que su proveedor de correo se caiga. Lo que sí puede decidir es **qué pasa en su negocio cuando eso ocurre**.

La caída de Microsoft no fue un día perdido para todos. Para las empresas que tenían claros sus procesos críticos y un segundo canal, fue un día incómodo. Para las que no, fue un día detenido. La diferencia no estuvo en la nube que usaban, sino en cómo habían diseñado su operación.

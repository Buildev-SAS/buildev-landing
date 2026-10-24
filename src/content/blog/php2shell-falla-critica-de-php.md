---
title: 'PHP2Shell: la falla que puso en jaque a la mayoría de la web'
description: 'Dos fallas críticas en PHP permiten tomar el control de un servidor sin contraseña. Qué pasó, por qué te afecta aunque no programes y qué hacer esta semana.'
pubDate: 2026-10-24
image: '/blog/php2shell.png'
sources:
  - title: 'The PHP Foundation: Today’s PHP Security Release, and How We’re Strengthening PHP Security'
    url: 'https://thephp.foundation/blog/2026/10/21/todays-php-security-release-and-how-were-strengthening-php-security/'
  - title: 'Tenable: php2shell (CVE-2026-109618, CVE-2026-109619) FAQ'
    url: 'https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote'
  - title: 'Patchstack: Major security alert, PHP vulnerable to critical RCE'
    url: 'https://patchstack.com/articles/php-major-vulnerability-alert-10-2026/'
  - title: 'CERT-EU: Critical Vulnerabilities in PHP (2026-018)'
    url: 'https://cert.europa.eu/publications/security-advisories/2026-018'
  - title: 'The Hacker News: PHP Issues Emergency Patches for Two Critical PHP2Shell RCE Flaws'
    url: 'https://thehackernews.com/2026/10/php-issues-emergency-patches-for-two.html'
  - title: 'Wikipedia: PHP2Shell'
    url: 'https://en.wikipedia.org/wiki/PHP2Shell'
faqs:
  - q: '¿Qué es PHP2Shell?'
    a: 'Es el nombre de dos vulnerabilidades críticas en PHP (CVE-2026-109618 y CVE-2026-109619), publicadas el 21 de octubre de 2026. Bajo ciertas condiciones permiten que un atacante, sin usuario ni contraseña, ejecute código en el servidor donde corre el sitio web.'
  - q: '¿Mi sitio en WordPress está afectado?'
    a: 'Si el servidor usa una versión de PHP sin parchear, sí. La falla está en PHP, no en WordPress ni en sus plugins, así que tener WordPress actualizado no basta. Hay que confirmar con el hosting que PHP está en una versión corregida.'
  - q: '¿Qué versiones de PHP están corregidas?'
    a: 'PHP 8.5.12, 8.4.27, 8.3.36 y 8.2.35, o los paquetes parchados que publican las distribuciones y los paneles de hosting. Las versiones 7.4, 8.0 y 8.1 solo tienen parches de código fuente, y de la 5.4 a la 7.3 no hay corrección oficial.'
  - q: '¿Basta con un firewall o un WAF como Cloudflare?'
    a: 'No. Un WAF bloquea los ataques conocidos y solo si todo el tráfico pasa por él. Es un paliativo mientras se actualiza; la única corrección completa es actualizar PHP.'
  - q: '¿Cómo sé qué versión de PHP usa mi sitio?'
    a: 'Pregúntale a tu proveedor o hosting por escrito. Si tienes cPanel, la versión aparece en "MultiPHP Manager" o "Seleccionar versión de PHP". Un desarrollador puede verla con el comando php -v en el servidor.'
---

El 17 de octubre alguien ya estaba tocando la puerta. Los servidores trampa de Amazon registraron un intento de ataque contra una falla de PHP que, oficialmente, todavía no existía: el parche saldría cuatro días después.

Así empieza la historia de **PHP2Shell**, el nombre de dos vulnerabilidades críticas (CVE-2026-109618 y CVE-2026-109619) que, bajo ciertas condiciones, permiten a un atacante **ejecutar código en un servidor sin usuario ni contraseña**. Con eso puede instalar una puerta trasera, robar la base de datos de clientes o leer las llaves de la pasarela de pagos.

Y PHP no es un lenguaje de nicho. Según W3Techs, está detrás de cerca del **70 % de los sitios web** cuyo lenguaje de servidor se conoce. WordPress, WooCommerce, Joomla, Drupal, Laravel y los paneles cPanel y Plesk de la mayoría de los hostings funcionan con PHP. Si tu empresa tiene una página web, una tienda en línea o un sistema interno y no sabes en qué está hecho, es probable que esta noticia te toque.

## Qué pasó, sin tecnicismos

PHP es el programa que, en el servidor, arma la página que ves cada vez que alguien entra a un sitio. Las dos fallas están en una parte que casi todas las peticiones tocan: cómo PHP reserva memoria y cómo se recupera cuando algo sale mal.

- **La primera (CVE-2026-109618)** aparece cuando una petición agota la memoria permitida en el momento justo. PHP queda con datos a medio armar y los trata como válidos.
- **La segunda (CVE-2026-109619)** aparece tras un error fatal: PHP conserva referencias a memoria de la visita anterior, y la siguiente visita puede usarlas.

Un atacante que sabe provocar esas condiciones puede convertirlas en control del servidor. En los servidores con Apache y `mod_php` es aún peor: basta una petición, sin iniciar sesión, **antes de que se ejecute una sola línea del código del sitio**. PHP-FPM, php-cgi, FrankenPHP y LiteSpeed también están en riesgo.

## La cronología: una falla de dos años y un secreto que duró horas

- **2024.** En una auditoría externa, un desarrollador del núcleo de PHP ve las primeras señales del problema de memoria. No se corrige: el equipo no se pone de acuerdo sobre cómo hacerlo y nadie ha encontrado la forma de explotarlo.
- **Agosto de 2026.** Investigadores de Calif, dentro del programa _Patch the Planet_ de OpenAI, y de Wiz encuentran, cada uno por su lado y con ayuda de modelos de IA, cómo convertir esa falla en ejecución remota de código.
- **17 de octubre.** Amazon detecta el primer intento de explotación.
- **20 de octubre.** Los identificadores de las fallas se filtran en foros y redes, y Calif publica por error un video de su prueba de concepto. PHP adelanta el lanzamiento del parche.
- **21 de octubre, madrugada.** Chainguard publica imágenes con la corrección más de seis horas antes de lo acordado. Cualquiera podía comparar el código y ver qué cambió.
- **21 de octubre.** Salen PHP 8.5.12, 8.4.27, 8.3.36 y 8.2.35. Varios sitios de gobiernos europeos se desconectan por precaución, la NSA recomienda apagar lo que no se pueda actualizar y la Fundación Wikimedia apaga servicios.
- **23 de octubre.** Amazon reporta que PHP2Shell ya se explota ampliamente. Ese mismo día se publica un tercer CVE (CVE-2026-115560), que solo afecta configuraciones poco comunes y todavía no tiene parche.

## Nuestra lectura: lo que PHP2Shell sí nos enseña

Es fácil leer esta noticia como "PHP es inseguro, hay que migrar". No es nuestra conclusión. PHP 8 es un lenguaje maduro y su equipo respondió rápido una vez encontró la salida. Las lecciones útiles son otras.

### 1. El riesgo no es PHP: es el "lo montamos y nos olvidamos"

Los atacantes no buscan tu empresa en particular. Recorren internet de forma automática buscando servidores sin parchear. El sitio más expuesto no es el de la tecnología "mala"; es el que nadie mantiene: el WordPress que se instaló hace cinco años, la versión de PHP que el hosting dejó por defecto, la página de una campaña vieja que sigue en línea.

Ojo con este dato: **de PHP 5.4 a 7.3 no hay corrección oficial**. Si tu sitio todavía corre en PHP 7, PHP2Shell no es un aviso para actualizar "cuando se pueda". Es la fecha límite.

### 2. La IA le cambió el reloj a la seguridad

La falla de memoria se vio en 2024 y se quedó quieta casi dos años porque nadie sabía explotarla. En 2026, investigadores con modelos de IA lo lograron en semanas. La misma Fundación PHP lo resume así: _las herramientas encuentran fallas más rápido que nunca, para defensores y atacantes por igual_. La firma Sansec llegó a pronosticar ataques masivos a los 15 minutos de publicado el parche.

Eso cambia una pregunta práctica: si tu proveedor actualiza los servidores "una vez al mes", la ventana de exposición ya no se mide en minutos, se mide en semanas. Eso ya no alcanza.

### 3. Medio internet se sostiene sobre equipos pequeños

Según The Guardian, la Fundación PHP tiene 13 empleados y vive de donaciones. La propia fundación reconoció que la demora fue una "falla estructural", causada por su forma de tomar decisiones y por la falta de recursos, y ya cambió su proceso. El software libre es gratis de usar, no de mantener. Cuando eliges una tecnología, también estás eligiendo quién la mantiene, y eso incluye a tu proveedor.

### 4. No puedes parchear lo que no sabes que tienes

La recomendación que más se repite entre los expertos es la menos glamorosa: **haz inventario**. El servidor de pruebas, el subdominio viejo, el software de terceros que trae PHP adentro. El servidor de producción casi siempre se actualiza; el que se olvida es el que termina siendo la entrada.

## Qué hacer esta semana

### Si tienes un negocio (y no programas)

1. **Pregúntale a tu proveedor o a tu hosting**: "¿Qué versión de PHP usa mi sitio y ya está corregida contra PHP2Shell?". Pide la respuesta por escrito, con el número de versión.
2. **Si la respuesta es "PHP 7" o "no sé"**, trátalo como urgente.
3. **Si tu sitio lo hizo alguien que ya no está**, pide una revisión. Un sitio sin responsable es exactamente el que se olvida.
4. **Si ese servidor guarda contraseñas o llaves de pagos** y tu proveedor ve señales raras, cámbialas.

### Si eres del equipo técnico

| Versión de PHP     | Estado                                  | Qué hacer                                                    |
| ------------------ | --------------------------------------- | ------------------------------------------------------------ |
| 8.2, 8.3, 8.4, 8.5 | Parche oficial                          | Actualizar a 8.2.35, 8.3.36, 8.4.27 u 8.5.12                 |
| 7.4, 8.0, 8.1      | Sin soporte; solo parche de código fuente | Usar el paquete parchado del proveedor o migrar a 8.4 / 8.5 |
| 5.4 a 7.3          | Sin corrección                          | Migrar ya; mientras tanto, aislar o apagar                   |

- **Revisa los paquetes de tu distribución.** cPanel, CloudLinux y Ubuntu, entre otros, publicaron versiones parchadas que conservan el número de versión anterior, así que confirma en el registro de cambios, no solo con `php -v`. La imagen oficial de Docker no tiene corrección para PHP 8.1 o anteriores.
- **Si no puedes actualizar hoy**, hay mitigaciones parciales: `session.upload_progress.enabled=0`; `memory_limit=-1` sin que la aplicación pueda cambiarlo, con un límite de memoria por contenedor o cgroup; en PHP 8.5, `fatal_error_backtraces=0`. Después, reinicia todos los workers. PHP insiste en que actualizar es la única corrección completa.
- **Busca señales de ataque**: peticiones multipart extrañas seguidas de errores de límite de memoria o de varios errores 500, cookies `PHPSESSID` enormes o malformadas, y reinicios de workers sin explicación. Si las ves, trata el servidor como comprometido y cambia las credenciales que guarda.
- **Un WAF ayuda, pero no cura.** Cloudflare desplegó reglas para los ataques conocidos, pero solo protegen si todo el tráfico pasa por Cloudflare.

## Nuestra posición

PHP2Shell se va a corregir, como se corrigieron Heartbleed y Log4Shell. Lo que no se corrige solo es la forma en que muchas empresas compran software: como si fuera un mueble que se entrega y ya.

Un sistema que vive en internet es más parecido a un carro: necesita mantenimiento, y alguien tiene que responder cuando se prende una alerta. Por eso, cuando cotices un desarrollo o contrates un hosting, haz una pregunta que casi nadie hace: **¿quién actualiza esto cuando salga el próximo PHP2Shell, y en cuánto tiempo?** Si la respuesta no está en el contrato, no existe.

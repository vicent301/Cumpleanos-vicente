# Invitación de cumpleaños de Vicente

Contexto para Claude Code: este proyecto se planificó en un chat de claude.ai. Acá está todo lo decidido hasta ahora. Hablale a Vicente en español rioplatense (voseo).

## Objetivo
Una invitación web de cumpleaños que Vicente comparte por WhatsApp. Sus amigos la abren desde el celular, confirman asistencia con su nombre y la confirmación queda guardada en un Google Sheets. Vicente no tiene apuro: prioriza que quede muy bien hecha.

## Decisiones tomadas
- **Hosting:** GitHub Pages, repo `vicent301/Cumpleanos-vicente` (público, rama `main`, raíz). URL esperada: `https://vicent301.github.io/Cumpleanos-vicente/`
- **Archivo principal:** `index.html` autocontenido (HTML + CSS + JS en un solo archivo, sin build).
- **Confirmaciones:** Google Apps Script publicado como aplicación web (`Code.gs` en este repo, se pega en la planilla vía Extensiones → Apps Script). La página envía un POST con `fetch(URL, { method: 'POST', mode: 'no-cors', body: new URLSearchParams({...}) })` usando estos campos:
  - `nombre` (obligatorio, máx. 60 caracteres)
  - `web`: campo oculto anti-bots, siempre vacío
- La planilla guarda en la hoja "Confirmados": Fecha, Nombre.

## Contenido de la invitación
1. **Intro animada (el momento estrella):** escena nocturna de ciudad. Llega una camioneta (Vicente maneja una Jeep Compass) con una caricatura de Vicente asomándose. Se enciende un reflector que proyecta un logo en las nubes, al estilo de una señal en el cielo.
2. **Datos del cumple:** fecha, hora, dirección y un botón "Cómo llegar" que abre Google Maps.
3. ~~"¿Te quedás a dormir?"~~: **sacado a pedido de Vicente (21/10/2026).**
4. **Confirmar asistencia:** campo de nombre y botón "Confirmo". Al enviar, mostrar un mensaje de confirmación claro.
5. **Opcionales a charlar con Vicente:** cuenta regresiva, dress code, playlist, "qué traer".

## Restricciones de diseño (importantes)
- **No usar el símbolo de Batman** ni nada reconocible de esa franquicia. El reflector proyecta un **logo propio** (por ejemplo, las iniciales de Vicente o "Vicente + edad").
- **No usar logos reales** de boliches, cervezas ni de Jeep. La camioneta es un SUV genérico inspirado en la suya, sin logo ni parrilla de Jeep.
- La caricatura se hace en ilustración vectorial (SVG) a partir de una foto que Vicente va a pasar.
- Pensado primero para el celular (mobile-first), respetando `prefers-reduced-motion`. Liviano para abrir rápido desde WhatsApp.
- Agregar meta tags Open Graph (título, descripción, imagen) para que el link se vea bien al compartirlo.

## Datos del cumple (ya en `CONFIG`)
- Sábado 31/10/2026, 21:30 hs (coincide con Halloween). Cumple 23.
- Casa de Vicente, X5972 Pilar, Córdoba. Maps: https://maps.app.goo.gl/QRNJ9CypNrPaN4zCA
- Fiesta de disfraces, **disfraz libre**.

## Pendiente de Vicente
- Foto de frente para la caricatura
- Estilo o colores que prefiere
- La URL `/exec` del Apps Script, una vez implementado

## Estado
- [x] Repo creado
- [x] `Code.gs` escrito (falta implementarlo en Google)
- [x] Definir estilo visual con Vicente: noche de estreno de cine (fondo #090d20, acento #f4b942, entrada de cine en papel #efe6d2 con sello rojo). Tipografías: Big Shoulders Display (títulos), Familjen Grotesk (texto), IBM Plex Mono (etiquetas). Logo del reflector: chopp de cerveza genérico con "V" + edad.
- [x] `index.html` primera versión (datos en el objeto `CONFIG` al principio del script)
- [x] **Cambio de decisión:** Vicente descartó la caricatura, la escena dibujada y la intro animada a pantalla completa. Su referencia es la invitación de sus amigos (Tomi y Facu): afiche en una columna, directo al grano, con un objeto jugable (discos con sus caras que se scratchean). No volver a proponer caricaturas ni intros largas.
- [ ] **A Vicente tampoco le gustó la versión de la brújula (21/10/2026).** Al retomar, antes de diseñar de nuevo, preguntarle qué le gusta concretamente de la invitación de sus amigos y pedirle más referencias. Mostrarle bocetos rápidos antes de hacer una versión completa.
- [x] Versión actual (no aprobada): afiche oscuro "asfalto + luz de giro ámbar", tipografías Anton / Familjen Grotesk / IBM Plex Mono. Hero = **brújula** (juego con "Compass") con su cara en duotono ámbar (`assets/cara.webp`/`.jpg`); al tocarla la aguja gira y frena apuntando a "El cumple". Después: ¿Venís? (form a Google Sheets), entrada con los datos, cuenta regresiva, acciones (agendar, cómo llegar, copiar dirección, compartir) y "Tocá bocina" (sonido + vibración). `og.jpg` (1200×630) sale de su foto, sin la insignia "COMPASS".
- [ ] **Nuevo tema: fiesta de disfraces (21/10/2026).** Rediseñar con esa onda. Vicente no está seguro de que le guste su foto en duotono. Para "Cómo llegar" quiere un link a Google Maps; pasa la dirección.
- [x] Bocetos de disfraces (21/10/2026): terror neón violeta/naranja con calabaza, colorida amarillo/rosa/celeste con ruleta de ideas de disfraz, baile de máscaras negro/dorado. **No le gustó ninguno.** No seguir proponiendo estilos a ciegas: primero conseguir referencias concretas (capturas/link de la invitación de Tomi y Facu u otras).
- [ ] **Qué le gusta de la de Tomi y Facu (21/10/2026):** que todo estaba pensado alrededor del lugar (un bar de vinilos → discos con sus caras) y que usaba sus fotos. O sea: una idea coherente con la fiesta, con fotos reales, no un "estilo" de colores. Para su cumple el concepto tiene que salir de la fiesta de disfraces en su casa.
- [ ] **Referencias de Vicente (en ~/Downloads, 21/10/2026):** afiches de fiesta en papel claro con **una sola tinta** (azul francia o rojo), tipografía grotesk pesada, dibujos de línea a mano, datos con letra manuscrita en una tablita, y **foto recortada tipo collage de chico** (en B/N) con un número enorme pintado a brocha detrás. Fotos suyas: `WhatsApp Image 2026-10-21 at 17.27.50*.jpeg` y `11.57.51*.jpeg` (la de chico es `17.27.50 (1)`; recortar solo a él, no al adulto). Boceto actual en esa línea: foto de chico recortada + "23" a brocha + disfraces dibujados al tocar (rey, pirata, bigote, diablito, superhéroe, mago); tinta azul o roja a elegir.
- [ ] Fotos de chico (Descargas, `WhatsApp Image 2026-09-16 at 00.0*.jpeg`): **pulgar arriba** (hero, `00.05.42`) y **autito** (en "Cómo llegar", `00.02.46`; recortar solo a él). **No usar la del brindis** (`00.03.12`), Vicente la sacó. Boceto: https://claude.ai/artifact/DmBqV4LkRTnRW8ZztS6w8e
- [ ] **Cambios pedidos (21/10/2026):** confirmar asistencia **por WhatsApp directo a Vicente** (link `wa.me/<número>?text=...`, como la invitación de Facu) en vez del formulario a Google Sheets. Número: 5493572534546 (formato wa.me, sin +). Textos en **primera persona** ("Cumplo 23 y hago una", "Dónde: mi casa", "hoy vengo de pirata"), nada de "el cumple de Vicente". Sacado el "tocame" con flecha. Tipografía del título en duda: el boceto deja probar Actual / Angosta / Marcador / Pincel.
- [x] Opciones collage con stickers (foto con gorra, logo Puma tapado), en `bocetos/collage-stickers/`: **A "collage plateado" (gris, globos cromados) le pareció muy feo, descartada.** Queda B (blanco/negro + marcador rojo + calendario) y la de tinta azul/roja.
- [ ] **Versión actual (B copiando el afiche "33"), `bocetos/estilo-33/`:** le gustó la idea de B pero pidió copiar más fiel las referencias. Papel blanco arrugado, cabeza sola recortada en B/N con gorrito de acuarela (tocar cambia: gorrito, corona, bruja, diablo), "23" en Anton, "años de disfraces" + ¿Dónde?/¿Cuándo?/¿De qué? en Syne, calendario de papel (Open Sans) con el 31 marcado con marcador rojo, autito en semitono. No le gustaron los disfraces dibujados planos ni el calendario plano anterior.
- [ ] **Imagen hecha con otra IA (21/10/2026)** (`Descargas/Invitación de Cumpleaños Disco de Vicente 23.png`): collage beige con lentejuelas plateadas, bolas de disco azules, "Vicente" en letras recortadas tipo nota de rescate, "23" en globos plateados, su foto de chico con la gorra y gorrito de cumple azul brillante, "HAPPY BIRTHDAY" en letras recortadas, globos azules y plateados, "Fiesta de disfraces" en pincel azul. **Es para los que van más tarde, NO reemplaza la invitación web.** Le encantó: tomarla como referencia fuerte de estilo. Una página armada con esa imagen + botones quedó en `bocetos/imagen-ia/` por si sirve. Ojo: dice "Mi cada" y tiene logos reales.
- [~] ~~Conectar la URL del script~~: ya no hace falta si se confirma por WhatsApp (`Code.gs` quedaría sin uso).
- [ ] Activar GitHub Pages (Settings → Pages → main / root)

# Invitación de cumpleaños de Vicente

Contexto para Claude Code: este proyecto se planificó en un chat de claude.ai. Acá está todo lo decidido hasta ahora. Hablale a Vicente en español rioplatense (voseo).

## Objetivo
Una invitación web de cumpleaños que Vicente comparte por WhatsApp. Sus amigos la abren desde el celular, confirman asistencia con su nombre y la confirmación queda guardada en un Google Sheets. Vicente no tiene apuro: prioriza que quede muy bien hecha.

## Decisiones tomadas
- **Hosting:** GitHub Pages, repo `vicent301/Cumpleanos-vicente` (público, rama `main`, raíz). URL esperada: `https://vicent301.github.io/Cumpleanos-vicente/`
- **Archivo principal:** `index.html` autocontenido (HTML + CSS + JS en un solo archivo, sin build).
- **Confirmaciones:** Google Apps Script publicado como aplicación web (`Code.gs` en este repo, se pega en la planilla vía Extensiones → Apps Script). La página envía un POST con `fetch(URL, { method: 'POST', mode: 'no-cors', body: new URLSearchParams({...}) })` usando estos campos:
  - `nombre` (obligatorio, máx. 60 caracteres)
  - `dormir`: `si` o `no`
  - `web`: campo oculto anti-bots, siempre vacío
- La planilla guarda en la hoja "Confirmados": Fecha, Nombre, Se queda a dormir.

## Contenido de la invitación
1. **Intro animada (el momento estrella):** escena nocturna de ciudad. Llega una camioneta (Vicente maneja una Jeep Compass) con una caricatura de Vicente asomándose. Se enciende un reflector que proyecta un logo en las nubes, al estilo de una señal en el cielo.
2. **Datos del cumple:** fecha, hora, dirección y un botón "Cómo llegar" que abre Google Maps.
3. **"¿Te quedás a dormir?":** opción Sí/No que viaja con la confirmación.
4. **Confirmar asistencia:** campo de nombre y botón "Confirmo". Al enviar, mostrar un mensaje de confirmación claro.
5. **Opcionales a charlar con Vicente:** cuenta regresiva, dress code, playlist, "qué traer".

## Restricciones de diseño (importantes)
- **No usar el símbolo de Batman** ni nada reconocible de esa franquicia. El reflector proyecta un **logo propio** (por ejemplo, las iniciales de Vicente o "Vicente + edad").
- **No usar logos reales** de boliches, cervezas ni de Jeep. La camioneta es un SUV genérico inspirado en la suya, sin logo ni parrilla de Jeep.
- La caricatura se hace en ilustración vectorial (SVG) a partir de una foto que Vicente va a pasar.
- Pensado primero para el celular (mobile-first), respetando `prefers-reduced-motion`. Liviano para abrir rápido desde WhatsApp.
- Agregar meta tags Open Graph (título, descripción, imagen) para que el link se vea bien al compartirlo.

## Pendiente de Vicente
- Fecha, hora y dirección del cumple
- Cuántos años cumple
- Foto de frente para la caricatura
- Estilo o colores que prefiere
- La URL `/exec` del Apps Script, una vez implementado

## Estado
- [x] Repo creado
- [x] `Code.gs` escrito (falta implementarlo en Google)
- [ ] Definir estilo visual con Vicente
- [ ] `index.html` primera versión
- [ ] Conectar la URL del script y probar una confirmación de punta a punta
- [ ] Activar GitHub Pages (Settings → Pages → main / root)

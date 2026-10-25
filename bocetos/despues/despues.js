// ====== Datos de la noche (los de después de las 00:30) ======
const CONFIG = {
  fecha: '2026-11-01T00:30:00-03:00',          // sábado 31 a la noche = domingo 1 a las 00:30
  horas: 5,                                    // duración para el calendario
  lugar: 'Casa de Vicente, Pilar, Córdoba',
  mapa: 'https://maps.app.goo.gl/r1agEd2edMjcGBZU9',
  whatsapp: '5493572534546',                   // con código de país, sin +
  mensaje: '¡Vicente! Caigo a tu cumple después de las 00:30 🎭'
};

const $ = (id) => document.getElementById(id);
const inicio = new Date(CONFIG.fecha);
const fin = new Date(inicio.getTime() + CONFIG.horas * 3600e3);
const utc = (d) => d.toISOString().replace(/[-:]|\.\d{3}/g, '');

$('btn-wsp').href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(CONFIG.mensaje);
$('btn-mapa').href = CONFIG.mapa;
$('btn-agenda').href = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
  + '&text=' + encodeURIComponent('Cumple 23 de Vicente · Después de las 00:30')
  + '&dates=' + utc(inicio) + '/' + utc(fin)
  + '&location=' + encodeURIComponent(CONFIG.lugar)
  + '&details=' + encodeURIComponent('Fiesta de disfraces: disfraz sí o sí. Cómo llegar: ' + CONFIG.mapa);

// Cuenta regresiva (hora de Argentina). La noche "es" el sábado 31, aunque arranque el domingo 1.
const ahora = Date.now();
const dia = (t) => new Date(t).toLocaleDateString('en-CA', { timeZone: 'America/Argentina/Buenos_Aires' });
const faltan = Math.round((new Date(dia(inicio - 864e5)) - new Date(dia(ahora))) / 864e5);
if ($('cuenta')) $('cuenta').innerHTML = ahora > fin.getTime() ? 'Gracias por venir.'
  : ahora >= inicio.getTime() ? '<strong>Es ahora.</strong> Vení disfrazado.'
  : faltan <= 0 ? '<strong>¡Es hoy!</strong> Nos vemos a las 00:30.'
  : faltan === 1 ? '<strong>¡Es mañana!</strong> Andá preparando el disfraz.'
  : 'Faltan <strong>' + faltan + ' días</strong>. Andá pensando el disfraz.';

// Disfraces en la cabeza (solo en las versiones que la tienen)
const cabeza = $('cabeza');
if (cabeza) {
  const disfraces = [...cabeza.querySelectorAll('.disfraz')];
  let i = 0;
  cabeza.addEventListener('click', () => {
    cabeza.classList.remove('wiggle');
    disfraces[i].classList.remove('on'); i = (i + 1) % disfraces.length; disfraces[i].classList.add('on');
    if (navigator.vibrate) navigator.vibrate(15);
  });
}

let tt;
function toast(m) { const el = $('toast'); el.textContent = m; el.hidden = false; clearTimeout(tt); tt = setTimeout(() => el.hidden = true, 2200); }
$('btn-compartir').addEventListener('click', async () => {
  const url = location.href.split('#')[0];
  if (navigator.share) {
    try { await navigator.share({ title: 'Vicente 23 · Después de las 00:30', text: 'Cumplo 23 y a la noche se arma 🎭 Sábado 31, después de las 00:30', url }); } catch (e) {}
  } else {
    try { await navigator.clipboard.writeText(url); toast('Link copiado'); } catch (e) { toast(url); }
  }
});

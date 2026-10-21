// Recibe las confirmaciones de la invitación y las guarda en la planilla.
const SHEET_NAME = 'Confirmados';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000); // evita que dos confirmaciones simultáneas se pisen
  try {
    const p = (e && e.parameter) || {};

    // Campo oculto anti-bots: una persona nunca lo completa
    if (p.web) return respond(true);

    const nombre = limpiar(p.nombre).slice(0, 60);
    if (!nombre) return respond(false, 'Falta el nombre');

    const dormir = p.dormir === 'si' ? 'Sí' : 'No';

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Fecha', 'Nombre', 'Se queda a dormir']);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([new Date(), nombre, dormir]);
    return respond(true);
  } finally {
    lock.releaseLock();
  }
}

// Quita espacios y evita que un nombre se interprete como fórmula
function limpiar(valor) {
  const texto = String(valor || '').trim();
  return /^[=+\-@]/.test(texto) ? "'" + texto : texto;
}

function respond(ok, msg) {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: ok, msg: msg || '' }))
    .setMimeType(ContentService.MimeType.JSON);
}

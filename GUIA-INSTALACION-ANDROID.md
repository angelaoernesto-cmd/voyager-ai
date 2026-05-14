# 📱 Voyager AI — Guía de instalación en Android
### Instala la app en tu móvil en menos de 15 minutos, sin App Store

---

## Antes de empezar — qué necesitas

| Qué | Dónde conseguirlo | Coste |
|-----|------------------|-------|
| Cuenta GitHub | github.com | Gratis |
| Cuenta Vercel | vercel.com | Gratis |
| Clave API Anthropic | console.anthropic.com | Gratis (incluye ~$5 de crédito) |
| Móvil Android con Chrome | Ya lo tienes | — |

---

## PASO 1 — Descarga los archivos del proyecto

1. Descarga el archivo **`voyager-app.zip`** que te ha dado Claude
2. En tu ordenador, descomprímelo
3. Verás una carpeta llamada `voyager` con esta estructura:
   ```
   voyager/
   ├── src/
   │   ├── App.jsx       ← toda la app
   │   └── index.js
   ├── public/
   │   ├── index.html
   │   ├── manifest.json  ← hace que sea instalable
   │   ├── sw.js          ← funciona sin internet
   │   ├── icon-192.png
   │   └── icon-512.png
   ├── package.json
   ├── vercel.json
   └── .gitignore
   ```

---

## PASO 2 — Consigue tu clave API de Anthropic (la IA)

1. Ve a **[console.anthropic.com](https://console.anthropic.com)**
2. Pulsa **"Sign up"** y regístrate con tu correo
3. Verifica tu email y entra
4. En el menú izquierdo, pulsa **"API Keys"**
5. Pulsa **"Create Key"**, ponle nombre (ej: "voyager")
6. **⚠️ Copia la clave ahora** — empieza por `sk-ant-` — solo se muestra una vez
7. Guárdala en un lugar seguro (bloc de notas, gestor de contraseñas)

> 💡 Anthropic da ~$5 de crédito gratuito al registrarse, suficiente para cientos de itinerarios generados.

---

## PASO 3 — Sube el código a GitHub

GitHub es donde se guarda el código. Vercel lo leerá desde ahí.

### Opción A — Subir desde el navegador (más fácil)

1. Ve a **[github.com](https://github.com)** → **"Sign up"** si no tienes cuenta
2. Pulsa el botón verde **"New"** (o el **+** arriba a la derecha → "New repository")
3. Nombre del repositorio: **`voyager-ai`**
4. Deja todo lo demás por defecto
5. Pulsa **"Create repository"**
6. En la página que aparece, pulsa **"uploading an existing file"**
7. **Arrastra** todos los archivos y carpetas de tu carpeta `voyager` al área gris
8. Escribe un mensaje de commit: `"Primera versión"` → pulsa **"Commit changes"**

### Opción B — Usar GitHub Desktop (para repetir fácilmente)

1. Descarga **[GitHub Desktop](https://desktop.github.com)** e instálalo
2. Inicia sesión con tu cuenta GitHub
3. **File → Add Local Repository** → selecciona tu carpeta `voyager`
4. Pulsa **"Publish repository"** → deja el nombre `voyager-ai` → **"Publish"**

---

## PASO 4 — Despliega en Vercel (un link web para tu app)

1. Ve a **[vercel.com](https://vercel.com)**
2. Pulsa **"Sign Up"** → **"Continue with GitHub"** (usa tu cuenta de GitHub)
3. Autoriza el acceso
4. Pulsa **"Add New..."** → **"Project"**
5. Verás tu repositorio `voyager-ai` en la lista — pulsa **"Import"**
6. En la pantalla de configuración, **no cambies nada** — Vercel lo detecta automáticamente
7. Pulsa **"Deploy"**
8. Espera ~2 minutos mientras construye la app ⏳
9. Cuando veas 🎉 **"Congratulations!"**, tu app está online

Vercel te da una URL como: **`https://voyager-ai-tuusuario.vercel.app`**

---

## PASO 5 — Añade tu clave API (MUY IMPORTANTE)

Sin este paso, la generación con IA no funcionará.

1. En Vercel, abre tu proyecto `voyager-ai`
2. Ve a **Settings** (arriba) → **Environment Variables**
3. Rellena así:

   | Campo | Valor |
   |-------|-------|
   | **NAME** | `REACT_APP_ANTHROPIC_KEY` |
   | **VALUE** | `sk-ant-xxxxxxxxxx` (tu clave de Anthropic) |
   | **Environments** | ✅ Production, ✅ Preview, ✅ Development |

4. Pulsa **"Save"**
5. Ahora ve a **Deployments** → pulsa los **tres puntos** del último deploy → **"Redeploy"**
6. Espera ~2 minutos → ya está

---

## PASO 6 — Instalar en tu móvil Android 📱

Ahora viene la parte que convierte la web en una app real en tu pantalla de inicio.

### Método A — Chrome (el más fácil)

1. Abre **Chrome** en tu Android
2. Ve a tu URL de Vercel: `https://voyager-ai-tuusuario.vercel.app`
3. Espera a que cargue completamente
4. Aparecerá automáticamente un banner en la parte inferior:
   **"Añadir Voyager a la pantalla de inicio"** — pulsa **"Instalar"**

   > Si no aparece el banner:
   > - Pulsa los **tres puntos** ⋮ arriba a la derecha
   > - Busca **"Añadir a pantalla de inicio"** o **"Instalar app"**
   > - Pulsa y confirma

5. Ponle nombre: **"Voyager"** → **"Añadir"**
6. El icono aparece en tu pantalla de inicio como una app normal ✅

### Método B — Samsung Internet

1. Abre **Samsung Internet**
2. Ve a tu URL de Vercel
3. Pulsa el icono de menú (☰) → **"Añadir página a"** → **"Pantalla de inicio"**

---

## PASO 7 — Comprueba que todo funciona

1. Abre **Voyager** desde tu pantalla de inicio
2. Se abre en pantalla completa, sin barra de URL (como una app nativa)
3. Pulsa **"+ nuevo itinerario"**
4. Escribe un destino → pulsa "Continuar"
5. Deberían aparecer sugerencias de ciudades generadas por la IA ✅

---

## ✅ Checklist final

- [ ] Carpeta `voyager` descomprimida en mi ordenador
- [ ] Clave API de Anthropic guardada (empieza por `sk-ant-`)
- [ ] Repositorio `voyager-ai` creado en GitHub con todos los archivos
- [ ] Proyecto desplegado en Vercel (URL funcionando)
- [ ] Variable `REACT_APP_ANTHROPIC_KEY` añadida en Vercel Settings
- [ ] App instalada en mi Android (icono en pantalla de inicio)
- [ ] Prueba: crear un viaje con IA funciona ✅

---

## ❓ Solución de problemas frecuentes

**"La IA no genera información"**
→ La clave API no está configurada en Vercel, o no has hecho Redeploy después de añadirla.
→ Comprueba en Vercel → Settings → Environment Variables que el nombre sea exactamente `REACT_APP_ANTHROPIC_KEY`.

**"No aparece la opción de instalar en Chrome"**
→ La web tiene que cargarse por HTTPS (Vercel siempre usa HTTPS, así que no hay problema).
→ Prueba: menú ⋮ → "Instalar app". Si no aparece, el dispositivo puede necesitar actualizar Chrome.

**"El icono es blanco o feo"**
→ Normal la primera vez. Android puede tardar unos minutos en generar el icono adaptativo.
→ Si sigue así, desinstala y vuelve a instalar.

**"Se borra todo al actualizar Chrome"**
→ Los datos se guardan en localStorage. Activa "Nunca borrar datos de sitio" en ajustes de Chrome para esta URL.

**"La app no funciona sin internet"**
→ Necesitas abrirla al menos una vez con internet para que el service worker guarde la caché.
→ Después podrás ver tus itinerarios guardados sin conexión. La IA siempre necesita conexión.

**"Quiero compartirla con amigos"**
→ Solo envía tu URL de Vercel: `https://voyager-ai-tuusuario.vercel.app`
→ Cada persona instala la app en su móvil de la misma forma (Paso 6).
→ Para compartir itinerarios, usa el botón 🔗 "Compartir" dentro de la app.

---

## 🔄 Actualizar la app en el futuro

Cuando Claude te dé una versión mejorada de `App.jsx`:

1. Copia el nuevo `App.jsx` dentro de `src/` en tu carpeta local
2. Si usas GitHub Desktop: **"Commit to main"** → **"Push origin"**
3. Si subiste manualmente: ve a GitHub → tu repositorio → `src/App.jsx` → ✏️ editar → pega el nuevo código → **"Commit changes"**
4. Vercel detecta el cambio y despliega automáticamente en ~2 minutos
5. La app en tu móvil se actualiza sola la próxima vez que la abres con internet ✅

---

## 📊 Coste estimado

| Servicio | Plan | Coste mensual |
|----------|------|--------------|
| GitHub | Free | 0 € |
| Vercel | Hobby (Free) | 0 € |
| Anthropic API | Pay-as-you-go | ~0.01-0.05 € por viaje generado |
| Total | | ~0-2 €/mes según uso |

---

*Voyager AI — Desarrollado con Claude ✦*

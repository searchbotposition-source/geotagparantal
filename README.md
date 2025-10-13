ParentAlloc
===========

Proyecto estático con páginas `geo.html`, `geosim.html` y `locatorthanks.html`. Preparado para Vercel con endpoint `/api/env` que expone variables públicas.

Variables de entorno (Vercel)
-----------------------------

Configura en Vercel (Project Settings → Environment Variables):

- `GOOGLE_MAPS_API_KEY`: clave de Google Maps (habilitar APIs: Maps JavaScript, Places, Geometry)
- `API_BASE` (opcional): base URL de tu backend (ej.: `https://api.tu-dominio.com` o vacío)

El cliente obtiene estas variables desde `/api/env` y carga dinámicamente el script de Google Maps.

Estructura
---------

- `/geo.html`: simulación con mapa y barrios de Buenos Aires
- `/geosim.html`: landing con planes
- `/locatorthanks.html`: entrega con geolocalización del visitante y estimación cacheada
- `/api/env.js`: función serverless para exponer variables públicas

GitHub: crear repo y subir código
---------------------------------

```
# Desde el directorio del proyecto
cd /Users/macos/Desktop/Geo

git init
git branch -M main
git add .
git commit -m "feat: proyecto parentalloc inicial"

# Con GitHub CLI (recomendado)
gh repo create parentalloc --public --source=. --remote=origin --push
```

Requisitos: tener `git` y `gh` (GitHub CLI) autenticado (`gh auth login`). Si prefieres manual: crea el repo en GitHub y luego:

```
git remote add origin https://github.com/<tu-usuario>/parentalloc.git
git push -u origin main
```

Despliegue en Vercel
--------------------

1. Entra a Vercel y "New Project" → importa desde tu repo `parentalloc`.
2. En "Environment Variables" agrega `GOOGLE_MAPS_API_KEY` y `API_BASE` (si aplica).
3. Deploy. Vercel servirá `/api/env` y las páginas estáticas.

Pruebas locales
---------------

Puedes usar Vercel CLI para que funcione `/api/env` localmente:

```
npm i -g vercel
vercel dev
# Abre http://localhost:3000/geo.html
# Abre http://localhost:3000/locatorthanks.html
# Endpoint local: http://localhost:3000/api/env
```

Alternativa (solo archivos estáticos, sin `/api/env`):

```
npx serve -l 5173 .
# El endpoint /api/env no funcionará en este modo.
```

Seguridad
---------

- No expongas secretos sensibles en `/api/env`. Solo claves públicas como la de Maps.
- Restringe la clave de Maps en Google Cloud (HTTP referrers y cuotas).



# Proyecto Frontend con React + Vite

Este proyecto proporciona una configuración mínima para trabajar con React en Vite con HMR y reglas de ESLint.

## Características

- React 19
- Vite 6
- Bootstrap 5
- React Router Dom 7
- Nodemon para desarrollo
- Variables de entorno con dotenv

## Instalación

```bash
# Instalar dependencias
npm install

# O si prefieres usar yarn
yarn install
```

## Scripts disponibles

```bash
# Iniciar servidor de desarrollo con hot-reload
npm run dev

# Iniciar servidor de desarrollo con nodemon (observa cambios en archivos)
npm run start

# Construir para producción
npm run build

# Vista previa de la construcción
npm run preview

# Ejecutar linter
npm run lint
```

## Variables de entorno

El proyecto utiliza variables de entorno a través de un archivo `.env`. Asegúrate de crear este archivo en la raíz del proyecto con las siguientes variables:

```
VITE_API_URL=http://localhost:8080/api
VITE_NODE_ENV=development
```

## Control de versiones

Para inicializar Git en este proyecto:

```bash
# Inicializar repositorio Git
git init

# Añadir todos los archivos al staging
git add .

# Hacer el primer commit
git commit -m "Inicialización del proyecto"

# Conectar con repositorio remoto (reemplaza URL_REPOSITORIO con tu URL)
git remote add origin URL_REPOSITORIO

# Subir cambios al repositorio remoto
git push -u origin main
```

## Estructura del proyecto

```
/
├── public/            # Archivos estáticos
├── src/               # Código fuente
│   ├── assets/        # Recursos (imágenes, etc.)
│   ├── components/    # Componentes reutilizables
│   ├── pages/         # Páginas de la aplicación
│   ├── Services/      # Servicios para API
│   ├── App.jsx        # Componente principal
│   └── main.jsx       # Punto de entrada
├── .env               # Variables de entorno (no incluido en Git)
├── .gitignore         # Archivos ignorados por Git
└── package.json       # Dependencias y scripts
```

# FUTTZAP - Tienda de Zapatillas de Fútbol

Aplicación web desarrollada para el segundo parcial de *Desarrollo de Aplicaciones Web*. Representa una tienda especializada en zapatillas de fútbol con gestión de productos mediante operaciones CRUD simuladas.

---

## 🧑‍💻 Desarrolladores

- *Estudiante 1:* Juan David Gracia Amaya | 0192595 | jdgarciaam-lab |
- *Estudiante 2:* Juhn Sebastian Galvis | 0192617 | John081117 |

---

## 📋 Descripción del negocio

Futtzap es una tienda de zapatillas de fútbol que ofrece productos de marcas reconocidas como Nike, Adidas, Puma, New Balance y Max Sport. Los productos se clasifican en tres categorías: *Césped, **Sintético* y *Microfútbol*.

---

## 🎯 Objetivo de la aplicación

Brindar un catálogo de productos y una herramienta de gestión (CRUD) para administrar el inventario de forma simulada utilizando LocalStorage.

---

## 🛠️ Tecnologías utilizadas

- *Vue.js 3* - Framework principal
- *Vue Router 4* - Enrutamiento y navegación
- *Bootstrap 5.3* - Diseño responsivo y componentes visuales
- *Bootstrap Icons* - Iconografía
- *LocalStorage* - Persistencia de datos simulada
- *JSON* - Datos iniciales de usuarios y productos

---

## 📁 Estructura del proyecto
segundo-parcial-des-app-web/
├── public/
│ ├── favicon.ico
│ └── img/ # Imágenes de productos
├── src/
│ ├── assets/
│ │ └── logo.png # Logo de Futtzap
│ ├── data/
│ │ ├── usuarios.json # Usuarios para login
│ │ └── products.json # 10 productos iniciales
│ ├── router/
│ │ └── index.js # Configuración de rutas
│ ├── services/
│ │ └── productService.js # Lógica CRUD con LocalStorage
│ ├── views/
│ │ ├── LoginView.vue # Inicio de sesión
│ │ ├── DashboardView.vue # Layout principal
│ │ ├── HomeView.vue # Catálogo de productos
│ │ └── ProductView.vue # Gestión CRUD (tabla)
│ ├── App.vue
│ └── main.js
├── package.json
└── README.md


---

## 🔐 Login (Educativo)

La autenticación se realiza mediante un archivo JSON local. *No representa un sistema de autenticación real.*

- *Usuario:* admin
- *Contraseña:* admin123

⚠️ Esta validación es solo con fines educativos. En un entorno real se usaría un backend con encriptación y tokens.

---

## 🗂️ Modularización

El proyecto está organizado de forma modular:

| Carpeta | Propósito |
|---|---|
| views/ | Vistas o páginas de la aplicación |
| services/ | Lógica de negocio y operaciones CRUD |
| router/ | Configuración de rutas y guard de autenticación |
| data/ | Archivos JSON con datos iniciales |

---

## 🔄 Comunicación entre componentes

La comunicación se realiza mediante:

- *Props:* Paso de datos entre vistas (ej: categoría desde la ruta a HomeView)
- *Router:* Navegación entre vistas con <router-view> y <router-link>
- *LocalStorage:* Datos compartidos entre vistas sin necesidad de props

---

## 📦 CRUD de productos

Las operaciones CRUD se simulan en LocalStorage:

| Operación | Función | Descripción |
|---|---|---|
| *Create* | crearProducto() | Agrega un nuevo producto |
| *Read* | obtenerProductos() | Lista todos los productos |
| *Update* | actualizarProducto() | Modifica un producto existente |
| *Delete* | eliminarProducto() | Elimina un producto |

Los productos se precargan desde products.json al iniciar la aplicación.

---

## 🎨 Paleta de colores

| Elemento | Color |
|---|---|
| Fondo principal | #0a0a0f |
| Superficie | #13131a |
| Borde | #2a2a3d |
| Acento | #00e676 |
| Texto | #e8e8f0 |
| Texto secundario | #7a7a9a |

---

## 🚀 Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/segundo-parcial-des-app-web.git

# Entrar al proyecto
cd segundo-parcial-des-app-web

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run serve

👥 Trabajo colaborativo
El proyecto se desarrolló en GitHub con:

Ramas: main (estructura y CRUD), imagenes-logo (logo, favicon e imágenes)

Pull Requests: Integración de cambios mediante PR

Commits: Historial de cambios documentado

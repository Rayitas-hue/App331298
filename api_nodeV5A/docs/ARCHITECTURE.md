# Arquitectura del sistema - API Educativa
API Educativa utilizada una arquitectura desacoplada basada en:
- Backend REST API
- Frontend SAP
- bASE DE DATOS RELACINAL
- Autenticación mediante JWT
- Separación por capas
- Comunicación HTTP/JSPN

## Arquitectura general
```mermaid
flowchart TB
A["Cliente<br/>React + vite"]
A --> B["Axios<br/>Cookies HttpOnly"]
B --> C["Express API"]
C --> D["Routes"]
D --> E["Middlewares"]
E --> F["Comtrollers"]
F --> G["Services"]
G --> H["Repositories"]
H --> I["Sequelize ORM"]
I --> J["MySQL"]
```

## Arquitectura del Backend
```mermaid
graph TD
Routes --> Controllers
Controllers --> Services
Services --> Repositories
Repositories --> Models
Models --> MySQL
Controllers --> Validators
Controllers --> Middlewares
```
### Rutes
Define los endpoints disponibles.
Ejemplo:
POST /api/auth/login
GET /api/auth/perfil

### Controllers
Recibe la petición HTTP y construye la respuesta.
Request
    ↓
Controller
    ↓
Service
    ↓
Response

### Services
Continene la ógica de negocio.
Ejemplo:
crearUsuario()
actualizarUsuario()
eliminarUsuario()

### Repositories
Se encargan del acceso a los datos.
Service
    ↓
Repository
    ↓
MySQL

### Models
Representan las tablas de la base de datos Sequelize.

## Arquitectura del Frontend
```mermaid
graph TD
App --> Router
Router --> Pages
Pages --> Components
Components --> Hooks
Hooks --> Context
Context --> Services
Services --> Axios
Axios --> Backend
```
## Protección de rutas
Documentamos:
Frontend
|-PublicRoutes
|       |_Login
|-ProtectedRoute
|       |-Dashboard
|       |-Usuarios
|       |-Instrucciones
|       |-Sedes
|       |-Docentes
|       |_Cursos
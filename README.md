# EcoClick - Frontend

Este es el frontend de EcoClick, el proyecto que estoy desarrollando en el tecnólogo ADSO del SENA.

EcoClick es una aplicación web para reportar microbasureros, que son los puntos del barrio o de la ciudad donde la gente deja basura donde no debe. La idea es que el ciudadano haga el reporte con una foto y la dirección, y que la entidad de aseo lo pueda atender.

En la app hay tres tipos de usuario:

- **Ciudadano:** hace el reporte y puede ver cómo va.
- **Coordinador:** revisa los reportes, decide cuáles son más urgentes y se los asigna a un operador.
- **Operador de aseo:** va al lugar, hace la limpieza y cierra el reporte subiendo una foto.

Por ahora este repositorio solo tiene el frontend y todavía no está conectado a un backend.

## Con qué está hecho

- React
- Vite
- JavaScript
- CSS

## Cómo ejecutarlo

Primero hay que tener instalado Node.js (yo uso la versión v24.21.0) y Git.

1. Clonar el repositorio:

```bash
git clone https://github.com/mifernandez19/ecoclick-frontend.git
cd ecoclick-frontend
```

2. Instalar las dependencias (esto crea la carpeta `node_modules`):

```bash
npm install
```

3. Encender el proyecto:

```bash
npm run dev
```

4. Abrir en el navegador el enlace que sale en la terminal, que normalmente es `http://localhost:5173`.

## Cómo están organizadas las carpetas

```
ecoclick-frontend/
├── public/          -> imágenes e íconos
├── src/
│   ├── components/  -> componentes que se reutilizan (Encabezado, Boton)
│   ├── pages/       -> las pantallas (Inicio, Login, Registro, CrearReporte, Notificaciones)
│   ├── App.jsx      -> aquí están las rutas
│   ├── main.jsx     -> el archivo donde arranca la app
│   └── index.css    -> los estilos generales
├── .gitignore
└── package.json
```

## Cómo trabajo con Git

Para organizar el trabajo uso una forma sencilla de GitFlow, que fue la que definí en el plan técnico:

- `main`: solo para las versiones que ya se entregan.
- `develop`: aquí se van uniendo las tareas que ya están terminadas.
- `feature/ECO-NN-nombre`: una rama por cada tarea. Por ejemplo, `feature/ECO-04-registro`.
- `fix/ECO-NN-nombre`: para corregir errores.

No hago cambios directamente en `main` ni en `develop`. Todo lo uno por medio de un pull request en GitHub, para revisar los cambios antes.

### Mensajes de los commits

Los mensajes siguen este formato: `tipo(módulo): qué hice (código de la tarea)`.

Los tipos que más uso son:

- `feat`: cuando agrego algo nuevo. Ejemplo: `feat(auth): agrega validación de celular (ECO-04)`
- `fix`: cuando corrijo un error. Ejemplo: `fix(ui): restaura la clase error y la reutiliza en el registro (ECO-04)`
- `docs`: cuando cambio la documentación, como este README.
- `chore`: para configuración. Ejemplo: `chore: configuración inicial del proyecto EcoClick`

## Qué llevo hasta ahora

Ya está:

- La navegación entre las pantallas principales.
- El formulario de registro valida el documento, los nombres, los apellidos, el celular y el correo, y muestra un mensaje en rojo debajo de cada campo cuando hay un error.

Me falta:

- Conectarlo con el backend.
- Agregar el campo de contraseña en el registro.
- El rol de administrador no lo incluí en esta versión.

## Autora

María Isabel Fernández Acosta
Tecnólogo en Análisis y Desarrollo de Software (ADSO) - SENA
Ficha: 3336056
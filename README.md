# Portfolio — Jorge Sánchez González

Un portfolio personal construido para mostrar mi perfil, capacidades técnicas y proyectos.

**En vivo:** [https://jorgesg.dev/](https://jorgesg.dev/)

---

## Sobre mí

Desarrollador Full Stack Junior con doble titulación en DAM y DAW. Me reconvertí al sector tech en 2022 tras más de una década en entornos de alta demanda en Madrid y Londres.

He trabajado en proyectos reales en **Indra** (migración de 3 apps Angular v16→v21, +2.000 tests con JUnit y Mockito) y **NTT Data** (desarrollo low-code con Appian). Tengo proyectos propios desplegados en Vercel con Angular, React y Node.js.

Busco un equipo donde pueda contribuir desde el primer día tanto en frontend como en backend.

---

## ¿Por qué este stack?

El objetivo ha sido mantener el proyecto lo más sencillo posible — sin backend, sin base de datos, sin autenticación...
Una app puramente frontend es suficiente para demostrar habilidades del mundo real sin añadir complejidad innecesaria.

| Librería            | Motivo                                                                                                                            |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Next.js 16**      | El framework más usado con React. Facilita el enrutamiento, la optimización de imágenes y el rendimiento sin configuración extra. |
| **React 19**        | Mis últimos proyectos han sido en Angular, así que quería ampliar conocimientos con React. Última versión estable.                |
| **TypeScript**      | Ayuda a detectar errores antes de ejecutar el código y hace el proyecto más fácil de entender.                                    |
| **Tailwind CSS v4** | Permite maquetar directamente en el HTML sin saltar entre ficheros CSS. Muy rápido para proyectos pequeños.                       |
| **Framer Motion**   | La forma más sencilla de añadir animaciones en React.                                                                             |
| **next-themes**     | Para el modo oscuro. Funciona con una sola línea de configuración.                                                                |
| **react-icons**     | Librería de iconos sencilla e integrada en el proyecto.                                                                           |
| **EmailJS**         | Permite enviar emails desde el formulario de contacto sin necesitar un servidor.                                                  |

## Herramientas adicionales

| Herramienta         | Motivo                                                                                                                                                                                                                                                                                              |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ESLint**          | Detecta problemas de calidad en el código y aplica reglas consistentes en todo el proyecto.                                                                                                                                                                                                         |
| **Prettier**        | Gestiona el formateo automáticamente, sin tener que pensar en ello.                                                                                                                                                                                                                                 |
| **Husky**           | Ejecuta ESLint y Prettier en cada commit, para que nada pase sin superar ambos.                                                                                                                                                                                                                     |
| **Herramientas IA** | Usadas como apoyo para la definición del proyecto, decisiones de estilos y dudas puntuales — siempre para explorar opciones y entender las alternativas antes de escribir el código yo mismo. El objetivo es aprender más rápido y tomar mejores decisiones, no sustituir el trabajo de desarrollo. |

---

## Workflow de Git

Incluso trabajando en solitario, he seguido prácticas de nivel de equipo:

- Cada funcionalidad desarrollada en su propia rama (`feat/*`, `fix/*`)
- Cada rama fusionada mediante un Pull Request
- Commits convencionales (`feat:`, `fix:`, `chore:`, …)
- Hooks de pre-commit que bloquean commits que no superen el linting o el formateo

---

## Cómo empezar

```bash
npm install
npm start        # servidor de desarrollo → http://localhost:3000
npm run build    # build de producción
npm run lint     # ESLint
npm run format   # comprobación de Prettier
```

---

## Contacto

- **Email:** lopilo64@gmail.com
- **GitHub:** [jorgedluffy](https://github.com/jorgedluffy)
- **LinkedIn:** [jorge-sanchez-gon](https://www.linkedin.com/in/jorge-sanchez-gon)

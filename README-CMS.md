# Guía Rápida para Administrar tu Contenido con Netlify CMS

¡Hola, Santiago! Hemos integrado un panel de administración para que puedas actualizar tu sitio web fácilmente sin tocar el código.

## 1. Acceso al Panel de Administración

Para acceder, simplemente ve a la URL de tu sitio y añade `/admin` al final.

**Ejemplo:** `https://tusitio.netlify.app/admin`

## 2. Iniciar Sesión por Primera Vez

La primera vez que accedas, deberás registrarte.

1.  **Habilita Netlify Identity:**
    *   Ve a tu sitio en [Netlify](https://app.netlify.com/).
    *   Ve a la pestaña `Identity`.
    *   Haz clic en `Enable Identity`.
    *   En la sección `Registration`, asegúrate de que esté en `Open` o `Invite only`. Para empezar, `Open` es más fácil.

2.  **Regístrate:**
    *   Vuelve a `tusitio.netlify.app/admin`.
    *   Verás un formulario de login. Haz clic en "Sign Up".
    *   Regístrate con tu email y una contraseña segura.
    *   Recibirás un email de confirmación. Haz clic en el enlace para verificar tu cuenta.

Una vez verificado, podrás iniciar sesión con tu email y contraseña.

## 3. ¿Qué Puedes Editar?

El panel está dividido en "Colecciones" en la barra lateral izquierda. Cada una corresponde a una sección de tu web:

*   **⚙️ Configuración General:** Cambia tu nombre, email, teléfono, redes sociales y estadísticas clave.
*   **🏠 Portada (Hero):** Sube nuevas imágenes para el carrusel de la página de inicio, cambia los títulos y las descripciones.
*   **👤 Sobre Mí:** Actualiza tu foto de perfil y el texto que describe quién eres.
*   **💼 Servicios:** Modifica la descripción, beneficios e imágenes de tus paquetes de Bodas y 15 Años.
*   **📋 Mi Proceso:** Edita los pasos de tu flujo de trabajo.
*   **📞 Contacto:** Actualiza la información de contacto que aparece junto al formulario.
*   **💍 Portfolio - Bodas:** ¡Aquí es donde subes tu trabajo! Añade, elimina o reordena las fotos de la galería de bodas. **Recuerda usar URLs de Imgur**.
*   **🎉 Portfolio - 15 Años:** Igual que el anterior, pero para la galería de quinceañeras.

## 4. El Proceso de Guardado

1.  Haz clic en una colección y luego en el elemento que quieres editar.
2.  Realiza tus cambios en los campos.
3.  Cuando termines, haz clic en el botón **`Publish`** (Publicar) en la parte superior.
4.  Selecciona **`Publish now`**.

Netlify CMS creará un commit en tu repositorio de GitHub y Netlify automáticamente reconstruirá tu sitio con los cambios. **Este proceso puede tardar 1 o 2 minutos.** Después de eso, tus cambios estarán visibles en la web.

¡Eso es todo! Ahora tienes control total sobre el contenido de tu portafolio.

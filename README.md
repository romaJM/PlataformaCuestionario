# PlataformaCuestionario
==================

Esta plataforma que ofrece preguntas predefinidas para construir cuestionarios de exámenes 

-------------------------------------------------

Requisitos Previos
-----------------

Antes de comenzar, asegúrate de tener instalado:

- Node.js
- MySQL
- mkcert (para HTTPS local)

> Para pasos detallados de instalación, revisar INSTALL.md o generar certificados.txt.

-------------------------------------------------

Instalación y Configuración
--------------------------

1. Clonar el repositorio:

   git clone https://github.com/romaJM/PlataformaCuestionario.git
   cd PlataformaCuestionario

2. Instalar dependencias:

   npm install

3. Crear archivo `.env` en la raíz del proyecto con la configuración de la base de datos y otras variables  tiene un ejemplo env.example :
 * generar el exadecimal poniendo este comando:

    node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

   DB_HOST=localhost
   DB_USER=usuario
   DB_PASSWORD=contraseña
   DB_NAME=nombre_basedatos
   DB_PORT=3306
   PORT=8080

   JWT_SECRET=tu_clave_secreta

   > Reemplazar `usuario`, `contraseña` y `nombre_basedatos` por los valores reales.

4. Crear tablas en la base de datos:

   node sync.js

5. Crear roles y usuario administrador:

   node seeders/index.js


-------------------------------------------------

Certificados HTTPS (opcional)
-----------------------------

Para habilitar HTTPS en desarrollo:

   mkdir cert
   cd cert
   mkcert localhost 127.0.0.1 ::1

Esto generará los certificados necesarios en la carpeta `cert/`.

-------------------------------------------------

Ejecutar el Servidor
-------------------

   npm start

- Servidor HTTP: http://localhost:8080  //auque automaticamente te dirige a https
- Servidor HTTPS (si generaste certificados): https://localhost:3443

-------------------------------------------------

Tecnologías Utilizadas
---------------------

- Node.js
- MySQL
- JWT
- mkcert (para HTTPS)


-------------------------------------------------

Estructura del Proyecto (resumen)
---------------------------------

bin/
cert/
Controllers/
Models/
routes/
middlewares/
seeders/
.env
sync.js
app.js
-------------------------------------------------

si quieres hacer las pruebas de los endpoints, se encuentran en el archivo PRUEBAS-ENDPOINTS.txt 

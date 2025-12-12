

Este archivo describe **todo lo que se debe instalar** para que el proyecto funcione correctamente.

---

1. INSTALAR NODE.JS

---

Descargar e instalar Node.js desde su página oficial.

---

2. INSTALAR MYSQL

---

Instalar MySQL y asegurarse de que el servicio esté en ejecución.

---
3. INSTALAR MKCERT

---
* Descargar el archivo ejecutable desde el sitio oficial:
https://github.com/FiloSottile/mkcert/releases

(Descargar el archivo mkcert-windows-amd64.exe)

* Crear una carpeta en tu sistema, por ejemplo:
C:\Herramientas\mkcert\

* Copiar el archivo descargado dentro de esa carpeta.

* Agregar esa carpeta al Path de Windows:

* Abrir Panel de control → Sistema → Configuración avanzada del sistema

* Clic en Variables de entorno

* Seleccionar Path

* Clic en Editar

* Clic en Nuevo y agregar:
C:\Herramientas\mkcert\

* Renombrar el archivo a mkcert.exe (opcional, pero recomendado).

* Ejecutar en la consola (solo una vez):

mkcert -install

---

4. CREAR ARCHIVO .env

---
* generar el exadecimal poniendo este comando:

    node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

* En la raíz del proyecto, crear un archivo llamado **.env** con el siguiente contenido genérico:

DB_HOST=localhost
DB_USER=usuario
DB_PASSWORD=contraseña
DB_NAME=nombre_basedatos
DB_PORT=3306
PORT=8080

JWT_SECRET= poner_hexadecimal_generado

* Reemplazar "usuario", "contraseña" y "nombre_basedatos" por los valores reales.

---

5. INSTALAR DEPENDENCIAS DEL PROYECTO

---

Ejecutar en la raíz del proyecto:

npm install

---

6. CREAR LAS TABLAS EN LA BASE DE DATOS

---

Ejecutar:

node sync.js

---

7. CREAR ROLES Y EL USUARIO ADMINISTRADOR

---

Ejecutar:

node seeders/index.js

---

8. GENERAR CERTIFICADOS PARA HTTPS

---

Dentro de la carpeta del proyecto:

mkdir cert
cd cert
mkcert localhost 127.0.0.1 ::1

Esto generará los certificados necesarios.

---

9. INICIAR EL SERVIDOR

---

Desde la raíz del proyecto:

npm start
---------

si quieres hacer las pruebas de los endpoints, se encuentran en el archivo PRUEBAS-ENDPOINTS.txt para mas facilidad
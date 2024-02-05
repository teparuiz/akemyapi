<h2>AKEMY API </h2>

Instalar la versión más reciente de node, si es Ubuntu usa el gestor nvm para instalar node. 
# Clonar el repositorio
git clone git@github.com:teparuiz/akemyapi.git

# Cambiarse al directorio del proyecto
cd akemyapi


 ```bash
 npm run install 
 ```
- Descargar e instalar docker destkop
- Levantar el servicio de docker con
 ```bash
docker compose up -d
 ```
- Añadir en la carpeta .gitignore
 ```bash
mysql
 ```
 Una vez hecho todo esto lanzar la aplicación en modo watch
  ```bash
npm run start:dev
 ```
Lanzar la aplicación en modo normal
  ```bash
npm run start
 ```

 El servicio estará levantado en localhost:8000
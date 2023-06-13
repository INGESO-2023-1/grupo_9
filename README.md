# Integrantes
* Gonzalo Diaz  
* Vicente Gaete  
* Hugo Sepulveda  
* Carlos Vega  

**Ayudante:** Sebastian Cifuentes

# Wiki
Puede acceder a la Wiki mediante el siguiente [enlace](wiki).

# Getting Started - Backend (server)

## Requisitos
* [Docker](https://docs.docker.com/)  
* [Go](https://go.dev/)
* [Migrate CLI](https://github.com/golang-migrate/migrate/tree/master/cmd/migrate)

Descargar imagen de postgres en docker ejecutando en la terminal:

```
docker pull postgres:alpine-15
```
## Levantar backend

```
cd server
```
Ejecutar contenedor:

```
make postgresinit
make postgres
## comprobar ejecución contenedor
\q
```


Crear BD go-chat:
```
make createdb
make postgres
\l
## comprobar creacion de bd go-chat
\q
```


Crear tablas:
```
make migrarbdup
```

# Getting Started - Frontend (client)


## Requisitos
* [NodeJS](https://nodejs.org/es)

Comprobar versiones de npm y node CLI:

```
npm -v
```
```
node -v
```
## Levantar frontend


```
cd client
```
```
npm run dev
```
Abrir [http://localhost:3000](http://localhost:3000) en un navegador para ver el proyecto.

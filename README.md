# Integrantes
* Gonzalo Diaz  
* Vicente Gaete  
* Hugo Sepulveda  
* Carlos Vega  

**Ayudante:** Sebastian Cifuentes

# Wiki
Puede acceder a la Wiki mediante el siguiente [enlace](https://github.com/INGESO-2023-1/grupo_9/wiki).

# Getting Started - Backend

## Requisitos
* [Docker](https://docs.docker.com/)  
* [Go](https://go.dev/)
* [Migrate CLI](https://github.com/golang-migrate/migrate/tree/master/cmd/migrate)

Descargar imagen de Docker de PostgreSQL ejecutando en la terminal:

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

Ejecutar main:
```
go run cmd/main.go
```  
  
Se mostrarán por la terminal los endpoint de la aplicación.

# Getting Started - Frontend


## Requisitos
* [NodeJS](https://nodejs.org/es)

Comprobar instalación de npm y node CLI:

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

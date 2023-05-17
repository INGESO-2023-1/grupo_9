Como ejecutar el backend (server)  
  
1.- Instalar Docker desktop o terminal  
2.- Instalar Go 1.20 o superior  
3.- Ejecutar en terminal docker pull postgres:alpine-15 , para descargar imagen de postgres de docker  
4.- Ejecutar make 'postgresinit' para chequear contenedor corriendo, 'exit' o '\q' para salir  
5.- Ejecutar make 'postgres' para ejecutar imagen  
6.- Ejecutar make 'createdb', para crear base de datos "go-chat", luego ejecutar make 'postgres' seguido de \l para chequear base de datos "go-chat" creada exitosamente, 'exit' o '\q' para salir  
7.- Descargar el CLI migrate de golang desde https://github.com/golang-migrate/migrate/tree/master/cmd/migrate  
8.- Ejecutar make 'migrarbdup' para crear tablas de base de datos  

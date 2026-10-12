# Revista Montevideo

Guía digital de comercios, servicios e historias de Montevideo y Euskal Erria 71.

## Publicación en Cloudflare Pages

- Repositorio: indumentariamamu-byte/revista-montevideo.
- Rama de producción: main
- Marco: Ninguno
- Comando de compilación: node scripts/verificar-publicacion.mjs
- Directorio de salida: dist
- Directorio raíz: raíz del repositorio

El comando comprueba que los 260 archivos de la publicación inicial sigan presentes y no estén vacíos. Detiene la publicación si falta un archivo o alguno supera 25 MiB. Si se elimina un archivo intencionalmente, actualizar scripts/archivos-publicacion.json en el mismo cambio.

Editar y publicar siempre desde este repositorio. Los cambios hechos en otra copia o en ChatGPT Sites no se sincronizan automáticamente: también deben incorporarse aquí.

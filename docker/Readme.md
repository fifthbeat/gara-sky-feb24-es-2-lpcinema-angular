# Creazione immagine Docker

#### step di creazione:
1. npm i
2. npm run build
3. docker build -f docker/Dockerfile -t es2-lpcinema-angular:0.0.1 .
4. docker run -p 80:80 -it es2-lpcinema-angular:0.0.1

# Creazione e Esecuzione dell'Immagine Docker

## Creazione dell'Immagine

Per costruire l'immagine Docker, eseguire il seguente comando:

```sh
docker build -f Dockerfile -t es2-lpcinema-angular:0.0.1 .
```

## Esecuzione dell'Immagine
Per avviare un container basato sull'immagine creata, utilizzare:

```sh
docker run -p 80:80 -it es2-lpcinema-angular:0.0.1
```


## Accesso all'Applicazione
Una volta avviato il container, l'applicazione sarà accessibile all'indirizzo:

[http://localhost:80](http://localhost:80)

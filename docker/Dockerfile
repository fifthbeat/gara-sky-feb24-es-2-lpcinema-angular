FROM nginx:1.23.1-alpine

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy nginx.conf
ADD docker/nginx/nginx.conf /etc/nginx/nginx.conf

# Copy from builder stage
COPY dist/es-2-lpcinema-angular/browser /usr/share/nginx/html

# Expose nginx port(s)
EXPOSE 80

# Entrypoint to nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]

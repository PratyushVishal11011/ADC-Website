# ADC-VIT Docker Setup

This document explains how to containerize and run the ADC-VIT (Anti-Drug Club) application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier management)

## Quick Start

### Option 1: Using the build script (Recommended)
```bash
./docker-build.sh
```

### Option 2: Manual Docker commands
```bash
# Build the image
docker build -t adc-vit:latest .

# Run the container
docker run -d --name adc-vit-app -p 3000:80 adc-vit:latest
```

### Option 3: Using Docker Compose
```bash
docker-compose up -d
```

## Access the Application

Once the container is running, access the application at:
- **URL**: http://localhost:3000
- **Browser Tab Title**: ADC-VIT (as requested)

## Docker Configuration Details

### Multi-stage Build
The Dockerfile uses a multi-stage build approach:

1. **Build Stage**: Uses Node.js 18 Alpine to build the React application
2. **Production Stage**: Uses Nginx Alpine to serve the built static files

### Nginx Configuration
- Handles client-side routing for React Router
- Serves static assets with appropriate caching headers
- Includes security headers
- Enables gzip compression

### Container Features
- **Port**: Container runs on port 80, mapped to host port 3000
- **Restart Policy**: Automatically restarts unless stopped
- **Optimization**: Multi-stage build reduces final image size
- **Security**: Includes security headers and best practices

## Useful Commands

### View running containers
```bash
docker ps
```

### View container logs
```bash
docker logs adc-vit-app -f
```

### Stop the container
```bash
docker stop adc-vit-app
```

### Remove the container
```bash
docker rm adc-vit-app
```

### View container resource usage
```bash
docker stats adc-vit-app
```

### Access container shell (for debugging)
```bash
docker exec -it adc-vit-app sh
```

## Customization

### Environment Variables
You can pass environment variables to the container:
```bash
docker run -d --name adc-vit-app -p 3000:80 \
  -e NODE_ENV=production \
  adc-vit:latest
```

### Custom Nginx Configuration
The nginx.conf file can be modified to customize server behavior:
- Modify caching policies
- Add custom headers
- Configure SSL/TLS (for production)

### Volume Mounting
For development or custom configurations:
```bash
docker run -d --name adc-vit-app -p 3000:80 \
  -v ./custom-nginx.conf:/etc/nginx/conf.d/default.conf:ro \
  adc-vit:latest
```

## Production Deployment

For production deployment, consider:

1. **SSL/TLS**: Add SSL certificate configuration
2. **Environment Variables**: Set appropriate production environment variables
3. **Health Checks**: Add health check endpoints
4. **Monitoring**: Implement logging and monitoring solutions
5. **Load Balancing**: Use multiple container instances behind a load balancer

### Example Production Docker Compose
```yaml
version: '3.8'
services:
  adc-app:
    build: .
    restart: always
    environment:
      - NODE_ENV=production
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.adc.rule=Host(`adc-vit.example.com`)"
```

## Troubleshooting

### Build Issues
- Ensure all dependencies are properly listed in package.json
- Check that the build process completes successfully locally first

### Runtime Issues
- Check container logs: `docker logs adc-vit-app`
- Verify port mapping is correct
- Ensure no other service is using port 3000

### Performance Issues
- Monitor container resources: `docker stats`
- Consider increasing container memory limits if needed
- Optimize nginx configuration for your specific use case

## Development Workflow

For development with hot-reload:
```bash
# Use the development server instead of Docker
npm run dev
```

For testing the production build locally:
```bash
npm run build
npm run preview
```

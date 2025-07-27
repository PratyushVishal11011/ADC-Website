#!/bin/bash

# Build and run the Docker container for ADC-VIT app

echo "🏗️  Building ADC-VIT Docker image..."

# Build the Docker image
docker build -t adc-vit:latest .

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🚀 Starting container..."
    
    # Stop and remove existing container if it exists
    docker stop adc-vit-app 2>/dev/null
    docker rm adc-vit-app 2>/dev/null
    
    # Run the new container
    docker run -d \
        --name adc-vit-app \
        -p 3000:80 \
        --restart unless-stopped \
        adc-vit:latest
    
    if [ $? -eq 0 ]; then
        echo "✅ Container started successfully!"
        echo "🌐 Application is now running at: http://localhost:3000"
        echo "📊 Container status:"
        docker ps | grep adc-vit-app
    else
        echo "❌ Failed to start container"
        exit 1
    fi
else
    echo "❌ Build failed"
    exit 1
fi

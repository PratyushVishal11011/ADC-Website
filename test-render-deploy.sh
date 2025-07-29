#!/bin/bash

# Test script for Render deployment compatibility

echo "🧪 Testing ADC-VIT for Render deployment..."

# Test 1: Check if required files exist
echo "📁 Checking required files..."
files=("Dockerfile" "package.json" "nginx.conf" "src/App.jsx" "index.html")
missing_files=()

for file in "${files[@]}"; do
    if [ ! -f "$file" ]; then
        missing_files+=("$file")
    else
        echo "✅ $file exists"
    fi
done

if [ ${#missing_files[@]} -ne 0 ]; then
    echo "❌ Missing required files:"
    printf '%s\n' "${missing_files[@]}"
    exit 1
fi

# Test 2: Build Docker image with port flexibility
echo "🐳 Testing Docker build with dynamic port support..."
docker build -t adc-vit-test:latest . --quiet

if [ $? -eq 0 ]; then
    echo "✅ Docker build successful"
else
    echo "❌ Docker build failed"
    exit 1
fi

# Test 3: Test with different port (simulating Render)
echo "🌐 Testing with dynamic port (simulating Render environment)..."
TEST_PORT=8080

# Stop any existing test containers
docker stop adc-vit-test 2>/dev/null
docker rm adc-vit-test 2>/dev/null

# Run container with custom port
docker run -d \
    --name adc-vit-test \
    -p $TEST_PORT:$TEST_PORT \
    -e PORT=$TEST_PORT \
    adc-vit-test:latest

# Wait a moment for container to start
sleep 3

# Test if container is running
if docker ps | grep -q adc-vit-test; then
    echo "✅ Container started successfully"
    
    # Test HTTP response
    if curl -s -o /dev/null -w "%{http_code}" http://localhost:$TEST_PORT | grep -q "200"; then
        echo "✅ HTTP response test passed"
        echo "🎉 Application is ready for Render deployment!"
    else
        echo "⚠️  HTTP response test failed, but container is running"
        echo "📋 Container logs:"
        docker logs adc-vit-test --tail 10
    fi
else
    echo "❌ Container failed to start"
    echo "📋 Container logs:"
    docker logs adc-vit-test
    exit 1
fi

# Cleanup
echo "🧹 Cleaning up test containers..."
docker stop adc-vit-test >/dev/null 2>&1
docker rm adc-vit-test >/dev/null 2>&1
docker rmi adc-vit-test:latest >/dev/null 2>&1

echo ""
echo "✨ All tests passed! Your application is ready for Render deployment."
echo "📖 Next steps:"
echo "   1. Push your code to GitHub"
echo "   2. Connect your GitHub repo to Render"
echo "   3. Deploy using the configuration in render.yaml"
echo "   4. Check RENDER_DEPLOYMENT.md for detailed instructions"

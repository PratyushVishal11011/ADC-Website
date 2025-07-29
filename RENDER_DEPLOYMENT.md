# Deploying ADC-VIT to Render

This guide will help you deploy your ADC-VIT (Anti-Drug Club) application to Render.

## Prerequisites

1. **GitHub Repository**: Your code should be in a GitHub repository
2. **Render Account**: Sign up at [render.com](https://render.com)
3. **Docker Configuration**: The provided Dockerfile and nginx.conf are optimized for Render

## Quick Deploy Options

### Option 1: One-Click Deploy (Recommended)

1. **Connect GitHub Repository**:
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub account and select your ADC-Website repository

2. **Configure Service**:
   ```
   Name: adc-vit-app
   Runtime: Docker
   Region: Oregon (or closest to your users)
   Branch: main
   Root Directory: . (leave blank if repo root)
   Dockerfile Path: ./Dockerfile
   ```

3. **Environment Variables** (Optional):
   ```
   NODE_ENV=production
   ```

4. **Advanced Settings**:
   ```
   Auto-Deploy: Yes
   Health Check Path: /
   ```

### Option 2: Using render.yaml (Infrastructure as Code)

1. **Push render.yaml**: The render.yaml file is already included in your repo
2. **Create Service**: In Render dashboard, choose "New" → "Blueprint" → Connect your repo
3. **Auto-Deploy**: Render will automatically detect and deploy using the render.yaml configuration

## Manual Deployment Steps

### Step 1: Prepare Your Repository

Ensure your repository has these files (already included):
- `Dockerfile` - Containerization configuration
- `nginx.conf` - Web server configuration  
- `render.yaml` - Render deployment configuration
- `package.json` - Node.js dependencies

### Step 2: Create Web Service

1. **Login to Render**: Go to [dashboard.render.com](https://dashboard.render.com)

2. **Create New Web Service**:
   - Click "New +" button
   - Select "Web Service"
   - Choose "Build and deploy from a Git repository"

3. **Connect Repository**:
   - Connect your GitHub account if not already connected
   - Select your `ADC-Website` repository
   - Choose the `main` branch

### Step 3: Configure Service Settings

```yaml
Service Configuration:
├── Name: adc-vit-app
├── Runtime: Docker
├── Region: Oregon (recommended)
├── Branch: main
├── Build Command: (leave empty - Docker handles this)
├── Start Command: (leave empty - Docker handles this)
└── Plan: Free (or upgrade as needed)
```

### Step 4: Environment Variables (Optional)

Add these environment variables in the Render dashboard:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `PORT` | `80` (Render will override this) |

### Step 5: Advanced Settings

- **Auto-Deploy**: ✅ Enable (deploys automatically on git push)
- **Health Check Path**: `/`
- **Custom Domain**: Add your domain (optional)

## Deployment Process

Once configured, Render will:

1. **Clone** your repository
2. **Build** the Docker image using your Dockerfile
3. **Deploy** the container to Render's infrastructure
4. **Assign** a public URL (e.g., `https://adc-vit-app.onrender.com`)

## Post-Deployment

### Verify Deployment

1. **Check Build Logs**: Monitor the deployment in Render dashboard
2. **Test Application**: Visit your assigned URL
3. **Verify Features**: Test all pages and functionality

### Custom Domain (Optional)

1. **Add Domain**: In service settings, add your custom domain
2. **Configure DNS**: Point your domain to Render's servers
3. **SSL Certificate**: Render provides free SSL automatically

## Monitoring and Maintenance

### View Logs
```bash
# Access via Render dashboard
Logs → View live logs or download log files
```

### Update Application
```bash
# Simply push to your GitHub repository
git add .
git commit -m "Update application"
git push origin main

# Render will automatically rebuild and deploy
```

### Scaling
- **Free Plan**: Limited resources, sleeps after 15 minutes of inactivity
- **Paid Plans**: Always-on, better performance, more resources

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check build logs in Render dashboard
   - Verify Dockerfile syntax
   - Ensure all dependencies are in package.json

2. **Port Issues**:
   - Render assigns dynamic ports via `$PORT` environment variable
   - Our Dockerfile handles this automatically

3. **Static Assets Not Loading**:
   - Verify nginx.conf configuration
   - Check that assets are in the correct directory

4. **Application Not Starting**:
   - Check container logs
   - Verify nginx configuration
   - Ensure health check path responds

### Support Resources

- **Render Documentation**: [render.com/docs](https://render.com/docs)
- **Community Forum**: [community.render.com](https://community.render.com)
- **Status Page**: [status.render.com](https://status.render.com)

## Cost Optimization

### Free Tier Limitations
- **Sleep Mode**: App sleeps after 15 minutes of inactivity
- **Build Time**: Limited monthly build minutes
- **Bandwidth**: Limited data transfer

### Recommendations
- **Free Tier**: Perfect for development and testing
- **Starter Plan**: $7/month for always-on service
- **Standard Plan**: $25/month for production workloads

## Security Best Practices

1. **Environment Variables**: Store sensitive data in Render's environment variables
2. **HTTPS**: Render provides SSL certificates automatically
3. **Headers**: nginx.conf includes security headers
4. **Updates**: Keep dependencies updated

## Final Checklist

Before deploying:
- [ ] Repository is public or Render has access
- [ ] All files are committed and pushed
- [ ] Dockerfile builds successfully locally
- [ ] Application works locally with Docker
- [ ] Environment variables are configured
- [ ] Custom domain DNS is configured (if applicable)

Your ADC-VIT application should now be successfully deployed to Render with the browser title "ADC-VIT" as requested!

## Live URL

After deployment, your application will be available at:
`https://your-service-name.onrender.com`

The application will display "ADC-VIT" in the browser tab title instead of "localhost".

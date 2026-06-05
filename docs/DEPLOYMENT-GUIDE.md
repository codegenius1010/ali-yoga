# Deployment Guide

Complete instructions for deploying Ali Yoga website to production.

---

## Overview

This guide covers deployment to:
1. **Vercel (Recommended)** - Easiest, best for Next.js
2. **Traditional Hosting** - AWS, DigitalOcean, Heroku, etc.
3. **Docker** - For containerized deployment

---

## Option 1: Vercel (Recommended)

### Why Vercel?

✅ **Best for Next.js** - Built by Next.js creators
✅ **Zero-Config** - Automatic builds and deploys
✅ **Free SSL** - HTTPS automatic
✅ **Global CDN** - Fast worldwide
✅ **Auto Image Optimization** - Automatic optimization
✅ **Free Tier** - Get started free
✅ **Preview Deployments** - Test before going live

### Step 1: Prepare Repository

Ensure code is on GitHub/GitLab:

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote (replace with your repo)
git remote add origin https://github.com/yourusername/ali-yoga.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Create Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose GitHub login (recommended)
4. Authorize Vercel to access your GitHub repos

### Step 3: Import Project

1. Click "New Project" in Vercel dashboard
2. Search for "ali-yoga" repository
3. Click "Import"
4. Vercel will auto-detect Next.js project ✅

### Step 4: Environment Variables

1. Go to project settings
2. Click "Environment Variables"
3. Add all variables from `.env.local`:

```
NEXT_PUBLIC_SITE_URL = https://aliyoga.com
NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
SENDGRID_API_KEY = SG.xxxxxxxx...
SENDGRID_FROM_EMAIL = noreply@aliyoga.com
FORM_NOTIFICATION_EMAIL = ali@aliyoga.com
```

**Important:** Don't copy `.env.local` - manually enter each variable

### Step 5: Deploy

Click "Deploy" button - Vercel will:
✅ Clone repository
✅ Install dependencies
✅ Build project
✅ Deploy to global CDN
✅ Show deployment URL

### Step 6: Custom Domain

1. Go to project settings
2. Click "Domains"
3. Enter your domain (e.g., `aliyoga.com`)
4. Follow DNS setup instructions
5. Vercel issues free SSL certificate ✅

**DNS Configuration** (Example with Namecheap):
```
A Record: @ → 76.76.19.132
ALIAS/CNAME Record: www → cname.vercel.sh.
```

### Step 7: Monitor

Go to project dashboard to:
- View deployment logs
- Check build status
- Review analytics
- Set up alerts

---

## Option 2: Traditional Hosting

### AWS EC2

**Prerequisites:**
- AWS account
- EC2 instance running Ubuntu 20.04
- SSH access to instance

**Steps:**

1. **Connect to instance:**
```bash
ssh -i key.pem ubuntu@your-instance-ip
```

2. **Install Node.js:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Install PM2 (process manager):**
```bash
sudo npm install -g pm2
```

4. **Clone repository:**
```bash
cd ~
git clone https://github.com/yourusername/ali-yoga.git
cd ali-yoga
```

5. **Install dependencies:**
```bash
npm install
```

6. **Create .env.local:**
```bash
nano .env.local
# Add environment variables
```

7. **Build for production:**
```bash
npm run build
```

8. **Start with PM2:**
```bash
pm2 start npm --name "ali-yoga" -- start

# Save startup configuration
pm2 startup
pm2 save
```

9. **Set up Nginx reverse proxy:**
```bash
sudo apt-get install nginx

# Create config
sudo nano /etc/nginx/sites-available/aliyoga

# Add:
server {
    listen 80;
    server_name aliyoga.com www.aliyoga.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Enable config
sudo ln -s /etc/nginx/sites-available/aliyoga /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

10. **Set up SSL with Let's Encrypt:**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d aliyoga.com -d www.aliyoga.com
```

### DigitalOcean App Platform

1. **Connect GitHub account** - Sign in with GitHub
2. **Select repository** - Choose ali-yoga repo
3. **Configure app:**
   - Framework: Next.js
   - Build command: `npm run build`
   - Run command: `npm start`
4. **Add environment variables** - Add each variable
5. **Create app** - DigitalOcean handles deployment
6. **Add domain** - Point DNS to DigitalOcean nameservers

### Heroku (Deprecated - Now Paid)

⚠️ **Note:** Heroku removed free tier. Use Vercel or DigitalOcean instead.

### Railway.app

1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Choose ali-yoga repository
5. Configure environment variables
6. Add custom domain
7. Deploy automatically

---

## Option 3: Docker Deployment

### Prerequisites

- Docker installed locally
- Docker Hub account
- Hosting with Docker support (DigitalOcean, AWS, Azure, etc.)

### Step 1: Create Dockerfile

```dockerfile
# Use official Node.js runtime
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy app code
COPY . .

# Build Next.js
RUN npm run build

# Expose port
EXPOSE 3000

# Set environment
ENV NODE_ENV=production

# Start app
CMD ["npm", "start"]
```

### Step 2: Create .dockerignore

```
.git
.next
.env.local
node_modules
.env
npm-debug.log
```

### Step 3: Build Image

```bash
docker build -t aliyoga:latest .
```

### Step 4: Test Locally

```bash
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=http://localhost:3000 \
  aliyoga:latest
```

Visit http://localhost:3000

### Step 5: Push to Docker Hub

```bash
# Tag image
docker tag aliyoga:latest yourusername/aliyoga:latest

# Push
docker push yourusername/aliyoga:latest
```

### Step 6: Deploy

On your hosting (DigitalOcean, AWS, etc.):

```bash
docker run -d \
  --name ali-yoga \
  -p 80:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://aliyoga.com \
  -e SENDGRID_API_KEY=... \
  yourusername/aliyoga:latest
```

---

## Pre-Deployment Checklist

Before deploying to production:

### Code Quality
- [ ] No `console.log` statements
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] All tests passing
- [ ] Code reviewed

### Environment Variables
- [ ] `.env.example` up to date
- [ ] `.env.local` created (local only)
- [ ] All required variables set
- [ ] No hardcoded secrets in code
- [ ] Production variables different from dev

### Performance
- [ ] `npm run build` succeeds
- [ ] No large bundle size warnings
- [ ] Lighthouse score 90+
- [ ] Images optimized
- [ ] CSS and JS minified

### Security
- [ ] `npm audit` shows 0 vulnerabilities
- [ ] HTTPS configured
- [ ] CSP headers set
- [ ] Dependencies up to date
- [ ] No exposed API keys

### Functionality
- [ ] All pages load
- [ ] Forms work
- [ ] Links work (no 404s)
- [ ] Analytics tracking enabled
- [ ] Mobile responsive

### SEO
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] Canonical URLs set
- [ ] Meta tags present
- [ ] JSON-LD schemas valid

---

## Post-Deployment

### Immediate (Day 1)

1. **Test production site:**
   - Homepage loads
   - All pages accessible
   - Forms submit
   - Analytics firing
   - No console errors

2. **Submit to Google Search Console:**
   - Verify domain ownership
   - Submit sitemap
   - Request indexing

3. **Set up monitoring:**
   - Uptime monitoring (Uptime Robot)
   - Error tracking (Sentry)
   - Performance monitoring

4. **Monitor logs:**
   - Check for errors
   - Review analytics
   - Check form submissions

### First Week

- [ ] Monitor analytics
- [ ] Check search console
- [ ] Review user feedback
- [ ] Fix any bugs
- [ ] Optimize based on data

### Ongoing

- [ ] Daily: Check site is up
- [ ] Weekly: Review analytics
- [ ] Monthly: Update dependencies
- [ ] Quarterly: Full audit
- [ ] Annual: Plan upgrades

---

## Rollback Procedures

### If deployment fails:

**Vercel:**
1. Go to Deployments tab
2. Find last working deployment
3. Click "Promote to Production"
4. Done ✅

**AWS/DigitalOcean:**
1. Stop current instance: `pm2 stop ali-yoga`
2. Checkout previous commit: `git checkout <hash>`
3. Rebuild: `npm run build`
4. Restart: `pm2 restart ali-yoga`

**Docker:**
```bash
# Stop failed container
docker stop ali-yoga

# Run previous image
docker run -d --name ali-yoga-restore yourusername/aliyoga:previous
```

---

## Monitoring & Maintenance

### Uptime Monitoring

Use Uptime Robot (free):
1. Go to https://uptimerobot.com
2. Create account
3. Add monitor for https://aliyoga.com
4. Set alert interval (5 minutes)
5. Get alerts if site goes down

### Error Tracking

Use Sentry (free tier):
1. Go to https://sentry.io
2. Create account
3. Create project
4. Add to `next.config.ts`
5. Get alerts on errors

### Performance Monitoring

Check monthly:
- Vercel Analytics
- Google Search Console
- Google Analytics
- Lighthouse scores
- Core Web Vitals

---

## Scaling

When traffic grows:

### Vercel
- Automatic scaling built-in ✅
- No manual configuration needed
- Upgrade plan if needed

### AWS
- Add load balancer (ELB)
- Scale EC2 instances
- Use RDS for database
- Add CloudFront CDN

### DigitalOcean
- Upgrade droplet size
- Add managed database
- Use spaces for CDN

---

## Cost Estimation

### Vercel
- Free tier: ~$0/month
- Hobby: ~$20/month
- Pro: ~$20/month
- Enterprise: Custom pricing

### AWS
- EC2 (t2.micro): ~$10/month
- Data transfer: ~$0.1 per GB
- Typical: $10-30/month

### DigitalOcean
- Basic droplet: $4-6/month
- App Platform: $12-20/month

### Stripe (Payment Processing)
- 2.9% + $0.30 per transaction
- No monthly fee

### SendGrid (Email)
- Free: 100 emails/day
- Paid: Starting $9.95/month

---

## Support

For issues:
- Vercel support: https://vercel.com/help
- AWS support: https://aws.amazon.com/support/
- DigitalOcean community: https://www.digitalocean.com/community/

---

**Last Updated:** June 2024 | **Version:** 1.0.0
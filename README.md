# DinkALing - Pickleball Enthusiast Platform

A premiere destination for pickleball enthusiasts.

This is a static website featuring:
- Trivia quizzes with tiered certification
- Video upload and review by site operators
- Video blog section for instructional content
- Podcast section for audio interviews and clips
- E-commerce for pickleball equipment
- Affiliate marketing integration
- Custom silhouette logo design

## Project Structure
```
dinkaling-web/
├── index.html              # Main homepage
├── html/                   # HTML pages
├── css/                    # Stylesheets
├── js/                     # JavaScript files
├── assets/                 # Images, media files
├── includes/               # Reusable components
├── .github/workflows/      # GitHub Actions deployment
└── .deploy/                # Deployment scripts and utilities
```

## Setup Instructions

### Local Development

1. **Clone the repository**
```bash
   git clone https://github.com/rjjime/dinkaling.git
   cd dinkaling-web
```

2. **Open in browser**
```bash
   # Simply open index.html in your browser
   open index.html
   # or
   xdg-open index.html  # Linux
   # or
   start index.html     # Windows
```

3. **Optional: Run a local server**
```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server -p 8000
   
   # Then visit: http://localhost:8000
```

## Deployment Workflow

This project uses a 4-branch Git workflow with automated deployment to ChemiCloud:

### Branch Structure
- `dev` - Development branch (daily work)
- `staging` - Staging branch (auto-deploys to staging.dinkaling.com)
- `prod` - Production branch (auto-deploys to dinkaling.com)
- `main` - Stable reference branch

### Deployment Process

#### 1. Development
```bash
git checkout dev
# ... make changes to HTML/CSS/JS files ...
git add .
git commit -m "Description of changes"
git push origin dev
```

#### 2. Deploy to Staging
```bash
git checkout staging
git merge dev
git push origin staging
# ✅ Automatically deploys to: http://staging.dinkaling.com
# 📊 Monitor: https://github.com/rjjime/dinkaling/actions
```

#### 3. Deploy to Production
```bash
git checkout prod
git merge staging
git push origin prod
# ✅ Automatically deploys to: http://dinkaling.com
# 📊 Monitor: https://github.com/rjjime/dinkaling/actions
```

#### 4. Sync Main Branch
```bash
git checkout main
git merge prod
git push origin main
git checkout dev  # Return to dev
```

### Quick Commands
```bash
# Check branch sync status
./.deploy/check-sync.sh

# Deploy using helper script (with prompts)
./.deploy/deploy.sh

# Switch branches safely
./.deploy/switch-branch.sh [dev|staging|prod]

# View deployment guide
cat .deploy/README.md
```

## Deployment Environments

- **Staging**: http://staging.dinkaling.com
  - Automatic deployment from `staging` branch via GitHub Actions
  - For testing before production
  - FTP path: `/home/unlimite/staging.dinkaling.com`

- **Production**: http://dinkaling.com
  - Automatic deployment from `prod` branch via GitHub Actions
  - Live site for end users
  - FTP path: `/home/unlimite/dinkaling.com`

## GitHub Actions

Deployments are automated via GitHub Actions using FTP to ChemiCloud:
- Workflow file: `.github/workflows/deploy.yml`
- Secrets configured in GitHub repository settings
- Automatic deployment on push to `staging` or `prod` branches
- Deploys all files except: `.git`, `node_modules`, `.deploy`, `.github`, `.env`

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla JS)
- **Deployment**: GitHub Actions + FTP to ChemiCloud
- **Hosting**: ChemiCloud shared hosting
- **Version Control**: Git with 4-branch workflow

## Features Status

### Implemented
- ✅ Git workflow with 4 branches (dev → staging → prod → main)
- ✅ Automated deployment pipeline via GitHub Actions
- ✅ Staging and production environments
- ✅ Static website structure (HTML/CSS/JS)

### In Progress
- 🚧 Quiz system with tiered certification levels
- 🚧 Video content sections
- 🚧 Podcast integration

### To Be Implemented
- [ ] User authentication and roles
- [ ] Media upload and review workflows
- [ ] E-commerce integration
- [ ] Affiliate marketing system
- [ ] Advanced responsive design

## Development Guidelines

1. **Always work on `dev` branch** for new features and bug fixes
2. **Test locally** before pushing (open index.html in browser)
3. **Deploy to staging** for testing before production
4. **Check sync status** regularly with `./.deploy/check-sync.sh`
5. **Monitor deployments** at https://github.com/rjjime/dinkaling/actions
6. **Keep main in sync** with prod for stable reference

## File Organization

- `index.html` - Main entry point
- `html/` - Additional HTML pages
- `css/` - All stylesheets
- `js/` - JavaScript functionality
- `assets/` - Images, videos, media
- `includes/` - Reusable HTML components

## Planning Documents

- `PHASE1_PLAN.md` - Phase 1 implementation roadmap
- `CERTIFICATION_SEPARATION_PLAN.md` - Certification system design
- `EMOJI_BADGE_IDEAS.md` - Badge system concepts
- `TODO_CERTIFICATION.md` - Certification feature todos

## Troubleshooting

### Deployment Issues
- **Deployment fails**: Check GitHub Actions logs at https://github.com/rjjime/dinkaling/actions
- **Branch out of sync**: Run `./.deploy/check-sync.sh` to identify issues
- **FTP connection issues**: Verify secrets in GitHub repository settings

### Local Development
- **Changes not showing**: Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
- **CORS errors with local server**: Use `python3 -m http.server` instead of file://
- **JavaScript not loading**: Check browser console for errors (F12)

## Project Links

- **Repository**: https://github.com/rjjime/dinkaling
- **Staging Site**: http://staging.dinkaling.com
- **Production Site**: http://dinkaling.com
- **Deployment Actions**: https://github.com/rjjime/dinkaling/actions

## Contributing

1. Create a feature branch from `dev`
```bash
   git checkout dev
   git checkout -b feature/your-feature-name
```
2. Make your changes to HTML/CSS/JS
3. Test locally in browser
4. Commit and push to dev
```bash
   git checkout dev
   git merge feature/your-feature-name
   git push origin dev
```
5. Deploy to staging for testing
6. Deploy to production when approved

---

**Project Type**: Static Website (HTML/CSS/JS)  
**Last Updated**: December 2024

# Dinkaling-Web Deployment Guide

## Deployment Method
This project uses **GitHub Actions** for automatic deployment to ChemiCloud via FTP.

## Branch Strategy
- `main` - Main branch (stable code, reference)
- `dev` - Development branch (no auto-deploy)
- `staging` - Staging branch (auto-deploys to staging.dinkaling)
- `prod` - Production branch (auto-deploys to dinkaling live site)

## GitHub Secrets Required

Go to https://github.com/rjjime/dinkaling/settings/secrets/actions and add:

### Production Secrets
- `PROD_FTP_HOST` - ChemiCloud FTP host (e.g., server123.chemicloud.com)
- `PROD_FTP_USER` - ChemiCloud FTP username
- `PROD_FTP_PASSWORD` - ChemiCloud FTP password
- `PROD_FTP_PATH` - Remote path (e.g., /public_html/dinkaling)

### Staging Secrets (if using staging subdomain)
- `STAGING_FTP_HOST` - ChemiCloud FTP host (same as prod)
- `STAGING_FTP_USER` - ChemiCloud FTP username (same as prod)
- `STAGING_FTP_PASSWORD` - ChemiCloud FTP password (same as prod)
- `STAGING_FTP_PATH` - Remote path (e.g., /public_html/staging.dinkaling)

## Deployment Workflow

### Development (No auto-deploy)
```bash
git checkout dev
# make changes
git add .
git commit -m "Description of changes"
./.deploy/deploy.sh  # Just pushes to GitHub
```

### Staging (Auto-deploys to ChemiCloud)
```bash
git checkout staging
git merge dev
./.deploy/deploy.sh  # Pushes to GitHub, triggers deployment
```

### Production (Auto-deploys to ChemiCloud)
```bash
git checkout prod
git merge staging
./.deploy/deploy.sh  # Prompts for confirmation, then deploys
```

## Monitoring Deployments

View deployment status:
- https://github.com/rjjime/dinkaling/actions

Each push to `staging` or `prod` triggers a deployment automatically.

## Workflow Diagram
```
dev (local development)
  ↓ merge
staging (push) → GitHub Actions → ChemiCloud Staging
  ↓ merge
prod (push) → GitHub Actions → ChemiCloud Production
```

## Troubleshooting

- **Deployment fails**: Check GitHub Actions logs at /actions
- **FTP connection error**: Verify secrets are set correctly
- **Wrong files deployed**: Check exclude patterns in .github/workflows/deploy.yml

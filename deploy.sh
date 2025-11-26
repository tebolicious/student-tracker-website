#!/bin/bash

# Student Tracker Website - GitHub Pages Deployment Script
# This script automates the deployment process to GitHub Pages

set -e

echo "🚀 Student Tracker Website - Deployment Script"
echo "================================================"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo -e "${RED}❌ Error: Not a git repository${NC}"
    exit 1
fi

# Check if we're on the main branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo -e "${YELLOW}⚠️  Warning: You are on branch '$CURRENT_BRANCH'. Switching to 'main'...${NC}"
    git checkout main
fi

# Pull latest changes
echo -e "${BLUE}📥 Pulling latest changes from remote...${NC}"
git pull origin main

# Stage all changes
echo -e "${BLUE}📝 Staging changes...${NC}"
git add .

# Check if there are changes to commit
if git diff-index --quiet HEAD --; then
    echo -e "${YELLOW}⚠️  No changes to commit${NC}"
else
    # Commit changes
    COMMIT_MESSAGE="Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
    echo -e "${BLUE}💾 Committing changes...${NC}"
    git commit -m "$COMMIT_MESSAGE"
fi

# Push to main branch
echo -e "${BLUE}🌐 Pushing to main branch...${NC}"
git push origin main

# Display success message
echo ""
echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo ""
echo -e "${BLUE}📊 Deployment Information:${NC}"
echo "   Repository: https://github.com/tebolicious/student-tracker-website"
echo "   Live Site: https://tebolicious.github.io/student-tracker-website"
echo "   Branch: main"
echo ""
echo -e "${BLUE}📝 Latest Commit:${NC}"
git log -1 --oneline
echo ""
echo -e "${YELLOW}ℹ️  Note: GitHub Pages deployment may take 1-5 minutes to update.${NC}"
echo -e "${YELLOW}ℹ️  You can monitor the deployment at: https://github.com/tebolicious/student-tracker-website/actions${NC}"

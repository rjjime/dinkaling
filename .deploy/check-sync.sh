#!/bin/bash

echo "🔍 Dinkaling-Web Branch Sync Check"
echo "===================================="
echo ""

# Fetch latest from remote
echo "📡 Fetching latest from GitHub..."
git fetch origin
echo ""

# Current branch
CURRENT=$(git rev-parse --abbrev-ref HEAD)
echo "📍 Current branch: $CURRENT"
echo ""

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "⚠️  UNCOMMITTED CHANGES on $CURRENT:"
    git status -s
    echo ""
else
    echo "✅ No uncommitted changes"
    echo ""
fi

# Function to check branch status
check_branch() {
    local branch=$1
    local behind=$(git rev-list --count HEAD..origin/$branch 2>/dev/null || echo "N/A")
    local ahead=$(git rev-list --count origin/$branch..HEAD 2>/dev/null || echo "N/A")
    
    if [ "$behind" != "N/A" ] && [ "$ahead" != "N/A" ]; then
        if [ "$behind" -eq 0 ] && [ "$ahead" -eq 0 ]; then
            echo "  ✅ In sync with remote"
        else
            echo "  ⚠️  Ahead: $ahead | Behind: $behind"
        fi
    fi
}

# Check each branch
echo "📊 Branch Status:"
echo ""
for branch in main dev staging prod; do
    if git show-ref --verify --quiet refs/heads/$branch; then
        echo "Branch: $branch"
        
        # Latest commit
        COMMIT=$(git log $branch -1 --pretty=format:"%h - %s (%cr)" 2>/dev/null)
        echo "  Last: $COMMIT"
        
        # Check if current branch
        if [ "$branch" = "$CURRENT" ]; then
            check_branch $branch
        else
            # Switch temporarily to check
            git checkout $branch --quiet 2>/dev/null
            check_branch $branch
            git checkout $CURRENT --quiet 2>/dev/null
        fi
        echo ""
    else
        echo "Branch: $branch - NOT FOUND"
        echo ""
    fi
done

# Check differences between branches
echo "🔄 Branch Differences:"
echo ""

echo "dev vs staging:"
DEV_STAGING=$(git log staging..dev --oneline 2>/dev/null | wc -l)
if [ "$DEV_STAGING" -eq 0 ]; then
    echo "  ✅ staging is up-to-date with dev"
else
    echo "  ⚠️  dev has $DEV_STAGING commit(s) not in staging"
    git log staging..dev --oneline | head -3
fi
echo ""

echo "staging vs prod:"
STAGING_PROD=$(git log prod..staging --oneline 2>/dev/null | wc -l)
if [ "$STAGING_PROD" -eq 0 ]; then
    echo "  ✅ prod is up-to-date with staging"
else
    echo "  ⚠️  staging has $STAGING_PROD commit(s) not in prod"
    git log prod..staging --oneline | head -3
fi
echo ""

echo "prod vs main:"
PROD_MAIN=$(git log main..prod --oneline 2>/dev/null | wc -l)
if [ "$PROD_MAIN" -eq 0 ]; then
    echo "  ✅ main is up-to-date with prod"
else
    echo "  ⚠️  prod has $PROD_MAIN commit(s) not in main"
    git log main..prod --oneline | head -3
fi
echo ""

echo "===================================="
echo "Recommended workflow: dev → staging → prod → main"
EOF


#!/bin/bash
set -e

# 1. Build
echo "Building docs..."
npm run build

# 2. Deploy
echo "Deploying to gh-pages..."
cd dist

git init
git add -A
git commit -m "deploy: $(date)"

# Using the HTTPS URL provided
git push -f https://github.com/ParkWardRR/weekend-to-release.git HEAD:gh-pages

cd -
echo "Deployment Complete!"


#!/bin/bash

# Weekend-to-Release Docs Pipeline
# Goal: Build the static site and verify it "ships".

echo "🚀 Starting Documentation Pipeline..."

# 1. Install Dependencies (Idempotent)
echo "📦 Checking dependencies..."
if [ ! -d "node_modules" ]; then
    npm install
fi

# 2. Build the Site
echo "🔨 Building the site..."
npm run docs:build

if [ $? -eq 0 ]; then
    echo "✅ Build Success!"
    echo "Serving preview at http://localhost:4173/weekend-to-release/"
    # 3. Serve (Optional - requires user interaction to stop)
    # npm run docs:preview
else
    echo "❌ Build Failed!"
    exit 1
fi

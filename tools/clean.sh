#!/bin/bash
# Two-step curriculum pipeline
#
# Step 1: Generate — turns raw contributor .md files into structured pages
# Step 2: Clean — you review and polish the generated output
#
# Usage:
#   ./tools/clean.sh
#

set -e

echo "Step 1: Generating pages from contributor notes..."
npm run generate:curriculum

echo ""
echo "Step 2: Review the generated files in learn/"
echo ""
echo "  Generated directories:"
for dir in learn/*/; do
  if [ -d "$dir" ]; then
    name=$(basename "$dir")
    echo "    learn/$name/"
    echo "      - index.md     (curriculum overview)"
    echo "      - course.md    (full course content)"
    echo "      - cheatsheet.md (quick reference)"
  fi
done

echo ""
echo "Review and edit these files for clarity before deploying."
echo "When ready: npm run docs:build && bash tools/deploy.sh"

#!/bin/bash

# SEO & Performance Verification Script
# Run this script to verify all optimizations are in place

echo "🔍 SEO & Performance Verification"
echo "=================================="
echo ""

# Check for SEO files
echo "📋 Checking SEO Files..."
echo ""

if [ -f "index.html" ]; then
    echo "✅ index.html found"
    if grep -q "Rafi Ahmed Rifat" "index.html"; then
        echo "   ✓ Meta tags configured"
    fi
else
    echo "❌ index.html not found"
fi

if [ -f "public/robots.txt" ]; then
    echo "✅ public/robots.txt found"
else
    echo "❌ public/robots.txt not found"
fi

if [ -f "public/sitemap.xml" ]; then
    echo "✅ public/sitemap.xml found"
else
    echo "❌ public/sitemap.xml not found"
fi

echo ""
echo "📦 Checking Build Configuration..."
echo ""

if [ -f "vite.config.js" ]; then
    echo "✅ vite.config.js found"
    if grep -q "rollupOptions" "vite.config.js"; then
        echo "   ✓ Code splitting configured"
    fi
else
    echo "❌ vite.config.js not found"
fi

echo ""
echo "🔧 Checking Utility Files..."
echo ""

if [ -f "src/utils/SEO.jsx" ]; then
    echo "✅ src/utils/SEO.jsx found"
else
    echo "❌ src/utils/SEO.jsx not found"
fi

if [ -f "src/utils/performance.js" ]; then
    echo "✅ src/utils/performance.js found"
else
    echo "❌ src/utils/performance.js not found"
fi

if [ -f "public/service-worker.js" ]; then
    echo "✅ public/service-worker.js found"
else
    echo "❌ public/service-worker.js not found"
fi

echo ""
echo "📝 Checking Documentation..."
echo ""

if [ -f "SEO_OPTIMIZATION_GUIDE.md" ]; then
    echo "✅ SEO_OPTIMIZATION_GUIDE.md found"
else
    echo "❌ SEO_OPTIMIZATION_GUIDE.md not found"
fi

if [ -f "SEO_PERFORMANCE_SUMMARY.md" ]; then
    echo "✅ SEO_PERFORMANCE_SUMMARY.md found"
else
    echo "❌ SEO_PERFORMANCE_SUMMARY.md not found"
fi

echo ""
echo "=================================="
echo "✅ Verification Complete!"
echo ""
echo "📊 Next Steps:"
echo "1. Run: npm install"
echo "2. Run: npm run build"
echo "3. Deploy dist/ folder to hosting"
echo "4. Submit sitemap.xml to Google Search Console"
echo ""

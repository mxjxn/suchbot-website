#!/bin/bash
# Quick deployment status check

WEB_ROOT="/var/www/bot.mxjxn.xyz"
API_PID=$(pgrep -f "node.*api/index.js" || echo "none")
LAST_BUILD=$(stat -c %y "$WEB_ROOT/index.html" 2>/dev/null || echo "unknown")

echo "📊 Suchbot Deployment Status"
echo ""
echo "🌐 Web root: $WEB_ROOT"
echo "📅 Last build: $LAST_BUILD"
echo "🔄 API process: $API_PID"

if [ "$API_PID" != "none" ]; then
    echo "✅ API running on port 3001"
else
    echo "❌ API not running"
fi

echo ""
echo "To deploy: cd web && ./deploy.sh"

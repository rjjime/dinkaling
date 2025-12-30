#!/bin/bash

echo "Updating index.html to use dynamic footer..."

# Backup
cp index.html index.html.backup
echo "✅ Backup created: index.html.backup"

# Remove existing footer (between <!-- Footer --> and </body>)
sed -i '/<!-- Footer -->/,/<\/footer>/d' index.html

# Add support CSS if not present
if ! grep -q "support-button.css" index.html; then
    sed -i '/css\/style.css/a\    <link rel="stylesheet" href="css/support-button.css" />' index.html
    echo "✅ Added support button CSS"
fi

# Add load-footer.js and support.js before </body>
if ! grep -q "load-footer.js" index.html; then
    sed -i 's|</body>|    <script src="js/load-footer.js"></script>\n    <script src="js/support.js"></script>\n</body>|' index.html
    echo "✅ Added footer loader and support scripts"
fi

echo ""
echo "🎉 index.html updated to use dynamic footer!"
echo ""
echo "View changes:"
echo "  diff index.html.backup index.html"

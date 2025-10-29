#!/bin/bash

echo "🚀 Installing Next.js dependencies..."

# Install Next.js and related dependencies
npm install next@latest react@latest react-dom@latest

# Install Next.js ESLint config
npm install --save-dev eslint-config-next

# Install additional Next.js types
npm install --save-dev @types/react @types/react-dom @types/node

echo "✅ Next.js installation complete!"
echo ""
echo "📝 Next steps:"
echo "1. Run 'npm run dev' to start the development server"
echo "2. Open http://localhost:3000 in your browser"
echo ""
echo "🎉 Your React app has been successfully converted to Next.js!"

# Clean dist folder
rm -rf dist/*

# Copy all static files here
cp src/index.html dist/index.html
cp  -R src/assets dist/assets

# Compile LESS styles
npm run less

# Bundle JS files
webpack
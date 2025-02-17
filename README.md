# Los Delfines Shuttles Web

## Clone or create

…or create a new repository on the command line

```
echo "# delfines-shuttles" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/dscr-dev/delfines-shuttles.git
git push -u origin main
```

…or push an existing repository from the command line

```
git remote add origin https://github.com/dscr-dev/delfines-shuttles.git
git branch -M main
git push -u origin main
```

## Ejecutar el proyecto

1. **Development mode (with hot reload):**

```
npm start
```

- Open `http://localhost:3000` in your browser.

- Changes to React and SCSS will be automatically reloaded.

2. **Production mode (generate bundle):**

```
npm run build
```

- Esto generará la carpeta `dist/` con los archivos optimizados.

3. **Deploy to GitHub Pages:**

```
npm run deploy
```

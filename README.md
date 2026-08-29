# Folder Structure
```
Quizz/
│
├── index.html
│
├── src/
│   ├── main.ts
│   │
│   ├── styles/
│   │   └── input.css
│   │
│   └── components/
│       ├── navbar.ts
│       └── button.ts
│
├── dist/
│
├── package.json
├── tsconfig.json
└── README.md

```

# File Casing and Folder Casing
folder -> "kabab case" example: hello-world
file/variable -> "camel case" example: authController.js
Class name -> "pascal case" example: KnowledgeTransfer 

# Github Commit 
- make sure your commit message should follows below rule
- if you implemented a new feature then start writing your commit message with feat:<describe_feature>
- if you fix something inside a code base then start writing you commit message with fix:<describe_fix>

# Github Pull Request
- always merge code by creating a pull request
- avoid direct push on main branch

# Setup / Bootstrap
- ✅ Bundler 
- ✅ Github Setup + Branch Protection Rule
- ✅ Tailwind Css Setup
- ✅ Typescript Setup
- ✅ Auto restart dev server

# Dev Server - 
- browser-sync
- concurrently: 1 process(mulitple command execute karne ki permission deta hai)
  - tailwind css
  - tsc
  - serve
- esbuild (extermly faster)

```
"scripts": {
    "dev:ts": "esbuild src/main.ts --bundle --outfile=dist/main.js --format=esm --sourcemap --watch",
    "dev:typecheck": "tsc --noEmit --watch --preserveWatchOutput",
    "dev:css": "npx @tailwindcss/cli -i ./src/style/input.css -o ./dist/style/output.css --watch",
    "dev:serve": "browser-sync start --server --single --files \"dist/**/*.js,dist/**/*.css,index.html\" --no-notify --port 3000",
    "dev": "concurrently \"npm run dev:ts\" \"npm run dev:typecheck\" \"npm run dev:css\" \"npm run dev:serve\" --names \"ESB,TSC,CSS,BS \" --prefix-colors \"cyan,blue,green,yellow\"",
    "build": "tsc --noEmit && esbuild src/main.ts --bundle --outfile=dist/main.js --format=esm --minify && npx @tailwindcss/cli -i ./src/style/input.css -o ./dist/style/output.css"
}
```

# Singleton Design Pattern
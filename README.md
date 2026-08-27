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
- ❌ Auto restart dev server
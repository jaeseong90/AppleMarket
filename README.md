prettier 설정은 prettier 설치하고 settings.json 가이드에 있는 그대로 넣어주기

```
// Set the default
  "editor.formatOnSave": false,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
        // For ESLint
        "source.fixAll.eslint": true,
        // For TSLint
        "source.fixAll.tslint": true,
        // For Stylelint
        "source.fixAll.stylelint": true
  },
  "prettier.singleQuote": true,
  "prettier.semi": true,
  "prettier.useTabs": false,
  "prettier.tabWidth": 2,
  "prettier.trailingComma": "all",
  "prettier.printWidth": 100
}
```


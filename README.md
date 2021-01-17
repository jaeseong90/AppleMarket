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
리소스용 
@expo/vector-icons
expo-asset
expo-font

Installing dependencies into an Expo managed project#
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

설치 

@react-navigation/native

Installing dependencies into a bare React Native project#
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

expo 버전명시 없이 설치 진행의 경우 종속적인 버전이 안맞을 수 있음 변경해서 재설치 진행하면 끝 
```
Some of your project's dependencies are not compatible with currently installed expo package version:
 - react-native-gesture-handler - expected version range: ~1.8.0 - actual version installed: ^1.9.0
 - react-native-screens - expected version range: ~2.15.0 - actual version installed: ^2.16.1
Your project may not work correctly until you install the correct versions of the packages.
To install the correct versions of these packages, please run: expo install [package-name ...]
``` 

버전이 금방금방 변경되네 아 .. 씨 
Error: The following APIs have moved to separate packages and importing them from the "expo" package is no longer supported: AppLoading.
1. Add correct versions of these packages to your project using:
   expo install expo-app-loading
2. Change your imports so they use specific packages instead of the "expo" package:
 - import { AppLoading } from 'expo' -> import AppLoading from 'expo-app-loading'

 탭에서만 탭내의 메뉴의 헤더를 수정할 수 있으니까 상당히 이상하네 .. 아 .. 좀 고민해보자 

 
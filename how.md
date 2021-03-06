## Init
```sh
npx react-native init chat_realtime --template react-native-template-typescript
```
## Dotenv

```sh
npm i react-native-dotenv
```
```sh
npm i @types/react-native-dotenv
```

> create : env.d.ts

```tsx
declare module 'react-native-dotenv' {
  export const VARIABLE: string;
  export const ENV: 'dev' | 'prod';
}
```
## Firebase
```sh
npm i firebase
```

## Native paper
```sh
npm install react-native-paper
```

> babel.config.js
```sh 
env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
```

```sh
react-native-vector-icons
```

## Moment

```sh
npm i moment
npm i @types/moment
```

## lodash
```sh
npm i lodash
```

```sh
npm i @types/lodash
```

## Sound - https://github.com/johnsonsu/react-native-sound-player
```sh
npm i react-native-sound-player
```
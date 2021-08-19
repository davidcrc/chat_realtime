## Init

npx react-native init chat_realtime --template react-native-template-typescript

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

npm i firebase
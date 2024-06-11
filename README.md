# Expo Collabera Test App

This is an Expo app that includes different components for testing purposes. Follow the instructions below to set up and run the app.

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/iamahmedkhan94/CollaberaTest.git
    cd CollaberaTest
    ```

2. **Install dependencies**:
    ```sh
    yarn
    ```

## Running the App

1. **Start the Expo development server**:
    ```sh
    npx expo start
    ```

2. **Choose your device**:
    - Press `a` to open Android
    - Press `i` to open iOS simulator
    - Press `w` to open web

## Testing Different Questions

In `App.tsx`, you can change the return statement to test different components. 

### Calculator

To test the calculator component, modify `App.tsx` to:
```typescript
import Calculator from './src/pages/Calculator';

export default function App() {
  return <Calculator />;
}
```

### Navbar

To test the navbar component, modify `App.tsx` to:
```typescript
import Navbar from './src/pages/Navbar';

export default function App() {
  return <Navbar />;
}
```
### Question3

To test the Question3 component, modify `App.tsx` to:
```typescript
import Question3 from './src/pages/Question3';

export default function App() {
  return <Question3 />;
}
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
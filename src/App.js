import AppRouter from "./UI/screens/router/AppRouter";

import { Provider } from "react-redux";
import store from "./logic/store/store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;

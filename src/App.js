import Routers from './navigation/Router'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeProvider from './ThemeProvider'
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import { store } from '../src/store';
import { Provider } from 'react-redux';
import { saveState } from "../src/utility/browser-storage";
import { debounce } from "debounce";

store.subscribe(
  debounce(() => {
    saveState('redux', store.getState());
  }, 800)
);

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <I18nextProvider i18n={i18n}>
          <ToastContainer />
          <Routers />
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  );
}
export default App;
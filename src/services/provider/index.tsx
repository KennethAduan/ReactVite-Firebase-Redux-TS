import { store } from "../state/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { BrowserRouter } from "react-router-dom";
const persistor = persistStore(store);
import MainRoutes from "@/routes";
const Providers = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/">
          <MainRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default Providers;

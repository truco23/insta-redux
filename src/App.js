import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles/reset.css";
import "./styles/colors.css";

import appRoutes from "./app.routes";
import store from "./store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Carregando</div>}>
          <Switch>
            <Provider store={store}>
              {appRoutes.map((item, indice) => {
                return (
                  <Route
                    key={indice}
                    exact={item.exact}
                    path={item.path}
                    component={item.component}
                  />
                );
              })}
            </Provider>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;

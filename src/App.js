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
      {appRoutes.map((item, indice) => {
        return (
          <Provider store={store} key={indice}>
            <Suspense key={indice} fallback={<div>Carregando</div>}>
              <BrowserRouter>
                <Switch>
                  <Route
                    exact={item.exact}
                    path={item.path}
                    component={item.component}
                  />
                </Switch>
              </BrowserRouter>
            </Suspense>
          </Provider>
        );
      })}
    </div>
  );
}

export default App;

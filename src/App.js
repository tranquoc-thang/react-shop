import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { PublicRoutes } from "./routes/index.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";
import { Fragment } from "react";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            {PublicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  exact
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                ></Route>
              );
            })}
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import Blogs from "./components/Blogs";
// import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import store from "./redux/store";
import routes from "./routes/routes";

function App() {
  return (
    <Provider store={store}>
      {/* <div>
        <Navigation />
        <Blogs></Blogs>
        <Footer />
      </div> */}
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </Provider>
  );
}

export default App;

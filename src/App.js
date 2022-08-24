import { Provider } from "react-redux";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navigation />
        <Blogs></Blogs>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

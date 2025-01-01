import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MenuMultiplayerServerBrow from "./pages/MenuMultiplayerServerBrow";
import MenuMultiplayerServerBrow1 from "./pages/MenuMultiplayerServerBrow1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Welcome to Battlefield 4 - Server Info";
        metaDescription =
          "Explore Battlefield 4 multiplayer server information.";
        break;
      case "/menu multiplayer/server browser/server info":
        title = "Server Info - Battlefield 4";
        metaDescription = "Detailed server information for Battlefield 4.";
        break;
      case "/menu multiplayer/server browser/server info/show more":
        title = "More Server Info - Battlefield 4";
        metaDescription = "Additional server details for Battlefield 4.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={<h1>Welcome to Battlefield 4 - Server Info</h1>}
      />
      <Route
        path="/menu multiplayer/server browser/server info"
        element={<MenuMultiplayerServerBrow />}
      />
      <Route
        path="/menu multiplayer/server browser/server info/show more"
        element={<MenuMultiplayerServerBrow1 />}
      />
    </Routes>
  );
}

export default App;

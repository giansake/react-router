import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";

const routerAlt = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="/about/" element={<h1>About page</h1>} />
      <Route path="/contacts/" element={<h1>Contacts page</h1>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={routerAlt} />;
}

export default App;

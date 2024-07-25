import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import DocLayout from "./layouts/DocLayout";
import LabLayout from "./layouts/LabLayout";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import DocLoginPage from "./pages/doc/DocLoginPage";
import DocRegisterPage from "./pages/doc/DocRegisterPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />

        {/* this is the layout for doctors */}
        <Route path="/doc" element={<DocLayout />}>
          <Route path="login" element={<DocLoginPage />} />
          <Route path="register" element={<DocRegisterPage />} />
        </Route>

        {/* This is the layout for routes  */}
        <Route path="lab" element={<LabLayout />}>
          {/* <Route path="login" element={<Login />} loader={redirectIfUser} />
          <Route path="logout" action={logoutUser} /> */}
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;

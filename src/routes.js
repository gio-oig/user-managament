import { lazy, Suspense } from "react";
import { Routes as Router, Route } from "react-router-dom";
import Layout from "src/components/layout/Layout";
import Loader from "src/components/atoms/loader/Loader";
import NoMatch from "src/pages/NoMatch";

import * as routes from "./utils/routePaths";

const Profile = lazy(() => import("./pages/Profile"));
const UserList = lazy(() => import("./pages/UserList"));

export const Routes = () => (
  <Router>
    <Route element={<Layout />}>
      <Route
        path={routes.HOME_PATH}
        element={
          <Suspense fallback={<Loader message="User List Loading..." />}>
            <UserList />
          </Suspense>
        }
      />
      <Route
        path={routes.PROFILE_PATH}
        element={
          <Suspense fallback={<Loader message="User List Loading..." />}>
            <Profile />
          </Suspense>
        }
      />
    </Route>
    <Route path={routes.NO_MATCH_PATH} element={<NoMatch />} />
  </Router>
);

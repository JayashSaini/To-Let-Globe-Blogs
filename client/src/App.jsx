import "./App.css";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import AddBlog from "./pages/addBlog.jsx";
import Blog from "./pages/blog.jsx";

function App() {
  return (
    <>
      <Routes>
        {/* Private chat route: Can only be accessed by authenticated users */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/create-blog"
          element={
            <PrivateRoute>
              <AddBlog />
            </PrivateRoute>
          }
        />

        <Route
          path="/blog"
          element={
            <PrivateRoute>
              <Blog />
            </PrivateRoute>
          }
        />

        {/* Public login route: Accessible by everyone */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* Public register route: Accessible by everyone */}
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        {/* 404 page */}
        <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;

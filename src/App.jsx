import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import { usePaths } from "./store";

export default function App() {
  const {paths} = usePaths();
  return (
    <div>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route element={<h1>Welcome To My Application</h1>}></Route>
                {
                  paths.map((route,index) => {
                    return <Route key={index} path={route.path} element={route.element}></Route>
                  })
                }
            </Route>

          <Route path="/">
              <Route path="/login" element={<h1>Login Page</h1>}></Route>
              <Route path="/register" element={<h1>Register Page</h1>}></Route>
              <Route path="*" element={<h1>Page 404 | Not Found</h1>}></Route>
          </Route>
        </Routes>
    </div>
  )
}

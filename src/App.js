// import Button from "./components/Button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Following from "./pages/Following";
import { publicRoutes } from "./routes";
// import DefaultLayout from "./components/Layout/DefaultLayout";
import { DefaultLayout } from "./components/Layout";
import { Fragment } from "react"; //the? chua'

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/following" element={<Following />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            // neu ko route.abcdxyz thi mac dinh la default layout
            // const Layout = route.layout || DefaultLayout;

            // const Layout = route.layout === null ? Fragment : DefaultLayout;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            //nhung case con lai thi mac dinh se Layout = DefaultLayout

            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

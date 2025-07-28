import { useState } from "react";

import "./index.css";
import Home from "./Pages/Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import RootLayout from "./layout/RootLayout";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./Components/ContactInfo";
import ContactForm from "./Components/ContactForm";
import NotFound from "./Components/NotFound";
import ShayriLayout from "./layout/ShayriLayout";
import Shayri, { ShayriLoader } from "./Pages/Shayri";
import JobsLayout from "./layout/JobsLayout";
import Jobs, { JobLoader } from "./Pages/Jobs";
import JobDetails, { jobDetailsLoader } from "./Components/JobDetails";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="product" element={<Products />} />
        <Route path="shayri" element={<ShayriLayout />}>
          <Route index element={<Shayri />} loader={ShayriLoader} />
        </Route>
        <Route path="jobs" element = {<JobsLayout />}>
           <Route index element = {<Jobs />} loader = {JobLoader}/>
           <Route path=":id" element={<JobDetails />} loader={jobDetailsLoader} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

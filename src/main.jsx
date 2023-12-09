import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dahboard/Dashboard.jsx";
import Team from "./pages/team/Team.jsx";
import Invoices from "./pages/invoices/Invoices.jsx";
import Contacts from "./pages/contacts/Contacts.jsx";
import Faq from "./pages/faq/Faq.jsx";
import Form from "./pages/form/Forms.jsx";
import Calendar from "./pages/calender/Calender.jsx";
import BarChart from "./pages/barCart/BarCart.jsx";
import LineCharts from "./pages/lineCharts/LineCharts.jsx";
import Geography from "./pages/geography/Geography.jsx";
import PieChart from "./pages/pieCharts/PieCharts.jsx";
import NotFound from "./pages/notFound/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<BarChart />} />
      <Route path="pie" element={<PieChart />} />
      <Route path="line" element={<LineCharts />} />
      <Route path="geography" element={<Geography />} />
      <Route path="*" element={<NotFound />} />{" "}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

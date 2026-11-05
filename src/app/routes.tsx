import { createBrowserRouter } from "react-router"
import { Layout } from "./components"
import {
  AboutPage,
  ContactPage,
  DistrictRoute,
  HomePage,
  NotFoundPage,
  ServicesPage,
} from "./pages"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "servicios", Component: ServicesPage },
      { path: "nosotros", Component: AboutPage },
      { path: "contacto", Component: ContactPage },
      { path: ":districtSlug", Component: DistrictRoute },
      { path: "*", Component: NotFoundPage },
    ],
  },
])

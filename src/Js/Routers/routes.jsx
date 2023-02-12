import DataTable from "../Components/DataTable/DataTable";
import Area from "../Pages/Area";
import CountryDetails from "../Pages/CountryDetails";
import Dashbaord from "../Pages/Dashbaord";
import Population from "../Pages/Population";
import SearchPage from "../Pages/SearchPage";

export const routes = [
  {
    path: "/",
    component: Dashbaord,
  },
  {
    path: "/DataTable",
    component: DataTable,
  },
  {
    path: "/CountryDetails/:name",
    component: CountryDetails,
  },
  {
    path: "/Population",
    component: Population,
  },
  {
    path: "/Area",
    component: Area,
  },
  {
    path: "/SearchPage",
    component: SearchPage,
  },
];

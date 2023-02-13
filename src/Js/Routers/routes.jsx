import {
  AREA,
  COUNTRYDETAILSAPI,
  DATATABLE,
  POPULATION,
  SEARCHPAGE,
} from "../../Utils/Constants/api_constants";
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
    path: DATATABLE,
    component: DataTable,
  },
  {
    path: COUNTRYDETAILSAPI,
    component: CountryDetails,
  },
  {
    path: POPULATION,
    component: Population,
  },
  {
    path: AREA,
    component: Area,
  },
  {
    path: SEARCHPAGE,
    component: SearchPage,
  },
];

import ContextState from "./Js/Components/Hooks/Context/ContextState";
import Router from "./Js/Routers/Router";
function App() {
  return (
    <ContextState>
      <Router />
    </ContextState>
  );
}

export default App;

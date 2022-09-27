import {useRoutes} from "react-router-dom";

const routes = [

];


function App() { 
  const element = useRoutes(routes);
  return (
    <><element /></>
  );
}

export default App;

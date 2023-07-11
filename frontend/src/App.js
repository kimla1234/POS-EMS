import { BrowserRouter } from "react-router-dom";
import Layout from "./component/layout/Layout";
import LoginPage from "./login/LoginPage";


function App() {
  return (
    <div>
        <BrowserRouter>
        <LoginPage/>
        </BrowserRouter>
    </div>
  );
}

export default App;

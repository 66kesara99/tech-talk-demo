import "./App.css";
import { initServices } from "./init";
import { ViewUserPage } from "./modules/user/presentation/pages/view-user.page";

function App() {
  const locate = initServices();

  return (
    <div className="content">
      <ViewUserPage locate={locate} />
    </div>
  );
}

export default App;

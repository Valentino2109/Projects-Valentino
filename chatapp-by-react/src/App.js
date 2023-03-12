// CSS import
import "./App.css";

import MainLogin from "./MainLogIn/MainLogIn";
import Title from "./Title/Title";

function App() {
  return (
    <div className="intro hide-intro">
      <Title />
      <MainLogin />
    </div>
  );
}

export default App;

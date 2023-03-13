// CSS import
import "./App.css";

import MainLogin from "./MainLogIn/MainLogIn";
import Title from "./Title/Title";
// import ChatUI from "./UIComponents/ChatUI";

// React router

function App() {
  return (
    <div className="intro hide-intro">
      <Title />
      <MainLogin />
      {/* <ChatUI /> */}
    </div>
  );
}

export default App;

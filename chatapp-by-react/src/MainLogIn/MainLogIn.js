// CSS import
import "./MainLogIn.css";

export default function MainLogin() {
  return (
    <div id="container">
      <h2>Login</h2>
      <div id="inputbox">
        <label>Enter your name</label>
        <input type="textbox" />
      </div>
      <button className="enter-btn">Log in</button>
      <h6>Created by Valentino</h6>
    </div>
  );
}

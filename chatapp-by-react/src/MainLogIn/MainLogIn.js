// CSS import
import "./MainLogIn.css";

export default function MainLogin() {
  return (
    <div id="container">
      <h2>Login</h2>
      <div id="inputbox">
        <input type="textbox" required />
        <label>Enter your name</label>
      </div>
      <button className="enter-btn">Log in</button>
      <h6>Created by Valentino</h6>
    </div>
  );
}

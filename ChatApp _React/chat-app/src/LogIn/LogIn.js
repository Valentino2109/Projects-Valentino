import user from "./user.png";

export default function LogIn() {
  return (
    <div id="log-in-window">
      <h2>Log In</h2>
      <br />
      <div>
        <img src={user} alt="User" />
      </div>{" "}
      <br />
      <label>First Name</label>
      <br />
      <input
        className="input-box"
        type="textbox"
        placeholder="Enter your first name"
      />
      <br />
      <label>Last Name</label>
      <br />
      <input
        className="input-box"
        type="textbox"
        placeholder="Enter your last name"
      />
      <br />
      <div>
        <button className="enter-btn">ENTER</button>
      </div>
    </div>
  );
}

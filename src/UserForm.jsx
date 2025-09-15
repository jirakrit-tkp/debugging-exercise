import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  const [isValidForm,setIsValidForm] = useState(false);

  function handleChange(e) {
    const newUsername = e.target.value;
    setUsername(newUsername);
    
    if (newUsername.trim().length >= 3) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    setUsername("");
    setIsValidForm(false);
    alert(`Submitted: ${username}`);
  }
  console.log(username);
  console.log(isValidForm);

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <label className="form-label">
        <span className="label-text">Username</span>
        <input
          value={username}
          onChange={handleChange}
          placeholder="Enter username"
          className="form-input"
        />
        <div className={!isValidForm && username.length > 0 ? "message-invalid" : "message-placeholder"}>
          {!isValidForm && username.length > 0 && "Username must be at least 3 characters long"}
        </div>
      </label>
      <button 
        type="submit" 
        className={isValidForm ? "submit-button" : "submit-button-invalid"}
        disabled={!isValidForm}
      >
        Submit
      </button>
    </form>
  );
}

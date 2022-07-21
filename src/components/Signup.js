import React from "react";

function Signup() {
  return(
    <div>
      <h1>Signup</h1>
      <form>
        <div>
          <input type="text" name="firstname" placeholder="First Name" />
        </div>
        <div>
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>
        <input type="submit" value="submit"/>
      </form>
    </div>

  )
}

export default Signup;
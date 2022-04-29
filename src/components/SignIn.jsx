import React from 'react'
import Login from './AuthForm/Login'
import Reg from './AuthForm/Reg'
const SignIn = () => {
  return (
    <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Log In</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
		<div class="login-form">
			<Login/>
            <Reg/>
		</div>
	</div>
</div>
  )
}

export default SignIn
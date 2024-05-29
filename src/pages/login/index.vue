<template>
	<div id="content-wrapper" class="box-border bg-#f5f5f5 font-sans">
		<div class="card" id="login">
			<form>
				<h1>Sign in</h1>

				<div class="input">
					<input id="email" type="email" class="validate" />
					<label for="email">Username or Email</label>
				</div>

				<div class="input">
					<input id="password" type="password" class="validate" />
					<label for="password">Password</label>
				</div>

				<span class="checkbox remember flex items-center">
					<input class="mr-10px" type="checkbox" id="remember" />
					<label for="remember">Remember me</label>
				</span>

				<span class="checkbox forgot">
					<a href="#">Forgot Password?</a>
				</span>

				<button disabled>Login</button>
			</form>
			<a href="javascript:void(0)" class="decoration-none m-0 p-0"
				>Already an account? <b>Sign in</b></a
			>
		</div>

		<div class="card hidden" id="register">
			<form>
				<h1>Sign up</h1>

				<div class="input">
					<input id="email" type="email" class="validate" />
					<label for="email">Email</label>
				</div>

				<div class="input">
					<input id="password" type="password" class="validate" />
					<label for="password">Password</label>
				</div>

				<div class="input">
					<input id="confirm-password" type="password" class="validate" />
					<label for="confirm-password">Confirm Password</label>
				</div>

				<span class="checkbox remember">
					<input type="checkbox" id="terms" />
					<label for="terms">I have read <b>Terms and Conditions</b></label>
				</span>

				<button disabled>Register</button>
			</form>
			<a href="javascript:void(0)" id="gotologin" class="decoration-none m-0 p-0"
				>Don't have an account? <b>Sign up</b></a
			>
		</div>
	</div>
</template>

<style scoped>
*,
*::before,
*::after {
	box-sizing: inherit;
}

#content-wrapper {
	position: relative;
	width: 100%;
	height: 100%;
}

h1 {
	margin-top: 0;
	font-weight: 800;
	font-size: 24px;
	text-align: center;
}

button {
	display: block;
	width: 100%;
	padding: 17px;
	color: #fff;
	letter-spacing: 2px;
	text-transform: uppercase;
	background-color: #2069ff;
	border: none;
	border-radius: 50px;
	box-shadow: 0 10px 30px rgb(23 83 209 / 30%);
	transition: all 0.2s ease;
}

button:hover {
	box-shadow: 0 2px 10px rgb(23 83 209 / 40%);
}

.input {
	position: relative;
	margin-top: 1.5rem;
}

.line-active {
	border-bottom: 1px solid #2069ff !important;
	box-shadow: 0 1px 0 #2069ff !important;
}

.input input {
	box-sizing: content-box;
	width: 100%;
	height: 2.5rem;
	padding: 0;
	font-size: 1rem;
	background-color: transparent;
	border: none;
	border-bottom: 1px solid #9e9e9e;
	border-radius: 0;
	outline: none;
	box-shadow: none;
	transition: all 0.3s ease;
}

.input label {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	color: #9e9e9e;
	font-size: 1rem;
	text-align: initial;
	transform: translateY(12px);
	transform-origin: 0% 100%;
	cursor: text;
	transition: transform 0.2s ease-out;
	pointer-events: none;
}

.label-active {
	transform: translateY(-14px) scale(0.8) !important;
	transform-origin: 0 0 !important;
}

.label-blue {
	color: #2069ff !important;
}

[type='checkbox']:not(:checked),
[type='checkbox']:checked {
	position: absolute;
	opacity: 0;
	pointer-events: none;
}

[type='checkbox'] + label {
	position: relative;
	display: inline-block;
	height: 25px;
	padding-left: 25px;
	font-size: 1rem;
	line-height: 22px;
	cursor: pointer;
	user-select: none;
}

[type='checkbox'] + label::before,
[type='checkbox']:not(.filled-in) + label::after {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	width: 18px;
	height: 18px;
	margin-top: 2px;
	border: 2px solid #5a5a5a;
	border-radius: 3px;
	transition: 0.2s;
	content: '';
}

[type='checkbox']:not(.filled-in) + label::after {
	border: 0;
	transform: scale(0);
}

[type='checkbox']:checked + label::before {
	top: -4px;
	left: -5px;
	width: 12px;
	height: 22px;
	border-top: 2px solid transparent;
	border-right: 2px solid #2069ff;
	border-bottom: 2px solid #2069ff;
	border-left: 2px solid transparent;
	border-radius: 1px;
	transform: rotate(40deg);
	transform-origin: 100% 100%;
	backface-visibility: hidden;
}

.checkbox {
	display: block;
	margin-top: 2rem;
	margin-bottom: 2rem;
}

.remember {
	float: left;
}

.forgot {
	float: right;
}

.forgot a {
	color: #000;
	font-weight: 900;
	line-height: 22px;
	text-decoration: none;
}

.card {
	position: absolute;
	left: 5%;
	width: 90%;
	padding: 27px 30px 46px;
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 5px 10px rgb(0 0 0 / 16%);
	transition: all 0.4s 0.1s ease;
}

.card form {
	transform: translateX(0);
	transition: all 0.3s 0.4s ease;
}

#login {
	top: 128px;
	z-index: 2;
}

#register {
	top: 128px;
	z-index: 2;
}

.account-check {
	position: absolute;
	bottom: 15px;
	left: 0;
	width: 100%;
	padding: 10px;
	color: #fff;
	text-align: center;
	text-decoration: none;
	visibility: hidden;
	opacity: 0;
	transition: all 0.2s ease;
}

.account-check:active {
	color: #000;
	transform: translateY(2px);
}

#register.hidden {
	top: 200px !important;
	z-index: 1;
}

#login.hidden {
	top: 329px !important;
	z-index: 1;
}

.card.hidden {
	padding: 0 30px;
	background-color: #2069ff;
	box-shadow: 0 20px 40px rgb(23 83 209 / 80%);
}

#register.hidden form {
	transform: translateX(20px);
}

#login.hidden form {
	transform: translateX(-20px);
}

/* stylelint-disable-next-line no-descending-specificity */
.hidden form {
	opacity: 0;
	transition: all 0.3s ease;
}

.hidden .account-check {
	z-index: 2;
	visibility: visible;
	opacity: 1;
	transition: all 0.2s ease;
}

.register-swap {
	animation: register-swap 0.5s ease forwards;
}

.login-swap {
	animation: login-swap 0.5s ease forwards;
}

@keyframes register-swap {
	0% {
		transform: translate(0%; 0%);
	}

	50% {
		transform: translate(50%, 0%);
	}

	/* stylelint-disable-next-line keyframe-block-no-duplicate-selectors */
	0% {
		transform: translate(0%; 0%);
	}
}

@keyframes login-swap {
	0% {
		transform: translate(0%; 0%);
	}

	50% {
		transform: translate(-50%, 0%);
	}

	/* stylelint-disable-next-line keyframe-block-no-duplicate-selectors */
	0% {
		transform: translate(0%; 0%);
	}
}
</style>

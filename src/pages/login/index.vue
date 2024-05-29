<template>
	<div class="w-full h-full box-border bg-#f5f5f5 font-sans">
		<div class="rounded-10px w-90% left-5% absolute bg-#fff pl-27px py-30px pr-46px z-2 top-40%">
			<form>
				<h1>Sign in</h1>

				<div>
					<input id="email" type="email" />
					<label for="email">Username or Email</label>
				</div>

				<div class="input">
					<input id="password" type="password" />
					<label for="password">Password</label>
				</div>

				<span>
					<input type="checkbox" id="remember" />
					<label for="remember">Remember me</label>
				</span>

				<span>
					<a href="#" class="decoration-none m-0 p-0">Forgot Password?</a>
				</span>

				<button>Login</button>
			</form>
			<a href="javascript:void(0)" class="decoration-none m-0 p-0"
				>Already an account? <b>Sign in</b></a
			>
		</div>

		<div class="rounded-10px w-90% left-5% absolute bg-#fff pl-27px py-30px pr-46px z-2 top-40%">
			<form>
				<h1>Sign up</h1>

				<div>
					<input id="email" type="email" />
					<label for="email">Email</label>
				</div>

				<div>
					<input id="password" type="password" />
					<label for="password">Password</label>
				</div>

				<div>
					<input id="confirm-password" type="password" />
					<label for="confirm-password">Confirm Password</label>
				</div>

				<span>
					<input type="checkbox" id="terms" />
					<label for="terms">I have read <b>Terms and Conditions</b></label>
				</span>

				<button>Register</button>
			</form>
			<a href="javascript:void(0)" class="decoration-none m-0 p-0"
				>Don't have an account? <b>Sign up</b></a
			>
		</div>
	</div>
</template>

<style scoped>
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

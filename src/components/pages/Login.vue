<template>
	<div class="login min-vh-100">
		<form class="form-signin" @submit.prevent="signin">
			<div class="text-center mb-4">
        <div style="width:80px" class="mx-auto"><img src="../../assets/img/logo.svg" class="img-fluid" alt="角獵咖啡 logo"></div>
				<h1 class="h3 my-3 font-weight-normal" style="color:#fff">角獵咖啡商品管理</h1>
			</div>

			<div class="form-label-group">
				<input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="user.username" required autofocus>
				<label for="inputEmail">Email address</label>
			</div>

			<div class="form-label-group">
				<input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="user.password" required>
				<label for="inputPassword">Password</label>
			</div>
			<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
		</form>
	</div>	
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
			user: {
				username: '',
				password: ''
			}			
    }
	},
	methods: {
		signin(){
			const api = `${process.env.APIPATH}/admin/signin`;
			const vm = this;
			this.$http.post(api, vm.user).then((response) => {
				console.log(response.data);
				if(response.data.success){
					vm.$router.push('/admin/products')
				}
			})
		}
	}
}
</script>

<style scoped>
html,body {
  height: 100%;
}

.login {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  /* background-color: #392321; */
  background-image: linear-gradient(to top left, #392321, #552e2a);
}

.form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  height: 3.125rem;
  padding: .75rem;
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: .25rem;
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>
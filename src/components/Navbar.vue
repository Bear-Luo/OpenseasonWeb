<template>
	<div>
		<nav class="navbar navbar-dark fixed-top flex-md-nowrap p-0 shadow">
			<div class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">角獵咖啡商品管理</div>
			<ul class="navbar-nav px-3">
				<li class="nav-item text-nowrap">
					<a class="nav-link" href="#" @click.prevent="signout">Sign out</a>
				</li>
			</ul>
		</nav>
	</div>    
</template>

<script>
export default {
  methods:{
    signout(){
			const api = `${process.env.APIPATH}/logout`;
			const vm = this;
			this.$http.post(api).then((response) => {
				console.log(response.data);
				if(response.data.success){
					vm.$router.push('/login')
				}
			})
    }
  }	
}
</script>
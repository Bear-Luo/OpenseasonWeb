<template>
	<nav id="mainNav" class="navbar navbar-expand-md" :class="{'active':navIsActive}">
		<router-link class="navbar-brand d-flex align-items-center" to="/openseason_home">
			<img src="../assets/img/logo.svg" alt="角獵咖啡 logo">
			<img src="../assets/img/logo-text.svg" alt="角獵咖啡">
			<img src="../assets/img/logo-text-brown.svg" alt="角獵咖啡">
		</router-link>
		<button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" @click="navIsActive = !navIsActive;"><span class="navbar-toggler-icon"></span></button>
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav ml-auto my-lg-0">
				<li class="nav-item"><router-link class="nav-link" to="/openseason_home#about" @click.native="scrollFix('#about')">About</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/openseason_home#newslist" @click.native="scrollFix('#newslist')">News</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/product_list">Products</router-link></li>
				<li class="nav-item"><router-link class="nav-link" to="/login" target="_blank">Login</router-link></li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	data(){
		return{
			navIsActive: false
		}
	},
	methods: {
		scrollFix(hashbang){		
			const rect = document.querySelector(hashbang).getBoundingClientRect();
			const elOffset = window.pageYOffset + rect.top - 62;
			window.scroll(0,elOffset);
		}
	},
	created(){
		this.navActive = false;
	}
}
</script>
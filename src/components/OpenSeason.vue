<template>
	<div class="d-flex flex-column min-vh-100 web-bg">
		<Loading/>
      	<Alert/>
		<router-view></router-view>
		<!-- footer -->
		<footer class="footer mt-auto py-4">
			<div class="container"><div class="small text-center">Copyright © 2020 - Open Seasn <a href="https://www.facebook.com/%E8%A7%92%E7%8D%B5%E5%92%96%E5%95%A1-Open-Season-642663222541449/" target="_blank"><i class="fab fa-facebook-f"></i></a><a href="#" @click.prevent=""><i class="fab fa-instagram"></i></a></div></div>
		</footer>
	</div>
</template>

<style>
  @import "../assets/css/web.css";
</style>

<script>
import Loading from './Loading';
import Alert from './AlertMassage'

export default {
	components: {
		Loading,
    	Alert
	}
}
</script>

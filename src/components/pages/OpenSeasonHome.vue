<template>
	<div class="flex-shrink-0" v-scroll="scrollPage">
		<Nav :class="{'nav-bg':navBgColor,'fixed-top':fixedTop}"/>
		<main role="main">	
			<header class="masthead">
				<div class="carousel slide h-100" data-ride="carousel">
					<div class="carousel-inner h-100">
						<div class="carousel-item h-100 active" style="background-image: url(https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1912&q=80);"></div>
						<div class="carousel-item h-100" style="background-image: url(https://images.unsplash.com/photo-1497581175344-8a5f1a0142a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80);"></div>
						<div class="carousel-item h-100" style="background-image: url(https://images.unsplash.com/photo-1472555950005-7fa40ece7f6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2050&q=80)"></div>
					</div>
				</div>
				<div class="d-flex flex-column justify-content-center align-items-center">
					<img src="../../assets/img/logo.svg" alt="角獵咖啡 logo">
					<router-link to="/product_list">來去購物 <i>→</i></router-link>
				</div>
			</header>
			<section class="page-section py-5" id="about">
				<div class="container d-flex">
					<div class="about-img">
					</div>
					<div class="about">
						<div>
							<h2>About</h2>
							<div>
								新鮮簡單的食材<br>
								一顆對於料理誠摯的心<br>
								做出每一份好吃的料理<br>
								這份真誠給每一位來到角獵咖啡的您
							</div>	
							<ul>
								<li><i class="fas fa-map-marker-alt"></i>臺東市開封街592巷18號</li>
								<li><i class="fas fa-phone"></i><a href="tel:089345005">08-934-5005</a></li>
								<li><i class="fas fa-clock"></i>9:00am - 9:00pm | 週四公休</li>
							</ul>						
						</div>						
					</div>
				</div>
			</section>		
			<section class="page-section bg-yellow py-5" id="newslist">
				<div class="container">
					<div class="grid">
						<div class="item" v-for="(card,index) in news" :key="index">
							<div class="card-body">
								<h5 class="card-title">{{card.title}}</h5>
								<div><img :src="card.imgUrl" alt="card.title" class="img-fluid"></div>
								<!-- <p class="card-text">{{card.content}}</p> -->
								<div class="text-right"><a href="#" @click.prevent="openNews(index)">more <i>→</i></a></div>								
							</div>
						</div>
					</div>
				</div>
			</section>
		</main> 

		<!-- modal: news more -->
		<div class="modal fade" id="newsModal" tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content border-0">
					<div class="modal-header border-0">
						<button type="button" class="close pb-1" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">╳</span>
						</button>
					</div>
					<div class="modal-body pt-0">
						<h5 class="card-title">{{newsContent.title}}</h5>
						<span class="date">{{newsContent.year+'/'+newsContent.month+'/'+newsContent.day}}</span>
						<p>{{newsContent.content}}</p>
						<img :src="newsContent.imgUrl" alt="newsContent.title" class="img-fluid">
					</div>
				</div>
			</div>
		</div>
	</div>	
</template>

<style scoped>
  	@import "../../assets/css/web_home.css";
</style>

<script>
import Nav from '../OpenSeasonNav';
import $ from 'jquery';

export default {
	data(){
		return{
			navBgColor: false,
			fixedTop: true,
			news: [],
			newsContent: {}
		}
	},
	components: {
		Nav,
	},
	methods: {
	  	scrollPage(e){			
			if(e.srcElement.scrollingElement.scrollTop > 0){				
				this.navBgColor = true;
			}else{
				this.navBgColor = false;
			}
		},
		getNews(){
			const url = '/static/json/news.json';
			const vm = this;
			vm.$bus.$emit('loading',true);
			this.$http.get(url).then(response => {
				// console.log(response.data)
				vm.news = response.data;
				// document.querySelector('.card-text')
				setTimeout(( () => {
					waterfall('.grid');
					vm.$bus.$emit('loading',false);
				}), 400);				
			})
		},
		openNews(i){
			this.$bus.$emit('loading',true);
			console.log( this.news[i])
			this.newsContent = this.news[i];			
			this.$bus.$emit('loading',false);
			$('#newsModal').modal('show');
		}
	},
	created(){
		document.title = '角獵咖啡';                    
		this.getNews();
	}
}
</script>
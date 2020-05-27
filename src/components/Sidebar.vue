<template>  
	<div>
		<nav class="col-md-2 d-none d-md-block bg-light sidebar">
			<div class="sidebar-sticky">
				<ul class="nav flex-column mb-2">
					<li class="nav-item">
						<router-link class="nav-link" to="/admin/products">
							<i class="fas fa-box-open"></i>
							產品列表
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/admin/orders">
							<i class="fas fa-list-alt"></i>
							訂單列表
						</router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="/admin/coupons">
							<i class="fas fa-ticket-alt"></i>
							優惠券
						</router-link>
					</li>
				</ul>
			</div>
		</nav>
	</div>  	
</template>
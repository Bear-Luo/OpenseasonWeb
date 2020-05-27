<template>
    <loading :active.sync="isLoading"></loading>
</template>

<script>
export default {
    data(){
        return{            
			isLoading: false
        }
    },
    methods:{
        loadingStatus(para){
            this.isLoading = para;
        }
    },
    created(){
        const vm = this;
        vm.$bus.$on('loading',para => {
            vm.loadingStatus(para);
        })
    }
}
</script>
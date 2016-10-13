<template>
	<div>

		<div class="cell" v-for="v in item">

			<a class="user_avatar pull-left" href="/user/Samurais">
				<img v-bind:src="v.author.avatar_url">
			</a>
			<span class="reply_count pull-left">
				<span class="count_of_replies" title="回复数">
					{{v.reply_count}}
				</span>
				<span class="count_seperator">/</span>
				<span class="count_of_visits" title="点击数">
					{{v.visit_count}}
				</span>
			</span>
			<div class="topic_title_wrapper">
				<span class="put_top" v-if="v.top">置顶</span>
				<a class="topic_title" v-bind:href="'/topic/'+ v.id" title="{{v.title}}">
					{{v.title}}
				</a>

			</div>
		</div>




	</div>
</template>

<script>

	import $ from 'jquery'


	export default {
		data(){
			return {
				item:[],
				index: 1
			}
		},

		ready() {

			this.post()



		},
		methods: {
			post:function(){

				let resource = this.$resource('topics?page={page}');

				resource.get({page: this.index}).then((response) => {
			    // success callback


				    if(this.index == 1){
				    	this.item = response.data.data
				    }else{
				    	this.item = this.item.concat(response.data.data)
				    }



				    

				    
				    $(document).scroll(()=> {

				    	let fileHeight =  $(document).height();
				    	let top = $(document).scrollTop() + $(window).height()

				    	//如果滚动到底
				    	if(fileHeight == top){
				    		this.index++

				    		this.post()

				    	}

				    })


			}, (response) => {
			    // error callback
			});
			}
		}
	}
</script>
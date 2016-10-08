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
export default {
	data(){
		return {
			item:[]
		}
	},
	
	ready() {
		this.$http.get('topics').then((response) => {
		    // success callback


		    this.item = response.data.data
		}, (response) => {
		    // error callback
		});
	}
}
</script>


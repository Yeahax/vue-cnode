<template lang="html">
	<div id="content">
		<div class="panel">
    <div class="header topic_header">
      <span class="topic_full_title">




        {{data.title}}
      </span>
      <div class="changes">
        <span>
          发布于 {{data.create_at}} 天前
        </span>
        <span>
          作者 <a href="/user/Sioxas"> {{data.author.loginname}} </a>
        </span>
        <span>
          {{data.visit_count}} 次浏览
        </span>

          <span>
            最后一次编辑是 15 天前
          </span>


          <span> 来自 分享</span>




      </div>

    </div>
    <div class="inner topic">

      <div class="topic_content">
      	{{data.content}}
      </div>
  </div>
		<div class="panel">
      <div class="header">
        <span class="col_fade">{{data.reply_count}} 回复</span>
      </div>


      <div v-for="v in data.replies" class="cell reply_area"  reply_id="{{v.id}}" reply_to_id="">
  <a class="anchor" id="{{v.id}}"></a>

  <div class="author_content">
    <a href="/user/1340641314" class="user_avatar">
      <img src="{{v.author.avatar_url}}" title="{{v.author.loginname}}"></a>

    <div class="user_info">
      <a class="dark reply_author" href="/user/1340641314">{{v.author.loginname}}</a>
      <a class="reply_time" href="#580def29cf18d0333412d152">1楼•2 个月前</a>
    </div>
    <div class="user_action">
      <span>
        <i class="fa up_btn
          fa-thumbs-o-up
          " title="喜欢"></i>
        <span class="up-count">
          {{v.ups.length}}
        </span>
      </span>

      <span>

      </span>
    </div>
  </div>
  <div class="reply_content">
    {{v.content}}
</div>
  </div>
  <div class="clearfix">
    <div class="reply2_area">

    </div>
  </div>
</div>



    </div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			data:{},
			name:""
		}
	},
	ready(){
		this.post()
	},
	methods:{
		post:function(){
	  		let id = this.$route.query.id
	  		console.log(this)

			this.$http.get('topic/'+id).then((response) => {


				var parser = new DOMParser();
    			var doc = parser.parseFromString(response.data.data.content, "text/xml");
		    	console.log(response.data.data)
				this.data = response.data.data
				//this.data.content = response.data.data.content
        document.querySelector(".topic_content").innerHTML = response.data.data.content

			}, (response) => {
			    // error callback
			});


      this.$http.get('topic/'+id).then((response) => {


				var parser = new DOMParser();
    			var doc = parser.parseFromString(response.data.data.content, "text/xml");
		    	console.log(response.data.data)
				this.data = response.data.data
				//this.data.content = response.data.data.content
        document.querySelector(".topic_content").innerHTML = response.data.data.content

			}, (response) => {
			    // error callback
			});
		}
	}
}
</script>

<style lang="css">
</style>

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
          作者 <a href="/user/Sioxas">{{data.author.loginname}}</a>
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
		<div class="panel"></div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			data:{},

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
		    	console.log()
				this.data = response.data.data
				this.data.content = doc.getElementsByClassName('markdown-text')[0]. innerHTML

			}, (response) => {
			    // error callback
			});
		}
	}
}
</script>

<style lang="css">
</style>

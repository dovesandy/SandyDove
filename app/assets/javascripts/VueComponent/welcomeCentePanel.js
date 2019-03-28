Vue.component('welcome-center-panel', {
	template:'<div id="welcomeCenterPaneApp">\
		<div align="center">\
			<el-row  class="menu-button">\
				<img class="head-portrait img-circle center-block button-glow" src = "/images/alice-portrait.png" alt="head portrait">\
				<p class="motto_text">SandyDove</p>\
				<hr style="background-color: #0000000">\
				<p class="motto_text">努力逃离地球中</p>\
				<el-col :span="24" align="center">\
					<div class="grid-content bg-purple-dark">\
						  <el-button class="element-button">启示录</el-button>\
						  <el-button class="element-button">灭绝</el-button>\
						  <el-button class="element-button">战神再生</el-button>\
					</div>\
				</el-col>\
				<el-col :span="24" align="center">\
					<div class="grid-content">\
						<el-button class="element-button">处罚</el-button>\
						<el-button class="element-button">终章</el-button>\
						<el-button class="element-button">后续</el-button>\
					</div>\
				</el-col>\
				<hr style="background-color: #0000000">\
				<el-row class="link-button">\
					<el-button icon="el-icon-search" circle></el-button>\
				  	<el-button icon="el-icon-menu" circle></el-button>\
				  	<el-button icon="el-icon-star-off" circle></el-button>\
				  	<el-button icon="el-icon-location-outline" circle></el-button>\
				  	<el-button icon="el-icon-share" circle></el-button>\
				</el-row>\
			</el-row>\
		</div>\
	</div>',
	data: function() {
    	return { visible: false }
  	}
});

Vue.component('welcome-panel', {
	template:'<div id="welcomeApp">\
		<welcome-top-panel></welcome-top-panel>\
		<welcome-center-panel></welcome-center-panel>\
		<welcome-under-panel></welcome-under-panel>\
	</div>',
	data: function() {
    	return { 
    		//visible: false 
    	}
  	}
});

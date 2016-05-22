angular.module('myProviderModule', [])
	.provider('myProvider', function() {
		
		//在configure 里面赋值
		this.text = '';
		
		this.$get = function(){
			return {
				sayHello: function() {
					console.log("Hello ");
				},
				text: this.text
			}
		}
		
	})

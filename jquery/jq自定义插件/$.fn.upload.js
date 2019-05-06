/* 使用
$('.fileUpload').upload({
	url: 'https://www.easy-mock.com/mock/5ae9d1dd0a492d2535b91366/hfBeam-tims-api/upload',
	success(res){
		console.log(res)
	}
})
*/

//图片上传
(function($){
	var defaults = {
		quality: .5,
		type: 'image/jpeg' 
	}
	var Upload = function(el, options){
		this.$el = el;
		this.options = $.extend({}, defaults, options);
		this.init()
	}
	//TODO .fileToUpload, .submit
	Upload.prototype.init = function(){
		var $upload = this.$el.find('.fileToUpload')
		var $submit  = this.$el.find('.submit');
		var image = new Image(),
				canvas = document.createElement('canvas'),
				ctx = canvas.getContext('2d');
		
		//选择图片
		$upload.on('change', (e)=>{
			console.log(e)
			var file = e.target.files[0];
			this.options.name = file.name;
			this.options.type = file.type;
			
			var reader = new FileReader()			//base64图片
			reader.onload = function(e){
				console.log(e)
				image.src = e.target.result;
			}
			reader.readAsDataURL(file)
			image.onload = function(){
				let w = image.naturalWidth, h = image.naturalHeight;
				canvas.width = w;
				canvas.height= h;
				ctx.drawImage(image, 0, 0, w, h)
				document.body.appendChild(canvas)
				this.canvasToBlob(canvas)
			}.bind(this)
		})
		//提交
		$submit.on('click', ()=>{
			this.ajax()
		})
	}
	Upload.prototype.canvasToBlob = function(canvas){
		var {type, quality } = this.options;
		var base64 = canvas.toDataURL(this.type, quality);
		var arr    = base64.split(','), len = arr[1].length;
		var bytes  = atob(arr[1]);
		
		var u8arr = new Uint8Array(len)	
		while(len--){
			u8arr[len] = bytes.charCodeAt(len)
		}
		var blob = new Blob([bytes], {type: type});	
		this.options.blob = blob
	}
	Upload.prototype.ajax = function(){
		var { blob, name } = this.options;
		var formdata = new FormData()
		formdata.append('file', blob, name);
		$.ajax({
			type       : "post",
			url        : this.options.url,
			data       : formdata,
			contentType: false,
			processData: false,
			success    : this.options.success,
			eror       : this.options.error
		});
	}
	
	//插件
	function Plugin(options){
		var opts = $.extend({}, defaults, options);
		return this.each(function(){
			var $this = $(this);
				
			new Upload($this, opts)
		})
	}
	$.fn.upload = Plugin
})(jQuery)


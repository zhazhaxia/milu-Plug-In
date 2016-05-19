define('util',function(require ,exports ,module){
exports = module.exports = {
	//obj = {url,data:{key1:value1,key2:value2...},fileid,success,complete,progress,fail,type}支持多字段多文件上传
	ajaxPostFormData:function(obj){
		var xhr = new XMLHttpRequest(),
			file,//文件
			form=new FormData(),//表单对象
			target=document.getElementById(obj.fileid);//获取文件端id
		
		obj.data = obj.data || {};
		
		var formString = "";
		for(var attr in obj.data){
			form.append(attr,obj.data[attr]);//添加数据字段
			formString += attr+'='+obj.data[attr]+'&';
		}
		formString = formString.slice(0,-1);
		if (target) {
			file = target.files;
			
			for(var i = 0,len = file.length;i < len;i++){
				form.append('file'+i,file[i]);//添加文件
			}
		};
		// xhr.responseType = obj.type || "text";
		xhr.open("post", obj.url, true);//异步方式上传文件
		if(!target)xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		//multipart/form-data多文件
		//application/x-www-form-urlencoded表单
		//application/json
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4){
				obj.complete && obj.complete(xhr.status,xhr);//完成请求
				if(xhr.status >= 200 && xhr.status < 300){//上传成功返回回调信息xhr.responseT
					try {
						if (obj.type === "json") {var res = JSON.parse(xhr.responseText);}
						obj.success && obj.success(res,xhr.status,xhr);//请求成功
					} catch(e) {
						var res = xhr.responseText;
						obj.success && obj.success(res,xhr.status,xhr);//请求成功
						console.log(e);
					}

					
				}else{
					obj.fail && obj.fail(xhr.status,xhr);//请求失败
				}
			}
		}
		xhr.upload.onprogress = function(e){
			obj.progress && obj.progress((e.loaded / e.totalSize *100).toFixed(2), e.loaded, e.totalSize);//上传文件时候文件上传进度
		}
		
		
     	xhr.send(target?form:formString);//发送表单内容	
	},
	getQueryString:function(name){ 
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r!=null) return unescape(r[2]); return null; 
	},
	test:function(){
		alert('testing...');
	}

}
});

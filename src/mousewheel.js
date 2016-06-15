//封装滚轮事件，obj为对象，fn为回调函数，包含一个参数delta滚动距离30px
function mousewheelEvent(obj,fn){
		obj.onmousewheel=obj.onmousewheel=function(event){
			var delta = 0;
			if (!event) event = window.event;
			if (event.wheelDelta) {
				delta = event.wheelDelta/4; 
				if (window.opera) delta = -delta;
			} else if (event.detail) {
				delta = -event.detail*10;
			}
			if (delta){
				fn(-delta);
			} 
		};
	}
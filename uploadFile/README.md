# upload file use ajax plug-in  and your don't need to refresh page

- I don't good at English,some language mistake hope you can pointed out it to me,which can help to improve my language level,thx!

>- This source file locate at src/util.js    
- This plug-in base on sea.js

**how to use**
>before using this plug-in ,you should make sure you have add sea.js in your file `<script src="sea.js"></script>`    
then , require this plug-in `var util = require('util');`

**upload multifile**   
```js
utile.ajaxPostFormData({    
    url:"",   
    fileid:"",    //this is file's id that you want to upload.<input type="file" id="fileid" >
    data:{},    
    type:"json",   
    success:function(res){    
    },    
    fail:function(err){   
    },
    complete:function(res){
    },
    progress:function(p,l,s){
    }
});
```

**This tool is uncompatible,hope someone can tell me how to perfect it,thx!!!**

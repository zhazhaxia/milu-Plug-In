<?php
header('content-type:text/html;charset=utf8');
header('Access-Control-Allow-Origin: *');//允许所有主机跨域上传文件
//header('Access-Control-Allow-Methods: POST');
	//接收文件的全局变量$_FILES
	echo isset($_FILES);
	//echo '<pre>';
	//var_dump($_FILES);
	print_r($_FILES);
	//echo '</pre>';
	//echo $_POST['file'];


/*	
	Array
(
    [userfile] => Array
        (
            [name] => jquery-2.1.1.js//上传的文件名
            [type] => application/javascript//文件类型
            [tmp_name] => D:\APMServ5.2.6\tmp\uploadtemp\phpB5DC.tmp//上传文件临时文件名
            [error] => 0//错误信息
            [size] => 247351//文件大小字节
        )

)
	*/
	
	/*----------------------------------------------------------------*/
	
	if($_FILES['file']['tmp_name']){//上传成功,则移动到指定的文件夹内
		if(move_uploaded_file($_FILES['file']['tmp_name'],'upload/'.$_FILES['file']['name'])){
			echo '成功上传';	
		}else{
			echo '没有找到目录';
			exit;
		}
		
	}else{
		echo '没有上传成功';
	}
	
	
?>
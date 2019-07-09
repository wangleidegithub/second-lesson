/**
 * Created by Administrator on 2017/11/6.
 */
function ajax(url,succ,faild){
    if(window.XMLHttpRequest){
        var xhr = new XMLHttpRequest();
    }else {
        var xhr = new ActiveXObject("Microsoft.XMLHTTP");//兼容IE(5/6)
    }
    xhr.open("get",url,true);
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){//读取状态为4接受数据
            if(xhr.status==200){//状态码200代表成功
                succ(xhr.responseText);//实际参数
            }else {
                faild("数据加载失败");
            }
        }
    }
}




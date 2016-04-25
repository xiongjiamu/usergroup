jQuery.noConflict();

function countChar(textName, spanName){
    var len;
    var len0;
    var value=spanName.value;
    Len=value.replace(/(\r\n)$/gm,'').split(''),len=len0=Len.length;
    for(o in Len) {
        if(Len[o].charCodeAt(0)>256)
        {
          len++;
        }
    }
    len1 = 40 - len0;
    document.getElementById(textName).innerHTML = "还可以输入<b>"+len1+"</b>字";
    if (len1 <= 0) {
        spanName.value = _substring(spanName.value, 40);
    }
}

function _substring(str, len){
    var vlen=0, i=0, extDot="";
    for(;i<str.length;i++){
        if(vlen>=len){
            extDot = "...";
            break;
        }else{
            vlen++; 
        }
    }
    return str.substring(0, i)+extDot;;
}

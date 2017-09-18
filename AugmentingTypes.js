Function.prototype.method = function (name, func) {
	if (!this.prototype[name]){
		this.prototype[name] = func;
	}
	return this;
};

//取整
Number.method('integer', function(){
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});

//清楚字符串两侧空格
String.method('trim', function(){
	return this.replace(/^\s+|\s+$/g, '')
});

//合并字符串内空格
String.method('resetBlank', function(){
	return this.replace(/\s+/g, ' ');
});

//保留数字
String.method('getNum', function(){
	return this.replace(/[^\d]/g, '');
});

//保留中文
String.method('getCN', function(){
	return this.replace(/[^\u4e00-\u9fa5\uf900-\ufa2d]/g, '');
});

//String转换为Number
String.method('toInt', function(){
	return isNaN(parseInt(this)) ? this.toString() : parseInt(this);
});

//获取字节长度
String.method('getByteLen', function(){
	if (/^[\u4e00-\u9fa5\uf900-\ufa2d]+$/.test(this)){
		return this.length * 2
	} else {
		return this.length * 2 - this.match(/[\x00-\xff]/g).length
	}
});

//获取文件全名
String.method('getFileName', function(){
	return this.replace(/^.*\/([^\/\?]*).*$/, '$1');
});

//获取文件扩展名
String.method('getExtensionName', function(){
	return this.replace(/^.*\/[^\/]*(\.[^\.\?]*).*$/, '$1');
});

//数字补零
String.method('lenWithZero ', function(oCount){
	var strText = this.toString();  
    while (strText.length < oCount) {  
        strText = '0' + strText;  
    }
    return strText; 
});



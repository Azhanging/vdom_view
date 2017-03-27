function getEl(id){
	return document.getElementById(id);
}

//拆分数据
function disassembly(text){
	let textNodes = [];
	//把文本节点拆开,只存在文本
	let textNode = text.replace(/\{\{.*?\}\}/g, '||data||');
	//把文本data提取
	let	dataNodes = text.match(/(\{\{.*?\}\})/g);
	//根据||去划分data的字节占位转化为数组
	textNodes = textNode.split('||');
	//把data节点位置推送到节点数组当中
	for(let j = 0; j < textNodes.length; j++) {
		let index = textNodes.indexOf('data');
		if(index !== -1) {
			textNodes[index] = dataNodes.shift();
		}
	}
	return textNodes;
}

//获取key数据链
function getDisassemblyKey(keys){
	let newKeys = keys.map((val,index)=>{
		if(/\{\{\S+\}\}/.test(val)){
			return val.replace(/(\{)?(\})?/g, '');
		}
	});
	
	return newKeys.filter((value)=>value!=undefined);
}

/*获取表达式中data绑定的值*/
function getKeyLink(expr) {
	var tempExpr = expr.match(/\{\{.*?\}\}/g);
	if(tempExpr != null) {
		var _this = this;
		return tempExpr.map(function(item, index) {
			return item.replace(/\{?\}?/g, '');
		});
	} else {
		return expr;
	}
}

export {
	getEl,
	disassembly,
	getDisassemblyKey,
	getKeyLink
}

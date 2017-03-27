function showUpdate(key){
	if(key === undefined || key === '') {
		Object.keys(this.__ob__.show).forEach((keyLine, index) => {
			updateFn.call(this,keyLine);
		});
	}else{
		//如果不存在键值，不执行更新
		if(!this.__ob__.show[key]){
			return;
		}
		updateFn.call(this,key);
	}
	
	function updateFn(keyLine){
		let showElements = this.__ob__.show[keyLine];
		showElements.forEach((element,index)=>{
			let showValue = this.expr(element.__show__);
			
			if(showValue == true || showValue == 'block' || showValue.toString().toLocaleLowerCase() === 'ok') {
				showValue = 'block';
			} else if(showValue == false || showValue == 'none' || showValue.toString().toLocaleLowerCase() === 'no') {
				showValue = 'none';
			}
			element.style.display = showValue;
		});
	}
}

export {showUpdate};
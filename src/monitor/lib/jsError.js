import getLastEvent from '../utils/getLastEvents.js'
import getSelector from '../utils/getSelector.js'

export function injectJsError () {
	window.addEventListener('error', function(event) {
		let lastEvent = getLastEvent()
		console.log(lastEvent)

	    let logs = {
	    	kind: 'stability', // 监控指标的大类
	    	type: 'error', // 错误类型
	    	errorType: 'jsError', // js执行错误
	    	url:location.href, //错误路径
	    	message: event.message, // 报错信息
	    	filename: event.filename, // 哪个文件报错
	    	position: `第${event.lineno}行, 第${event.colno}列`, //报错位置
	    	stack: getLines(event.error.stack), // 哪个方法报错
	    	selector: lastEvent? getSelector(lastEvent.path) : '' //最后一个操作的选择器
	    }

	    console.log('logs:', logs)
	})

	function getLines(stack) {
		return stack.split('\n').slice(1).map(item => item.replace(/^\s+at\s+/)).join('^')
	}
}
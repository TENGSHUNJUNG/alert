html 
// <div id="alt_lnal14852413" class="alert lg">
// 	<div class="iwrap"></div>
// 	<div class="ctn" style="color:#ffea00">大的alert是單行高度50</div>
// 	<a href="#" class="close"></a>
// </div>

// js usage
$('body').alert({
	// 指定alert大小
	size: 'md', // xs, sm, md, lg
	// 指定alert內容
	html: {
		icon: '<i class="ic-lnpx warning_yellow d-ib align-middle"></i>',
		content: '為了體驗更優質的網站服務，建議您更新瀏覽器版本。<a href="https://www.google.com/intl/zh-TW/chrome/browser/desktop/index.html?hl=zh_TW" class="c-white d-ib m-r-sm" target="_blank"><i class="ic-lnpx browser-chrome xs m-r-xs align-top"></i><span>Chrome</span></a></a><a href="http://windows.microsoft.com/zh-tw/internet-explorer/download-ie" class="c-white d-ib m-r-sm" target="_blank"><i class="ic-lnpx browser-ie xs m-r-xs align-top"></i><span>IE</span></a><a href="http://mozilla.com.tw/firefox/new/" class="c-white d-ib m-r-sm" target="_blank"><i class="ic-lnpx browser-firefox xs m-r-xs align-top"></i><span>Firefox</span></a><a href="https://support.apple.com/zh_TW/downloads/safari" class="c-white d-ib m-r-sm" target="_blank"><i class="ic-lnpx browser-safari xs m-r-xs align-top"></i><span>Safari</span></a>(單行高度40)'
	},
	// 指定alert classname
	class: {
		main: 'alt_lnal',
		wrap: {
			icon: 'iwrap',
			content: 'ctn',
			close: 'close'
		}
	},
	// 指定alert inline style
	style: {
		main: null,
		wrap: {
			icon: null,
			content: '',
			close: null
		}
	}
});
// 新建alert
$('body').alert('createAlert', {
	size: 'xs', // xs, sm, md, lg
	html: {
		icon: '',
		content: '123123測試，極小alert單行高度25'
	},
	class: {
		main: 'alt_lnal',
		wrap: {
			icon: 'iwrap',
			content: 'ctn',
			close: 'close'
		}
	},
	style: {
		main: null,
		wrap: {
			icon: null,
			content: 'color:#ffea00',
			close: null
		}
	}
});
// 移除alert
$('body').alert('distoryAlert', 'alt_lnal14852413');
// 指定alert id 開或關
$('body').alert('toggleAlert', 'alt_lnal14852413');
// 指定alert id 開
$('body').alert('showAlert', 'alt_lnal14852413');
// 指定alert id 關
$('body').alert('hideAlert', 'alt_lnal14852413');

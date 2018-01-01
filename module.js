(function($) {
'use strict';

	var ModuleName = 'alerts';

	var Module = function ( container, options ) {
		this.$container = $(container);
		this.alerts = ['md', 'sm', 'xs', 'lg'];
		this.$main = $('<div id="' + options.id.alt_lnal + '"class="' + options.class.main + '"><div class="' + options.class.wrap.icon + '"></div><div class="' + options.class.wrap.content + '">' + options.html.content + '</div><a href="#" class="' + options.class.wrap.close + '"></a>');
		this.options = options;
	};

	Module.DEFAULTS = {
		size: 'md', // xs, sm, md, lg
		html: {
			icon: '',
			content: '為了體驗更優質的網站服務，建議您更新瀏覽器版本。<a href="https://www.google.com/intl/zh-TW/chrome/browser/desktop/index.html?hl=zh_TW" class="c-white d-ib m-r-sm" target="_blank"><i class="ic-lnpx browser-chrome xs m-r-xs align-top"></i><span>Chrome</span></a></a><a href="http://windows.microsoft.com/zh-tw/internet-explorer/download-ie" class="c-white d-ib m-r-sm" target="_blank"><i class="ic-lnpx browser-ie xs m-r-xs align-top"></i><span>IE</span></a><a href="http://mozilla.com.tw/firefox/new/" class="c-white d-ib m-r-sm" target="_blank"><i class="ic-lnpx browser-firefox xs m-r-xs align-top"></i><span>Firefox</span></a><a href="https://support.apple.com/zh_TW/downloads/safari" class="c-white d-ib m-r-sm" target="_blank"><i class="ic-lnpx browser-safari xs m-r-xs align-top"></i><span>Safari</span></a>(單行高度40)'
		},
		id:{
			alt_lnal:'alt_lnal'
		},
		class: {
			main: 'alt_lnal-md',
			wrap: {
				icon: 'iwrap',
				content: 'ctn-md',
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
	};

	Module.prototype.init = function () {
		this.$container.append(this.$main);

	};

	// Module.prototype.distoryAlert = function () {
	// 	this.$container.removeClass(this.$main);
	// };


	$.fn[ModuleName] = function ( method, options ) {
		return this.each(function(){
			var $this = $(this);
			var module = $this.data( ModuleName );
			var opts = null;
			if ( !!module ) {
				if ( typeof method === 'string' &&  typeof options === 'undefined' ) {
					module[method]();
				} else if ( typeof method === 'string' && typeof options === 'object' || typeof options === 'string' ) {
					module[method](options);
				} else {
					console.log('unsupported options!');
				}
			} else {
				opts = $.extend( {}, Module.DEFAULTS, ( typeof method === 'object' && method ), ( typeof options === 'object' && options ) );
				module = new Module(this, opts);
				$this.data( ModuleName, module );
				module.init();
			}
		});
	};

})(jQuery);
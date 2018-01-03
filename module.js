(function($) {
'use strict';

	var ModuleName = 'alerts';

	var Module = function ( container, options ) {
		this.$container = $(container);
		this.options = options;
		this.alerts = ['md', 'sm', 'xs', 'lg'];
		this.status = 0;//0:md ,1sm ,2:xs ,3:lg
	};

	Module.DEFAULTS = {
		size: 'md', // xs, sm, md, lg
		html: {
			icon: '',
			content: '為了體驗更優質的網站服務，建議您更新瀏覽器版本。<a href="https://www.google.com/intl/zh-TW/chrome/browser/desktop/index.html?hl=zh_TW" class="c-white d-ib m-r-sm" target="_blank"><i class="ic-lnpx browser-chrome xs m-r-xs align-top"></i><span>Chrome</span></a></a><a href="http://windows.microsoft.com/zh-tw/internet-explorer/download-ie" class="c-white d-ib m-r-sm" target="_blank"><i class="ic-lnpx browser-ie xs m-r-xs align-top"></i><span>IE</span></a><a href="http://mozilla.com.tw/firefox/new/" class="c-white d-ib m-r-sm" target="_blank"><i class="ic-lnpx browser-firefox xs m-r-xs align-top"></i><span>Firefox</span></a><a href="https://support.apple.com/zh_TW/downloads/safari" class="c-white d-ib m-r-sm" target="_blank"><i class="ic-lnpx browser-safari xs m-r-xs align-top"></i><span>Safari</span></a>(單行高度40)'
		},
		id:{
			alt_lnal:'alt_lnal-md'
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
		var options = this.options;
		this.$container.append('<div id="' + options.id.alt_lnal + '"class="' + options.class.main + '"><div class="' + options.class.wrap.icon + '"></div><div class="' + options.class.wrap.content + '">' + options.html.content + '</div><a href="#" class="' + options.class.wrap.close + '"></a>');

	};


	Module.prototype.createAlert = function(){
		var options = this.options;
		this.$container.attr('<div id="' + options.id.alt_lnal + '"class="' + options.class.main + '"><div class="' + options.class.wrap.icon + '"></div><div class="' + options.class.wrap.content + '">' + options.html.content + '</div><a href="#" class="' + options.class.wrap.close + '"></a>');
		// if ( this.status === 0 ) {
		// 	this.add_sm();
		// } else if ( this.status === 0 ) {
		// 	this.init();
		// }
	};

	// Module.prototype.add_sm = function(){
	// 	var options = this.options;
	// 	this.$container.removeClass(options.class.wrap.content).addClass();
	// }



	Module.prototype.distoryAlert = function(){
		this.$container.remove();
	}

	





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
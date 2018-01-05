(function($) {
'use strict';

	var ModuleName = 'alerts';

	var Module = function ( container, options ) {
		this.$container = $(container);
		this.options = options;
	};

	Module.DEFAULTS = {
		size: 'md', // xs, sm, md, lg
		html: {
			icon: '',
			content: '為了體驗更優質的網站服務，建議您更新瀏覽器版本。(單行高度40)'
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
				content: '',
				close: null
			}
		}
	};



	Module.prototype.init = function () {
		this.createAlert();
	};


	Module.prototype.createAlert = function( newOption ){
		var newOpts = newOption;
		var options = this.options;
		if ( typeof newOpts !== 'object' ) {
			newOpts = this.options;
		} else {
			return this.extend(newOpts);
		};
		this.$container.append('<div id="' + options.id.alt_lnal + '"class="' + options.class.main + '"><div class="' + options.class.wrap.icon + '">' + options.html.icon + '</div><div style="'+ options.style.wrap.content +'"class="' + options.class.wrap.content + '">' + options.html.content + '</div><a href="#" class="' + options.class.wrap.close + '"></a>');
		
		$('#alt_lnal').on('click','.close',function(){
			$('#alt_lnal').remove();
		});
		
	};



	Module.prototype.extend = function( option ) {
		if ( typeof option === 'object' ) {
			return $.extend(true, {}, Module.DEFAULTS, this.options, option);
		} else {
			throw 'First param of this function must be a object!!!'
		}
	};




	Module.prototype.distoryAlert = function(){
		$('#alt_lnal').remove();
	};

	Module.prototype.toggleAlert = function(){
		$('#alt_lnal').toggleClass('hide');
	};

	Module.prototype.hideAlert = function(){
		$('#alt_lnal').addClass('hide');
	};

	Module.prototype.showAlert = function(){
		$('#alt_lnal').removeClass('hide').addClass('show');
	};


	$.fn[ModuleName] = function ( method, options ) {
		return this.each(function(){
			var $this = $(this);
			var module = $this.data( ModuleName );
			var opts = null;
			if ( !!module ) {
				if ( typeof method === 'string' &&  typeof options === 'undefined' ) {
					module[method]();
				} else if ( typeof method === 'string' && typeof options === 'object' || typeof options === 'string' ) {
					console.log(method)
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
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
		class: {
			main: 'alt_lnal md',
			wrap: {
				icon: 'iwrap',
				content: 'ctn ',
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
		var randomNumber = parseInt(1000*Math.random()); 
		if ( typeof newOpts !== 'object' ) {
			newOpts = this.options;			
		} else {
			 this.extend(newOpts);
			 newOpts = this.extend(newOpts);
		};
		this.$container.append('<div id=alt_lnal' + randomNumber + ' class="' + newOpts.class.main + '" style="' + newOpts.style.main + '"><div class="' + newOpts.class.wrap.icon + '" style="' + newOpts.style.wrap.icon + '">' + newOpts.html.icon + '</div><div style="' + newOpts.style.wrap.content + '"class="' + newOpts.class.wrap.content + '">' + newOpts.html.content + '</div><a href="#" class="' + newOpts.class.wrap.close + '" style="' + newOpts.style.wrap.close + '"></a>');
		
		$('#alt_lnal' + randomNumber + '').on('click','.close',function(){
			$('#alt_lnal' + randomNumber + '').remove();
		});

	};



	Module.prototype.extend = function( option ) {
		if ( typeof option === 'object' ) {
			return $.extend(true, {}, Module.DEFAULTS, this.options, option);
		} else {
			throw 'First param of this function must be a object!!!'
		}
	};


	Module.prototype.distoryAlert = function( selector ){
		$('#' + selector).remove();
	};

	Module.prototype.toggleAlert = function( selector ){
		$('#' + selector).toggleClass('hide');
	};

	Module.prototype.hideAlert = function( selector ){
		$('#' + selector).addClass('hide');
	};

	Module.prototype.showAlert = function( selector ){
		$('#' + selector).removeClass('hide').addClass('show');
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

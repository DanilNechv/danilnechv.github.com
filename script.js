jQuery(document).ready(function(){ 
	jQuery('.burger').click(function(){
		jQuery(this).addClass('d-none');
		jQuery('.close').addClass('d-block');
		jQuery('.header__menu').addClass('d-menu');
		jQuery('.sidebar').addClass('d-block');
	});
	jQuery('.close').click(function(){
		jQuery(this).removeClass('d-block');
		jQuery('.burger').removeClass('d-none');
		jQuery('.header__menu').removeClass('d-menu');
		jQuery('.sidebar').removeClass('d-block');
	});

	jQuery('.reg-screen__submit').click(function(){
		jQuery(this).parents('form').find('input').each(function(){
			if(jQuery(this).val() == ''){
				jQuery(this).addClass('input-error');
				jQuery(this).after('<span class="error-text">Input text is incorrect</span>');
			}
			else{
				jQuery(this).removeClass('input-error');
				jQuery(this).parents('.reg-screen__field').find('.error-text').remove();
			}
		});
	});
});
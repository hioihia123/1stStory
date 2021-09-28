let text = document.querySelector('.banner h2');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  text.style.marginBottom = value * 2 + 'px';
})

$(window).on('scroll', function() {

  if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) {
    $('.arrow').hide();
  } else {
    $('.arrow').show();
  }
});

$('.arrow').click(function(){
  $("html").animate({ scrollTop: $('html').prop("scrollHeight")}, 1200);
});

function Init_Trigger(el){
  el.click(function(){
    alert('implement emoji picker here');
  });
}

function Init_Reaction(el){
  el.hover(function(){}, function(){
    if(el.hasClass('active')){
      el.addClass('over');
    } else {
      el.removeClass('over');
    }

  });
  
  el.click(function(){
    el.toggleClass('active');
    var increment = (el.hasClass('active')) ? 1:-1;
    var newCount = el.data('count')+increment;
    el.data('count', newCount);
    el.find('.count').text(newCount);
    
    if(newCount > 0){
      el.find('.count').text(newCount).css('display', 'block');
    } else {
      el.find('.count').css('display', 'none');
    }
    
    if(newCount == 0 && el.data('keep') != 1){
      el.addClass('out');
      setTimeout(function(){
        el.remove();
      }, 250);
    }

    return false;
  })
}

$('.reaction').each(function(){
  var el = $(this);
  var count = el.data('count');
  if(count > 0){
    el.find('.count').text(count).css('display', 'block');
  } else {
    el.find('.count').css('display', 'none');
  }
  
  if(el.data('count') == -1){
    Init_Trigger(el);
  } else {
    Init_Reaction(el);
  }
});

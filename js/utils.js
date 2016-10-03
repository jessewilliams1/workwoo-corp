var CONFIG = {};

var log = {
  info: function(content) {
    console.log('Info -> ' + content)
  },
  error: function(content) {
    console.log('Error -> ' + content);
  },
  object: function(object) {
    console.log('Object ->');
    for (var property in object) {
      console.log('    {"' + property + '": "' + object[property] + '"}');
    }
  }
}

var currentURL = window.location.href;
if(currentURL.indexOf('localhost') > 0) {
  CONFIG.BASE_URL = 'http://orca-stage.workwoo.com';
} else {
  CONFIG.BASE_URL = 'http://orca.workwoo.com';
}

// Makes navbars collapse when links are clicked
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

$(document).click(function(e) {
    if (e.target.id == 'mainLink' || !$(e.target).is('a')) {
        $('.collapse').collapse('hide');        
    }
});

function showImages(elementSelector, className) {
    var windowHeight = jQuery( window ).height();
    $(elementSelector).each(function(){
        var thisPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 150 > thisPos ) {
            $(this).addClass(className);
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
  showImages('.slideFromRight', 'slideFromRightActive');
  showImages('.slideFromLeft', 'slideFromLeftActive');
  showImages('.slideFromBottom', 'slideFromBottomActive');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
  showImages('.slideFromRight', 'slideFromRightActive');
  showImages('.slideFromLeft', 'slideFromLeftActive');
  showImages('.slideFromBottom', 'slideFromBottomActive');
});
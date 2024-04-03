setInterval(function () {
    $('.SlideWrap').animate({ 'margin-left': '-100%' }, function () {
        $('.slide').first().appendTo('.SlideWrap')
        $('.SlideWrap').css({ 'margin-left': '0%' })
    })
}, 3000)
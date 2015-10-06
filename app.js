var main = function() {
    $('.dropdown-toggle').click(function() {
        $('.dropdown-menu').toggle()
    });
    
    $('.arrow-next').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        
        if (nextSlide.length == 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }
        
        currentSlide.fadeOut(400).removeClass('active-slide');
        nextSlide.fadeIn(400).addClass('active-slide');
        
        currentDot.removeClass('active-dot')
        nextDot.addClass('active-dot')
    });
    
    $('.arrow-next-pic').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        
        if (nextSlide.length == 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }
        
        currentSlide.fadeOut(400).removeClass('active-slide');
        nextSlide.fadeIn(400).addClass('active-slide');
        
        currentDot.removeClass('active-dot')
        nextDot.addClass('active-dot')
    });
    
    $('.arrow-prev').click(function() {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        
        if (prevSlide.length == 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }
        
        currentSlide.fadeOut(400).removeClass('active-slide');
        prevSlide.fadeIn(400).addClass('active-slide');
        
        currentDot.removeClass('active-dot')
        prevDot.addClass('active-dot')
    });
    
    $('.welcome').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = $('.slide').first();
        
        var currentDot = $('.active-dot');
        var nextDot = $('.dot').first();
        
        currentSlide.fadeOut(400).removeClass('active-slide');
        nextSlide.fadeIn(400).addClass('active-slide');
        
        currentDot.removeClass('active-dot')
        nextDot.addClass('active-dot')
    });
    
    $('.logo-icon').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = $('.slide').first().next();
        
        var currentDot = $('.active-dot');
        var nextDot = $('.dot').first().next();
        
        currentSlide.fadeOut(400).removeClass('active-slide');
        nextSlide.fadeIn(400).addClass('active-slide');
        
        currentDot.removeClass('active-dot')
        nextDot.addClass('active-dot')
    });
    
    $('.what').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = $('.slide').first().next().next();
        
        var currentDot = $('.active-dot');
        var nextDot = $('.dot').first().next().next();
        
        currentSlide.fadeOut(400).removeClass('active-slide');
        nextSlide.fadeIn(400).addClass('active-slide');
        
        currentDot.removeClass('active-dot')
        nextDot.addClass('active-dot')
    });
    
    $('.about').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = $('.slide').first().next().next().next().next().next().next();
        
        var currentDot = $('.active-dot');
        var nextDot = $('.dot').first().next().next().next().next().next().next();
        
        currentSlide.fadeOut(400).removeClass('active-slide');
        nextSlide.fadeIn(400).addClass('active-slide');
        
        currentDot.removeClass('active-dot')
        nextDot.addClass('active-dot')
    });
    
    $('.find').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = $('.slide').first().next().next().next().next().next().next().next();
        
        var currentDot = $('.active-dot');
        var nextDot = $('.dot').first().next().next().next().next().next().next().next();
        
        currentSlide.fadeOut(400).removeClass('active-slide');
        nextSlide.fadeIn(400).addClass('active-slide');
        
        currentDot.removeClass('active-dot')
        nextDot.addClass('active-dot')
    });
    
    $('.session').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = $('.slide').first().next().next().next().next().next().next().next().next();
        
        var currentDot = $('.active-dot');
        var nextDot = $('.dot').first().next().next().next().next().next().next().next().next();
        
        currentSlide.fadeOut(400).removeClass('active-slide');
        nextSlide.fadeIn(400).addClass('active-slide');
        
        currentDot.removeClass('active-dot')
        nextDot.addClass('active-dot')
    });
    
    $('.contact').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = $('.slide').last();
        
        var currentDot = $('.active-dot');
        var nextDot = $('.dot').last();
        
        currentSlide.fadeOut(400).removeClass('active-slide');
        nextSlide.fadeIn(400).addClass('active-slide');
        
        currentDot.removeClass('active-dot')
        nextDot.addClass('active-dot')
    });
        
};

$(document).ready(main);

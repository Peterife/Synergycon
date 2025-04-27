(function($) {
  "use strict";
  document.addEventListener('DOMContentLoaded', function() {
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const elementsExist = days && hours && minutes && seconds;
    if (!elementsExist) {
      console.warn('One or more countdown elements not found.');
      return;
    }

    // Set target time to a past date to immediately show 00
    const currentTime = new Date();
    const targetTime = new Date(currentTime.getTime() - 1000); // 1 second in the past

    function updateCountdown() {
      const diff = targetTime - new Date();
      if (diff <= 0) {
        if (days) days.innerHTML = '00';
        if (hours) hours.innerHTML = '00';
        if (minutes) minutes.innerHTML = '00';
        if (seconds) seconds.innerHTML = '00';
        return;
      }
      const d = Math.floor(diff / 1000 / 60 / 60 / 24);
      const h = Math.floor((diff / 1000 / 60 / 60) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);
      if (days) days.innerHTML = d;
      if (hours) hours.innerHTML = h < 10 ? '0' + h : h;
      if (minutes) minutes.innerHTML = m < 10 ? '0' + m : m;
      if (seconds) seconds.innerHTML = s < 10 ? '0' + s : s;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

  });

  // Rest of your code stays the same
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 4000;
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });

  const listItems = document.querySelectorAll('.spin');
  listItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
  });

  $('.testimonial-slide').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  $('a[href="#search1"]').on('click', function(event) {
    event.preventDefault();
    $('#search1').addClass('open');
    $('#search1 > form > input[type="search"]').focus();
  });

  $('#search1, #search1 button.close').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
      $(this).removeClass('open');
    }
  });

  lightGallery(document.getElementById('selector'), {
    plugins: [lgThumbnail],
    speed: 500,
    licenseKey: 'your_license_key',
    animateThumb: true,
    zoomFromOrigin: false,
    allowMediaOverlap: true,
    toggleThumb: true,
  });

  lightGallery(document.getElementById('selector1'), {
    selector: '.item',
    plugins: [lgThumbnail],
    allowMediaOverlap: true,
    toggleThumb: true,
  });

  $(document).on('click', '#back-to-top, .back-to-top', () => {
    $('html, body').animate({ scrollTop: 0 }, '500');
    return false;
  });

  $(window).on('scroll', () => {
    if ($(window).scrollTop() > 500) {
      $('#back-to-top').fadeIn(200);
    } else {
      $('#back-to-top').fadeOut(200);
    }
  });

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 0,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    }]
  });

})(jQuery);

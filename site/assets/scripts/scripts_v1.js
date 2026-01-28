window.addEventListener('DOMContentLoaded', function () {
  if (window.innerWidth <= 991) {
    htmlBannerSm();
  } else {
    htmlBannerLg();
  }

});

window.addEventListener('resize', function () {
  if (window.innerWidth <= 991) {
    htmlBannerSm();
  } else {
    htmlBannerLg();
  }
});

function htmlBannerSm() {
  $('.banner1').attr("src", "./assets/img/banners/banner-sm-1.png");
  $('.banner2').attr("src", "./assets/img/banners/banner-sm-1.png");
}
function htmlBannerLg() {
  $('.banner1').attr("src", "./assets/img/banners/banner1.png");
  $('.banner2').attr("src", "./assets/img/banners/banner2.png");
}
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function checkElements() {
  var elements = document.querySelectorAll('.fade-in');
  Array.prototype.forEach.call(elements, function (element) {
    if (isInViewport(element)) {
      element.classList.add('in-view');
    }
  });
}


window.addEventListener('scroll', checkElements);

checkElements();
function handleIntersection(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {

      entry.target.classList.add('in-view');
    } else {

      entry.target.classList.remove('in-view');
    }
  });
}

var options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};

var observer = new IntersectionObserver(handleIntersection, options);

var elements = document.querySelectorAll('.fade-in');

elements.forEach(function (element) {
  observer.observe(element);
});





async function waitForInViewClass(targetSelector) {
  return new Promise((resolve) => {
    const observer = new MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const target = mutation.target;
          if (target.classList.contains('in-view')) {
            observer.disconnect();
            resolve();
          }
        }
      }
    });

    const targetElement = document.querySelector(targetSelector);

    if (targetElement) {
      observer.observe(targetElement, { attributes: true });
    }
  });
}

async function startCount() {

  const countElements = document.querySelectorAll('.count');

  countElements.forEach(countElement => {
    const maxValue = parseInt(countElement.textContent, 10) || 100;
    const duration = 2500;
    const interval = 80;
    const steps = duration / interval;

    let currentCount = 0;

    const stepValue = maxValue / steps;

    const updateCount = () => {
      currentCount += stepValue;
      countElement.textContent = Math.round(currentCount);

      if (currentCount >= maxValue) {
        countElement.textContent = maxValue;
        clearInterval(countInterval);
      }
    };
    const countInterval = setInterval(updateCount, interval);
  });
}


async function main() {
  await waitForInViewClass('#aboutHome');
  execEffects();
  startCount();
}
async function mainTwo() {
  await waitForInViewClass('#aboutFrota');
  execEffectsTwo();
}
main();
mainTwo();
function execEffects() {
  var aboutHome = document.getElementById('aboutHome');
  if (aboutHome.classList.contains('in-view')) {
    document.querySelector('.equipe').classList.add('img-equipe')
    document.querySelector('.btn-about').classList.add('moveBottomTop')
  }
}
function execEffectsTwo() {
  var aboutFrota = document.getElementById('aboutFrota');
  if (aboutFrota.classList.contains('in-view')) {
    document.querySelector('.poltronas').classList.add('moveLeft')
    document.querySelector('.arCon').classList.add('moveLeftSmall')
    document.querySelector('.wifi').classList.add('moveVerfyLeftSmall')
    document.querySelector('.toulet').classList.add('moveLeftVeryHigsmall')
  }
}


$('.slider-banners').slick({
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  arrows: true,
  prevArrow: $('.prev-city'),
  nextArrow: $('.next-city'),
  autoplay: true,
  autoplaySpeed: 3000,


});
$('.slider-turismo').slick({
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  arrows: true,
  prevArrow: $('.prev-city'),
  nextArrow: $('.next-city'),
  autoplay: false,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 999,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    }

  ]

});

$('.slider-veiculos').slick({
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  autoplay: false,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 999,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false
      }
    }

  ]

});

$(document).ready(function () {
  $(window).scroll(function () {
    var botaAtendimentoDiv = $('.botao-atendimento');
    var warningCookie = $('.cookie-warning');
    if ($(window).scrollTop() > 100) {
      botaAtendimentoDiv.removeClass('oculto');
      botaAtendimentoDiv.addClass('no-oculto');
    } else {
      botaAtendimentoDiv.addClass('oculto');
      botaAtendimentoDiv.removeClass('no-oculto');
    }
  });
});
$(document).ready(function () {
  if (!localStorage.getItem('cookieAccepted')) {
    $('.cookie-warning').fadeIn();
    $('.cookie-warning button').on('click', function () {
      $('.cookie-warning').fadeOut();
      localStorage.setItem('cookieAccepted', 'true');
    });
  }
});

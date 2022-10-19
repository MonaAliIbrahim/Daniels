// Title Animation in Home Section
let typed = new Typed('.title', {
  strings: ['Larry Danial','Developer','Desiger'],
  smartBackspace: true,
  typeSpeed: 90,
  backDelay: 700,
  backSpeed: 90,
  loop: true,
});

let homeListOffset = $('#homeList').offset().top,
    aboutSectionOffset = $('#about .progress').offset().top,
    ClientSectionOffset = $('#clients').offset().top,
    fireCounter = false;
 
$(document).scroll(function (){
  // Handle Navbar Scroll Effect
  if($(document).scrollTop() > homeListOffset) {
    $('#main-navbar').css({
      'backgroundColor': '#111', 
      'boxShadow': '0px 10px 30px -8px rgb(0 0 0 / 10%)'
    });
  }else {
    $('#main-navbar').css({
      'backgroundColor': 'transparent', 
      'boxShadow': 'none'
    });
  }
  // Handle About Section Animation
  if($(document).scrollTop() >= aboutSectionOffset - $('#about').height()) {
    showProgressValues();
  }
  // Handle Statistics Section Counter
  if($(document).scrollTop() - $('.statistics-section').height() >= ClientSectionOffset - 100) {
    if(!fireCounter) {
      showStatisticsCounter();
      fireCounter = true;
    }
  }
});

function showProgressValues() {
  let progressItems = $('.progress-bar'),
      progressValues = []; 
  for(let i = 0; i < progressItems.length; i++) {
    progressValues.push($('.progress-bar').eq(i).attr('aria-valuenow'))
  }
  for(let i = 0; i < progressItems.length; i++) {
    for(let j = 0; j <= progressValues[i]; j++) {
      $('.progress-bar').eq(i).css({'width': `${j}%`, 'transition': 'all 2s', 'padding': '0 10px'});
    }
  }
}

function showStatisticsCounter() {
  let counterItems = $('.statistics-section h3'),
      counterValues = []; 
  for(let i = 0; i < counterItems.length; i++) {
    counterValues.push($('.statistics-section h3').eq(i).attr('data-target'));
  }
  for(let i = 0; i < counterItems.length; i++) {
    let counter = 1;
    setInterval(() => {
      if(counter <= counterValues[i]) {
        $('.statistics-section h3').eq(i).text(counter);
        counter++;
      }else {
        i++;
      }
    }, 10);
    if(i == counterItems.length - 1) {
      clearInterval();
    }
  }
}

// Show Current Year in Footer
let currentYear= new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;
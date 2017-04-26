$(document).ready(() => {
    $('.navbar a , .down-arrow a').click(function (e) {
        let to = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(to).offset().top
        }, 1200);
    });
});




function initMap() {
  var myLatLng = { lat: 44.0258, lng: 20.449384 };
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 16,
    scrollwheel: false,
    styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
  });
  var image = 'https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-pin-container_4x.png,icons/onion/1899-blank-shape_pin_4x.png&highlight=0288D1&scale=2.0';
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'MIM',
    icon: image

  });
}

window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  if (window_top_position >= 41) {
      document.getElementById("logo-navbar").classList.remove("hide-nav");
    
  }
  else if (window_top_position <= 41) {
      document.getElementById("logo-navbar").classList.add("hide-nav");
  };
};

var $window = $(window);
 $window.on('scroll resize', check_if_in_view);

 function calculateAspectRatioFit(marginTop, marginBottom, scrollofTop, ScrollofBottom) {

    
    var ratio = Math.min(ScrollofTop / marginTop, marginBottom / ScrollofBottom);

    return { marginstart: marginTop*ratio, marginend: marginBottom*ratio };

 };





var container = document.getElementById('navbar');
var logo = document.getElementById('logo-navbar');

window.addEventListener('scroll', function() {
    var pageYOoffset =  $window.scrollTop();
    
  if (pageYOffset >= 40 && pageYOffset <= 150) {
      setLogoMarginTop(pageYOffset);
  } else if (pageYOffset < 40) {
      setLogoMarginTop(40);
  } else if (pageYOffset > 150) {
      setLogoMarginTop(150);
  }
  
  if (pageYOffset > 150){
    $(logo).addClass('spin');
  } else {
    $(logo).removeClass('spin');
  }
});

function setLogoMarginTop(pageYOffset) {
    var maxSize = 60;
    var minSize = 40;
    var procenat = 2.07;
    logo.style.marginTop =  maxSize - ((pageYOffset - minSize)/procenat) + 'px'; 
}


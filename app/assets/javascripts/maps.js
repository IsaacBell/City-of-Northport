// Load Google Maps API and initialize each Map block on the page

function initialize_maps() {
	$(".map-block-container").each(function(index, Element) {

		var mapel = $(Element).find(".map"); 

 		var mapCanvasId, mapCenterLat, mapCenterLng, mapDefaultZoom, mapInfoWindow, style, style_code;

    mapCanvasId = mapel.attr("id");
    mapCenterLat = mapel.data("lat");
    mapCenterLng = mapel.data("long");
    mapDefaultZoom = mapel.data("zoom");
    mapInfoWindow = mapel.data("info");
    style = mapel.data("style"); 

    style_code = ""
  	if (style == "Grayscale") {
  		style_code = [{'featureType':'landscape','stylers':[{'saturation':-100},{'lightness':65},{'visibility':'on'}]},{'featureType':'poi','stylers':[{'saturation':-100},{'lightness':51},{'visibility':'simplified'}]},{'featureType':'road.highway','stylers':[{'saturation':-100},{'visibility':'simplified'}]},{'featureType':'road.arterial','stylers':[{'saturation':-100},{'lightness':30},{'visibility':'on'}]},{'featureType':'road.local','stylers':[{'saturation':-100},{'lightness':40},{'visibility':'on'}]},{'featureType':'transit','stylers':[{'saturation':-100},{'visibility':'simplified'}]},{'featureType':'administrative.province','stylers':[{'visibility':'off'}]},{'featureType':'water','elementType':'labels','stylers':[{'visibility':'on'},{'lightness':-25},{'saturation':-100}]},{'featureType':'water','elementType':'geometry','stylers':[{'hue':'#ffff00'},{'lightness':-25},{'saturation':-97}]}];
  	}
    else if (style == 'Pale') {
    	style_code = [{'featureType':'water','stylers':[{'visibility':'on'},{'color':'#acbcc9'}]},{'featureType':'landscape','stylers':[{'color':'#f2e5d4'}]},{'featureType':'road.highway','elementType':'geometry','stylers':[{'color':'#c5c6c6'}]},{'featureType':'road.arterial','elementType':'geometry','stylers':[{'color':'#e4d7c6'}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#fbfaf7'}]},{'featureType':'poi.park','elementType':'geometry','stylers':[{'color':'#c5dac6'}]},{'featureType':'administrative','stylers':[{'visibility':'on'},{'lightness':33}]},{'featureType':'road'},{'featureType':'poi.park','elementType':'labels','stylers':[{'visibility':'on'},{'lightness':20}]},{},{'featureType':'road','stylers':[{'lightness':20}]}];
    }
    else if (style == 'Pale Blue') {
      style_code = [{"stylers": [{ "lightness": -8 },{ "gamma": 1.07 },{ "saturation": -30 },{ "hue": "#007fff" }]},{"featureType": "landscape","stylers": [{ "saturation": 37 },{ "lightness": -4 },{ "gamma": 1.54 },{ "hue": "#0077ff" }]},{"featureType": "poi","stylers": [{ "hue": "#007fff" },{ "lightness": 16 },{ "gamma": 1.67 },{ "saturation": 31 }]},{"featureType": "water","stylers": [{ "hue": "#007fff" },{ "lightness": -30 },{ "saturation": -65 },{ "gamma": 1.37 }]},{"featureType": "road","stylers": [{ "saturation": -46 },{ "gamma": 1.26 }]},{"featureType": "transit","stylers": [{ "lightness": -1 },{ "gamma": 1.98 },{ "saturation": 44 },{ "hue": "#0055ff" }]},{}];
    }
    else if (style == 'Blue') {
  		style_code = [{'featureType':'water','stylers':[{'color':'#46bcec'},{'visibility':'on'}]},{'featureType':'landscape','stylers':[{'color':'#f2f2f2'}]},{'featureType':'road','stylers':[{'saturation':-100},{'lightness':45}]},{'featureType':'road.highway','stylers':[{'visibility':'simplified'}]},{'featureType':'road.arterial','elementType':'labels.icon','stylers':[{'visibility':'off'}]},{'featureType':'administrative','elementType':'labels.text.fill','stylers':[{'color':'#444444'}]},{'featureType':'transit','stylers':[{'visibility':'off'}]},{'featureType':'poi','stylers':[{'visibility':'off'}]}];
  	}

    var mapOptions = {
      center: new google.maps.LatLng(mapCenterLat, mapCenterLng),
      scrollwheel: false,
      styles: style_code,
      zoom: mapDefaultZoom
    };
    var map = new google.maps.Map(document.getElementById(mapCanvasId), mapOptions);

    var marker = new google.maps.Marker({
      position: {lat: mapCenterLat, lng: mapCenterLng},
      map: map
    });

    if(mapInfoWindow != "") {
      var info = new google.maps.InfoWindow({
        content: mapInfoWindow
      });
      info.open(map, marker);
      google.maps.event.addListener(marker, 'click', function() {
        info.open(map,marker);
      });
    }

	});
}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = "https://maps.googleapis.com/maps/api/js?v=3key=AIzaSyDENedoxisMHbY-o895uaR7xp_bPFHo-24&sensor=false&callback=initialize_maps";
  document.body.appendChild(script);
}
	
window.onload = loadScript;

  
function initMap(){
      var mapOptions = {
          center: new google.maps.LatLng(51.5195786, -0.060690),
          zoom: 13,
          scaleControl: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        
      }
    //  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDCiZizz9f04pVwlnokAJAoL4qA1QUsxOA&callback=initMap" 
      map = new google.maps.Map(document.getElementById("map"), mapOptions);
     
      //For help to code the accessibility features https://developers.google.com/maps/documentation/javascript/examples/marker-accessibility
      
      //location array
      var carlocation = [
        [{lat:51.5090562, lng:-0.130457},"A surprise"],
       [{lat:51.5080898, lng:-0.07620836346036469},"Tower of London"],
      [{lat:51.5425649, lng:-0.00693080308689057},"Westfield Stratford City"],
      [{lat:51.519821199999996,lng:-0.09397523701275332},"The Barbican Centre"],
       [{lat:51.5133798 ,lng: -0.0889552},"The Bank of England"],
       [{lat:51.5253378, lng :-0.033435 },"Mile End Station"],
       [{lat : 51.54458615,lng:-0.0161905117168855},"Queen Elizabeth Olympic Park"],
     
      ];

    //open a info window   
     const infoWindow = new google.maps.InfoWindow();
    //loop through car and display position an title
     carlocation.forEach(([position, title], i) => { 
    
            const marker = new google.maps.Marker({
             position,
             map:map,
             icon:"images/car.png",
             title: `${i + 1}. ${title}`,
           
                          
            
      });
  
    //add a listener to get user mouse click
  
      marker.addListener("click",function(){
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker)
      detailWindow.open(map,marker);
    });   
  
  
     });
  
    } 
 

    

//src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDCiZizz9f04pVwlnokAJAoL4qA1QUsxOA&callback=initMap"

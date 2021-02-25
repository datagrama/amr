/* 
    
 */

function initMap() {
  const address = { lat: 38.751138, lng: -9.131274 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: address,
  });
  const marker = new google.maps.Marker({
    position: address,
    map: map,
  });
}



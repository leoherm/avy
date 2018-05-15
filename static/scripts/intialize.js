<!DOCTYPE html>
<!--  4.1 animation- with crossfades.  All automated.
-->
<html lang="en">
<head>
  <title>Avy Map 4.1</title>
    <meta name="viewport" content="initial-scale=1.0">
    <meta charset="utf-8">
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        width: 525px;
        height: 575px;
      }
      #resetButton {
        top: 700px;
        left: 300px;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
      .danger-scale {
          overflow: hidden;
          margin-bottom: 30px;
          list-style-type: none;
      }
      .danger-scale li {
          border-top: 10px solid #ccc;
          float: left;
          color: #999;
          font-size: 12px;
          height: 50px;
          width: 82.5px;
          padding-top: 7px;
          line-height: 14px;
      }
      .danger-scale li.scale1 { width: 77px; }
      .danger-scale li.scale2 { border-color: #4DB848; }
      .danger-scale li.scale3 { border-color: #FFF200; }
      .danger-scale li.scale4 { border-color: #F7931D; }
      .danger-scale li.scale5 { border-color: #ED1C23; }
      .danger-scale li.scale6 { border-color: #000000; }

      .logo {
        position: absolute;
        top: 5px;
        left: 202px;
        width: 120px;
        fillColor: #E6E6E6;
        background-color: #FFFFFF;
        opacity: 0.6;
        filter: alpha(opacity=60); /* For IE8 and earlier */
        z-index: 1;
      }

      .forecastDate {
        position: relative;
        top: -160px;
        left: 212px;
        width: 100px;
        background-color: #FFFFFF;
        text-align: center;
        border: 1px solid black;
        opacity: 0.6;
        filter: alpha(opacity=60); /* For IE8 and earlier */
        font-size: 24px;
      }

      .resetButton {
        position: relative;
        top: -100px;
        left: 212px;
      }

    </style>

    <script> // var stepCount = 1; </script>
    <script type="text/javascript" src="/static/scripts/mwac-polys.js"></script>
    <script type="text/javascript" src="/static/scripts/zoneRatings.js"></script>
    <script type="text/javascript" src="/static/scripts/datesFile.js"></script>

  </head>
  <body>
    <div id="map"></div>

    <script>
      var map;
      var allZones0 = [];
      var allZones1 = [];
      var dayCount = 0;  // days 0 and 1 are loaded in the initialization
      var totalDays = zoneRating.length;
      var currentDay0 = true;
      var maxOpacity = .7;
      var minOpacity = 0.0;
      var fadeStepsTot = 10;
      var fadeStep = 0;
      var opStep = (maxOpacity - minOpacity)/ fadeStepsTot;
      var xFade = null;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 44.266838, lng: -71.289224},
          zoom: 14,
          streetViewControl : false,
          zoomControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          mapTypeId: 'terrain'
        });
        // add polygons for Day 0
        for (var zoneNum = 0; zoneNum <= 19; zoneNum++){
          var nextPoly0 = new google.maps.Polygon({
            paths: avyZones[zoneNum],
            id: zoneNum,
            strokeColor : '#000000',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillColor: danger_color[zoneRating[0][zoneNum]],
            fillOpacity: maxOpacity
          });
          nextPoly0.setMap(map);
          allZones0.push(nextPoly0);
        // add polygons for Day 1
          var nextPoly1 = new google.maps.Polygon({
            paths: avyZones[zoneNum],
            id: zoneNum,
            strokeColor : '#000000',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillColor: danger_color[zoneRating[1][zoneNum]],
            fillOpacity: minOpacity   // invisible till cross-fade
          });
          nextPoly1.setMap(map);
          allZones1.push(nextPoly1);
        }
      }
    </script>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4Cqpc8fIsfdw8oGrAen39WlJHgCagl-Y&callback=initMap"
    async defer></script>
    <ul class="danger-scale danger">
      <li class="scale2">Low</li>
      <li class="scale3">Moderate</li>
      <li class="scale4">Considerable</li>
      <li class="scale5">High</li>
      <li class="scale6">Extreme</li>
    </ul>

    <a href = "https://www.mountwashingtonavalanchecenter.org/">
      <img class="logo" src="/static/images/MWAClogo2.png" alt="MWAC logo">
    </a>
    <script>
      function buttonPush(){
        for (var seasonDay = 0; seasonDay < dates.length -1; seasonDay++){
          setTimeout(delay, 1000);
          xFade = setInterval(crossFade, 100);
        }
      }

      function delay(){
        var d0 = "nothing";
      }

      function crossFade(){          // changes opacity one step
        var fadeIn = Math.min(maxOpacity, minOpacity + (opStep * fadeStep));
        var fadeOut = Math.max(minOpacity, maxOpacity - (opStep * fadeStep));

        for (var zoneX = 0; zoneX <20; zoneX++){
          if (currentDay0 == true){     // fade out allZones0, fade in allZones1
              allZones0[zoneX].setOptions({fillOpacity: fadeOut});
              allZones1[zoneX].setOptions({fillOpacity: fadeIn});
          } else {                  // fade out allZones1. fade in allZones0
              allZones0[zoneX].setOptions({fillOpacity: fadeIn});
              allZones1[zoneX].setOptions({fillOpacity: fadeOut});
          }
        }
        fadeStep++;
        if (fadeStep > fadeStepsTot){   //cross fade is done
          clearInterval(xFade);
          fadeStep = 0;
          // now load next day's zoneRatings
          for (var zoneNum = 0; zoneNum <= 19; zoneNum++){
            newColor = danger_color[zoneRating[dayCount+2][zoneNum]];
            if (currentDay0 == true){
                allZones0[zoneNum].setOptions({fillColor: newColor});
            } else {
                allZones1[zoneNum].setOptions({fillColor: newColor});
            }
          }
          currentDay0 = !currentDay0; //toggle
          dayCount++;
          document.getElementById("dateBlock").innerHTML=dates[dayCount];
        }
      }
    </script>
    <p id = "dateBlock" class = 'forecastDate'></p>  <!-- date at bottom of map -->
    <script>document.getElementById("dateBlock").innerHTML=dates[dayCount];</script>
    <button class = "resetButton" onclick = "buttonPush()">Next day</button>
  </body>
</html>

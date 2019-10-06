require([
  //*** ADD ***//
  "esri/WebMap",
  "esri/views/MapView",
  "esri/layers/FeatureLayer"
], function(WebMap, MapView, FeatureLayer) {
        //*** ADD ***//
        var map = new WebMap({
          portalItem: {
            id: "06c3ae66880c4601be03d2703502b549"
            //id: "07174ee6dc0c4606989eaa2eeedfcd0b"
            // id: "0b6bf9a687f54d8b839644370877c680"
            // id: "41281c51f9de45edaf1c8ed44bb10e30"
          },
          basemap: "topo-vector",
        });
  
        //*** ADD ***//
        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [-118.80500, 34.02700], // longitude, latitude
          zoom: 13
        });

    var trailheadsRenderer = {
      type: "simple",
      symbol: {
        type: "picture-marker",
        url: "http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png",
        width: "18px",
        height: "18px",
        haloColor: "#FF0000",
        haloSize: "10px",
      }
    }
    var trailheadsLabels = {
      symbol: {
        type: "text",
        color: "#FFFFFF",
        haloColor: "#5E8D74",
        haloSize: "5px",
        font: {
          size: "16px",
          family: "Noto Sans",
          style: "italic",
          weight: "normal"
        }
      },
      labelPlacement: "above-center",
      labelExpressionInfo: {
        expression: "5"
      }
    };

    var trailheadsLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0",
      labelingInfo: trailheadsLabels
    });

    map.add(trailheadsLayer);

    // Trails feature layer (lines)
    var trailsLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0"
    });

    map.add(trailsLayer, 0);

    // Parks and open spaces (polygons)
    var parksLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
    });

    map.add(parksLayer, 0);
});

require(["esri/request"], function(esriRequest) {
  // Define the 'options' for the request
  var options = {
    query: {
      	f: 'json',
	      where: '1=1',
	      outSr: '4326',
	      outFields: 'TRL_NAME,ELEV_FT,CITY_JUR,PARK_NAME,FID'
    },
    responseType: "json"
  };
  const url = "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0/query";
    esriRequest(url, options).then(function(response) {
      console.log("response", response);
      var responseJSON = JSON.stringify(response, null, 2);
      console.log(responseJSON);
    });
});
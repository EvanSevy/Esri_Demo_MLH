// require([
//   //*** ADD ***//
//   "esri/WebMap",
//   "esri/views/MapView",
//   "esri/layers/FeatureLayer"
// ], function(WebMap, MapView, FeatureLayer) {
//         //*** ADD ***//
//         var map = new WebMap({
//           portalItem: {
//             id: "06c3ae66880c4601be03d2703502b549"
//             //id: "07174ee6dc0c4606989eaa2eeedfcd0b"
//             // id: "0b6bf9a687f54d8b839644370877c680"
//             // id: "41281c51f9de45edaf1c8ed44bb10e30"
//           },
//           basemap: "topo-vector",
//         });
  
//         //*** ADD ***//
//         var view = new MapView({
//           container: "viewDiv",
//           map: map,
//           center: [-118.80500, 34.02700], // longitude, latitude
//           zoom: 13
//         });

//     var trailheadsLayer = new FeatureLayer({
//       url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0"
//     });

//     map.add(trailheadsLayer);

//     // Trails feature layer (lines)
//     var trailsLayer = new FeatureLayer({
//       url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0"
//     });

//     map.add(trailsLayer, 0);

//     // Parks and open spaces (polygons)
//     var parksLayer = new FeatureLayer({
//       url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0"
//     });

//     map.add(parksLayer, 0);
// });

const HttpTest = new XMLHttpRequest();
const url = "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0/query";
//const url = "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0/query";
HttpTest.open("POST", url);

HttpTest.setRequestHeader("Content-Type", "text/plain; charset=utf-8");
// Http.setRequestHeader("f", "json");
// Http.setRequestHeader("where", "1=1");
// Http.setRequestHeader("outSr", "4326");
// Http.setRequestHeader("outFields", "TRL_NAME,ELEV_FT,CITY_JUR,PARK_NAME,FID");
var body = {
	"f": 'json',
	"where": '1=1',
	"outSr": '4326',
	"outFields": 'TRL_NAME,ELEV_FT,CITY_JUR,PARK_NAME,FID'
};
// Http.send(JSON.stringify(body));
HttpTest.send(JSON.stringify(body));
//console.log(JSON.parse(HttpTest.responseText));
HttpTest.onreadystatechange = (e) => {
  console.log(HttpTest.response);
}
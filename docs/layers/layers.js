var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_map_1 = new ol.format.GeoJSON();
var features_map_1 = format_map_1.readFeatures(json_map_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_map_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_map_1.addFeatures(features_map_1);
var lyr_map_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_map_1, 
                style: style_map_1,
                popuplayertitle: "map",
                interactive: true,
                title: '<img src="styles/legend/map_1.png" /> map'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_map_1.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_map_1];
lyr_map_1.set('fieldAliases', {'SA4_CODE11': 'SA4_CODE11', 'SA4_NAME11': 'SA4_NAME11', 'GCC_CODE11': 'gcc-code', 'GCC_NAME11': 'GCC_NAME11', 'STE_CODE11': 'STE_CODE11', 'STE_NAME11': 'STE_NAME11', 'ALBERS_SQM': 'ALBERS_SQM', });
lyr_map_1.set('fieldImages', {'SA4_CODE11': 'TextEdit', 'SA4_NAME11': 'TextEdit', 'GCC_CODE11': 'TextEdit', 'GCC_NAME11': 'TextEdit', 'STE_CODE11': 'TextEdit', 'STE_NAME11': 'TextEdit', 'ALBERS_SQM': 'TextEdit', });
lyr_map_1.set('fieldLabels', {'SA4_CODE11': 'inline label - always visible', 'SA4_NAME11': 'inline label - visible with data', 'GCC_CODE11': 'header label - always visible', 'GCC_NAME11': 'inline label - visible with data', 'STE_CODE11': 'header label - always visible', 'STE_NAME11': 'hidden field', 'ALBERS_SQM': 'hidden field', });
lyr_map_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
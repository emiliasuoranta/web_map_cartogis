ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([270711.739995, 6611160.400621, 489015.892778, 6792774.779826]);
var wms_layers = [];


        var lyr_CartoLightAll_0 = new ol.layer.Tile({
            'title': 'Carto Light All',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_EsriWorldImagery_1 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Uusimaaborders_2 = new ol.format.GeoJSON();
var features_Uusimaaborders_2 = format_Uusimaaborders_2.readFeatures(json_Uusimaaborders_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Uusimaaborders_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uusimaaborders_2.addFeatures(features_Uusimaaborders_2);
var lyr_Uusimaaborders_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uusimaaborders_2, 
                style: style_Uusimaaborders_2,
                popuplayertitle: 'Uusimaa borders',
                interactive: false,
                title: '<img src="styles/legend/Uusimaaborders_2.png" /> Uusimaa borders'
            });
var format_Heatmapobservationsfrom2010to2024_3 = new ol.format.GeoJSON();
var features_Heatmapobservationsfrom2010to2024_3 = format_Heatmapobservationsfrom2010to2024_3.readFeatures(json_Heatmapobservationsfrom2010to2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Heatmapobservationsfrom2010to2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Heatmapobservationsfrom2010to2024_3.addFeatures(features_Heatmapobservationsfrom2010to2024_3);
var lyr_Heatmapobservationsfrom2010to2024_3 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Heatmapobservationsfrom2010to2024_3, 
                radius: 10 * 2,
                gradient: ['#ffffb2', '#fecc5c', '#fd8d3c', '#f03b20', '#bd0026'],
                blur: 15,
                shadow: 250,
                title: 'Heatmap observations from 2010 to 2024'
            });
var format_Flyingsquirelobservationsfrom2010to2024_4 = new ol.format.GeoJSON();
var features_Flyingsquirelobservationsfrom2010to2024_4 = format_Flyingsquirelobservationsfrom2010to2024_4.readFeatures(json_Flyingsquirelobservationsfrom2010to2024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Flyingsquirelobservationsfrom2010to2024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flyingsquirelobservationsfrom2010to2024_4.addFeatures(features_Flyingsquirelobservationsfrom2010to2024_4);
var lyr_Flyingsquirelobservationsfrom2010to2024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flyingsquirelobservationsfrom2010to2024_4, 
                style: style_Flyingsquirelobservationsfrom2010to2024_4,
                popuplayertitle: 'Flying squirel observations from 2010 to 2024',
                interactive: true,
                title: '<img src="styles/legend/Flyingsquirelobservationsfrom2010to2024_4.png" /> Flying squirel observations from 2010 to 2024'
            });
var format_Names_5 = new ol.format.GeoJSON();
var features_Names_5 = format_Names_5.readFeatures(json_Names_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Names_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Names_5.addFeatures(features_Names_5);
var lyr_Names_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Names_5, 
                style: style_Names_5,
                popuplayertitle: 'Names',
                interactive: false,
                title: '<img src="styles/legend/Names_5.png" /> Names'
            });

lyr_CartoLightAll_0.setVisible(true);lyr_EsriWorldImagery_1.setVisible(true);lyr_Uusimaaborders_2.setVisible(true);lyr_Heatmapobservationsfrom2010to2024_3.setVisible(true);lyr_Flyingsquirelobservationsfrom2010to2024_4.setVisible(true);lyr_Names_5.setVisible(true);
var layersList = [lyr_CartoLightAll_0,lyr_EsriWorldImagery_1,lyr_Uusimaaborders_2,lyr_Heatmapobservationsfrom2010to2024_3,lyr_Flyingsquirelobservationsfrom2010to2024_4,lyr_Names_5];
lyr_Uusimaaborders_2.set('fieldAliases', {'fid': 'fid', 'Maaku_ni1': 'Maaku_ni1', 'Maaku_ni2': 'Maaku_ni2', 'maaku2018': 'maaku2018', 'maaku2021': 'maaku2021', });
lyr_Flyingsquirelobservationsfrom2010to2024_4.set('fieldAliases', {'fid': 'fid', 'taxonomic_order': 'taxonomic_order', 'formatted_taxon_name': 'formatted_taxon_name', 'abundance_verbatim': 'abundance_verbatim', 'formatted_date_time': 'formatted_date_time', 'country': 'country', 'bio_province_interpreted': 'bio_province_interpreted', 'locality': 'locality', 'collection_name': 'collection_name', 'team': 'team', 'year': 'year', });
lyr_Names_5.set('fieldAliases', {'id': 'id', 'nimet': 'nimet', });
lyr_Uusimaaborders_2.set('fieldImages', {'fid': 'TextEdit', 'Maaku_ni1': 'TextEdit', 'Maaku_ni2': 'TextEdit', 'maaku2018': 'TextEdit', 'maaku2021': 'TextEdit', });
lyr_Flyingsquirelobservationsfrom2010to2024_4.set('fieldImages', {'fid': 'TextEdit', 'taxonomic_order': 'TextEdit', 'formatted_taxon_name': 'TextEdit', 'abundance_verbatim': 'TextEdit', 'formatted_date_time': 'TextEdit', 'country': 'TextEdit', 'bio_province_interpreted': 'TextEdit', 'locality': 'TextEdit', 'collection_name': 'TextEdit', 'team': 'TextEdit', 'year': 'TextEdit', });
lyr_Names_5.set('fieldImages', {'id': 'TextEdit', 'nimet': 'TextEdit', });
lyr_Uusimaaborders_2.set('fieldLabels', {'fid': 'no label', 'Maaku_ni1': 'no label', 'Maaku_ni2': 'no label', 'maaku2018': 'no label', 'maaku2021': 'no label', });
lyr_Flyingsquirelobservationsfrom2010to2024_4.set('fieldLabels', {'fid': 'no label', 'taxonomic_order': 'no label', 'formatted_taxon_name': 'no label', 'abundance_verbatim': 'no label', 'formatted_date_time': 'no label', 'country': 'no label', 'bio_province_interpreted': 'no label', 'locality': 'no label', 'collection_name': 'no label', 'team': 'no label', 'year': 'no label', });
lyr_Names_5.set('fieldLabels', {'id': 'no label', 'nimet': 'no label', });
lyr_Names_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
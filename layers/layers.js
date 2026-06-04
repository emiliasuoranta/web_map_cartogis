ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([240874.886289, 6601622.876822, 517962.816191, 6793452.982139]);
var wms_layers = [];


        var lyr_CartoLightAll_0 = new ol.layer.Tile({
            'title': 'Carto Light All',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Heatmapforallobservations_1 = new ol.format.GeoJSON();
var features_Heatmapforallobservations_1 = format_Heatmapforallobservations_1.readFeatures(json_Heatmapforallobservations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Heatmapforallobservations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Heatmapforallobservations_1.addFeatures(features_Heatmapforallobservations_1);
var lyr_Heatmapforallobservations_1 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Heatmapforallobservations_1, 
                radius: 10 * 2,
                gradient: ['#ffffb2', '#fecc5c', '#fd8d3c', '#f03b20', '#bd0026'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'year';
        var featureWeight = feature.get(weightField);
        var maxWeight = 2024;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'Heatmap for all observations'
            });
var format_FlyingSquirelobservationsfrom2010to2024_2 = new ol.format.GeoJSON();
var features_FlyingSquirelobservationsfrom2010to2024_2 = format_FlyingSquirelobservationsfrom2010to2024_2.readFeatures(json_FlyingSquirelobservationsfrom2010to2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_FlyingSquirelobservationsfrom2010to2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlyingSquirelobservationsfrom2010to2024_2.addFeatures(features_FlyingSquirelobservationsfrom2010to2024_2);
var lyr_FlyingSquirelobservationsfrom2010to2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlyingSquirelobservationsfrom2010to2024_2, 
                style: style_FlyingSquirelobservationsfrom2010to2024_2,
                popuplayertitle: 'Flying Squirel observations from 2010 to 2024',
                interactive: true,
    title: 'Flying Squirel observations from 2010 to 2024<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_0.png" /> 1853<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_1.png" /> 1865<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_2.png" /> 1880<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_3.png" /> 1884<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_4.png" /> 1886<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_5.png" /> 1895<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_6.png" /> 1900<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_7.png" /> 1904<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_8.png" /> 1906<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_9.png" /> 1911<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_10.png" /> 1929<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_11.png" /> 1977<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_12.png" /> 1980<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_13.png" /> 1984<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_14.png" /> 1985<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_15.png" /> 1986<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_16.png" /> 1987<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_17.png" /> 1988<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_18.png" /> 1989<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_19.png" /> 1990<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_20.png" /> 1991<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_21.png" /> 1992<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_22.png" /> 1993<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_23.png" /> 1994<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_24.png" /> 1995<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_25.png" /> 1996<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_26.png" /> 1997<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_27.png" /> 1998<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_28.png" /> 1999<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_29.png" /> 2000<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_30.png" /> 2001<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_31.png" /> 2002<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_32.png" /> 2003<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_33.png" /> 2004<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_34.png" /> 2005<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_35.png" /> 2006<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_36.png" /> 2007<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_37.png" /> 2008<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_38.png" /> 2009<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_39.png" /> 2010<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_40.png" /> 2011<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_41.png" /> 2012<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_42.png" /> 2013<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_43.png" /> 2014<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_44.png" /> 2015<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_45.png" /> 2016<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_46.png" /> 2017<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_47.png" /> 2018<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_48.png" /> 2019<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_49.png" /> 2020<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_50.png" /> 2021<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_51.png" /> 2022<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_52.png" /> 2023<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_53.png" /> 2024<br />\
    <img src="styles/legend/FlyingSquirelobservationsfrom2010to2024_2_54.png" /> <br />' });
var format_Names_3 = new ol.format.GeoJSON();
var features_Names_3 = format_Names_3.readFeatures(json_Names_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Names_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Names_3.addFeatures(features_Names_3);
var lyr_Names_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Names_3, 
                style: style_Names_3,
                popuplayertitle: 'Names',
                interactive: false,
                title: '<img src="styles/legend/Names_3.png" /> Names'
            });
var format_Uusimaaborders_4 = new ol.format.GeoJSON();
var features_Uusimaaborders_4 = format_Uusimaaborders_4.readFeatures(json_Uusimaaborders_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Uusimaaborders_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uusimaaborders_4.addFeatures(features_Uusimaaborders_4);
var lyr_Uusimaaborders_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uusimaaborders_4, 
                style: style_Uusimaaborders_4,
                popuplayertitle: 'Uusimaa borders',
                interactive: false,
                title: '<img src="styles/legend/Uusimaaborders_4.png" /> Uusimaa borders'
            });

lyr_CartoLightAll_0.setVisible(true);lyr_Heatmapforallobservations_1.setVisible(true);lyr_FlyingSquirelobservationsfrom2010to2024_2.setVisible(true);lyr_Names_3.setVisible(true);lyr_Uusimaaborders_4.setVisible(true);
var layersList = [lyr_CartoLightAll_0,lyr_Heatmapforallobservations_1,lyr_FlyingSquirelobservationsfrom2010to2024_2,lyr_Names_3,lyr_Uusimaaborders_4];
lyr_FlyingSquirelobservationsfrom2010to2024_2.set('fieldAliases', {'fid': 'fid', 'taxonomic_order': 'taxonomic_order', 'formatted_taxon_name': 'formatted_taxon_name', 'abundance_verbatim': 'abundance_verbatim', 'formatted_date_time': 'formatted_date_time', 'country': 'country', 'bio_province_interpreted': 'bio_province_interpreted', 'locality': 'locality', 'collection_name': 'collection_name', 'team': 'team', 'year': 'year', });
lyr_Names_3.set('fieldAliases', {'id': 'id', 'nimet': 'nimet', });
lyr_Uusimaaborders_4.set('fieldAliases', {'fid': 'fid', 'Maaku_ni1': 'Maaku_ni1', 'Maaku_ni2': 'Maaku_ni2', 'maaku2018': 'maaku2018', 'maaku2021': 'maaku2021', });
lyr_FlyingSquirelobservationsfrom2010to2024_2.set('fieldImages', {'fid': 'TextEdit', 'taxonomic_order': 'TextEdit', 'formatted_taxon_name': 'TextEdit', 'abundance_verbatim': 'TextEdit', 'formatted_date_time': 'TextEdit', 'country': 'TextEdit', 'bio_province_interpreted': 'TextEdit', 'locality': 'TextEdit', 'collection_name': 'TextEdit', 'team': 'TextEdit', 'year': 'TextEdit', });
lyr_Names_3.set('fieldImages', {'id': 'TextEdit', 'nimet': 'TextEdit', });
lyr_Uusimaaborders_4.set('fieldImages', {'fid': 'TextEdit', 'Maaku_ni1': 'TextEdit', 'Maaku_ni2': 'TextEdit', 'maaku2018': 'TextEdit', 'maaku2021': 'TextEdit', });
lyr_FlyingSquirelobservationsfrom2010to2024_2.set('fieldLabels', {'fid': 'no label', 'taxonomic_order': 'no label', 'formatted_taxon_name': 'no label', 'abundance_verbatim': 'no label', 'formatted_date_time': 'no label', 'country': 'no label', 'bio_province_interpreted': 'no label', 'locality': 'inline label - always visible', 'collection_name': 'inline label - always visible', 'team': 'inline label - always visible', 'year': 'inline label - always visible', });
lyr_Names_3.set('fieldLabels', {'id': 'no label', 'nimet': 'no label', });
lyr_Uusimaaborders_4.set('fieldLabels', {'fid': 'no label', 'Maaku_ni1': 'no label', 'Maaku_ni2': 'no label', 'maaku2018': 'no label', 'maaku2021': 'no label', });
lyr_Uusimaaborders_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
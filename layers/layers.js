ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-39.842356, -13.389936, -37.142088, -11.971377]);
var wms_layers = [];

var format_Hidrogeologia_0 = new ol.format.GeoJSON();
var features_Hidrogeologia_0 = format_Hidrogeologia_0.readFeatures(json_Hidrogeologia_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Hidrogeologia_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrogeologia_0.addFeatures(features_Hidrogeologia_0);
var lyr_Hidrogeologia_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hidrogeologia_0, 
                style: style_Hidrogeologia_0,
                interactive: true,
    title: 'Hidrogeologia<br />\
    <img src="styles/legend/Hidrogeologia_0_0.png" /> Domínio das Bacias Sedimentares<br />\
    <img src="styles/legend/Hidrogeologia_0_1.png" /> Domínio das Coberturas Detrtíticas<br />\
    <img src="styles/legend/Hidrogeologia_0_2.png" /> Domínio do Embasamento Cristalino<br />\
    <img src="styles/legend/Hidrogeologia_0_3.png" /> Domínio dos Calcários<br />\
    <img src="styles/legend/Hidrogeologia_0_4.png" /> Domínio dos Metassedimentos (Indiviso)<br />'
        });
var format_cidade_1 = new ol.format.GeoJSON();
var features_cidade_1 = format_cidade_1.readFeatures(json_cidade_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cidade_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cidade_1.addFeatures(features_cidade_1);
var lyr_cidade_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cidade_1, 
                style: style_cidade_1,
                interactive: false,
                title: '<img src="styles/legend/cidade_1.png" /> cidade'
            });
var format_capital_2 = new ol.format.GeoJSON();
var features_capital_2 = format_capital_2.readFeatures(json_capital_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_capital_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_capital_2.addFeatures(features_capital_2);
var lyr_capital_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_capital_2, 
                style: style_capital_2,
                interactive: false,
                title: '<img src="styles/legend/capital_2.png" /> capital'
            });
var format_PoosTubulares_3 = new ol.format.GeoJSON();
var features_PoosTubulares_3 = format_PoosTubulares_3.readFeatures(json_PoosTubulares_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PoosTubulares_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoosTubulares_3.addFeatures(features_PoosTubulares_3);
var lyr_PoosTubulares_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoosTubulares_3, 
                style: style_PoosTubulares_3,
                interactive: true,
                title: '<img src="styles/legend/PoosTubulares_3.png" /> Poços Tubulares'
            });

lyr_Hidrogeologia_0.setVisible(true);lyr_cidade_1.setVisible(true);lyr_capital_2.setVisible(true);lyr_PoosTubulares_3.setVisible(true);
var layersList = [lyr_Hidrogeologia_0,lyr_cidade_1,lyr_capital_2,lyr_PoosTubulares_3];
lyr_Hidrogeologia_0.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PROVINCIA': 'PROVINCIA', 'SIGLA_UNID': 'SIGLA_UNID', 'NOME_UNIDA': 'NOME_UNIDA', 'HIERARQUIA': 'HIERARQUIA', 'IDADE_MAXI': 'IDADE_MAXI', 'ERRO_IDADE': 'ERRO_IDADE', 'METODO_DET': 'METODO_DET', 'EON_IDADE_': 'EON_IDADE_', 'ERA_IDADE_': 'ERA_IDADE_', 'PERIODO_ID': 'PERIODO_ID', 'EPOCA_IDAD': 'EPOCA_IDAD', 'SISTEMA_ID': 'SISTEMA_ID', 'QUALIDADE_': 'QUALIDADE_', 'IDADE_MINI': 'IDADE_MINI', 'ORIGEM': 'ORIGEM', 'LITOTIPO1': 'LITOTIPO1', 'LITOTIPO2': 'LITOTIPO2', 'CLASSE1': 'CLASSE1', 'CLASSE2': 'CLASSE2', 'SUBCLASSE1': 'SUBCLASSE1', 'SUBCLASSE2': 'SUBCLASSE2', 'Cod_Domini': 'Cod_Domini', 'Dominios': 'Dominios', 'Cod_Subdom': 'Cod_Subdom', 'Subdominio': 'Subdominio', 'Legenda': 'Legenda', });
lyr_cidade_1.set('fieldAliases', {'ID': 'ID', 'nm_nome': 'nm_nome', 'geocodigo': 'geocodigo', 'cd_classe_': 'cd_classe_', 'UF': 'UF', 'PAIS': 'PAIS', 'populacao2': 'populacao2', 'md_latitud': 'md_latitud', 'md_longitu': 'md_longitu', 'data_alter': 'data_alter', 'metodo_alt': 'metodo_alt', 'fonte_info': 'fonte_info', 'GMRotation': 'GMRotation', });
lyr_capital_2.set('fieldAliases', {'ID': 'ID', 'nm_nome': 'nm_nome', 'geocodigo': 'geocodigo', 'cd_classe_': 'cd_classe_', 'UF': 'UF', 'PAIS': 'PAIS', 'populacao2': 'populacao2', 'md_latitud': 'md_latitud', 'md_longitu': 'md_longitu', 'data_alter': 'data_alter', 'metodo_alt': 'metodo_alt', 'fonte_info': 'fonte_info', 'GMRotation': 'GMRotation', });
lyr_PoosTubulares_3.set('fieldAliases', {'POCO': 'Poços', 'LATDECIMAL': 'LATDECIMAL', 'LONGDECIMA': 'LONGDECIMA', 'LOCAL': 'LOCAL', 'MUNICIP': 'MUNICIP', 'PROFUNDO': 'PROFUNDO', 'SOLIDOSTOT': 'SOLIDOSTOT', 'VAZAO': 'VAZAO', 'NE': 'NE', 'ND': 'ND', 'Legenda': 'Legenda', });
lyr_Hidrogeologia_0.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PROVINCIA': 'TextEdit', 'SIGLA_UNID': 'TextEdit', 'NOME_UNIDA': 'TextEdit', 'HIERARQUIA': 'TextEdit', 'IDADE_MAXI': 'TextEdit', 'ERRO_IDADE': 'TextEdit', 'METODO_DET': 'TextEdit', 'EON_IDADE_': 'TextEdit', 'ERA_IDADE_': 'TextEdit', 'PERIODO_ID': 'TextEdit', 'EPOCA_IDAD': 'TextEdit', 'SISTEMA_ID': 'TextEdit', 'QUALIDADE_': 'TextEdit', 'IDADE_MINI': 'TextEdit', 'ORIGEM': 'TextEdit', 'LITOTIPO1': 'TextEdit', 'LITOTIPO2': 'TextEdit', 'CLASSE1': 'TextEdit', 'CLASSE2': 'TextEdit', 'SUBCLASSE1': 'TextEdit', 'SUBCLASSE2': 'TextEdit', 'Cod_Domini': 'TextEdit', 'Dominios': 'TextEdit', 'Cod_Subdom': 'TextEdit', 'Subdominio': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_cidade_1.set('fieldImages', {'ID': 'TextEdit', 'nm_nome': 'TextEdit', 'geocodigo': 'TextEdit', 'cd_classe_': 'TextEdit', 'UF': 'TextEdit', 'PAIS': 'TextEdit', 'populacao2': 'TextEdit', 'md_latitud': 'TextEdit', 'md_longitu': 'TextEdit', 'data_alter': 'TextEdit', 'metodo_alt': 'TextEdit', 'fonte_info': 'TextEdit', 'GMRotation': 'TextEdit', });
lyr_capital_2.set('fieldImages', {'ID': 'TextEdit', 'nm_nome': 'TextEdit', 'geocodigo': 'TextEdit', 'cd_classe_': 'TextEdit', 'UF': 'TextEdit', 'PAIS': 'TextEdit', 'populacao2': 'TextEdit', 'md_latitud': 'TextEdit', 'md_longitu': 'TextEdit', 'data_alter': 'TextEdit', 'metodo_alt': 'TextEdit', 'fonte_info': 'TextEdit', 'GMRotation': 'TextEdit', });
lyr_PoosTubulares_3.set('fieldImages', {'POCO': 'TextEdit', 'LATDECIMAL': 'TextEdit', 'LONGDECIMA': 'TextEdit', 'LOCAL': 'TextEdit', 'MUNICIP': 'TextEdit', 'PROFUNDO': 'TextEdit', 'SOLIDOSTOT': 'TextEdit', 'VAZAO': 'TextEdit', 'NE': 'TextEdit', 'ND': 'TextEdit', 'Legenda': 'TextEdit', });
lyr_Hidrogeologia_0.set('fieldLabels', {'AREA': 'inline label', 'PERIMETER': 'inline label', 'PROVINCIA': 'inline label', 'SIGLA_UNID': 'inline label', 'NOME_UNIDA': 'inline label', 'HIERARQUIA': 'inline label', 'IDADE_MAXI': 'inline label', 'ERRO_IDADE': 'inline label', 'METODO_DET': 'inline label', 'EON_IDADE_': 'inline label', 'ERA_IDADE_': 'inline label', 'PERIODO_ID': 'inline label', 'EPOCA_IDAD': 'inline label', 'SISTEMA_ID': 'inline label', 'QUALIDADE_': 'inline label', 'IDADE_MINI': 'inline label', 'ORIGEM': 'inline label', 'LITOTIPO1': 'inline label', 'LITOTIPO2': 'inline label', 'CLASSE1': 'inline label', 'CLASSE2': 'inline label', 'SUBCLASSE1': 'inline label', 'SUBCLASSE2': 'inline label', 'Cod_Domini': 'inline label', 'Dominios': 'inline label', 'Cod_Subdom': 'inline label', 'Subdominio': 'inline label', 'Legenda': 'inline label', });
lyr_cidade_1.set('fieldLabels', {'ID': 'inline label', 'nm_nome': 'inline label', 'geocodigo': 'inline label', 'cd_classe_': 'inline label', 'UF': 'inline label', 'PAIS': 'inline label', 'populacao2': 'inline label', 'md_latitud': 'inline label', 'md_longitu': 'inline label', 'data_alter': 'inline label', 'metodo_alt': 'inline label', 'fonte_info': 'inline label', 'GMRotation': 'inline label', });
lyr_capital_2.set('fieldLabels', {'ID': 'inline label', 'nm_nome': 'inline label', 'geocodigo': 'inline label', 'cd_classe_': 'inline label', 'UF': 'inline label', 'PAIS': 'inline label', 'populacao2': 'inline label', 'md_latitud': 'inline label', 'md_longitu': 'inline label', 'data_alter': 'inline label', 'metodo_alt': 'inline label', 'fonte_info': 'inline label', 'GMRotation': 'inline label', });
lyr_PoosTubulares_3.set('fieldLabels', {'POCO': 'inline label', 'LATDECIMAL': 'inline label', 'LONGDECIMA': 'inline label', 'LOCAL': 'inline label', 'MUNICIP': 'inline label', 'PROFUNDO': 'inline label', 'SOLIDOSTOT': 'inline label', 'VAZAO': 'inline label', 'NE': 'inline label', 'ND': 'inline label', 'Legenda': 'inline label', });
lyr_PoosTubulares_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
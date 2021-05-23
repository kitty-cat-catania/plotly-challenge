function init() {
    d3.json("samples.json").then(function getData(data) {
        
        

        var names = data.names;

        console.log(names );
        var ddButton = d3.select("#selDataset");
        var ddOptions = names.forEach((function (name) {
            var idOption = ddButton.append("option");
            idOption.text(name);
            idOption.attr("value", name);
            }));
        var metadataDicts = data.metadata;
        var meta904 = metadataDicts[0]
        var demoDiv= d3.select("#sample-metadata");
        var demoData = (Object.entries(meta904)).forEach(([key, value]) => {
            var demoP = demoDiv.append("p");
            demoP.text(`${key}: ${value}`);
        });


        //bar chart for init
        
        buildBar(data,0);

        //Bubble chart 940 
        /*var bubbbleTrace904 = {
            x: otu_ids904,
            y: sampleValues904,
            mode: 'markers',
            marker: {
                size: sampleValues904
            }

        };

        var bubData = [bubbbleTrace904];

        var bubLayout = {
            title: "Bacteria Cultures Per Sample",
            showlegend: false

        };

        Plotly.newPlot('bubble', bubData, bubLayout);*/
    });
    

//end of init() function  
};

function buildBarBubble(data, sampleIndex) {
    var samples = data.samples;
    var barSample = samples[sampleIndex];
    console.log(barSample);
    var barOtu_ids = Object.values(barSample.otu_ids);
    console.log(barOtu_ids);
    var slicedBarOtu_ids = barOtu_ids.slice(0,10);
    console.log(slicedBarOtu_ids);
    var sampleValues = Object.values(barSample.sample_values);
    var sampleValsSliced = sampleValues.slice(0,10);
    var otuLabelsBar = Object.values(barSample.otu_labels);
    var slicedBarOLabels=otuLabelsBar.slice(0,10);
    console.log(slicedBarOLabels);

    var barY = slicedBarOtu_ids.map(item => `OTU ${item}`);
    var bData = [{
        type: 'bar',
        x: sampleValsSliced,
        y: barY,
        orientation: 'h'
    }];
    Plotly.newPlot('bar',bData);
};








init();

d3.selectAll("#selDataset").on("change", optionChanged);


function optionChanged() {
    d3.json("samples.json").then(function getNames(data) {
        var ddMenu = d3.select("#selDataset");
        var selectedID = ddMenu.property("value");
        console.log(selectedID);
        var idNames = data.names;
        var metaDicts = data.metadata;
        var metaDataArr = [];
        var arrIndex = 0;
        for (i=0; i<idNames.length ; i++) {
            if (selectedID == (metaDicts[i].id)) {
                metaDataArr = metaDicts[i];
                arrIndex = i;
                break;
            };
        };
        console.log(metaDataArr);
        var demoInfoDiv = d3.select("#sample-metadata");
        demoInfoDiv.html("");
        var demoData = (Object.entries(metaDataArr)).forEach(([key, value]) => {
            var demoP2 = demoInfoDiv.append("p");
            demoP2.text(`${key}: ${value}`);
        });
        var samplesDicts = data.samples;
        samplesDicts.map(function(info) {
            info.id = +info.id;
        });
        var sampleArr = [];
        for (i=0; i<idNames.length ; i++) {
            if (selectedID == (samplesDicts[i].id)) {
                sampleArr = samplesDicts[i];
                break;
            };
        };
        console.log(sampleArr);
        /*build updated bar chart
        var otu_idsAct = Object.values(sampleArr.otu_ids);
        console.log(otu_idsAct);
        var slicedActotu_ids = otu_idsAct.slice(0,10);
        console.log(slicedActotu_ids);
        var sampleValuesAct = Object.values(sampleArr.sample_values);
        var sampleValsSlicedAct = sampleValuesAct.slice(0,10);
        var otuLabelsAct = Object.values(sampleArr.otu_labels);
        var slicedActoLabels = otuLabelsAct.slice(0,10);
        console.log(slicedActoLabels);
        var actY = slicedActotu_ids.map(item => `OTU ${item}`);
        var bActData = [{
            type: 'bar',
            x: sampleValsSlicedAct,
            y: actY,
            orientation: 'h'
        }];
        var barDiv = d3.select("#bar");
        barDiv.html("");
        buildBar(data,)
        */
    });
};
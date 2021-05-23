function init() {
    d3.json("samples.json").then(function getNames(data) {
        //work on making it interactive

        

        var names = data.names;
        var dict = [];
        var nameDict = names.map(function(name, index) {
            dict.push({
                key: index,
                value: name
            });
        });

        console.log(dict);
        var ddButton = d3.select("#selDataset");
        var ddOptions = names.forEach((function (name) {
            var idOption = ddButton.append("option");
            idOption.text(name);
            idOption.attr("value", name);
            }));
        var metadataDicts = data.metadata;
        var metadata904 = metadataDicts[0];
        console.log(metadata904);
        var demoDiv = d3.select("#sample-metadata");
        var demoData = (Object.entries(metadata904)).forEach(([key, value]) => {
            var demoP = demoDiv.append("p");
            demoP.text(`${key}: ${value}`);
        });


        //bar chart for init
        
        var samples = data.samples;
        var sample904 = samples[0];
        console.log(sample904);
        var otu_ids904 = Object.values(sample904.otu_ids);
        console.log(otu_ids904);
        var sliced904otu_ids = otu_ids904.slice(0,10);
        console.log(sliced904otu_ids);
        var sampleValues904 = Object.values(sample904.sample_values);
        var sampleValsSliced904 = sampleValues904.slice(0,10);
        var otuLabels904 = Object.values(sample904.otu_labels);
        var sliced904oLabels = otuLabels904.slice(0,10);
        console.log(sliced904oLabels);

        var firstbarY = sliced904otu_ids.map(item => `OTU ${item}`);
        var bData = [{
            type: 'bar',
            x: sampleValsSliced904,
            y: firstbarY,
            orientation: 'h'
        }];

        Plotly.newPlot('bar', bData);

        //Bubble chart 940 
        var bubbbleTrace904 = {
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

        Plotly.newPlot('bubble', bubData, bubLayout);
    });
    

   
}

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
        for (i=0; i<idNames.length ; i++) {
            if (selectedID == (metaDicts[i].id)) {
                metaDataArr = metaDicts[i];
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

    });
};




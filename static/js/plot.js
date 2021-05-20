function init() {
    d3.json("samples.json").then(function getNames(data) {
        var names = data.names;
        console.log(names);
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
        var barDiv = d3.select("#bar");
        var samples = data.samples;
        var sample904 = samples[0];
        console.log(sample904);
        var otu_ids904 = Object.values(sample904.otu_ids);
        console.log(otu_ids904);
        var sliced904otu_ids = otu_ids904.slice(0,10);
        console.log(sliced904otu_ids);
    });
    
}

init();

d3.selectAll("#selDataset").on("change", optionChanged);

function optionChanged() {
    var ddMenu = d3.select("#selDataset");
    var selectedID = ddMenu.property("value");
    console.log(selectedID);
}




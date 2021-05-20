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
        })
    });
    
}

init();

d3.selectAll("#selDataset").on("change", optionChanged);

function optionChanged() {
    var ddMenu = d3.select("#selDataset");
    var selectedID = ddMenu.property("value");
    console.log(selectedID);
}




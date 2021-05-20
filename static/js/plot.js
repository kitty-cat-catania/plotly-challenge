function getDropdown() {
    d3.json("samples.json").then(function getNames(data) {
        var names = data.names;
        console.log(names);
        var ddButton = d3.select("#selDataset");
        var ddOptions = names.forEach((function (name) {
            var idOption = ddButton.append("option");
            idOption.text(name);
            idOption.attr("value", name);
            }));
    });
    
}

getDropdown();

d3.selectAll("#selDataset").on("change", optionChanged);

function optionChanged() {
    var ddMenu = d3.select("#selDataset");
    var selectedID = ddMenu.property("value");
    console.log(selectedID);
}




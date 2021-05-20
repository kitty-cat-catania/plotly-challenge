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

/*
var idOption = ddButton.append("option");
idOption.text("Please work");
idOption.attr("value", "ugh";)
*/




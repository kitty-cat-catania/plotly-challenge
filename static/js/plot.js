function getDropdown() {
    d3.json("samples.json").then(function getNames(data) {
        var names = data.names;
        console.log(names);
        return names;
    });
    
}

var testIds = getDropdown();
console.log(testIds);

var ddButton = d3.select("#selDataset");
var idOption = ddButton.append("option");
idOption.text("Please work");
idOption.attr("value", "ugh")

/*var ddOptions = testIds.map(function(name) {
    var idOption = ddOptions.append("option").data(name)
                            .enter()
                            .append("option");
    return idOption;
});
*/
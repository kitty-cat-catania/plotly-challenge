//getNames prints an the array of names to the console and 
// also returns that same array

d3.json("samples.json").then(function getNames(data) {
    var names = data.names;
    console.log(names);
    return names;
});


//call function updateDash() when someone presses button
d3.selectAll("#selDataset").on("change", optionChanged);

//called whenever someone presses button for dropdownn menu
function optionChanged() {
    //select dropdown menu with d3
    var ddMenu = d3.select("#selDataset");
    //Assign value of ddmenu option to variable
    var testID = ddMenu.property("value");

    //initialize empty array for hell of it
    var y = [];

    //test to see if I can get options to display on the dropdown menu
    if (testID=== "904") {
        y = ["doggos", "no", "know"];
        console.log(y);
    }

    else if (testID === "905") {
        y = ["a", "b", "c"];
        console.log(y);
    }
}
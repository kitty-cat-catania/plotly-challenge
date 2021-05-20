//getNames prints an the array of names to the console and 
// also returns that same array

d3.json("samples.json").then(function getNames(data) {
    var names = data.names;
    console.log(names);
    return names;
});

//get test subject 'name' 

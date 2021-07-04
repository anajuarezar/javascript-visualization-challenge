
// We begin to do the default plot
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
}

function firstPlot() {
  d3.json("./samples.json").then((data) => {

    // First let's add the names to the dropdown menu


    var options = data.names;
    var dropMenu = d3.select("#selDataset");
    options.map(option => {
    dropMenu.append("option").text(option);
    });

    // We begin to do the default plot

    console.log(data);
    var sampleValues = data.samples[0].sample_values.slice(0, 10).reverse();
    var ID = data.samples[0].otu_ids.slice(0, 10).reverse();
    var otuLabels = data.samples[0].otu_labels.slice(0, 10).reverse();
    var otuID = ID.map(each => "OTU" + each);

    console.log(sampleValues);
    console.log(ID);
    console.log(otuLabels);
    console.log(otuID);


    var trace1 = {
        x: sampleValues,
        y: otuID,
        type: "bar",
        orientation: "h",
        text : otuLabels
      };
      
      // data
      var data = [trace1];
      
      // Apply the group bar mode to the layout
      var layout = {
        title: "Top Bacteria Cultures Found",
        margin: {
          l: 80,
          r: 80,
          t: 80,
          b: 80
        }
      };

      Plotly.newPlot("bar", data, layout);



      // Default bubble chart 



    });

}

firstPlot();
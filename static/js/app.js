
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
    var sampleValues = data.samples[0].sample_values;
    var otuID = data.samples[0].otu_ids;
    var otuLabels = data.samples[0].otu_labels;
    console.log(sampleValues);

    // Time to slice and sort!

    var slicedSample = sampleValues.slice(0, 10).reverse();
    var slicedotuID = otuID.slice(0, 10).reverse();
    var labels = slicedotuID.map((each => "OTU" + each));
    console.log(slicedSample);

    var trace1 = {
        x: slicedSample,
        y: slicedotuID,
        type: "bar",
        orientation: "h"
      };
      
      // data
      var data = [trace1];
      
      // Apply the group bar mode to the layout
      var layout = {
        title: "Top Bacteria Cultures Found",
        margin: {
          l: 75,
          r: 75,
          t: 75,
          b: 75
        }
      };

      Plotly.newPlot("bar", data, layout);
    });

}

firstPlot();
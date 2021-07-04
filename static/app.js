d3.json("./samples.json").then((data) => {
    console.log(data);
});

// We begin to do the default plot
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
}

function firstPlot() {

    var sampleValues = data.samples[0].sample_values;
    var otuID = data.samples[0].otu_ids; 
    var otuLabels = data.samples[0].otu_labels;
    console.log(sampleValues);

    // Time to slice and sort!

    var slicedSample = sampleValues.slice(0, 10).reverse();
    var slicedotuID = otuID.slice(0, 10).reverse();
    var toplabels = slicedotuID.map((each => "OTU" + otu_labels));
    console.log(slicedSample);

    var trace1 = {
        x: slicedSample,
        y: slicedotuID,
        text: toplabels,
        type: "bar",
        orientation: "h"
      };
      
      // data
      var data = [trace1];
      
      // Apply the group bar mode to the layout
      var layout = {
        title: "Top 10 Bacteria Cultures Found"
      };

      Plotly.newPlot("bar", data, layout);

}

firstPlot();
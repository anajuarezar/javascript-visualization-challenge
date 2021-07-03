d3.json("./samples.json").then(function(data) {
console.log(data);
});

// We begin to do the default plot
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
}

function firstPlot() {
    var sample_values = data.samples[0].sample_values;
    var sampleSorted = sample_values.reverse();
    var slicedSample = sampleSorted.slice(0,10);
    console.log(slicedSample);
    var otu_ids = slicedSample.map(object => object.otu_ids);
    var otu_labels = slicedSample.map(object => object.otu_labels);

    var trace1 = {
        x: slicedSample,
        y: otu_ids,
        text: otu_labels,
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

firstPlot()

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
    var ID = data.samples[0].otu_ids;
    var otuLabels = data.samples[0].otu_labels;
    var otuID = ID.map(each => "OTU" + each);

    // Time to sort and slice!

    var samplesliced = data.samples[0].sample_values.slice(0, 10).reverse();
    var IDsliced = data.samples[0].otu_ids.slice(0, 10).reverse();
    var slicedLabels = data.samples[0].otu_labels.slice(0, 10).reverse();
    var otuIDsliced = IDsliced.map(each => "OTU" + each);

    // Check the results!!

    console.log(sampleValues);
    console.log(ID);
    console.log(otuLabels);
    console.log(otuID);

    // Plot time


    var trace1 = {
        x: samplesliced,
        y: otuIDsliced,
        type: "bar",
        orientation: "h",
        text : slicedLabels
      };
      
      var data = [trace1];
      
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

      var trace1 = {
        x: ID,
        y: sampleValues,
        mode: 'markers',
        text: otuLabels.toString(),
        marker: {
          size: sampleValues,
          color: ID,
          colorscale: 'Picnic'
        }
      };
      
      var data = [trace1];
      
      var layout = {
        title: 'Bubble Chart for each Subject',
        showlegend: false,
      };
      
      Plotly.newPlot("bubble", data, layout);

      // Demographic table

      // First, let's retrieve the information

      var subID = data.metadata[0].id;
      var subEth = data.metadata[0].ethnicity;
      var subGender = data.metadata[0].gender;
      var subAge = data.metadata[0].age;
      var subbb = data.metadata[0].bbtype;
      buildPanel(subID, subEth, subGender, subAge, subbb);

      function buildPanel (subID, subEth, subGender, subAge, subbb) {
        var panelID = d3.select("#sample-metadata");
        panelID.html("");
        var subjectlist = Object.keys(data.metada[0]);
        var subvalues = Object.values(data.metada[0]);
        for (var i = 0; i < subjectlist; i++) {
          panelID.append("p").text(`${subjectlist[i]}: ${subvalues[i]}`);

      }
    }


    })

};

firstPlot();
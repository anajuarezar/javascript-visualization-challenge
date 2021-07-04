
// Let's begin with defining the function that will create the plots and update itself.

function Plot(subject) {
  // We need to read the json file, but since it is in another folder we will use d3 to call it. 

  d3.json("./samples.json").then((data) => {

  // Now, let' select the dropdown menu and add the options. 
    var options = data.names;
    var dropMenu = d3.select("#selDataset");
    options.map(option => {
    dropMenu.append("option").text(option);
    });

  // We continue on to the bar data. 

    console.log(data);
    var sampleValues = data.samples[subject].sample_values;
    var ID = data.samples[subject].otu_ids;
    var otuLabels = data.samples[subject].otu_labels;
    var otuID = ID.map(each => "OTU" + each);

  // Time to sort and slice!

    var samplesliced = data.samples[subject].sample_values.slice(0, 10).reverse();
    var IDsliced = data.samples[subject].otu_ids.slice(0, 10).reverse();
    var slicedLabels = data.samples[subject].otu_labels.slice(0, 10).reverse();
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


  // Moving on to the bubble chart

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

    var panelID = d3.select("#sample-metadata");
    panelID.html("");
    var subjectlist = Object.keys(data.metada[index]);
    var subvalues = Object.values(data.metada[index]);
    for (var i = 0; i < subjectlist.length; i++) {
      panelID.append("p").text(`${subjectlist[i]}: ${subvalues[i]}`);
    };

  // Time to create the handler
  
    d3.selectAll("#selDataset").on("change", updateData);

    function updatetData() {
      var dropdownMenu = d3.select("#selDataset");
      var dataset = dropdownMenu.property("value");
      if (dataset ===  {

      }
      Plot(index);
    
    }
    
  
  })

};

Plot(0);
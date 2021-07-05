
// Let's begin with defining the function that will create the plots and update itself.


function Plot() {

  // We need to read the json file, but since it is in another folder we will use d3 to call it. 

  d3.json("./samples.json").then((data) => {

  // Now, let' select the dropdown menu and add the options. 
    var options = data.names;
    var dropMenu = d3.select("#selDataset");
    options.map(option => {
    dropMenu.append("option").text(option);
    });

    d3.selectAll("#selDataset").on("change", Plot);
    var subject =dropMenu.property("value");
    var index = data.names.indexOf(subject);
    console.log(index);

  // We continue on to the bar data. 

    console.log(data);
    var sampleValues = data.samples[index].sample_values;
    var ID = data.samples[index].otu_ids;
    var otuLabels = data.samples[index].otu_labels;
    var otuID = ID.map(each => "OTU" + each);

  // Time to sort and slice!

    var samplesliced = data.samples[index].sample_values.slice(0, 10).reverse();
    var IDsliced = data.samples[index].otu_ids.slice(0, 10).reverse();
    var slicedLabels = data.samples[index].otu_labels.slice(0, 10).reverse();
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

    var metadata = data.metadata;
    var IDpanel = d3.select("#sample-metadata"); 
    IDpanel.html("");
    var subjectSelected = index;
      Object.entries(subjectSelected).map(([key, value]) => {
        IDpanel.append("p").text(`${key}: ${value}`);
      })


  })
    

};

Plot()

// Let's begin with defining the function that will create the plots and update itself.


function Plot() {

  // We need to read the json file, but since it is in another folder we will use d3 to call it. 

  d3.json("./samples.json").then((data) => {

  // Now, let's begin defining the variables that will contain the different arrays.

    var options = data.names;
    var metaArray = data.metadata;

  // Let's create the dropdown menu using the var we created! 

    var dropMenu = d3.select("#selDataset");
    options.map(option => {
    dropMenu.append("option").text(option);
    });

  // We create the handlers and event that will trigger the update of our visualizations.
  // Here, the event will be a change in the dropdown menu.

    d3.selectAll("#selDataset").on("change", Plot);

   // For the visualizations to change accordingly with the id, we will use the value property to obtain the id number   
    var subject =dropMenu.property("value");
  
  // Using that number we will use the function INDEXOF to obtain the index that we will use to define the index while
  // obtaining the information.

    var index = data.names.indexOf(subject);

  // Here we will use the index we obtained to retrieve that subjects info and create our first plot. 
  // Now, LET'S PLOT! 
  // Our first plot is a horizontal bar plot. 

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

    var IDpanel = d3.select("#sample-metadata"); 
    IDpanel.html("");
    console.log(metaArray);
    var subjectSelected = metaArray.find(element => element.id == subject);
    console.log(subjectSelected);
    Object.entries(subjectSelected).find(([key, value]) => {
      IDpanel.append("p").text(`${key}: ${value}`);
      })


  })
    

};

Plot()
d3.json("/samples.json").then(function(data) {
    var sample_values = data.samples[0].sample_values;
    var otu_ids = data.samples[0].otu_ids;
    var otu_labels = data.samples[0].otu_labels;
    console.log(sample_values);
});

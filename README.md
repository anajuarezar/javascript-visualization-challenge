# Belly Button Biodiversity

![alt text](https://github.com/anajuarezar/javascript-visualization-challenge/blob/main/images/kT09SLIVTYqy_xXCEQOmhMKLy5vc2fCySYIPXFUWkiI.jpg)

For this homework, we used The Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

For this homework we had to create a interactive webpage. In this page, we had to display several visualizations that had to respond to an ID selected from a dropdown menu. 
In order to do this I followed this steps:

1. I started by defining the main function. This function would contain the creation of the dropdown menu, the plots and the demographic panel. It would also include a handler that will respond to changes in the dropdown.
2. Then, I read the JSON file however, it was in another folder, so I used .d3v and an http.server to read it.
3. I defined the variables I would use frequently, options and metaArray that were my link to the names array and the metadata array respectively. 
4. I created the dropdown menu, using d3 to select the node for the dropdown and appending the text of the variable options to it.
5. Then, I defined the handler and the event that would trigger the update. In this case, it was a selection (change) in the dropdown menu.
6. In order for the visualizations to change accordingly, I used called the ID selected in the dropdown menu, obtained its text and then obtained the index it corresponded. Once I had the index, I would use it to map the information of each ID.
7. Later, I began retrieving the information necessary for the plots using the index I obtained.
8. Once I had the info, I sorted and sliced it. 
9. I built the bar plot using "h" to make it horizontal.
10. Afterwards, I plotted the bubble graph.
11. Finally, I built the demographic panel. Using d3 I selected the node where it was placed, I emptied it. I used find and the subject var I had from the beginning to map the corresponding id from the metadata array. Then using Object.entries, I obtained both the key and the value. Now, I only had to append it to a parraph.
12. The only thing left was to call the function.  

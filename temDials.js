

//Circle Data Set
 var circleData = [
   { "cx": 60, "cy": 120, "radius": 60, "color" : "green", "label" : "Temperature"},
   { "cx": 180, "cy": 120, "radius": 60, "color" : "purple" , "label" : "I dont get it"}];
 
 //Create the SVG Viewport
 var svgContainer = d3.select("body").append("svg")
                                      .attr("width",300)
                                      .attr("height",300);

//Add circles to the svgContainer
var circles = svgContainer.selectAll("circle")
                           .data(circleData)
                           .enter()
                           .append("circle");

//Add the circle attributes
var circleAttributes = circles
                       .attr("cx", function (d) { return d.cx; })
                       .attr("cy", function (d) { return d.cy; })
                       .attr("r", function (d) { return d.radius; })
                       .style("fill", function (d) { return d.color; });

//Add the SVG Text Element to the svgContainer
var text = svgContainer.selectAll("text")
                        .data(circleData)
                        .enter()
                        .append("text");

//Add SVG Text Element Attributes
var textLabels = text
                .attr("x", function(d) { return d.cx-d.radius+5; })
                 .attr("y", function(d) { return d.cy; })
                 .text( function (d) { return d.label; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "20px")
                 .attr("fill", "white");
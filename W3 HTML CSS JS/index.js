d3.select();
d3.selectAll();

d3.select('h1').style('color','#2B547E')
.attr('class','heading');

var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];

//var dataset = [1,2,3,4,5];

var svgWidth = 600, svgHeight = 250, barPadding = 6;
var barWidth = (svgWidth / dataset.length);
       
var svg = d3.select("#chart1").append('svg')
        .attr("width", svgWidth)
        .attr("height", svgHeight);
        
var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset)])
        .range([0, svgHeight]);
            
var barChart = svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("y", function(d) {
             return svgHeight - yScale(d) 
        })
        .attr("height", function(d) { 
            return yScale(d); 
        })
        .attr("width", barWidth - barPadding)
        .attr("transform", function (d, i) {
            var translate = [barWidth * i, 0]; 
            return "translate("+ translate +")";
        })
        .attr("fill", function(d) {
            return "rgb(0, 0, " + (d * 10) + ")";
        });

var text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
        return d;
    })
    .attr("y", function(d, i) {
        return svgHeight - 10;
    })
    .attr("x", function(d, i) {
        return barWidth * i;
    })
    .attr("fill", "#FFFFFF");

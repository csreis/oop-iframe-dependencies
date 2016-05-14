/*global jQuery, d3, dagreD3, DAG */

// Renders the graph.

// Optionally show schedule for index.html?schedule.
// Uses query param and not fragment, because it affects how graph is drawn.
// Fragments would cause in-page navigation and wouldn't repaint graph.
var queryParams = location.href.split("?");
var showSchedule = queryParams.length == 2 && queryParams[1] == "schedule";
if (showSchedule) {
  document.getElementById("schedule").style.display = "block";
}

// Make graph available to schedule logic.
var graph;

(function () {
    'use strict';
    window.DAG = {
        displayGraph: function (graph, dagNameElem, svgElem) {
            dagNameElem.text(graph.name);
            this.renderGraph(graph, svgElem);
        },

        renderGraph: function(graph, svgParent) {
            var nodes = graph.nodes;
            var links = graph.links;

            var graphElem = svgParent.children('g').get(0);
            var svg = d3.select(graphElem);
            var renderer = new dagreD3.Renderer();
            
            var defaultDrawNodes = renderer._drawNode;
            renderer._drawNode = function(graph, u, root) {
              if (showSchedule) {
                // Keep track of the full graph object globally for mouseovers.
                window.graph = graph;
                // Depth first, memoized computation of weeks remaining per task.
                computeSchedule(graph, u);
              }

              defaultDrawNodes(graph, u, root);
              var milestone = graph.node(u).milestone;
              var owner = graph.node(u).owner;
              var weeksLeft = graph.node(u).weeksLeft;
              var status = graph.node(u).status;
              var bugNum = graph.node(u).bug;

              if (milestone) {
                root.attr("class", "milestone");
              }
              if (owner) {
                root
                  .attr("class", "ownedrect")
                  .append("text")
                  .attr("text-anchor", "left")
                  .attr("class", "owned")
                  .append("tspan")
                    .attr("dx", "1.5em")
                    .attr("dy", "1.4em")
                    .text(function() { return owner; });
              }
              if (showSchedule && weeksLeft) {
                root
                  .append("text")
                  .attr("text-anchor", "left")
                  .attr("class", "owned")
                  .append("tspan")
                    .attr("dx", "-1em")
                    .attr("dy", "1.4em")
                    .text(function() { return "" + weeksLeft + "w"; });
              }
              if (status == "complete") {
                root.attr("class", "complete");
              }
              if (bugNum) {
                root
                  .attr("onclick", "window.open('http://crbug.com/" + bugNum + "')")
                  .append("text")
                  .attr("text-anchor", "left")
                  .attr("class", "bug")
                  .append("tspan")
                    .attr("dx", "-5em")
                    .attr("dy", "1.4em")
                    .text(function() { return bugNum; });
              }
              if (showSchedule) {
                // Show more info on hover.
                root.attr("onmouseover", "showDetails('" + u + "')");
              }
            };

            var layout = dagreD3.layout().rankDir('LR').nodeSep(20);
            renderer.layout(layout).run(dagreD3.json.decode(nodes, links), svg.append('g'));

            // Adjust SVG height to content
            var main = svgParent.find('g > g');
            var h = main.get(0).getBoundingClientRect().height;
            var newHeight = h + 40;
            newHeight = newHeight < 80 ? 80 : newHeight;
            svgParent.height(newHeight);
            
            var w = main.get(0).getBoundingClientRect().width;
            var newWidth = w + 40;
            newWidth = newWidth < 80 ? 80 : newWidth;
            svgParent.width(newWidth);

            // Zoom
            d3.select(svgParent.get(0)).call(d3.behavior.zoom().on('zoom', function() {
                var ev = d3.event;
                svg.select('g')
                    .attr('transform', 'translate(' + ev.translate + ') scale(' + ev.scale + ')');
            }));
        }
    };
})();

function computeSchedule(graph, u) {
  var node = graph.node(u);

  // Keep track of memoized result to avoid recomputing a given node.
  if (node.schedule != undefined)
    return node.schedule;
  node.schedule = new Object();

  // Add week estimate from this task.
  var owner = node.owner == undefined ? "Unowned" : node.owner;
  var weeks = node.weeksLeft == undefined ? 0 : node.weeksLeft;
  node.schedule[owner] = weeks;

  // Recursively add estimates from any subtasks.
  var children = graph.successors(u);
  for (var i = 0; i < children.length; ++i) {
    var childSchedule = computeSchedule(graph, children[i]);
    for (var childOwner in childSchedule) {
      if (node.schedule[childOwner] == undefined)
        node.schedule[childOwner] = 0;
      node.schedule[childOwner] += childSchedule[childOwner];
    }
  }

  return node.schedule;
}

function showDetails(u) {
  var schedule = graph.node(u).schedule;
  var totalWeeks = 0;

  // Print any owners with open tasks.
  var details = "<ul>";
  for (var owner in schedule) {
    var weeks = schedule[owner];
    if (weeks > 0) {
      details += "<li>" + owner + ": " + weeks+ " weeks<br>";

      // Keep track of the max number of weeks for any owner.
      if (weeks > totalWeeks)
        totalWeeks = weeks;
    }
  }
  details += "</ul>";
  var label = graph.node(u).label + "<br>" + totalWeeks + " weeks";

  // Add details to page.
  document.getElementById("scheduleNode").innerHTML = label;
  document.getElementById("scheduleDetails").innerHTML = details;
}

(function () {
    'use strict';

    // load data on dom ready
    jQuery(function () {
        // load script with graph data
        var fileName = 'graph-oop-iframes.js';
        var dataScript = document.createElement('script');
        dataScript.src = fileName;
        document.body.appendChild(dataScript);
    });

    // callback for graph data loading
    window.loadData = function (data) {
        DAG.displayGraph(data, jQuery('#dag-name'), jQuery('#dag > svg'));
    };
}());




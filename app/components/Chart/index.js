import React, { Component } from 'react';
import { connect } from'react-redux';
import d3 from 'd3';
import { scaleOrdinal } from 'd3-scale';
import { select, selectAll } from 'd3-selection';
import { force } from 'd3-force';

class ForceLayoutComponent extends Component {
  componentDidMount() {
    const { width = 800, height = 600, circleWidth = '5' } = this.props;

    const pallete = {
      "lightgray": "#E5E8E8",
      "gray": "#708284",
      "mediumgray": "#536870",
      "blue": "#3B757F"
    }   

    console.log(d3)
    
    const colors = d3.scaleOrdinal(d3.schemeCategory20);
    
    const nodes = [
      { name: "Skills"},
      { name: "HTML5", target: [0], value: 60 },
      { name: "CSS3", target: [0, 1], value: 50 },  
      { name: "Scss", target: [0, 1, 2], value: 52 },
      { name: "jQuery", target: [0, 1, 2], value: 40 },
      { name: "Javascript", target: [0, 1, 2, 8], value: 50 },
      { name: "Git", target: [0,1,2,3,4,5,6,7,8,10], value: 30 },
      { name: "d3", target: [0,1,2,7,8], value: 25 },
      { name: "Gulp", target: [0,1,2,3,4,5,6,7,8,9,10,11,12], value: 30 },
      { name: "React", target: [0,1,2,7,8], value: 45 },
      { name: "AFrame", target: [0,1,2,12], value: 25 },
      { name: "PostgreSQL", target: [0,9,10], value: 40 },
      { name: "Node", target: [0,9,10], value: 40 },
    ];
    
    const links = [];

    for (let i = 0; i < nodes.length; i++){
      if (nodes[i].target !== undefined) { 
        for ( let x = 0; x < nodes[i].target.length; x++ ) 
          links.push({
            source: nodes[i],
            target: nodes[nodes[i].target[x]]  
          });
      }
    }

    const myChart = d3.select("this.refs.mountPoint")
      .append("div")
        .classed("svg-container", true)
      .append('svg')
        .attr("preserveAspectRatio", "xMinYMin meet")
        .attr("viewBox", "0 0 800 600")
        .classed("svg-content-responsive", true);

    const force = d3.layout.force()
      .nodes(nodes)
      .links([])
      .gravity(0.1)
      .charge(-1000)
      .size([width, height]);
    
    const link = myChart.selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', palette.lightgray)
      .attr('stroke-width', '1');
    

    const node = svg.selectAll('circle')
      .data(nodes)
      .enter()
      .append('g')
      .call(force.drag);

    node.append('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', (d,i) => (i > 0) ? circleWidth + d.value : circleWidth + 35)
      .attr('fill', (d,i) => (i > 0) ? colors(i) : '#fff')
      .attr('strokewidth', (d,i) => (i > 0) ? '0' : '2')
      .attr('stroke', (d,i) => (i > 0) ? '' : 'black')


    force.on('tick', (e) => {
      node.attr('transform', (d,i) => 'translate(' + d.x + ','+ d.y + ')')

      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);
  
    });

    node.append('text')
      .text((d) => d.name)
      .attr('font-family', 'Raleway')
      .attr('fill', function(d, i){
                    console.log(d.value);
                        if ( i > 0 && d.value < 10 ) {
                              return palette.mediumgray;
                        } else if ( i > 0 && d.value >10 ) {
                              return palette.lightgray;
                        } else {
                              return palette.blue;
                        }
                  })
      .attr('text-anchor', (d,i) => 'middle')
      .attr('font-size', (d,i) => (i > 0) ? '.8em' : '.9em')
    force.start();
  }
  
  render() {
    const { width, height } = this.props;
    const style = {
      width: '50vw',
      height: '100vh',
      border: '1px solid #323232',
    };
    
    return <div style={style} ref="mountPoint" />;
  }
}

const mapState = ({ chart }) => ({ chart })

const mapDispatch = { }

export default connect(mapState, mapDispatch)(ForceLayoutComponent);
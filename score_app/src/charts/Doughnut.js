import React from 'react';
import {Doughnut} from 'react-chartjs-2';

function App({score}) {
    function score_clr_validation(score){
        if (score < 35) {
            return '#FF0000'
        } else if ((score >= 35) & (score < 70)) {
            return '#FFA500'
        } else if ((score >= 70) & (score <= 100)) {
            return '#00FF00'
        }
    }
    const plugins = [{
        beforeDraw: function(chart) {
         var width = chart.width,
             height = chart.height,
             ctx = chart.ctx;
             ctx.restore();
             var fontSize = (height / 160).toFixed(2);
             ctx.font = fontSize + "em sans-serif";
             ctx.textBaseline = "top";
             var text = score+"/100",
             textX = Math.round((width - ctx.measureText(text).width) / 2),
             textY = height / 2;
             ctx.fillText(text, textX, textY);
             ctx.save();
        } 
      }]
    const data = {
        datasets: [{
          data: [score,(100-score)],
          backgroundColor: [
          score_clr_validation(score),
          '#FFFAFA'
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#F5FFFA'
          ]
        }]
      };
  return (
    <div>
        <Doughnut 
          type="doughnut" 
          data={data} 
          plugins={plugins} 
         />
    </div>
  );
}
export default App;
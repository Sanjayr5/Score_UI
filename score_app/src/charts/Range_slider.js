import React from 'react';
import { Slider } from '@material-ui/core';

function Range_slider({avg, score}) {
    const marks = [
        {
          value: 0,
          label: '0',
        },
        {
          value: avg,
          label: `${avg} (Class Avg)`,
        },
        {
          value: 100,
          label: '100',
        },
      ];
    return (
        <div>
      <Slider
        defaultValue={score}
        aria-labelledby="discrete-slider-custom"
        step={1}
        valueLabelDisplay="on"
        marks={marks}
      />                 
        </div>
    )
}

export default Range_slider;


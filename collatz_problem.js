'use strict';

function collatz_tracking(val){
    return collatz_tracking_aux(val, []);
}

function collatz_tracking_aux(value, tracker){
    const tracker_updated = [...tracker];
    tracker_updated.push(value);
    if(value === 1){
        return tracker_updated;
    }
    const next_step = value%2 == 0? value/2 : 3*(value) + 1; 
    return collatz_tracking_aux(next_step, tracker_updated);
}

console.log(collatz_tracking(27));
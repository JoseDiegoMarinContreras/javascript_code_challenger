'use strict';

function collatz_tracking(val: number): number[]{
    return collatz_tracking_aux(val, []);
}

function collatz_tracking_aux(value: number, tracker: number[]): number[]{
    const tracker_updated: number[] = [...tracker];
    tracker_updated.push(value);
    if(value === 1){
        return tracker_updated;
    }
    const next_step = value%2 == 0? value/2 : 3*(value) + 1; 
    return collatz_tracking_aux(next_step, tracker_updated);
}

console.log(collatz_tracking(27));
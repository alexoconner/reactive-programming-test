
import Rx from 'rx';

// observe simple numbers
var number$ = Rx.Observable.of(3,6);

// calculate them
var calcNumber$ = number$
    .map( a => a * 10 );

calcNumber$.subscribe( a => {
    console.log(a);
});

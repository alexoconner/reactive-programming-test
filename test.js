
import Rx from 'rx';

// observe simple numbers
var number$ = Rx.Observable.of(3,6);

// calculate them
var calcNumber$ = number$
    .map( a => a * 10 );

calcNumber$.subscribe( a => {
    console.log(a);
});

// array
var myArray = Rx.Observable.from([1, 2, 3, 4]);

var myArraySubscription = myArray.subscribe(
    (x) => {
        console.log( 'next: ' + x );
    },
    (err) => {
        console.log( 'error: ' + err );
    },
    () => {
        console.log( 'complete' );
    }
);

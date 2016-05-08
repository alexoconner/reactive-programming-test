
import Rx from 'rx';

const button = document.getElementById('clickMeButton');
const clickStream = Rx.Observable.fromEvent(button, 'click');

clickStream.subscribe( e => {
    console.log(e, ' click');
});

let doubleClick = clickStream
    .buffer( () => clickStream.debounce(300) )
    .map( clickEvents => clickEvents.length )
    .filter( x => x === 2 );

doubleClick.subscribe( e => {
    console.log(e, 'double click');
});

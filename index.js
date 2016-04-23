
import Rx from 'rx';

const button = document.getElementById('clickMeButton');
const clickStream = Rx.Observable.fromEvent(button, 'click');

clickStream.subscribe( e => {
    console.log(e, 'click');
});

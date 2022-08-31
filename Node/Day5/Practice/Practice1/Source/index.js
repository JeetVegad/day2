const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// eventEmitter.on('start', () => {
//     console.log('started');
//   });

//   eventEmitter.emit('start');

//   eventEmitter.on('start', number => {
//     console.log(`started ${number}`);
//   });
  
//   eventEmitter.emit('start', 23);
  

  eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`);
  });
  
  function c1() {
    console.log('an event occurred!');
 }

 eventEmitter.on('start',c1)

  eventEmitter.emit('start', 1, 100);
  
  eventEmitter.once('eventOnce', () => console.log('eventOnce once fired'));

  eventEmitter.emit('eventOnce');
  eventEmitter.emit('eventOnce'); // No Effect....

  eventEmitter.off('start',c1);


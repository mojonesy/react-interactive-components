import './App.css';
import React, { useState } from 'react';

function App() {
  const [subscribed, setSubscribed] = useState(false);
  const [subscribedCount, setSubscribedCount] = useState(0);
  const [alerts, setAlerts] = useState(false);
  /* What do we pass to useState as an argument? 
     The only argument to the useState() Hook is the initial state.
     We can keep a number or a string if that’s all we need. 
     In our example, we just want a number for how many times the user clicked, 
     so pass 0 as initial state for our variable. 
     (If we wanted to store two different values in state, we would call useState() twice.)
     useState() returns a pair of values: the current state and a function that updates it. */


  return (
    <section style={{margin:"10px"}}>
      <h1>Interactive Components</h1>
      <p>Click to subscribe to updates :)</p>
      <p>Subscriber Count: {subscribedCount}</p>
        <button
          onClick={() => {
            setSubscribed(!subscribed);
            setSubscribedCount((currentCount) => currentCount + 1);
            setSubscribedCount((currentCount) => currentCount + 1);
            if (!alerts) setAlerts(true);
          }}
        >
          {subscribed? "Unsubscribe" : "Subscribe"}
        </button>
        <button onClick={() => setAlerts(!alerts)}>
          {alerts? "Turn off alerts" : "Turn on alerts"}
        </button>
    </section>
  );
}

export default App;

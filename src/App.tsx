import type { Component } from 'solid-js';
import Phone from './Phone/Index';
import Butterfly from './Butterfly/Index';
import Firework from './Firework/Index';
import Confession from './Confession/Index';
import { counter } from './Button';
import { Switch, Match } from 'solid-js/web';

const App: Component = () => {

  return (
    <div style={{
      "font-family": `"Nunito Sans", sans- serif`,
    }}>
      <Switch>
        <Match when={counter() == 0}>
          <Phone />
        </Match>
        <Match when={counter() == 1}>
          <Butterfly />
        </Match>
        <Match when={counter() == 2}>
          <Firework />
        </Match>
        <Match when={counter() == 3}>
          <Confession />
        </Match>
      </Switch>
    </div >
  );
};

export default App;

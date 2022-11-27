import Step from './containers/step/Step';
import Wizard from './lib';

function App() {
  return (
    <Wizard>
      <Step />
      <Step />
      <Step />
    </Wizard>
  );
}

export default App;

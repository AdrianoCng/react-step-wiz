import { useWizard } from 'react-step-wiz';
import Button from 'src/components/button/Button';

export default function Step() {
  const { goNextStep, goPrevStep, goToStep, currentStep } = useWizard();

  return (
    <div>
      <h1>Step: {currentStep}</h1>

      <Button label="Prev" onClick={goPrevStep} />
      <Button label="Next" onClick={goNextStep} />
      <Button label="go step 1" onClick={() => goToStep(1)} />
    </div>
  );
}

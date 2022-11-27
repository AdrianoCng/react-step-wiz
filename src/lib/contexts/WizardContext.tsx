import { createContext, useContext } from 'react';

export interface IWizardContext {
  currentStep: number;
  goNextStep: () => void;
  goPrevStep: () => void;
  goToStep: (step: number) => void;
}

export const WizardContext = createContext<IWizardContext | undefined>(undefined);

export default function useWizard() {
  const context = useContext(WizardContext);

  if (context === undefined) {
    throw new Error('Wizard context must be used within a wizard context provider.');
  }

  return context;
}

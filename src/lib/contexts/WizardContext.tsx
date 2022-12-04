import { createContext } from 'react';

export interface IWizardContext {
  currentStep: number;
  goNextStep: () => void;
  goPrevStep: () => void;
  goToStep: (step: number) => void;
}

export default createContext<IWizardContext | undefined>(undefined);

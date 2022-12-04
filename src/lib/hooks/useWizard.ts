import { useContext } from 'react';

import WizardContext from '../contexts/WizardContext';

export default function useWizard() {
  const context = useContext(WizardContext);

  if (context === undefined) {
    throw new Error('Wizard context must be used within a wizard context provider.');
  }

  return context;
}

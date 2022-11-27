import React, { useCallback, useMemo, useState } from 'react';
import { IWizardContext, WizardContext } from './contexts/WizardContext';

export interface IWizardProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function Wizard({ children }: IWizardProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = React.Children.toArray(children);
  const lastIndex = steps.length - 1;

  const goNextStep = useCallback(() => {
    if (activeIndex >= lastIndex) return;

    setActiveIndex((prev) => prev + 1);
  }, [activeIndex, lastIndex]);

  const goPrevStep = useCallback(() => {
    if (activeIndex <= 0) return;

    setActiveIndex((prev) => prev - 1);
  }, [activeIndex]);

  const goToStep = useCallback(
    (step: number) => {
      const index = step - 1;

      if (index > lastIndex || index < 0) return;

      setActiveIndex(index);
    },
    [lastIndex],
  );

  const contextValue = useMemo(
    () => ({
      currentStep: activeIndex + 1,
      goToStep,
      goNextStep,
      goPrevStep,
    }),
    [activeIndex, goNextStep, goPrevStep, goToStep],
  );

  const renderStep = () => {
    const element = steps[activeIndex];

    return React.isValidElement(element)
      ? React.cloneElement(element as React.ReactElement<IWizardContext>, { ...contextValue })
      : element;
  };

  return <WizardContext.Provider value={contextValue}>{renderStep()}</WizardContext.Provider>;
}

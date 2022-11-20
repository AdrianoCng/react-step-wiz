export interface WizardProps {
  test: string;
}

export default function Wizard({ test }: WizardProps) {
  return <div>{test}</div>;
}

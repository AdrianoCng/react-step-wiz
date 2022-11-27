interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button({ label, ...props }: Props) {
  return (
    <button type="button" {...props}>
      {label}
    </button>
  );
}

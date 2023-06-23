interface ButtonProps {
  label: string
  className: string
  onClick?: () => void
  disabled?: boolean
  ariaLabel?: string
}

const Button: React.FC<ButtonProps> = ({ label, className, onClick, disabled, ariaLabel }) => (
  <button onClick={onClick} className={className} aria-label={ariaLabel} disabled={disabled}>
    {label}
  </button>
)

export default Button

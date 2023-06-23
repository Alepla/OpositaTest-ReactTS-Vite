interface ButtonProps {
  children: string
  className: string
  onClick?: () => void
  disabled?: boolean
  ariaLabel?: string
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick, disabled, ariaLabel }) => (
  <button onClick={onClick} className={className} aria-label={ariaLabel} disabled={disabled}>
    {children}
  </button>
)

export default Button

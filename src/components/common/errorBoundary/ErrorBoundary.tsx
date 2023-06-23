import { useState } from "react"

interface ErrorBoundaryProps {
  children: JSX.Element
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState<boolean>(false)

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const componentDidCatch = (): void => {
    setHasError(true)
  }

  if (hasError) {
    return (
      <div>
        <h2>¡Ups! Algo salió mal.</h2>
        <p>Por favor, intenta recargar la página.</p>
      </div>
    )
  }

  return children
}

export default ErrorBoundary

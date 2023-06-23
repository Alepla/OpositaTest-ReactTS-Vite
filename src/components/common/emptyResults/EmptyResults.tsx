interface NoResultsProps {
  label: string
}

const EmptyResults: React.FC<NoResultsProps> = ({ label }) => {
  return (
    <div>
      <h3>No se han encontrado {label}</h3>
    </div>
  )
}

export default EmptyResults

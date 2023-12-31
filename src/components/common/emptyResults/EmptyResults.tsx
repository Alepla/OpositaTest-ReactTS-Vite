interface NoResultsProps {
  label: string
}

const EmptyResults: React.FC<NoResultsProps> = ({ label }) => {
  return (
    <div>
      <h3>No {label} found</h3>
    </div>
  )
}

export default EmptyResults

const SavedVideoCard = props => {
  const {savedVideoDetails} = props
  const {title} = savedVideoDetails

  return (
    <div>
      <h1> {title}</h1>
    </div>
  )
}

export default SavedVideoCard

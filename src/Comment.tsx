const formatDate = (date: number) => {
  return new Date(date).toTimeString()
}

function Comment(props: any) {
  return (
    <div className="Comment">
      <div className="Comment-date">{formatDate(props.date)}</div>
      <div>{props.author}</div>
    </div>
  )
}

export default Comment

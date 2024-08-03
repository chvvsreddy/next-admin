
const Pagination = () => {
  return (
    <div className='flex items-center justify-between pt-4'>
        <button className="line-btn disabled:opacity-40" disabled>Previous</button>
      <button className="line-btn">  Next </button>
    </div>
  )
}

export default Pagination
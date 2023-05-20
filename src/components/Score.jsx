function Score({ icon, title, score }) {
  return (
    <div className={`score ${title.toLowerCase()}`}>
      <div>
        <img src={icon} alt="" />
        <p className={`${title.toLowerCase()}-title score-title`}>{title}</p>
      </div>
      <p>
        {score} <span>/ 100</span>
      </p>
    </div>
  )
}

export default Score

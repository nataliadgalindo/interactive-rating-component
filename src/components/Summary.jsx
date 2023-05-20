import Score from "./Score"
import data from "../data.json"

function Summary() {
  return (
    <section className="summary-section">
      <h1 className="section-title">Summary</h1>

      <section className="scores">
        {data.map((item, index) => {
          let { category, score, icon } = item

          return (
            <Score key={index} title={category} score={score} icon={icon} />
          )
        })}
      </section>

      <button className="btn">Continue</button>
    </section>
  )
}

export default Summary

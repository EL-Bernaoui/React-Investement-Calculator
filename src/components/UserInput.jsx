export default function UserInput({ onChange, inputValue }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investement</label>
          <input
            type="number"
            value={inputValue.initialInvestment}
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investement</label>
          <input
            type="number"
            value={inputValue.annualInvestment}
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={inputValue.expectedReturn}
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            value={inputValue.duration}
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

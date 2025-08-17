import React, { useState } from "react";

const Quiz = ({ questions }) => {
  const [score, setScore] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let correct = 0;
    questions.forEach((q, i) => {
      const selected = e.target[`q${i}`].value;
      if (selected === q.answer) correct++;
    });
    setScore(correct);
  };

  return (
    <div className="quiz-section">
      <h2>Quick Quiz</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((q, i) => (
          <div key={i}>
            <p>{q.question}</p>
            {q.options.map((opt, j) => (
              <label key={j}>
                <input type="radio" name={`q${i}`} value={opt} required />
                {opt}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      {score !== null && <p>Your score: {score}/{questions.length}</p>}
    </div>
  );
};

export default Quiz;

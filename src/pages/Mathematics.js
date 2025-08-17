import React from 'react';

const Mathematics = () => {
  return (
    <div className="subject-page">
      <h1>📘 High School Mathematics</h1>

      <section>
        <h2>📚 Main Topics to Study</h2>

        <h3>Algebra</h3>
        <ul>
          <li>Linear equations & inequalities</li>
          <li>Quadratic functions (factoring, completing the square, quadratic formula)</li>
          <li>Polynomials and rational expressions</li>
          <li>Exponents & logarithms</li>
          <li>Systems of equations</li>
        </ul>

        <h3>Geometry</h3>
        <ul>
          <li>Angles, triangles, and polygons</li>
          <li>Circles (arcs, chords, tangents)</li>
          <li>Coordinate geometry (distance, midpoint, slope)</li>
          <li>Transformations (translations, rotations, reflections, dilations)</li>
          <li>Area & volume of shapes</li>
        </ul>

        <h3>Trigonometry</h3>
        <ul>
          <li>Trigonometric ratios (sine, cosine, tangent)</li>
          <li>Pythagoras’ theorem</li>
          <li>Trigonometric identities</li>
          <li>Graphs of trigonometric functions</li>
          <li>Applications (angles of elevation & depression, bearings)</li>
        </ul>

        <h3>Probability & Statistics</h3>
        <ul>
          <li>Probability rules (independent & dependent events)</li>
          <li>Counting principles (permutations & combinations)</li>
          <li>Mean, median, mode, range, variance, standard deviation</li>
          <li>Data representation (histograms, box plots, scatter plots)</li>
        </ul>

        <h3>Calculus</h3>
        <ul>
          <li>Limits & continuity</li>
          <li>Differentiation (basic rules, applications to slopes and optimization)</li>
          <li>Integration (area under a curve, basic antiderivatives)</li>
        </ul>
      </section>

      <section>
        <h2>📝 Study Tips</h2>
        <ul>
          <li>Break down your study sessions into topic-based blocks</li>
          <li>Use flashcards for formulas and theorems</li>
          <li>Practice with past exam papers</li>
          <li>Explain problems aloud as if teaching someone else</li>
          <li>Do a mix of easy and challenging problems</li>
        </ul>
      </section>

      <section>
        <h2>🎯 Practice Quiz</h2>
        <ol>
          <li>Solve for <strong>x</strong>: 2x² − 5x − 3 = 0</li>
          <li>Find the equation of the line passing through (2, 3) with slope m = -2</li>
          <li>A circle has a radius of 5 cm. Find its area and circumference</li>
          <li>If sin(θ) = 0.6, find cos(θ) (assume θ is acute)</li>
          <li>A bag has 3 red, 4 blue, and 5 green balls. What is the probability it is <strong>not</strong> green?</li>
        </ol>
      </section>
    </div>
  );
};

export default Mathematics;

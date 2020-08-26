import React from "react";

const prelab_assignment = () => <h2> N/A </h2>;
const background = () => <h2> N/A </h2>;

const procedure = () => {
  const procedure_1 = () => <h2> N/A </h2>;
  const procedureArray = [procedure_1()];
  return procedureArray;
};

const results = () => <h2> N/A </h2>;
const study_questions = () => <h2> N/A </h2>;
const discussion = () => <h2> N/A </h2>;
const waste_disposal = () => (
  <div>
    <p>
      <em>Note</em>: No in-person laboratory work in Fall 2020.{" "}
    </p>
  </div>
);

const Experiment_22 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal()
};

export default Experiment_22;

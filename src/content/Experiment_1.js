import React from "react";


const prelab_assignment = () => (<h2> pre_lab assignment </h2>);
const background = () => (<h2> background </h2>);
const results = () => (<h2> results  </h2>);
const study_questions = () => (<h2> study_questions </h2>);
const discussion = () => (<h2> discussion </h2>);
const waste_disposal = () => (<h2> waste_disposal </h2>);

const procedure = () => {
  const procedure_1 = () => (
    <div> 
      Procedure 1
    </div>
  )

  const procedure_2 = () => (
    <div> 
      Procedure 2
    </div>
  )

  const procedureArray = [procedure_1(), procedure_2()]
  return procedureArray

}


const Experiment_1 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal()
};



export default Experiment_1
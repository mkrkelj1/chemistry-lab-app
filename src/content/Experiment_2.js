import React from "react";

const prelab_assignment = () => (<div><h4>Please Watch the following videos:</h4>
     <p>
       <ul>
          <li key="2"><a href="https://www.youtube.com/embed/TH45oeLtoC0">Use of a Balance</a></li>
           <li key="6"><a href="https://www.youtube.com/embed/L3n2F4L2u1A">Vacuum Filtration</a></li>
            <li key="7"><a href="https://www.youtube.com/embed/cbt3Xod63ug">Rotovap</a></li>
       </ul>
     </p>
     </div>
 );
const background = () => (<h2> N/A </h2>);

const procedure = () => {
  const procedure_1 = () => (
    <div>
      N/A
    </div>
  );
  const procedureArray = [procedure_1()];
  return procedureArray;
};

const results = () => (<h2> N/A  </h2>);
const study_questions = () => (<h2> N/A </h2>);
const discussion = () => (<h2> N/A </h2>);
const waste_disposal = () => (<h2> N/A </h2>);



const Experiment_2 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal()
};



export default Experiment_2
import React from "react";

const prelab_assignment = () => (
  <div>
    <h4>Please Watch the following videos:</h4>
    <p>
      <ul>
        <li key="2">
          <a href="https://www.youtube.com/embed/TH45oeLtoC0">
            Use of a Balance
          </a>
        </li>
        <li key="6">
          <a href="https://www.youtube.com/embed/L3n2F4L2u1A">
            Vacuum Filtration
          </a>
        </li>
        <li key="7">
          <a href="https://www.youtube.com/embed/cbt3Xod63ug">Rotovap</a>
        </li>
      </ul>
    </p>
  </div>
);
const background = () => <h2> N/A </h2>;

const procedure = () => {
  const procedure_1 = () => <div>N/A</div>;
  const procedureArray = [procedure_1()];
  return procedureArray;
};

const results = () => <h2> N/A </h2>;
const study_questions = () => <h2> N/A </h2>;
const discussion = () => <h2> N/A </h2>;
const waste_disposal = () => (
  <div>
    

    <p>
      <strong>ROTOVAP practice:</strong>
    </p>

    <ol>
      <li>
        The 100 mL RBF containing solid ferrocene can be dissolved in a minimum
        amount of acetone. This solution must be poured into the labeled plastic
        waste bottle that is located in your hood. (Please read the label.)
      </li>
      <li>
        The RBF (now without ferrocene) can be rinsed with a minimum amount of
        acetone. This rinsing must also be poured into the labeled plastic waste
        bottle that is located in your hood (as in step 1)
      </li>

      <li>
        In the regular sink, wash this RBF with detergent and water, and then
        rinse it with distilled water. These washings can go down the drain.
      </li>
    </ol>

    <p>
      <strong>VACUUM FILTRATION practice:</strong>
    </p>

    <ol>
      <li>
        Filter Paper, sand, and the plastic pipette can be placed in regular
        trash cans.
      </li>
      <li>
        The water filtrate collected in the filter flask can be poured into the
        sinks.
      </li>

      <li>Ice can be discarded in the regular sink.</li>

      <li>
        Wash everything you used for this part with detergent and water in the
        regular sink, and then rinse it with distilled water. These washings can
        go down the drain.
      </li>
    </ol>

    <p>
      <strong>COMMUNAL ITEMS</strong>
    </p>

    <ol>
      <li>
        The Erlenmeyer flask that contained sand and water needs to be returned
        to the “center island”.
      </li>
      <li>Place the clamps and clamp fasteners in the bins they belong.</li>

      <li>
        Your cleaned glassware can be returned to your drawer and cabinet.
      </li>
    </ol>
  </div>
);

const Experiment_2 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal()
};

export default Experiment_2;

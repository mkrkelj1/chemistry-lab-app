import React from "react";

const cache = {};
function importAll(r) {
  r.keys().forEach(key => (cache[key] = r(key)));
}
importAll(require.context("../assets/images/", false, /\.png$/));



const prelab_assignment = () => (
  <div>
    <p>
      In your notebook, prepare a Table of Physical Constants for bromine,
      methylene chloride (dichloromethane), dimethyl fumarate, dimethyl maleate,
      ethyl acetate, and <i>n</i>-hexane.
    </p>
  </div>
);

const background = () => (
  <div>
    <p>
      Isomerization of dimethyl maleate to dimethyl fumarate is done using Br
      <sub>2</sub> in methylene chloride (CH<sub>2</sub>Cl<sub>2</sub>), in the
      presence of light, and this reaction is monitored by Thin Layer
      Chromatography.
    </p>
    <img src={cache["./Isomerization_SchemeOverview.png"]} alt="Scheme Overview" />
    <p>The reaction proceeds according to the following mechanism:</p>
    <img src={cache["./Isomerization_SchemeBreakdown.png"]} alt="Scheme Breakdown" />
  </div>
);


const results = () => <div> ToDo </div>;

const study_questions = () => <div> ToDo </div>;

const discussion = () => (
  <div>
    <ol>
      <li>
        According to your R
        <sub>
          <i>f</i>
        </sub>
        values, which compound, dimethyl fumarate or dimethyl maleate, is more
        polar? Does the structure support this argument? Explain.
      </li>
      <li>
        Which of the two isomers, <i>cis</i> or <i>trans</i> form (dimethyl
        maleate or dimethyl fumarate), is more stable? Why?
      </li>
      <li>
        Suggest another experimental method to identify dimethyl fumarate. How
        would this method indicate the purity of the product?
      </li>
    </ol>
  </div>
);

const waste_disposal = () => (
  <div>
    <ol>
      <li>
        Dispose of eluting solvent from the TLC jars in the Non-Halogenated
        Waste container. Leave the TLC jars open in your hood.
      </li>
      <li>Discard the filtrate in the Halogenated Waste container.</li>
      <li>
        Discard the dimethyl fumarate crystals in the Solid Waste container.
      </li>
    </ol>
  </div>
);


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


const Experiment_7 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal()
};

export default Experiment_7;

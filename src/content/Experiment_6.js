import React from "react";

const cache = {};
function importAll(r) {
  r.keys().forEach(key => (cache[key] = r(key)));
}
importAll(require.context("../assets/images/", false, /\.png$/));




const prelab_assignment = () => (
  <div>
    <p>
      In your notebook, prepare a Table of Physical Constants for n-hexane,
      dichloromethane, ethyl acetate, ferrocene, and acetyl ferrocene.
    </p>
  </div>
);

const background = () => (
  <div>
    <p>
      In the TLC experiment, you gained some experience with chromatography. As
      you may have noticed, TLC is a rapid, easy method for separating mixtures
      of compounds. However, it is limited to small samples (only a few
      milligrams). To handle larger amounts of material, more adsorbant is
      needed. One common approach to larger scale separations is column
      chromatography, where the adsorbant (usually silica gel or alumina) is
      packed into a tube and a continuous flow of solvent (eluant) is passed
      through the adsorbant. As with TLC, the different compounds in the sample
      are carried along, going back and forth between solvent and adsorbant. The
      relative rates of these movements are dependent upon the relative
      strengths of the attraction of these compounds to the adsorbant and upon
      their solubilities in the eluant. With a polar adsorbant, the more polar
      compounds in the sample will be held more tightly to the stationary phase
      and move more slowly down the column. Therefore, when the same adsorbant
      and solvent system are used in both, TLC and column chromatography will
      yield the same order of elution for a given series of compounds. So, as
      described in Most, TLC is a valuable tool for rapidly devising appropriate
      solvent systems for column chromatography separations.
    </p>
    <p>
      Unlike TLC, column chromatography is not limited to only one solvent
      system for a given separation. Since the solvent is continuously supplied
      at the top of the column, it is possible to change the eluting solvent at
      any point in the separation. This advantage allows us to separate complex
      mixtures containing compounds of widely varying polarity. For separations
      of such samples, the column is prepared in a relatively non-polar solvent.
      As the less polar components are eluted from the column, the polarity of
      the solvent can be progressively increased, thus allowing selective
      removal of compounds in order of increasing polarity.
    </p>
    <p>
      In addition to this versatility for separating complex mixtures, column
      chromatography has the advantage that it can be used for preparative scale
      separations and purification, while TLC is usually limited to analytical
      procedures. The amount of material to be separated can be varied from
      milligrams to kilograms by increasing the size of the column and the
      amount of adsorbant. For convenience and economy, the separation of a
      mixture of ferrocene and acetyl ferrocene in our experiment will be done
      on a semi-micro scale.
    </p>
  </div>
);

const results = () => (
  <div>
    <p>Calculate the total % recovery, as in Experiment 3.</p>{" "}
  </div>
);

const study_questions = () => (
  <div>
    <p>
      The R<sub>f</sub> values of three compounds on TLC plates developed with
      10:1 hexane:acetone are (A) 0.33, (B) 0.91, and (C) 0.54. What would be
      their order of elution from an alumina column which is eluted with 10:1
      hexane:acetone (i.e., which would elute first, second and third)? Explain
      your reasoning. What difference if any would be seen if the compounds were
      eluted from the column with 7:1 hexane:acetone? Explain.
    </p>
  </div>
);

const discussion = () => (
  <div>
    <ol>
      <li>
        Which of your fractions contained ferrocene? Which contained acetyl
        ferrocene? Explain, using your data.
      </li>
      <li>
        Did you isolate pure samples of ferrocene and acetyl ferrocene? What is
        your evidence?
      </li>
      <li>
        Which of the two compounds is more polar? Explain. (Give evidence from
        this experiment and from the structures.)
      </li>
      <li>
        If the column in this experiment had been packed and eluted with
        dichloromethane instead of hexane, which of the compounds would have
        been eluted first? Explain.
      </li>
      <li>
        Comment on % recovery, agreement of the experimental results to theory,
        etc. etc. (Please keep it brief!)
      </li>
    </ol>
  </div>
);

const waste_disposal = () => <div> ToDo </div>;

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

const Experiment_6 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal()
};

export default Experiment_6;

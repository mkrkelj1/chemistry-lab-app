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
    <img
      src={cache["./Isomerization_SchemeOverview.png"]}
      alt="Scheme Overview"
      width="75%"
    />
    <p>The reaction proceeds according to the following mechanism:</p>
    <img
      src={cache["./Isomerization_SchemeBreakdown.png"]}
      alt="Scheme Breakdown"
      width="80%"
    />
  </div>
);

const results = () => <div> N/A </div>;

const study_questions = () => (
  <div>
    <ol>
      <li>
        According to your R<sub>f</sub> values, which compound, dimethyl
        fumarate or dimethyl maleate, is more polar? Does the structure support
        this argument? Explain.
      </li>

      <li>
        Which of the two isomers, cis or trans form (dimethyl maleate or
        dimethyl fumarate), is more stable? Why?
      </li>

      <li>
        Suggest another experimental method to identify dimethyl fumarate. How
        would this method indicate the purity of the product?
      </li>
    </ol>
  </div>
);

const discussion = () => (
  <div>
    <p>Follow the procedure for writing a discussion outlined on page 8.</p>
    <p>Page 8, for reference:</p>
    <p>
      <strong>Discussion:</strong> In the Discussion section, provide a bit of
      background on your motivation for undertaking the experiment. Also provide
      some details on how well the experiment worked, and discuss mechanistic
      issues if you think it appropriate. If you wish to give an overview of how
      you made structural assignments, this is a good place to do it. However,
      you do not need to get into all the gory details; just provide the
      highlights. A paragraph or two is usually enough for the entire Discussion
      section. The main points that should be included are given for each
      experiment in the lab manual.
    </p>
  </div>
);

const waste_disposal = () => (
  <div>
    <ol>
      <li>TLC</li>

      <ol>
        <li>
          Dispose of eluting solvent from the TLC jars in the waste container in
          your hood.
        </li>
        <li>
          Discard the TLC plates in the solid waste container in the waste hood.
        </li>
        <li>Leave the TLC jars open in your hood.</li>
      </ol>

      <li>Discard the filtrate in the waste container in your hood.</li>

      <li>
        Discard the dimethyl fumarate crystals in the solid waste container in
        the waste hood.
      </li>

      <li>Discard the used capillary tubes in the broken glass container.</li>
    </ol>

    <strong>Leave the waste bottle in your hood at the end of the day.</strong>
  </div>
);

const procedure = () => {
  const procedure_1 = () => (
    <div>
      <p>
        <b>General Procedures: Application of Sample</b>
      </p>

      <p>
        Review application of sample on TLC plate, vacuum filtration, and
        melting point determination from the previous experiments.
      </p>
      <p>
        Follow the TLC plate diagram given below for applying your spots and
        monitoring the reaction.
      </p>

      <img
        src={cache["./Isomerization_TLCPlate.png"]}
        alt="TLC Plate"
        width="90%"
      />

      <p>
        <strong>Precautions:</strong> Bromine in concentrated form is highly
        corrosive. When it is diluted, as in this experiment, it is less harmful
        but must be still handled with care. If you spill bromine-methylene
        chloride solution, inform your instructor immediately. Please wear
        gloves when handling this reagent. Avoid inhaling vapors.
      </p>
      <p>
        <strong>
          ALWAYS PERFORM THE REACTIONS USING THE BROMINE SOLUTION INSIDE THE
          HOOD.
        </strong>
      </p>
    </div>
  );

  const procedure_2 = () => (
    <div>
      <p>
        <strong>Experimental Procedure</strong>
      </p>

      <table border="1">
        <tr>
          <th>Experimental Procedure</th>
          <th>Safety Precautions</th>
        </tr>

        <tr>
          <td width="60%">
            Spot the dimethyl fumarate standard solution on the TLC plate above
            the “std” mark.
          </td>

          <td>
            <p>Wear lab coat, googles, and gloves while in lab.</p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Dissolve 1 mL of dimethyl maleate in 3 mL of methylene chloride in a
            25 mL Erlenmeyer flask.
          </td>

          <td>
            <p>
              Avoid exposure to and inhalation of solvent fumes. Complete all
              work in your hood.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Apply a spot of the dimethyl maleate starting solution on the TLC
            plate above the “0” mark. Stopper the flask with a rubber stopper
            and make sure the fit is tight.
          </td>

          <td>
            <p>
              Be sure to keep the developing jar capped when not in use. Use
              tweezers when handling your TLC plate.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Note the time and start the reaction by adding 10 drops of the 10%
            Br<sub>2</sub>/CH<sub>2</sub>Cl<sub>2</sub> solution to the dimethyl
            maleate solution in the Erlenmeyer flask. Stopper immediately and
            swirl the flask. After two minutes have elapsed, spot the reaction
            mixture above the “2” mark on the TLC plate.
          </td>

          <td>
            <p>
              Avoid inhalation and exposure to solvents. Complete all work with
              solvents in your hood.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Spot the reaction mixture again at 5 minutes and 20 minutes after
            starting time. IFTHE REACTION MIXTURE DECOLORIZES DURING THE
            REACTION PERIOD, ADD A FEW EXTRA DROPS OF 10% Br<sub>2</sub>/CH
            <sub>2</sub>Cl<sub>2</sub> SOLUTION.
          </td>

          <td>
            <p>
              Avoid inhalation and exposure to solvents. Complete all work with
              solvents in your hood.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            After 20 minutes, quench the reaction by cooling the reaction
            mixture in the flask in an ice bath for at least 10-15 minutes
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Add ice-cold hexane drop-wise to the mixture with swirling until
            crystal formation is complete. Cool for an additional 5-10 minutes
            in the ice bath after all the hexane is added.
          </td>

          <td>
            <p>
              Hexane is volatile. Avoid inhalation of and exposure to fumes.
              Complete all work in your hood.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Collect the crystals by vacuum filtration. Wash the crystals with
            ice-cold hexane.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Make a solution of the crystals by dissolving a micro-spatula tipful
            of the crystals in 1 mL of CH<sub>2</sub>Cl<sub>2</sub> in a test
            tube. Spot this solution corresponding to the “C” mark on your TLC
            plate. (There will be 6 spots on the plate: std, 0, 2, 5, 20, C.)
            Develop the TLC plate using 3:1 Hexane/Ethyl acetate mixture.
          </td>

          <td>
            <p>
              Hexane is volatile. Avoid inhalation of and exposure to fumes.
              Complete all work in your hood.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Observe the plate under Ultraviolet (UV) lamp. Circle ALL the spots
            you observe and indicate the intensities of the spots by shading
            appropriately. Calculate the R<sub>f</sub> values.
          </td>

          <td>
            <p>
              Hexane is volatile. Avoid inhalation of and exposure to fumes.
              Complete all work in your hood.
            </p>
          </td>
        </tr>
      </table>
    </div>
  );

  const procedureArray = [procedure_1(), procedure_2()];
  return procedureArray;
};

const Experiment_7 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal()
};

export default Experiment_7;

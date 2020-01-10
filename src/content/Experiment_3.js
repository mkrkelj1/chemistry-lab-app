import React from "react";

const cache = {};
function importAll(r) {
  r.keys().forEach(key => (cache[key] = r(key)));
}
importAll(require.context("../assets/images/", false, /\.png$/));

const prelab_assignment = () => (
  <div>
    <ol>
      <li>
        Prepare a Table of Physical Constants in your lab notebook listing
        structures, formulae, and molecular weights for each of the following
        and boiling points of solvents and melting points, and solubilities for
        the solutes. Include a legend for the abbreviations you use.
        <p style={{ marginLeft: 40 }}>
          Solvents: Acetone, Diethyl ether, Methanol, Toluene, Water
          <br /> Solutes: Trimyristin, Triphenylmethane
        </p>
      </li>

      <p>
        <li>
          Copy the table given on page 25 in the <b>Observations </b>
          section of your notebook, opposite the <b>Procedure </b>
          for the Solubility Tests.
        </li>
      </p>
    </ol>
  </div>
);

const background = () => (
  <div>
    <p>
      Nutmeg powder is a mixture of many essential oils and oleoresins. In this
      experiment, you will extract trimyristin from nutmeg powder and
      recrystallize trimyristin.
    </p>
    <p>
      Recrystallization is one of the most important purification techniques
      used in organic chemistry. Recrystallization is used to purify solids
      contaminated by relatively small amounts of solid impurities. Compounds
      having different solubilities at different temperatures can generally be
      recrystallized. For most compounds, the solubility increases as the
      temperature of the solvent increases. In practice, this means that a
      suitable solvent for recrystallization is one in which there is a large
      difference between the solubility of the compound in hot solvent compared
      with that in cold solvent. A compound which dissolves to form a saturated
      solution at or near the boiling point of a suitable solvent can be largely
      recovered since it will come out of the solvent, or recrystallize, when
      the solution is cooled. If the compound is impure, removal of insoluble
      impurities (by gravity filtration) is accomplished with the desired
      product dissolved in the hot solution. Other impurities remain largely
      dissolved even when the solution is cooled because they are more soluble
      and/or present in much smaller amounts than the desired product.
      Recrystallizations are designed, by proper use of solvents, to maximize
      the yield and purity, although the degree of recovery and quality often
      vary inversely.
    </p>
    <p>
      <b>Choice of a suitable solvent:</b>
    </p>
    <ol type="a">
      <li>The desired compound should be very soluble in the hot solvent.</li>
      <li>The desired compound is very insoluble in the cold solvent.</li>
      <li>
        The solvent should be easily removable (fairly volatile) from the
        desired product.
      </li>
    </ol>
    <p>
      <b>Choice of a solvent pair:</b>
    </p>
    <p>
      Sometimes no single solvent can fill the requirements of suitability. In
      such cases, two miscible solvents (solvent pair) can be combined to
      produce a suitable solvent. Criteria for solvents in a solvent pair are:
    </p>
    <ol type="a">
      <li>
        The desired compound will be relatively soluble in solvent #1 even when
        the solvent is cold.
      </li>
      <li>
        The compound will be relatively insoluble in solvent #2 even when the
        solvent is hot.
      </li>
      <li>Solvent #1 and solvent #2 must be miscible.</li>
    </ol>
    <p>
      A combination of two miscible solvents as described will often provide a
      solvent pair in which there is a large difference between the solubility
      of the compound in hot and cold solvent.
    </p>
    <p>
      <b>Solubility</b>
    </p>
    <p>
      The theory of solubility is simplistically described by the phrase “like
      dissolves like,” i.e., solutes tend to dissolve in solvents of similar, or
      like polarity. Some commonly used solvents for recrystallization are
      pentane, hexane, toluene, ethyl acetate, ethanol, methanol, and water.
    </p>
    <p>
      In this experiment, we will use acetone, diethyl ether, toluene, methanol,
      and water as solvents. Of these solvents, toluene is the least polar, and
      water is the most polar. The normal procedure for the purification of a
      compound by recrystallization is to predict its solubility on the basis of
      its structure and then to test its solubility in a variety of solvents.
      Once a suitable solvent is found, that compound can be recrystallized.
    </p>
    <p>
      <b>Theory of Extraction</b>
    </p>
    <p>
      The transfer of a solute from one phase to another is a very common
      technique in organic chemistry. It is called extraction, and it is also a
      common technique in everyday life. When you steep a tea bag in boiling
      water, add a bay leaf to a pot of soup, or wash a load of laundry, you are
      performing a solid/liquid extraction, in which a solution containing
      several components is mixed with a second, immiscible liquid, for the
      purpose of extracting one component of the solution into the second
      solvent.
    </p>
  </div>
);

const results = () => (
  <div>
    <ol>
      <li>
        Calculate the % Recovery of pure trimyristin based on the amount of
        crude trimyristin you obtained.
      </li>
      <li>
        2. Calculate the % Recovery of your crude trimyristin based on the total
        amount of trimyristin in your starting sample. Assume that the amount of
        trimyristin in nutmeg is 22% by weight.
      </li>
    </ol>
  </div>
);

const study_questions = () => (
  <div>
    <ol>
      <li>
        Given the solubility results shown in the table below, choose the most
        suitable solvent or solvent pair for recrystallizing each compound.
        Neither water nor ethanol is miscible with ligroine (mixed hexanes), and
        water does not mix with toluene.
      </li>
      <img
        src={cache["./TrimiristinExtraction_SolubilityTable_StudyQuestion.png"]}
        alt="Solubility Table"
      />
      <br />
      Please keep your answers to the following questions brief.
      <br />
      <li>
        If extracted crude trimyristin were a white crystalline solid, should
        Norite be used in the recrystallization? Explain.
      </li>
      <li>
        Why is some trimyristin lost each time it is washed with fresh cold
        solvent while in the Büchner funnel?
      </li>
      <li>
        If the melting point of purified trimyristin was determined before the
        sample was completely dry, what errors would most likely result?
        Explain.
      </li>
      <li>
        Naphthalene is an aromatic hydrocarbon with m.p. = 80 &#8451;. Is
        toluene likely to be a good solvent for recrystallization of
        naphthalene? (Hint: Find the structure of naphthalene, and the structure
        and boiling point of toluene.)
      </li>
    </ol>
  </div>
);

const discussion = () => (
  <div>
    <p>
      Draw your own conclusions about the results from all parts of this
      experiment. Some points to include are the purity of the trimyristin
      before and after recrystallization and percent recovery. Your discussion
      should also include a comment on the polarities of solutes and solvents
      used in this experiment.
    </p>
    <p>
      Be sure to include the melting point of your compound (experimental and
      literature values) as well as the percent recovery.
    </p>
  </div>
);
const waste_disposal = () => (
  <div>
    <p>
      <div class="a">
        <b>Week 1</b>
      </div>
    </p>
    <ol>
      <li>
        <u>Solubility Tests:</u>
        <br /> Discard the contents of the test tubes into the non-halogenated
        waste bottle in your hood. Rinse the test tubes with a few drops of
        acetone and discard these rinsings also into the same non-halogenated
        waste bottle.
      </li>
      <li>
        <u>Extraction of Trimyristin:</u>
        <br /> Discard the filter paper with nutmeg residue into the solid waste
        container in the waste hood. Discard any nutmeg residue left in the
        Erlenmeyer flask also into the same solid waste container in the waste
        hood.
        <br /> Rinse the funnel and the Erlenmeyer flask with a few drops of
        acetone and discard these rinsings into the non-halogenated waste bottle
        in your hood.
      </li>
    </ol>
  </div>
);

const procedure = () => {
  const procedure_1 = () => (
    <div>
      <p>
        <div class="a">
          <b>Week 1</b>
        </div>
      </p>

      <p>
        <b>Solubility Tests</b>
      </p>

      <p>
        Test the solubility of pure triphenylmethane in all three solvents. The
        solubility tests should be done side by side. Place about 20 mg of
        solute, the tip of a spatula full, in each of three test tubes (one for
        each solvent). Add about 1 mL of solvent to each test tube and grind the
        solute to subdivide the particles as much as possible. Observe and note
        the amount of solid, not yet drawing conclusions about solubility. Heat
        test tubes with stirring in a steam bath. Even very soluble compounds
        may take several minutes to dissolve; however, prolonged heating may
        result in evaporation of solvent. Take care to distinguish melting from
        dissolving; a solute with melting point below the temperature of the
        steam bath or boiling point of the solvent (see your Table of Physical
        Constants) may melt yet not dissolve, or melt first and then dissolve.
        Observe the amount of solid remaining, if any, in the hot solvent, and
        record your estimation of solubility in the table. Place the test tube
        in an ice bath and observe and note the amount of recrystallized
        product, if any.
      </p>
      <p>
        Refer to the structures of the solvents and solute to give a tentative
        prediction of the solubilities on the basis of polarity. This will help
        you develop a sense of lab work as you compare theoretical prediction
        with actual result. Remember, as you fill in the table, that the results
        are a matter of degree, judged more by correct trend than by actual
        number of ‘+’s and ‘-‘s. Record your Results in the Solubility Table in
        your notebook.
      </p>

      <p>
        Copy this Solubility Table in your <b>Observations</b>.
      </p>

      <img
        src={cache["./TrymiristinExtraction_solubilitytable.png"]}
        alt="Solubility Table"
      />

      <p>
        <u>Legend for observation:</u>
      </p>
      <p>
        <b>+++</b> soluble, all compound dissolved
        <br />
        <b>---</b> insoluble, no dissolution observed
        <br />
        <b>++</b> moderateble soluble, more than hald, but not all sample
        dissolved
        <br />
        <b>+</b> slightly soluble, less than half of the sample dissolved.
        <br />
        <b>Crystals</b> if crystals formed when cooled
      </p>
    </div>
  );

  const procedure_2 = () => <div>Procedure 2</div>;

  const procedureArray = [procedure_1(), procedure_2()];
  return procedureArray;
};



const Experiment_3 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal(),
};

export default Experiment_3;
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
          <br />
          <strong>Solvents:</strong> Acetone, Diethyl ether, Methanol, Toluene,
          Water
          <br />
          <strong>Solutes:</strong> Trimyristin, Triphenylmethane
        </p>
      </li>

      <p>
        <li>
          Copy the table given on page 27 in the <b>Observations </b>
          section of your notebook, opposite the <b>Procedure </b>
          for the Solubility Tests.
        </li>
        <br />
        <strong>Table on page 27, for reference:</strong>
        <img
          src={cache["./TrymiristinExtraction_solubilitytable.png"]}
          alt="Solubility Table"
          width="90%"
        />
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
        Calculate the % Recovery of your crude trimyristin based on the total
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
        width="90%"
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
    <strong>Leave the waste bottle in your hood at the end of the day.</strong>
  </div>
);

const procedure = () => {
  const procedure_1 = () => (
    <div>
      <p>
        <b>Recrystallization of Trimyristin</b>
      </p>

      <table border="1">
        <tr>
          <th>Experimental Procedure</th>
          <th>Safety Precautions</th>
        </tr>

        <tr>
          <td width="60%">
            On a steam bath, heat 20mL of solvent (acetone) in a 125 mL
            Erlenmeyer flask. Add a boiling chip to the RBF containing crude
            trimyristin. (Boiling chips should never be added to a hot
            solution). Add 7 mL of warm solvent to the RBF.
          </td>

          <td>
            <p>
              The steam bath will be very hot, try not to touch the steam bath
              without wearing oven mitts.
            </p>
            <p>
              Solvent (acetone) is volatile. Avoid inhaling fumes and complete
              all work in the hood.
            </p>
            <p>
              Be sure to add a boiling chip to the RBF containing the crude
              product before heating.
            </p>
          </td>
        </tr>

        <tr>
          <td>
            Bring the mixture to boiling on the steam bath, and swirl
            occasionally. Add additional solvent, 1 mL at a time, until solid is
            completely dissolved. Use only minimum volume of hot solvent
            necessary to dissolve the crude product.
          </td>

          <td>
            <p>The RBF will be hot. Use tongs to handle and swirl the flask.</p>
            <p>
              Hot solvent is very volatile. Be careful when handling and avoid
              inhaling fumes. Be sure to complete all work inside your hood.
            </p>
          </td>
        </tr>

        <tr>
          <td>
            Add an extra 2mL of solvent to the RBF to avoid premature
            crystallization. Transfer this hot solution into a 100 or 150 mL
            beaker.
          </td>

          <td>
            <p>
              Be careful while heating the solution on the steam bath. Use tongs
              to hold the flask above the steam.
            </p>
          </td>
        </tr>

        <tr>
          <td colspan="2">
            <strong>
              The following procedure must be done quickly and efficiently, so
              that glassware stays hot and the loss of solvent by evaporation is
              kept to a minimum.
            </strong>
          </td>
        </tr>

        <tr>
          <td>
            When the flask is “emptied,” rinse it with two 5 mL portions of hot
            solvent. Transfer each rinse to the same beaker. Keep this beaker on
            the steam bath and bring it to a gentle boil.
          </td>
          <td></td>
        </tr>

        <tr>
          <td>
            <p>
            When the solution comes to a gentle boil, remove the beaker from the
            steam bath. Carefully set the solution aside and allow it to
            recrystallize until it cools to <strong>room temperature</strong>.
            Then, cool it in an ice bath for 10 minutes. While the solution is
            cooling, set up the vacuum filtration apparatus. Also, cool about 10
            mL of fresh solvent in a small beaker in an ice bath (to be used in
            the next step).
            </p>
      
            <p><strong><a href="https://www.youtube.com/embed/L3n2F4L2u1A">Vacuum Filtration Example</a></strong></p>

          </td>

          <td>
            <p>
              The beaker may be very hot. Use tongs to handle the beaker after
              heating.
            </p>

            <p>
              Make sure to clamp the filtration flask to a ring stand before
              attaching the vacuum line.
            </p>

            <p>
              Do not pace the Büchner funnel until you are really ready to
              filter.
            </p>
          </td>
        </tr>

        <tr>
          <td>
            Scrape the crystals off the walls of the beaker, swirl the beaker,
            and slowly pour the mixture into the Büchner funnel. As soon as the
            bulk of the liquid has been sucked through, disconnect the suction
            hose. Use a small amount of ice-cold solvent to aid in completing
            the transfer of recrystallized trimyristin to the Büchner funnel.
            Wash the product. With the suction off, cover the surface of the
            crystals with a minimum volume of ice-cold fresh solvent.
            Immediately turn the suction on. Repeat, if necessary, keeping in
            mind that some trimyristin is lost with each wash. Pour all
            filtrates into the designated waste container.
          </td>

          <td>
            <p>
              Solvent is volatile. Be careful when handling and avoid inhaling
              fumes.
            </p>
          </td>
        </tr>
      </table>
    </div>
  );

   const procedure_2 = () => (
    <div>
      <p>
        <b>Melting Points and Weight of Product</b>
      </p>

      <table border="1">
        <tr>
          <th>Experimental Procedure</th>
          <th>Safety Precautions</th>
        </tr>

        <tr>
          <td width="60%">
            Weigh an empty vial, transfer the purified trimyristin, and reweigh. Record the weights.
          </td>

          <td>
           
          </td>
        </tr>

        <tr>
          <td>
          Determine the melting points of recrystallized trimyristin and the original crude trimyristin side by side, and record the values.



       <br/>

<p><strong><a href="https://www.youtube.com/embed/uIYs844G70A">Melting Point Sample Prep</a></strong></p>


<p><strong><a href="https://www.youtube.com/embed/WutSDIYzk4Q">Use of Digimelt</a></strong></p>




          </td>

          <td>
            <p>Melting point capillaries will be hot. Be careful when removing them from the melting point apparatus</p>
           
          </td>
        </tr>

        <tr>
          <td>
           Label the vial with your name, the identity of contents, i.e., “Purified Trimyristin,” lab day, weight of product, % recovery from nutmeg, and melting point of contents.
          </td>

          <td>
           
          </td>
        </tr>

        <tr>
          <td >
            Place the vial containing the recrystallized product in the box for your lab day on the front desk.
          </td>

          <td>
           
          </td>
        </tr>
      </table>
    </div>
  );
   
  const procedureArray = [procedure_1(), procedure_2()];
  return procedureArray;
};

const Experiment_4 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal()
};

export default Experiment_4;

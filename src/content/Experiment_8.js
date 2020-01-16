import React from "react";

const cache = {};
function importAll(r) {
  r.keys().forEach(key => (cache[key] = r(key)));
}
importAll(require.context("../assets/images/", false, /\.png$/));

const prelab_assignment = () => (
  <div>
    <p>
      In your notebook, prepare a Table of Physical Constants for benzoic acid,
      2-chlorobenzoic acid, salicylic acid (2-hydroxybenzoic acid), naphthalene,
      1,4-dimethoxybenzene (hydroquinone dimethyl ether), 1,4-dichlorobenzene,
      ethyl acetate, and water.
    </p>
  </div>
);

const background = () => (
  <div>
    <ol>
      <li>
        <b>Theory of Extraction</b>
      </li>
      <p>
        The transfer of a solute from one phase to another is a very common
        technique in organic chemistry. It is called extraction, and it is also
        a common technique in everyday life. When you steep a tea bag in boiling
        water, add a bay leaf to a pot of soup, or wash a load of laundry, you
        are performing a solid/liquid extraction, in which a solution containing
        several components is mixed with a second, immiscible liquid, for the
        purpose of extracting one component of the solution into the second
        solvent.
      </p>
      <p>
        We have seen that recrystallization is used to purify solids that are
        contaminated by relatively small amounts of impurities. By contrast, the
        technique of extraction is a more “coarse” or preliminary technique, in
        that it can be used to separate one compound from another or from large
        amounts of impurities.
      </p>
      <p>
        Most <u>uncharged</u> organic molecules are more soluble in organic
        solvents than in water. If the organic solvent itself is not very
        soluble in water, then when the solvent or one of its solutions is mixed
        with water, two layers will form, and the solvents are said to be{" "}
        <u>immiscible</u>. The layers are called the <u>organic layer</u> and
        the <u>aqueous layer</u>. If the two layers are shaken together, small
        amounts of the components of the organic layer will dissolve in (or be
        extracted into) the aqueous layer, and small amounts of the aqueous
        layer components will dissolve (be extracted into) the organic layer,
        establishing equilibrium between the two layers. Thus, if a neutral
        compound C is initially dissolved in one layer (phase), it will be
        distributed, or “partitioned,” between the two layers at equilibrium.
        The distribution is expressed quantitatively in terms of the
        coefficient, <b>K</b>. Ideally, the distribution coefficient of compound
        C is equal to the ratio of the individual solubilities of C in pure
        solvent, <b>S</b>, and in pure water, <b>W</b>.
      </p>
      <img
        src={cache["./Extractionof2Unknowns_K.png"]}
        alt="K Equation"
        width="90%"
      />

      <p>
        For extraction of solute from solvent A into solvent B with a given
        volume of solvent B, several extractions each with small portions of
        solvent B are more efficient than a single extraction with the total
        volume of solvent B.
      </p>
      <p>
        If several different solutes (P, Q, R) are dissolved in an organic
        solvent, then shaking the solution with water will extract small amounts
        of each into the aqueous layer, but not allow for a clean separation of
        any one compound. However, if during the shaking we can run a reaction
        which converts one of the solutes, P, into a product which is more
        soluble in water than in the organic solvent (i.e., by converting it
        into a charged ionic species, such as a conjugate base or conjugate
        acid), the product will dissolve extensively in the aqueous layer and
        thus can be separated from the other organic solutes. Now, if the
        reaction can be reversed in the separated aqueous layer, we can recover
        the original compound, P, separated from the other solutes, Q, and R.
        Such a procedure is possible when the mixture contains an organic acid
        (and/or base) that can be selectively converted to charged products
        (salts).
      </p>
      <li>
        <p>
          <b>Acids and Bases in Organic Chemistry</b>
        </p>
      </li>
      <p>
        <b>Acids:</b>
        <br />
        RCOOH and ArCOOH (carboxylic acids)
        <br />
        ArOH (phenols), RSO<sub>3</sub>H (sulfonic acids)
      </p>
      <p>
        <b>Bases:</b>
        <br />
        RNH<sub>2</sub> (amines), ArNH<sub>2</sub> (anilines)
      </p>
      <p>
        The symbol R represents any alkyl group, such as CH<sub>3</sub>, C
        <sub>2</sub>H<sub>5</sub>, etc. For an aromatic compound, such as C
        <sub>6</sub>H<sub>6</sub> (benzene), the symbol Ar is used. Organic
        acids and bases react in the same way as inorganic acids and bases, as
        can be shown by the following reaction schemes. However, organic acids
        and bases are usually weaker.
      </p>
      <img
        src={cache["./Extractionof2Unknowns_AcidBaseChart.png"]}
        alt="Acid-Base Chart"
        width="70%"
      />

      <p>
        Of the three organic acid groups listed above, the sulfonic acids are
        the strongest, followed by the carboxylic acids, and then the phenols.
        The sulfonic acids, R-SO<sub>3</sub>H, where –SO<sub>3</sub>H is the
        sulfonic acid group and R is the rest of the molecule, are strong acids,
        close in strength to sulfuric acid. The carboxylic acids, R-COOH, have
        the carboxyl group –COOH, with a pK
        <sub>
          <i>a</i>
        </sub>
        of 4 to 7, depending on the rest of the molecule. The phenol group, in
        which –OH is attached to a benzene ring, is the weakest of the common
        organic acid groups, with a pK
        <sub>
          <i>a</i>
        </sub>
        of around 10.
      </p>
      <p>
        Because the hydroxide ion (OH-) is a strong base, it will deprotonate
        both type of acids, both the weak carboxylic acid and the very weak
        phenol. Deprotonation produces the conjugate bases, the carboxylate ion
        (R-COO-) and the phenoxide ion (Ar-O-).
      </p>
      <p>
        Bicarbonate ion (HCO<sub>3</sub>-) is a weak base. It is strong enough
        to deprotonate the carboxyl group but not the phenol group. Since most
        ions are soluble in water, deprotonation of these acids is a way of
        making them water-soluble. Extraction of an ether solution of benzoic
        acid and naphthalene with aqueous sodium hydroxide will separate these
        compounds by drawing the benzoic acid, as its conjugate base, into the
        aqueous phase. This is the principle behind this week’s experiment.
      </p>
      <li>
        <b>Flow Diagrams</b>
      </li>
      <p>
        Procedures for the separation and purification of components of complex
        mixtures are commonly summarized by <u>flow diagrams</u>, in which each
        box represents a phase (solid, liquid, or vapor) or container, and
        connecting arrows represent operations (filter, extract, boil) or
        addition of reagents. The name of the phase or container is written
        above each box, and symbols, formulas, etc., for all of the components
        of the phase are written inside each box. Operations and/or reagents are
        written under or next to appropriate arrows. Separation of phases is
        shown by a split in the arrow, leading to two boxes. See the sample flow
        diagram below:
      </p>

      <img
        src={cache["./Extraction_Flow_Diagram.png"]}
        alt="Sample Calculations"
        width="100%"
      />
    </ol>
  </div>
);

const results = () => (
  <div>
    <ol>
      <li>
        Calculate total % recovery.
        <p>Total % recovery = % A + % B</p>
        <img
          src={cache["./Extractionof2Unknowns_StudyQuestions_2.png"]}
          alt="Sample Calculations"
          width="60%"
        />
      </li>
      <li>
        Draw a flow diagram for the extraction and separation you performed on
        your unknown mixture. (See the sample flow diagram on next page).
      </li>
    </ol>
  </div>
);

const study_questions = () => (
  <div>
    <ol>
      <li>
        Give the names and structures of two functional groups in organic
        chemistry that are acidic.
      </li>
      <li>
        A mixture contains the following three compounds:
        <img
          src={cache["./Extractionsof2Unknowns_StudyQuestions.png"]}
          alt="Three Compounds"
          width="60%"
        />
        <p>
          An ether solution of this mixture is extracted with sodium bicarbonate
          solution to form aqueous layer A and organic layer B. The organic
          layer B is then extracted with sodium hydroxide solution to form
          aqueous layer C and organic layer D. Both solutions A and C are
          separately treated with hydrochloric acid to give solutions E and F
          respectively. Give the structure(s) of the organic solute(s) present
          in A, B, C, D, E, and F.
        </p>
        <p>
          <b>Explain.</b> Include a flow diagram.
        </p>
      </li>
      <li>
        Suppose you do not know which layer in your separatory funnel is the
        aqueous layer, and you have no information about the density of the
        solvent, how could you determine which is the aqueous layer?
      </li>
    </ol>
  </div>
);

const discussion = () => (
  <div>
    <p>
      Be sure to discuss the role of the base in the extractions and how the
      components are separated. Include the experimental and literature melting
      point values and the % recovery of each component.
    </p>{" "}
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
        <u>Separatory funnel</u>
      </li>
      <ol type="I">
        <li>
          Rinse the separatory funnel and the stopper with acetone. Discard the
          acetone rinsings into the halogenated waste bottle.
        </li>
        <li>
          Wash with detergent and water, and then rinse with distilled water.
        </li>
        <li>Disassemble the stopcock assembly.</li>
        <li>
          Give separatory funnel, stopper, and the stopcock assembly parts to
          your instructor.
        </li>
      </ol>
      <li>
        <u>Sodium Sulfate, the Drying Reagent</u>
      </li>
      <ol type="I">
        <li>
          Transfer it into the waste container labeled “Non-Halogenated Solid
          Waste."
        </li>
        <li>
          Rinse the Erlenmeyer flask with acetone and transfer into the
          Halogenated waste bottle.
        </li>
        <li>
          Wash the Erlenmeyer flask with detergent and water. Then rinse it with
          distilled water.
        </li>
        <li>
          Discard filter paper into jar labeled filter paper from extraction
          experiment
        </li>
      </ol>
      <li>
        <u>Vial containing the Unknown sample</u>
      </li>
      <ol type="I">
        <li>Keep it in your drawer.</li>
      </ol>
      <li>
        <u>Glassware used only for inorganic reagents</u>
        <p>
          <b>DO NOT RINSE WITH ACETONE</b>
          <p>
            Wash with detergent and water. Then rinse it with distilled water.
          </p>
        </p>
      </li>
    </ol>
  </div>
);

const procedure = () => {
  const procedure_1 = () => (
    <div>
      <p>
        <b>General Procedures</b>
      </p>

      <p>
        <strong>Separatory Funnels</strong>
      </p>
      <p>
        In macroscale extractions, we use a separatory funnel to separate
        organic and aqueous layers.
      </p>
      <p>
        To fill a separatory funnel, one supports it in an iron ring attached to
        a ring stand. Before adding any liquid, <b>close the stopcock</b>. (It
        is closed when it is perpendicular to the separatory funnel, and open
        when parallel to it.) Just in case the stopcock may not be completely
        closed, or it may leak a little, make it a habit to always have a
        container, such as a beaker, under a separatory funnel. The two liquids
        are added through the top of the separatory funnel. To allow for mixing
        of the liquids, one-third to one-half of the separatory funnel should be
        empty. The stopper is replaced. To mix the liquids, first secure the
        stopper and invert the separatory funnel. Slowly open the stopcock to
        vent any built-up pressure. Do not point it at your face or at any other
        person. Then close the stopcock, hold the stopper firmly in, and shake
        the funnel gently, a few times. Pause, invert, and vent again. Then
        close the stopcock and shake some more, this time more vigorously. Open
        the stopcock to vent again. Repeat this a few times, with longer shaking
        intervals and harder shakes. Then replace the separatory funnel on the
        iron ring to allow the solutions to separate. The very narrow bottom is
        designed to allow a good separation of the two liquids.{" "}
      </p>
      <p>
        <u>Precautions:</u> In a closed separatory funnel, pressure can build up
        and blow out the stopper, unless the funnel is vented by inverting it
        and opening the stopcock while supporting the stopper firmly against the
        palm of your hand. Do this frequently.
      </p>
      <br />
      <p>
        <b>Layer Identification</b>
      </p>
      <p>
        A common problem is determining which layer one wants. Since we almost
        always have an aqueous layer and an organic layer, you first need to
        know which is which. Then you have to know which layer contains the
        solute that you want to keep. The key to the first question is to know
        the densities of the two solutions. This is one of the reasons that we
        make a Table of Physical Constants for each experiment. This Table will
        tell you the densities of the two solutions. Assigned readings also come
        in handy here. Knowing in which layer a desired compound is found comes
        from understanding the experiment and thinking about what you are doing.
      </p>
      <p>
        A good method to determine which layer is aqueous and which is organic
        is to withdraw a few drops of one layer with a dropper and add these
        drops to about 0.5 mL of water in a test tube. If the layer is organic,
        the drops will be visible as a second phase; if it is aqueous, a
        homogeneous solution will result.
      </p>
      <p>
        <u>Always label</u> and <u>save</u> both layers from any extraction
        until the end of the experiment.
      </p>
      <br />
      <p>
        <b>Drying the Extracts</b>
      </p>
      <p>
        After an aqueous extraction, organic solvents always contain some
        dissolved or suspended water, which should be removed before any
        dissolved compounds are isolated by solvent evaporation. This process is
        called “drying” the extracts. Drying requires two steps. As a first
        step, we perform one more extraction in each solution. We extract the
        water from the organic layer by shaking it with water that is saturated
        with sodium chloride, also called <b>brine</b>. This works because of an
        osmotic effect. In the second step, the last traces of water are removed
        from the organic layer with a drying agent, such as calcium chloride,
        magnesium sulfate, sodium sulfate, or molecular sieves in their
        anhydrous forms.
      </p>
      <p>
        The amount of drying agent to use is determined empirically, since the
        amount of water present is variable. In general, enough drying agent is
        added to just cover the bottom of a flask, which is about 1/3 to 1/2
        filled with the solution. The mixture is swirled and examined to be sure
        that some of the drying agent remains freely suspended in the liquid as
        it is swirled. If the entire drying agent sticks together, indicating
        saturation with water, more is added until swirling shows some loose
        material. Too large an excess of drying agent is to be avoided, since
        some dissolved material will be lost by adsorption on the surface of the
        drying agent.
      </p>
      <br />
      <p>
        <b>Recovery of Compounds</b>
      </p>
      <p>
        After the organic solutions have been dried, the drying agent is removed
        by gravity filtration, and the solvent is evaporated, to leave the now
        pure compound.
      </p>
    </div>
  );

  const procedure_2 = () => (
    <div>
      <p>
        <b>Experimental Procedures</b>
      </p>

      <p>
        In this experiment, you will be given an unknown that consists of a
        mixture of two components, an acid and a neutral compound, both solids.
        You will separate these compounds by an acid/base extraction. You will
        identify these compounds by their melting points.
      </p>

      <p>
        <strong>
          IMPORTANT! Save all layers in labeled containers until end of lab
          period!
        </strong>
      </p>

      <table border="1">
        <tr>
          <th>Experimental Procedure</th>
          <th>Safety Precautions</th>
        </tr>

        <tr>
          <td width="60%">
            a. Obtain a sample of an unknown mixture. Record the number of the
            vial.
          </td>

          <td>
            <p>Wear lab coat, googles, and gloves while in lab.</p>
          </td>
        </tr>

        <tr>
          <td width="60%">
          <p>
            b. Weigh the unknown mixture in the vial on an analytical balance.
            Transfer the contents of your vial to a 100 mL beaker. Weigh the
            empty vial.
            </p>

            <p><strong><a href="https://www.youtube.com/embed/TH45oeLtoC0">Use of Balance Example</a></strong></p>
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            c. Add 20 mL ethyl acetate to the beaker. Stir to dissolve the
            unknown mixture. Use a glass funnel to transfer the solution of
            unknown in ethyl acetate to a 125 mL separatory funnel on a ring.
            Rinse the beaker with two 10 mL portions of ethyl acetate, and add
            it to the separatory funnel.
          </td>

          <td>
            <p>
              Solvents are volatile, avoid exposure to and inhalation of fumes.
              Complete all work in your hood.
            </p>
          </td>
        </tr>
      </table>

      <br />
      <p>
        <strong>Neutral Component</strong>
      </p>

      <table border="1">
        <tr>
          <td width="60%">
            a. Add 10 mL aqueous 1.5 M NaOH and shake the separatory funnel.
            Withdraw the aqueous layer. Repeat with a second 10 mL portion of
            NaOH.
          </td>

          <td>
            <p>
              Bases are corrosive. Handle the sodium hydroxide carefully. Shake
              the separatory funnel carefully. Never point the tip towards you
              or your hood partner. The pressure build-up can cause gas/solution
              to spurt out. When shaking, make sure to invert the funnel and
              open the stopcock to release the pressure.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            b. Add 10 mL distilled water to the organic layer in the separatory
            funnel. Shake the separatory funnel well. Withdraw the aqueous
            layer. Aqueous layers from steps a and b may be combined in a beaker
            labeled “Aqueous Layer”. Save this for later extraction of the
            acidic component.
          </td>

          <td>
            <p>See separatory funnel warnings in step a.</p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            c.
            <ol>
              <li>
                Dry the organic layer in the separatory funnel by shaking with
                15 mL saturated NaCl solution (brine).
              </li>
              <li>Drain the lower aqueous layer and discard.</li>
            </ol>
          </td>

          <td>
            <p>See separatory funnel warnings in step a.</p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            d.
            <ol>
              <li>
                Drain the organic layer from the separatory funnel into a 125 mL
                Erlenmeyer flask.
              </li>
              <li>
                Add anhydrous Na<sub>2</sub>SO<sub>4</sub> drying agent until no
                more clumping is observed. Set the flask aside for several
                minutes with occasional swirling.

                <p><strong><a href="https://youtu.be/CFhbOIs-UMA">Drying Organic Chromatography</a></strong></p>
              </li>








              <li>
                Filter this through a fluted filter paper into a tared
                (pre-weighed) 250 mL round bottom flask. Rinse the Erlenmeyer
                flask with 3-5 mL of ethylacetate and pour this rinse onto the
                same filter.


<p><strong><a href="https://www.youtube.com/embed/T16YyNnohnU">Gravity Filtration Example</a></strong></p>

              </li>
            </ol>
          </td>

          <td>
            <p>Support the funnel on a ring clamped to a ring stand.</p>
            <p>
              Ethyl acetate is volatile. Be careful when handling. Avoid
              exposure to and inhalation of fume.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">


          <p>e. Remove the solvent using the RotoVap.</p>

<p><strong><a href="https://www.youtube.com/embed/cbt3Xod63ug">Rotovap Example</a></strong></p>

          </td>

          <td>
            <p></p>
          </td>
        </tr>
      </table>

      <br />
      <p>
        <strong>Acidic Component</strong>
      </p>

      <table border="1">
        <tr>
          <td width="60%">
            a. Add concentrated HCl dropwise to the beaker labeled “Aqueous
            Layer” from steps <b>a</b> and <b>b</b> on page 53 (from Neutral
            Component) until the solution is acidic to litmus. Then add a few
            drops of acid in excess. Check for complete precipitation
          </td>

          <td>
            <p>
              Be very careful when handling concentrated acids. Be sure to wear
              your lab coat, goggles, and gloves.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">

          <p>
            b. Filter the precipitated acid by vacuum filtration. Wash the solid
            with minimum amount of ice-cold water. Transfer to a pre-weighed 250
            mL round bottom flask. Dry both components on the high-vac for 5
            minutes.</p>

            
<p><strong><a href="https://www.youtube.com/embed/L3n2F4L2u1A">Vacuum Filtration Example</a></strong></p>




          </td>

          <td>
            <p>
              Make sure to clamp the filter flask to a ring stand before
              attaching the vacuum line. Place the Büchner funnel just before
              filtering.
            </p>
          </td>
        </tr>
      </table>
    </div>
  );

  const procedureArray = [procedure_1(), procedure_2()];
  return procedureArray;
};

const Experiment_8 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal()
};

export default Experiment_8;

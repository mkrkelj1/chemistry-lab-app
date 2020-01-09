import React from "react";

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
      <img src="Extractionof2Unknowns_K.png" alt="K Equation" />
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
        <b>Acids and Bases in Organic Chemistry</b>
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
        src="Extractionof2Unknowns_AcidBaseChart.png"
        alt="Acid-Base Chart"
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
        diagram at the end of this experiment.
      </p>
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
          src="Extractionof2Unknowns_StudyQuestions_2.png"
          alt="Sample Calculations"
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
          src="Extractionsof2Unknowns_StudyQuestions.png"
          alt="Three Compounds"
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
    </p>
  </div>
);

const waste_disposal = () => (
  <div>
    <p>
      <div class="a">
        <b>Week 2</b>
      </div>
    </p>
    <ol>
      <li>
        <u>Solid components in the RBFs</u>
      </li>
      <ol type="I">
        <li>Dissolve both in minimum amount of acetone.</li>
        <li>
          Transfer into the <u>appropriate</u> waste container (by now you know
          whether either of the components in your
          <u>unknown is halogenated or not).</u>
        </li>
        <li>
          Wash with detergent and water. Then rinse it with distilled water.
        </li>
      </ol>
      <li>
        <u>Weighing paper used to prepare sample for melting point</u>
      </li>
      <ol type="I">
        <li>Brush the solid into the appropriate solid waste container.</li>
        <li>Discard paper in regular trash.</li>
      </ol>
      <li>
        <u>Melting Point Capillaries</u>
      </li>
      <ol type="I">
        <li>Discard into the plastic beaker labeled “Used Capillaries”.</li>
        <img src="Extractionof2Unknowns_FlowChart.png" alt="Flow Chart" />
      </ol>
    </ol>
  </div>
);

const Experiment_9 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal()
};

export default Experiment_9;

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
        <p>
          Prepare a Table of Physical Constants in your notebook listing, in
          order, structure, formulae, and melting point ranges of the following
          substances: (This table should follow the experiment title on the
          first left-hand page of the experiment.)
        </p>

        <ol>
          <li>Benzoic acid</li>
          <li>Biphenyl</li>
          <li>4-Bromobenzophenone</li>
          <li>2,4-Dichlorobenzaldehyde</li>
          <li>(d,l)-&alpha;-Hydroxy-phenylacetic acid [(d,l)-mandelic acid]</li>
          (Be sure to look up <strong>(d,l)</strong>, not just{" "}
          <strong>d</strong> or just <strong>l</strong>.)
          <li>Propanedioic acid (malonic acid)</li>
          <li>Urea</li>
          <li>
            Vanillin (also called vanillan or hydroquinone methyl ether) Prepare
            a table as shown below to record melting points in the
            Data/Observation section, towards the bottom of the observation
            column.
          </li>
        </ol>
      </li>
      <li>
        <p>
          Prepare a table as shown below to record melting points in the
          Data/Observation section, towards the bottom of the observation
          column.
        </p>
        <p>
          <img
            src={cache["./Identification_PrelabTable.png"]}
            alt="Table"
            width="90%"
          />
        </p>
      </li>
    </ol>
  </div>
);

const background = () => (
  <div>
    <p>
      <strong>Theoretical Definition of Melting Point</strong>
    </p>

    <p>
      The melting point of a solid is the temperature at which the solid and its
      liquid form are in equilibrium, i.e., molecules move back and forth
      between the two states at the same rate, so both phases remain present. If
      the temperature of a solid is measured carefully as the solid is heated,
      the temperature will be observed to rise until the melting point (m.p.) of
      the solid is reached, and then the temperature will remain almost constant
      while the solid melts. The heat absorbed during melting is the “heat of
      fusion,” the energy needed to move the molecules out of the crystal
      lattice of the solid. When the solid has completely melted, the addition
      of more heat again contributes to an increase in the temperature of the
      sample, now a liquid. This describes the melting of a pure solid. The
      melting point is characteristic of the compound, independent of source,
      purification procedure, etc., and is useful in identifying the compound.
      However, many different compounds have identical or very similar melting
      points.
    </p>

    <p>
      <strong>Functional Definition of Melting Point</strong>
    </p>

    <p>
      Strictly speaking, the melting point is never a “point”. It is invariably
      a narrow range, about 1&deg; for most compounds, but 0.5&deg; for some,
      1.5 – 2.0&deg; for others. Part of the range is an experimental artifact.
      Since heat transfer is often uneven, all parts of a solid sample are
      unlikely to be at the same temperature simultaneously. While some regions
      of the sample may be at the melting point (solid and liquid in
      equilibrium), other regions may be at slightly higher or lower
      temperatures. Thus, visible melting will occur over a range of
      temperatures. Therefore, the proper report of a melting point is the
      temperature range from the first visible appearance of liquid
      (distinguished from “softening” of the crystal) to the disappearance of
      the last visible crystal of solid. The end is the most important point,
      but the whole range is needed for full interpretation (e.g. benzoic acid,
      m.p. = 120 – 121.5&deg;).
    </p>

    <p>
      Melting points for many organic compounds may be found in the CRC Handbook
      of Chemistry and Physics (hbcponline.com). These “literature” melting
      points are taken from reports in the chemical literature and indicate the
      melting range or upper end of the melting range of very pure samples of
      compounds. Consequently, these values are the highest values that can be
      expected for each compound. (See below for effects of impurities on
      melting points.) In some cases, more than one melting point will be listed
      for a single compound. This usually means that the compound can exist in
      more than one type of crystal lattice and that the different types have
      different stabilities and thus will break down at different temperatures.
    </p>

    <p>
      <strong>Effects of an "Impurity"</strong>
    </p>

    <p>
      If two different compounds, A and B, are intimately mixed, the melting
      point behavior of the mixture differs from that of either pure compound.
      When a small portion of B is mixed with A, the upper limit of the melting
      point range of A is lowered. Increasing the amount of B in A continuously
      decreases the upper limit of the melting range of the resultant mixture
      until such point that B ceases to be the impurity in A, and A then becomes
      the impurity in B. The point at which this occurs is called the eutectic;
      the eutectic temperature and composition of a mixture varies with the
      nature of the components A and B.
    </p>

    <p>
      <img
        src={cache["./Identification_Background_MeltingCurve.png"]}
        alt="Table"
        width="90%"
      />
    </p>

    <p>
      The melting point of a eutectic mixture is below that of either pure A or
      pure B and is the lowest temperature at which any mixture of A and B can
      melt. The lower limit of the melting range of all mixtures of A and B is
      actually equal to the eutectic temperature because that part of the
      mixtures which is of the eutectic composition melts at the eutectic
      temperature. Actual observation of the true lower limit is difficult in
      all mixtures and impossible in mixtures containing little of one
      component. In most mixtures, the small amount of material that consists of
      the eutectic composition, and therefore melts first, is obscured by the
      relatively large amount of remaining “pure” component. The upper limit of
      the melting range is more readily observed, since it is much easier to
      note the disappearance of the last crystal in the liquid than appearance
      of the first drop of liquid in the mass of solid. The upper limit of the
      melting range of a compound containing an impurity is always lower than
      that of the pure compound.
    </p>

    <p>
      <strong>Mixed Melting Points </strong>
    </p>
    <p>
      The melting point of a compound is a physical characteristic often used to
      identify the compound and provide information about its purity. Pure
      compounds melt sharply. The presence of an impurity in a sample lowers the
      upper end of the melting range and very often causes the observed melting
      range to be wider than that of the pure compound. Therefore, if two
      samples of similar melting point are intimately mixed, and the melting
      point of the mixture is not “depressed” or “broadened,” the two samples
      are the same compound. As a corollary, if the melting point of the mixture
      is depressed and possibly broadened, the two samples cannot be the same
      compound. When attempting to identify a compound by the mixed melting
      point method, it is critical to observe the melting behavior of the
      unknown and standard side by side with the mixture. The procedure gives a
      direct comparison of the mixture with the standards and allows you to
      observe any variation of melting behavior between samples under your
      experimental conditions. It is also useful to test a second possibility to
      assure that under the conditions of your experiment the technique is
      capable of distinguishing between different compounds.
    </p>
  </div>
);

const results = () => (
  <div>
    {" "}
    <p>
      <strong>Report your Results in a tabular format.</strong>
    </p>
    <p>(For this experiment, this may mean recopying your Data table.)</p>
  </div>
);

const study_questions = () => (
  <div>
    <ol>
      <li>
        Describe the effect on the melting point of mixing two different
        compounds of similar melting points.
      </li>

      <li>
        Identify your unknown. Give all the evidence that led to your
        conclusion.
      </li>

      <li>
        An unknown compound A (m.p. = 130 – 131&deg;) is mixed with another
        unknown compound B (m.p. = 130 – 131&deg;). The mixture of A and B melts
        at 120 – 126&deg;. What conclusion about the identities of A and B can
        be drawn from this experiment? Explain.
      </li>
    </ol>
  </div>
);
const discussion = () => (
  <div>
    {" "}
    <p>
      Follow the procedure for writing a discussion outlined on page 8. Also, be
      sure to include the experimental and literature melting point values for
      your compound.{" "}
    </p>
    <p>Page 8, for reference:</p>
    <p>
      {" "}
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
      <li>
        <strong>Used Capillaries:</strong>
      </li>
      Discard into the plastic beaker labeled “Used Capillaries”.
      <li>
        <strong>Extra compounds:</strong>
      </li>
      Brush the extra solid into the solid waste container in the waste hood and
      also discard the weighing paper in the same container.
      <li>
        <strong>Unknown vial:</strong>
      </li>
      Save it in your assigned lab drawer.
    </ol>
  </div>
);

const procedure = () => {
  const procedure_1 = () => (
    <div>
      <h2>General Procedures</h2>

      <p>
        <strong>a. Filling the Melting Point Capillary Tube</strong>
      </p>
      <ul>
        <li>
          Points to remember: Use the spatula attached to each bottle to take
          small samples (the tip of the spatula) on labeled pieces of paper. To
          avoid contamination, never return excess samples to bottles; instead,
          share with a neighbor. Grind the samples several times with a spatula
          on weighing paper to form a fine powder. This will facilitate uniform
          heat transfer throughout the sample. If melting points are to be
          compared, they should be taken side by side when possible. Fill one
          m.p. capillary tube for each sample or each mixture, and store all
          tubes in slits in labeled papers.
        </li>
      </ul>
      <p>
        <strong>b. The Melting Point</strong>
      </p>
      <ul>
        <li>
          The melting point in a capillary tube is taken as the temperature
          range between the appearance of the first droplet and the
          disappearance of the last crystal. A shrinking or milking may be
          visible a few degrees below the melting point. The actual melting
          range should be determined slowly over a period of 30 sec. This can be
          achieved by having a proper ramp rate.
        </li>
      </ul>
      <p>
        <strong>c. Use of the Digimelt Melting Point Apparatus</strong>
      </p>
      <ul>
        <li>
          Instructions for using the Digimelt apparatus will be available in the
          laboratory.
        </li>
      </ul>
    </div>
  );

  const procedure_2 = () => (
    <div>
      <h2>Procedure for the Lab Period</h2>
      <h5>
        <strong>Check in</strong>
      </h5>
      <ul>
        <li>Do this as time permits.</li>
        <li>
          Check each item in your drawer and cupboard against the Check List. Be
          sure all glassware is clean and unbroken. There is a labeled display
          of apparatus available in the laboratory. On a separate sheet of
          paper, make a list of missing items, so that the instructor can get
          them for you; include your name and desk number. Sign your check list
          and return it to the instructor.
        </li>
      </ul>
      <h5>
        <strong>
          Melting Points (Temperatures should be recorded to the first decimal
          place)
        </strong>
      </h5>
      <ol>
        <li>
          Standard compounds and unknown compounds will be available on the
          reagent shelf.
        </li>
        <li>
          Identification of your unknown: Record the number of your unknown and
          then prepare a capillary for determining its melting point. This
          sample will be used to determine a rough melting point, so that you
          can choose the two best possibilities from the standards for further
          comparison.
        </li>
        <li>
          Attach melting point tube prepared in step 2 to a labeled slit in
          paper.Take the tube to a Digimelt apparatus and insert the tube. As
          the sample melts, record the melting point range of the sample
          directly in your lab notebook.
        </li>
        <li>
          Your unknown is one of the compounds listed in your pre-lab
          assignment. Devise a procedure to identify your unknown by mixed
          melting point method. Describe this procedure in your notebook. Record
          all data in a table under observation and data. When comparing melting
          point values, experimental results should be obtained side by side
          when possible.
        </li>
      </ol>
    </div>
  );

  const procedureArray = [procedure_1(), procedure_2()];
  return procedureArray;
};

const Experiment_1 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal()
};

export default Experiment_1;

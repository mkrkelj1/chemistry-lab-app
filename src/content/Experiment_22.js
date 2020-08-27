import React from "react";


const prelab_assignment = () => (
  <div>
    {" "}
    <ol>
      <li>Read Jones, Chapter 4, on Stereochemistry.</li>
      <li>
        Prepare a Table of Physical Constants in your notebook. Include
        structures, formulae, molecular weights, specific rotations, and other
        relevant physical properties for (+)-camphor, (-)-camphor, (+)-borneol,
        (-)-borneol, (+)-isoborneol, (-)-isoborneol, methanol, and sodium
        borohydride. Identify all chiral centers in the compounds listed above
        and label them as (R) or (S). Number the carbon atoms in camphor as
        shown in the equation on the first page of experiment. (Consult the
        Merck Index and the Aldrich Catalog, in addition to the Handbook of
        Chemistry and Physics, and if necessary, the Dictionary of Organic
        Compounds.)
      </li>
      <li>
        Write a balanced equation for the NaBH4 reduction of camphor, showing
        all likely products.
      </li>
      <li>
        Identify the products of this reaction as structural isomers,
        enantiomers, or diastereomers.
      </li>
      <li>Define the terms “stereoselective” and “stereospecific”.</li>
    </ol>
  </div>
);


const background = () => (
  <div>
    <h1>Reduction of an Optically Active Natural Product</h1>
    <p>
      <img src="./image9.png" alt="overall scheme" width="90%" />
    </p>
    <h1>Introduction</h1>
    <p>
      This experiment demonstrates a general method for the reduction of ketones
      to alcohols, the use of polarimetry to study the stereochemistry of a
      reaction, and introduces some commonly used tests for the qualitative
      analysis of alcohols and ketones.
    </p>
    <p>
      Camphor (1,7,7-trimethylbicyclo-[2.2.1]-2-heptanone) belongs to a diverse
      family of naturally occurring compounds, known as terpenes, which have
      carbon skeletons composed of 5-carbon isoprene units. Optically active
      camphor is isolated from camphor trees found in Java, Brazil, China, and
      Sumatra.
    </p>
    <p>
      Camphor has many practical and important uses. For example, camphor is
      used as a preservative in pharmaceuticals, in cosmetics, and even in
      embalming fluids. Camphor has also been used as an anesthetic, as a mild
      antiseptic, and as a cardiac stimulant.
    </p>
    <p>
      The reduction of ketones to 2&deg; alcohols is an example of a{" "}
      <strong>
        <em>functional group</em>
      </strong>
      <strong>
        <em>transformation</em>
      </strong>
      , i.e., a reaction that changes a group or groups attached to a compound
      but leaves the carbon backbone unaltered. The reverse reaction, oxidation,
      converts 2&deg; alcohols back to ketones.
    </p>
    <p>
      <img
        src="./image7.png"
        alt="Figure 1. Functional group transformation of ketone to 2&ordm; alcohol"
        width="90%"
      />
    </p>
    <p style={{ textAlign: "left" }}>
      <strong>
        Figure 1. Functional group transformation of ketone to 2&ordm; alcohol
      </strong>
    </p>
    <p>
      Commonly used reducing agents include complex metal hydrides, such as
      LiAlH<sub>4</sub> (lithium aluminum hydride) and NaBH<sub>4</sub> (sodium
      borohydride). In this experiment, we will use sodium borohydride to reduce
      camphor, an optically active, naturally occurring ketone.
    </p>
    <p>
      The reduction of the ketone group in camphor can form two products,
      borneol or isoborneol.
    </p>
    <p>
      <img
        src="./image8.png"
        alt="Figure 2. Reduction of camphor"
        width="90%"
      />
    </p>
    <p style={{ textAlign: "left" }}>
      <strong>Figure 2. Reduction of camphor</strong>
    </p>
    <p>
      The products differ in the way in which the metal hydride reducing agent
      delivers a hydride ion to the planar carbonyl group. Stereochemical
      demands of the substrate, in this case camphor, can direct the addition of
      metal hydride to one of two faces of the carbonyl. If much more of one
      product is formed, the reaction can be said to be stereoselective. By
      determining which (if either) product is preferentially formed, it is
      possible to determine if and how the stereochemical demands of camphor are
      controlling the reduction reaction.
    </p>
    <p>
      Once the product(s) are isolated and identified, it becomes possible to
      determine if the reduction was stereospecific by measuring the optical
      rotation of the starting material and product(s). If the reduction was
      stereospecific, optically pure (+)- or (-)-camphor should form only (+)-
      or (-)-borneol, or only (+)- or (-)-isoborneol, with no loss of optical
      purity.
    </p>
    <p>
      In this experiment, you will start with either (+)- or (-)-camphor. (The
      camphor to be used will be assigned by your instructor.) From the sign of
      the optical rotations of the starting camphor and of the product(s), you
      can confirm the identity of the product(s) and determine the
      stereoselectivity, by determining if one of the expected products, borneol
      or isoborneol, is formed in greater amount. (You could also evaluate the
      stereospecificity by measuring optical rotation of both the starting
      material and the isolated purified product(s) and determining the optical
      purity or enantiomeric excess of each.)
    </p>
    <p>
      <strong>Video&nbsp;</strong>
    </p>
    <p>
      <a href="https://www.youtube.com/watch?v=uIZcelp7vlo&amp;list=PLCAB4E62EFB56C602">
        <strong>
          https://www.youtube.com/watch?v=uIZcelp7vlo&amp;list=PLCAB4E62EFB56C602
        </strong>
      </a>
    </p>
    <ul>
      <li>
        Note this is a playlist of videos; make sure to watch all the videos in
        the correct order.&nbsp;
      </li>
      <li>
        The first part of this playlist shows how to use volumetric flasks to
        make a sample for polarimetry. The second part shows the functional
        group tests.
      </li>
    </ul>
    <h1>References</h1>
    <ol>
      <li>Handbook of Chemistry and Physics</li>
    </ol>
  </div>
);

const procedure = () => {
  const procedure_1 = () => (
    <div>
      <p>
        <strong>Procedure&nbsp;</strong>
      </p>
      <table>
        <tbody>
          <tr>
            <td>
              <p>
                <strong>The Reduction Reaction</strong>
              </p>
            </td>
            <td>
              <p>
                <strong> Safety Precautions</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                1. Place 0.0132 mole of your assigned camphor in a 50 mL
                round-bottom flask (RBF). Add 8 mL of methanol and cool the
                flask in a 250 mL beaker ice bath. While the flask is cooling,
                weigh 0.016 mole of NaBH<sub>4</sub> in a vial and keep it
                covered. Crush any large lumps with a spatula.
              </p>
            </td>
            <td>
              <p>
                Wear goggles, gloves and lab-coat. Handle glassware with care.
                Glassware can break and can cause injury.Glacial Acetic acid is
                corrosive. You must wear gloves while dispensing acid.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                2. Add the NaBH<sub>4</sub> to the camphor solution in 3
                portions with cooling, as follows.
              </p>
              <ol>
                <li>
                  Remove the flask from the ice bath and add about 2
                  scoopula-tips full of NaBH<sub>4</sub>. Swirl the mixture for
                  5-6 minutes. Crush any solid lumps that form with a thin bent
                  spatula. Whenever the bubbling becomes vigorous and/or the
                  flask no longer feels cool, return it to the ice bath.
                  Continue to swirl and crush lumps.
                </li>
                <li>
                  After about 6 minutes, cool the flask in the ice bath; repeat
                  step <strong>a.</strong>
                </li>
                <li>
                  Repeat step <strong>b</strong>, adding the remaining NaBH
                  <sub>4</sub>
                </li>
              </ol>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                3. After about 5 minutes, let the solution warm to room
                temperature. Swirl it occasionally for another 10 minutes.
                Meanwhile, clamp the flask to a ring stand with the flask in
                contact with a steam bath (STEAM OFF) and equip it with a reflux
                condenser. (Cooling water tubing will not be needed for this
                short reflux time.) When bubbling becomes slow, heat the
                solution to boiling, and reflux it for about 5 minutes.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                4. Add 30 mL of ice into a 125 mL Erlenmeyer flask, cool the
                reaction mixture for a minute or two, and pour it with stirring
                onto the ice. Rinse the reaction flask twice with 2 mL portions
                of methanol and add the washes to the reaction mixture.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                5. Stir the mixture until the ice melts. Collect the solid by
                vacuum filtration. Wash the filtered solid with cold distilled
                water, and press it dry with a glass stopper.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                6. Transfer the crude reaction product to the same 125 mL
                Erlenmeyer flask. Save a few small crystals of crude product to
                use as seed crystals, in case the product &ldquo;oils out&rdquo;
                as the recrystallization solution cools.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                7. Dissolve the crude product in a minimum volume of{" "}
                <strong>hot</strong> 1:1 methanol-water mixture. (The flask
                containing the solvent and the flask containing the crude
                product should be on the steam bath). Then add{" "}
                <strong>cold </strong>water dropwise until a permanent turbidity
                is seen. Add <strong>hot </strong>methanol again until the
                solution just becomes clear. Set aside slowly to cool. Then cool
                in ice, and filter the recrystallized product using suction
                filtration. Use two pieces of filter paper.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                8. Cover the Buchner funnel with parafilm and store it in a
                beaker.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>9. Weigh your dry product and determine the yield.</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>Functional Group Tests</strong>
              </p>
              <p>
                Two classical tests will be performed in order to determine
                whether or not the product is an alcohol and whether or not it
                is contaminated by unreacted camphor.{" "}
                <strong>
                  For a and b below, record your observations and results in
                  tabular form, and give general equations for positive test
                  results.
                </strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>a. Chromic Acid Test for Alcohols </strong>
                <br />
                In the chromic acid test, 1&deg; and 2&deg; alcohols are
                oxidized by solutions of chromic acid (H2CrO4) to form
                carboxylic acids and ketones, respectively; tertiary alcohols do
                not react with H2CrO4. A positive test is indicated by the
                formation of a green-blue precipitate. <br />
                Add a match head size of solid or 1 drop of liquid to 1 mL
                acetone in a test tube. Then add 1 drop chromic acid reagent and
                shake the mixture. The appearance of an opaque blue-green color
                within 2 seconds is a positive test. Perform the test on
                1-butanol, 2-butanol, 2-methyl-2-propanol (<em>t</em>-BuOH),
                camphor, and your product. (
                <em>
                  In your lab notebook, predict the results for the standard
                  alcohols tested and report in tabular format
                </em>
                ). <br />
                Discard all waste from this test in the specially designated
                container.
              </p>
              <p>
                <strong>b.</strong>&nbsp;
                <strong>
                  2,4-Dinitrophenylhydrazine (2,4-DNP) Test for Ketones{" "}
                </strong>
                <strong>
                  <br />
                </strong>
                In the 2,4-DNP test, ketones (and aldehydes) react rapidly with
                2,4-DNP to give brightly colored precipitates. Alcohols do not
                react with this reagent. <br />
                Different concentrations of reactants will be used to increase
                the sensitivity of the test, so that small amounts of unreacted
                starting material (camphor) can be detected in the product from
                your reduction reaction.
              </p>
              <p>
                <strong>Knowns</strong>
                <br />
                Perform this test on the following substances: isoborneol,
                camphor, methanol, and acetone. For each test, put 1 mL of 95%
                ethanol in a small test tube. Add (and mix) a spatula-tip full
                or 5 drops of the test compound, followed by 1 mL of 2,4-DNP
                reagent. Mix well. If a precipitate does not form, boil the
                solution in the test tube in a steam bath for 1 minute. Cool it
                in ice. A colored precipitate is a positive test for a ketone.
              </p>
              <p>
                <strong>Reaction product </strong>
                <br />
                Repeat the 2,4-DNP test as above, but use about 0.1 g of your
                product. If a positive test is observed, explain why this
                occurred. <br />
                Discard all waste from this test in the Non-Halogenated waste
                container.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>Polarimetry</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                10. Accurately weigh out about 0.2500 g of camphor in a small
                beaker. Dissolve the camphor in the beaker in a small amount of
                95% ethanol. Transfer this solution{" "}
                <strong>quantitatively </strong>to a 25 mL volumetric flask and
                fill to the mark with 95% ethanol; mix well. Set the polarimeter
                to zero (0) with a 95% ethanol blank cell. Fill a 1 dm cell with
                the prepared camphor solution and measure the optical rotation.
                (About 10 mL of solution is needed).
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                11. Accurately weigh out about 0.5000 g of your product in a
                small beaker. Dissolve and transfer quantitatively to a 25 mL
                volumetric flask and fill to the mark with 95% ethanol, as in
                step <strong>10 </strong>above. (If the solution is cloudy or
                turbid, filter it). Be sure to rinse the polarimeter cell with a
                little ethanol and then pre-rinse it with some of your sample
                before filling the cell. Measure the optical rotation as above.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>12. Calculate the specific rotation of both samples.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  const procedureArray = [procedure_1()];
  return procedureArray;
};

const results = () => (
  <div>
    <ol>
      <li>
        All reports should be uploaded to Canvas under the appropriate heading
        in the Assignments section. Use only the pdf, doc, or docx file formats
        for your reports.
      </li>
      <li>
        All reports should be written in JACS (Journal of American Chemical
        Society) format. A sample report is given on pg. 30 of laboratory manual
        (online edition, Fall 2020).
      </li>
    </ol>
    <p>
      <strong>
        <a href="./camphor cover sheet.docx">
          Link to download report cover sheet
        </a>
      </strong>
    </p>
  </div>
);

const study_questions = () => (
  <div>
    <ol>
      <li>
        Predict the major isomeric alcohol formed by the hydride reduction of
        (-) camphor. Explain why.
      </li>
      <li>Write a reasonable mechanism to support your answer.</li>
    </ol>
  </div>
);

const discussion = () => (
  <div>
    <p>
      <em>Note</em>: This is Post-lab Assignment
    </p>
    <ol>
      <li>Calculations (include these answers in your Discussion).</li>
      <br />
      <blockquote>
        a. Does your calculated specific rotation correspond to a single pure
        alcohol isomer? Which one? If not, determine from the signs of optical
        rotation of your starting material and product which isomer (if either)
        was formed in excess and the identity of the other isomer.
        <br />
        b. Calculate the percent composition of your product (if it was a
        mixture). Assume that: [ɑ](specific) = Xb[ɑ]b + Xi[ɑ]i b = borneal, i =
        isoborneol expected from your starting material, X = mole fraction Was
        the reaction stereospecific or stereoselective? <br />
      </blockquote>
      <li>
        Write a lab report in the proper format including observations from the
        video.
      </li>
      <li>
        Go through the procedure and note all the waste you will produce and
        which of the waste disposal locations (halogenated waste,
        non-halogenated waste, solid waste, trash bin, glass/sharps) you would
        put them in.
      </li>
    </ol>
  </div>
);

const waste_disposal = () => (
  <div>
    <p>
      <em>Note</em>: No in-person laboratory work in Fall 2020.{" "}
    </p>
  </div>
);

const Experiment_22 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal(),
};

export default Experiment_22;

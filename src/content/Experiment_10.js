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
        Prepare a Table of Physical Constants for ethyl acetate and 1-butanol.
      </li>
      <li>
        Prepare a table for recording the vapor temperatures and volumes of
        distillate for your distillation.
      </li>
    </ol>

    <p>Sample Table:</p>
    <p>
      <img
        src={cache["./Distillation_SampleTable.png"]}
        alt="Sample Table"
        width="35%"
      />
    </p>
  </div>
);

const background = () => (
  <div>
    <strong>1. Distillation</strong>
    <p>
      Distillation is yet another method used to purify and/or separate organic
      compounds. Recrystallization is used to purify compounds that are solids
      at room temperature; distillation is used to purify compounds that are
      liquids at room temperature.
    </p>
    <p>
      In order to understand distillation, we must first consider the physical
      property upon which the process is based, the boiling point of a liquid.
      The boiling point may be defined as the temperature at which the vapor
      pressure of a liquid is equal to the external pressure. Thus, the boiling
      point of a liquid is directly proportional to the pressure above the
      liquid. (Note: When heated in an open container, a liquid will boil when
      its vapor pressure equals atmospheric pressure.) Applying increasing
      amounts of heat to a boiling liquid will cause it to boil faster (move
      molecules from the liquid to the gas phase faster), and will not increase
      the temperature of the liquid.
    </p>
    <p>
      Distillation is the process in which a liquid is evaporated (boiled), and
      its vapor condensed and collected. The simplest example of how
      distillation can be used to purify compounds is the distillation of a
      mixture containing one volatile and one non-volatile compound. The
      volatile component vaporizes, leaving the non-volatile compound behind.
      Thus, condensing and collecting the vapor will yield a pure sample of the
      volatile compound. Separation of a mixture of two or more volatile
      compounds is more complex. According to Raoult’s Law, the partial pressure
      of a liquid in the vapor above a solution is equal to the vapor pressure
      of the pure liquid times its mole fraction in the solution (P<sub>1</sub>{" "}
      = P<sup>0</sup>X<sub>1</sub>). The total pressure above a mixture of
      miscible liquids is equal to the sum of the partial pressures of each of
      the liquids (P<sub>T</sub> = P<sup>0</sup>
      <sub>1</sub>X<sub>1</sub> + P<sup>0</sup>
      <sub>2</sub>X<sub>2</sub> + …). Since the vapor pressure of a liquid is
      inversely proportional to its boiling point, the vapor above a mixture of
      two miscible liquids contains a higher proportion of lower boiling
      component than did the original mixture. (Consider a solution containing
      50% A, b.p. 75 &#176;C + 50% B, b.p. 100 &#176;C. When the solution is
      heated to its boiling point, the vapor above the boiling mixture will
      contain &gt;50% A and &lt;50% B, therefore, the ratio of A:B will be
      higher in the vapor than in the original solution.) Consequently, as the
      vapor is removed by distillation, the liquid mixture becomes increasingly
      richer in the higher boiling component, and its boiling temperature rises.
    </p>
    <p>
      If the vapor above the boiling liquid were condensed and revaporized, it
      would produce new vapor, which was even richer in the lower boiling
      component than the first vapor. An infinite series of these vaporizations,
      condensations, and revaporizations would eventually lead to a vapor that
      contained only the lower boiling component. If the lower boiling point
      component could be selectively removed as it is formed, the two liquids
      could be separated.
    </p>
    <p>
      In practice, it is not necessary to repeat several separate distillations,
      because the process called fractional distillation accomplishes multiple
      distillations in one mechanical step. In a fractional distillation, the
      mixture of liquids is heated to boiling in the distilling flask (pot). The
      vapor rises up the fractionating column until it hits a cool surface
      provided by the packing. The vapor cools, condenses, and begins to run
      down the column. While this is occurring, heating of the pot continues.
      Since the vapor removed at first was richer in the lower boiling
      component, the mixture in the pot has become richer in the higher boiling
      component, so its boiling point is higher and the temperature of the new
      rising vapor, #2, is hotter than that of the first vapor, #1. This new
      rising vapor, #2, hits the condensed vapor, #1, and transfers heat,
      causing #1 to boil, forming new vapor #3, which is now the richest of all
      in the lower boiling component. Vapor #3 rises in the column where it hits
      a new cool surface, condenses, starts down the column where it is
      “greeted” by hotter vapor; it revaporizes, rises further in the column,
      and so on. In this way, a temperature gradient is established along the
      column, with the hottest temperatures at the bottom (richest in high
      boiling compound) and increasingly cooler temperatures toward the still
      head (richest in lower boiling compound). Eventually, when the purest
      sample of the lower boiling component reaches the still head (where the
      thermometer is located), it enters the condenser and is collected.
    </p>
    <p>
      A plot of the stillhead temperature (temperature of the vapor about to be
      condensed) vs. mL of distillate collected for distillations of various
      efficiencies is shown below.
    </p>
    <img
      src={cache["./Distillation_Temp.png"]}
      alt="Temperature Graph"
      width="90%"
    />

    <p>
      In an ideal distillation, the entire lower boiling component distills at
      its boiling point, then the vapor temperature rises sharply to the boiling
      point of the higher boiling component and it distills. If the collecting
      flask is changed when the temperature rises suddenly, the components will
      be collected separately, giving a perfect separation!
    </p>
    <p>
      In a fractional distillation, the early distillate distills at a
      temperature a bit <u>above</u> the boiling point of the lower boiling
      component. The last distillate comes over at a temperature slightly
      <u>below</u> the higher boiling component. Liquid mixtures boil at
      temperatures <u>between</u> the boiling points of the components.
    </p>
    <p>
      In a simple distillation, the initial temperature is higher and the final
      temperature is lower than in the fractional distillation. Also, note that
      temperature rise is much more gradual than in the fractional distillation.
    </p>
    <p>
      <u>Non-ideal solutions</u>
    </p>
    <p>
      Although most homogeneous liquid mixtures behave as ideal solutions, there
      are many examples known in which the behavior is non-ideal. In these
      solutions, the dissimilar molecules are not indifferent to one another’s
      presence. The resultant deviations from Raoult’s Law occur in either of
      two directions. Some solutions display greater vapor pressures than
      expected and are said to exhibit <u>positive deviation</u>. Others display
      lower vapor pressures than expected and are said to exhibit{" "}
      <u>negative deviation</u>.
    </p>
  </div>
);

const results = () => (
  <div>
    <ol>
      <li>
        Plot vapor temperature vs. distillate volumes for your fractional
        distillation on a graph. This graph should be attached to your report
        sheet under the Results section. On your graph, indicate the segments
        corresponding to pure ethyl acetate, pure 1-butanol, and mixture.
      </li>
      <li>
        Create a table containing the retention times for the standard mixture.
      </li>
      <li>
        Calculate the percent of each component in each fraction and list them
        in a table. Makes sure to include a sample calculation.
      </li>
    </ol>
  </div>
);

const study_questions = () => <div> N/A </div>;

const discussion = () => (
  <div>
    <p>
      Follow the procedure for writing a discussion outlined on page 8
      (referenced below).
    </p>

    <p>In addition, please discuss:</p>
    <ol>
      <li>
        The shape of your plot of volume vs distillate temperatures. Whether you
        changed the graduate cylinders at the correct temperatures according to
        this plot.
      </li>
      <li>
        Comparison of Boiling points of fractions 1 and 3 to the literature
        values of ethyl acetate and 1-butanol.
      </li>
      <li>
        Factors that contribute to the fractions 1 and 3 for not being pure
        ethylacetate and 1-butanol.
      </li>
    </ol>

    <hr />

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
      <li>
        <u>Fractions Collected in Graduated Cylinders</u>
        <ol type="I">
          <li>Discard them into liquid non halogenated waste.</li>
        </ol>
      </li>
      <li>
        <u>Leftover Liquid in the RBF</u>
        <ol type="I">
          <li>
            Discard into liquid non halogenated waste PLEASE REMOVE MAGNETIC
            STIR BAR BEFORE DISCARDING THE LIQUID.
          </li>
          <li>
            Rinse magnetic stir bar with acetone in liquid non-halogenated
            waste.
          </li>
        </ol>
      </li>
      <li>
        <u>
          Cleaning of ALL glassware used in this experiment including
          thermometer
        </u>
        <ol type="I">
          <li>Rinse with acetone into a beaker.</li>
          <li>Transfer these rinsings into liquid non halogenated waste.</li>
          <li>DO NOT WASH WITH WATER.</li>
        </ol>
      </li>
      <li>
        <p>
          {" "}
          <strong>
            Leave the waste bottle in your hood at the end of the day.
          </strong>
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
      <ol>
        <li>
          <b>Boiling Points</b>
        </li>
        <p>
          As with melting points, an experimentally determined boiling point is
          actually a range of temperatures. An acceptable boiling range for a
          pure compound is 3 &#176;C. Samples with wider ranges should be
          redistilled to improve purity.
        </p>
        <li>
          <b>Thermometer Placement and Insulation of the Stillhead</b>
        </li>
        <p>
          Accurate measurement of the temperature of the distillate requires
          that the thermometer bulb be completely immersed in the vapor that is
          moving into the condenser. If the thermometer bulb were very small,
          and no heat loss occurred through the glass of the stillhead, the
          ideal position for the thermometer is directly opposite the sidearm
          that leads to the condenser. The thermometer is placed such that the
          upper edge of the bulb is even with the lower edge of the sidearm.
          This placement of the thermometer assures that the bulb will be
          completely immersed in the vapor.
        </p>
        <p>
          If the thermometer is placed too high in the stillhead, its bulb may
          be only partially immersed in the vapor resulting in an experimental
          temperature, which is lower than that of the distillate being
          collected. If the thermometer is placed too low in the stillhead, its
          bulb will be immersed in vapor further down the column than the vapor
          that is entering the condenser, resulting in an experimental
          temperature that is higher than that of the distillate being
          collected.
        </p>
        <li>
          <b>Notes on the Assembly of Ground Glass Equipment</b>
        </li>
        <ol type="a">
          <li>
            Do not grease the joints. (Grease is needed only for vacuum work or
            when basic compounds are used.)
          </li>
          <li>
            Avoid breakage. The correct positions for clamps are at the top of
            the distillation flask, just under the flare. Use gentle pressure on
            the clamps to avoid cracking the flask or condenser. (Use rubber
            liners or pieces of paper on the clamps.)
          </li>
          <li>
            Check the demonstration set-up for proper placement of the
            thermometer. (See discussion on page 65.)
          </li>
          <li>
            Rubber tubing should be moistened with water, and firmly attached to
            the condenser and the water faucet. Think about why water is led
            into the bottom of the condenser. The exit water is led into the cup
            sink in the hood. A clamp holder loosely attached to the rubber exit
            tube will help to keep it from slipping out of the sink whenever you
            turn on the water. When turning on the water, hold the exit tube
            with your other hand so that you can adjust the water to the correct
            pressure. There should be only a moderate stream of water. By
            convention, all water and steam valves turn on counter-clockwise,
            and off clockwise.
          </li>
          <li>
            Have your instructor check your apparatus before you start your
            distillation.
          </li>
        </ol>
        <br />
        <li>
          <b>Theoretical Background on Gas Chromatography (GC)</b>
        </li>
        <p>Please read pages 75-78 of this lab manual.</p>
      </ol>
    </div>
  );

  const procedure_2 = () => (
    <div>
      <p>
        <b>Fractional Distillation</b>
      </p>
      <p>During this period, you will carry out the separation of 30 mL of a 1:1 mixture of ethyl acetate and 1-butanol using a fractional distillation apparatus.</p>

      <p><strong><a href="https://youtu.be/iKRM_6IVXnU">Heating Methods Pt 1</a></strong></p>

<p><strong><a href="https://youtu.be/OuIOW27E7Vk">Distillation Pt 2 (Long Path)</a></strong></p>

      <table border="1">
        <tr>
          <th>Experimental Procedure</th>
          <th>Safety Precautions</th>
        </tr>

        <tr>
          <td width="60%">
            Preheat a heating mantle without a flask for 5 min at 100 volts.
            Allow it to cool for 5 min before beginning your distillation.
          </td>

          <td>
            <p>Wear lab coat, goggles, and gloves when in the lab.</p>
            <p>Use oven mitts to handle hot heating mantle.</p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            While your mantle is preheating, assemble your fractional
            distillation apparatus. (See the demonstration set- up.) Have ready
            three 25 mL graduated cylinders with stoppers to fit the cylinders.
            Label the cylinders F1, F2, and F3.
          </td>

          <td></td>
        </tr>

        <tr>
          <td width="60%">
            Obtain 30mL of the distillation mixture, and, using a funnel, pour
            it into a 50 mL round bottom flask. Add a magnetic stir bar and
            attach the flask to your distillation apparatus. When you believe
            that you are completely prepared to begin the distillation, have
            your apparatus checked by an instructor. Then turn on the condenser
            cooling water.
          </td>

          <td>
            <p>
              The distillation mixture is volatile. Avoid inhalation of an
              exposure to fumes.
            </p>
            <p>
              Be sure to monitor the water flow rate to avoid disconnection of
              outlet and inlet tubes.
            </p>

            <p>
              Disconnection can cause spillage. Have your distillation apparatus
              checked by an instructor before beginning the distillation
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            After your apparatus has been checked, begin heating the distilling
            flask at 80 volts.
          </td>

          <td>
            <p>Avoid touching the distillation apparatus as it will be hot.</p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            When the mixture begins to boil, follow the position of the upper
            condensing vapor as it moves into the stillhead. When the vapor
            reaches the thermometer bulb, the temperature reading should rise
            rapidly to a value near the boiling point of ethyl acetate. (See
            your Table of Physical Constants.)
          </td>

          <td>
            <p>Avoid touching the distillation apparatus as it will be hot.</p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Record the temperature of the vapor when the first drop of
            distillate is collected in your graduated cylinder. Consult your
            instructor if this temperature is:
            <br />
            (1) below the b.p. of ethyl acetate or (2) more than 5 &#176;C above
            the b.p. of ethyl acetate.
            <br />
            Temperatures must be recorded to the first decimal place.
          </td>

          <td>
            <p>Avoid touching the distillation apparatus as it will be hot.</p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Adjust the voltage setting of the Variac so as to yield a collection
            rate (distillation rate) of approximately 1 drop per second. As the
            distillation progresses, the voltage setting may need to be raised
            in order to maintain the distillation rate at 1 drop per second.
            Record the vapor temperature after each mL of distillate has been
            collected.
          </td>

          <td>
            <p>Avoid touching the distillation apparatus as it will be hot.</p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            When the vapor temperature has risen 5 &#176;C above the observed
            b.p. of ethyl acetate, switch to the second graduate cylinder. The
            first cylinder contains Fraction (cut) F1. Stopper it promptly to
            prevent evaporation.
          </td>

          <td>
            <p>Avoid touching the distillation apparatus as it will be hot.</p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Continue recording vapor temperatures after collection of each mL of
            distillate.
          </td>

          <td></td>
        </tr>

        <tr>
          <td width="60%">
            When the vapor temperature rises to a point 5 &#176;C below the
            boiling point of 1-butanol, switch to the third graduate cylinder.
            Stopper the second graduate cylinder, which contains Fraction (cut)
            F2.
          </td>

          <td>
            <p>
              Be careful not to spill any of the hot solution when switching the
              graduated cylinders.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Continue recording temperaturesas before. Discontinue the
            distillation when a total of 26 mL of distillate has been collected.
            If the temperature begins to decrease at this point, consult an
            instructor. The distillate collected during the last part of the
            distillation is Fraction (cut) F3. Stopper the cylinder at the end
            of the distillation.
          </td>

          <td>
            <p>
              <strong>CAUTION: Extremely hot surfaces.</strong>
            </p>
            <p>Turn off Variac.</p>
            <p>Lower lab jack.</p>{" "}
            <p>
              Wear oven mitts before you touch hot RBF or the one-piece
              distillation unit.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Be sure to record the volumes and temperature ranges of all three
            fractions in a table. (See sample table on page 76.)
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Fractions 1-3 are analyzed using Gas Chromatography (GC).
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            <b>Preparation of GC Sample</b>
            <p><strong><a href="https://youtu.be/4V3d4DNqFmY">Preparation of GC Sample Example</a></strong></p>
            <ol>
              <li>Obtain three clean and drytest tubes.</li>
              <li>Label test tubes F-1, F-2, F-3.</li>
              <li>
                Add one drop of your Fraction into the respective labeled test
                tubes. Add methylene chloride (dichloromethane) until the test
                tube is half full. Mix thoroughly the solution in test tubes.
              </li>
              <li>
                Fill the small vial ¾ full with the prepared solution. Cap the
                vial. Label the vial with your initials and lab section. Place
                labeled vials in the box.
              </li>
            </ol>
          </td>

          <td>
            <p>
              Be careful when handling methylene chloride, it is a known
              carcinogen. Be sure to wear gloves. If the gloves are exposed to
              methylene chloride, they will pucker. If this occurs, put on a new
              pair of gloves.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Discard all three fractions in the designated waste container in
            your hood.
          </td>

          <td>
            <p>
              The fractions may still be hot. Be careful when handling them.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Rinse the one-piece distillation apparatus with acetone and return
            it to the instructor.
          </td>

          <td>
            <p>
              Acetone is volatile. Be sure to conduct all work in your hood.
            </p>
          </td>
        </tr>
      </table>
    </div>
  );

  const procedureArray = [procedure_1(), procedure_2()];
  return procedureArray;
};

const Experiment_10 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal()
};

export default Experiment_10;

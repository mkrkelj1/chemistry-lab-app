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
    <img src={cache["./Distillation_SampleTable.png"]}  alt="Sample Table" />
  </div>
);

const background = () => (
  <div>
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
      efficiencies is shown in Figure 1.
    </p>
    <img src={cache["./Distillation_Temp.png"]} alt="Temperature Graph" />

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
      component. The last distillate comes over at a temperature slightly{" "}
      <u>below</u> the higher boiling component. Liquid mixtures boil at
      temperatures <u>between</u> the boiling points of the components.
    </p>
    <p>
      n a simple distillation, the initial temperature is higher and the final
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

const study_questions = () => <div> ToDo </div>;

const discussion = () => (
  <div>
    <p>Additional points to be discussed:</p>
    <p>
      The shape of your plot of volume vs distillate temperatures. Whether you
      changed the graduate cylinders at the correct temperatures according to
      this plot.
    </p>
    <p>
      Comparison of Boiling points of fractions 1 and 3 to the literature values
      of ethyl acetate and 1-butanol.
    </p>
    <p>
      Factors that contribute to the fractions 1 and 3 for not being pure
      ethylacetate and 1-butanol.
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


const Experiment_10 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal()
};

export default Experiment_10;

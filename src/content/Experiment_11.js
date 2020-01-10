import React from "react";

const cache = {};
function importAll(r) {
  r.keys().forEach(key => (cache[key] = r(key)));
}
importAll(require.context("../assets/images/", false, /\.png$/));


const prelab_assignment = () => (
  <div>
    <img src={cache["./Dehydration_Scheme.png"]} alt="Scheme" />
    <p>
      In this experiment, we will set up an acid-catalyzed dehydration reaction
      of 2-methylcyclohexanol (mixed cis- and trans- isomers) under reflux using
      a West condenser to produce a mixture of methylcyclohexenes. Then using
      simple distillation, the methylcyclohexenes ae collected.
    </p>
    <p>
      The product mixture will be analyzed using infrared spectroscopy. The
      identity and relative amount of each product will be determined using gas
      chromatography. The experiment is derived from “Dehydration of
      Cyclohexanol” in C.F. Most, p. 335 (Wiley, 1988).
    </p>
    <ol>
      <li>
        Write the balanced equation using structures for the dehydration of
        2-methylcyclohexanol in your notebook.
      </li>
      <li>
        Prepare a Table with all required information for calculating
        theoretical yield for this reaction. A sample table showing the required
        information is on pp.
      </li>
    </ol>
  </div>
);

const background = () => (
  <div>
    <p>
      <b>Gas Chromatography (GC)</b> (Vapor Phase Chromatography--VPC)
    </p>
    <p>
      As you learned in the Column Chromatography experiment, chromatography is
      a general method for separating a mixture of two or more components and
      obtaining each of the components in a pure state. All types of
      chromatography utilize a two-phase system, consisting of a mobile phase
      and a stationary phase.
    </p>
    <p>
      Generally, the mixture to be separated is applied to one end of the
      stationary phase and carried through the system by the mobile phase. The
      system is chosen such that the components of the mixture have different
      affinities for the stationary and mobile phases. Thus, as the mobile phase
      carries the mixture over the stationary phase, the components of the
      mixture reach different equilibria between the stationary and mobile
      phases, and are “washed” through the system at different rates. If the
      composition of the mobile phase is analyzed as the mobile phase exits the
      system, different results will be obtained as time passes.
    </p>
    <p>
      If a mixture of Compounds A, B, and C is applied to the chromatography
      system and the composition of the exiting mobile phase is monitored over
      time, the following would be found:
    </p>
    <p>
      Initially, the mobile phase would consist only of the mobile phase
      component (gas or liquid).
    </p>
    <p>After a few minutes, Compound A would be detected.</p>
    <p>
      As time passes, Compound A would decrease in amount and then Compound B
      would be detected.
    </p>
    <p>
      At later times, Compound B would decrease in amount and finally Compound C
      would be detected.
    </p>
    <p>
      The lapse in time from the injection of a compound to its exit from the
      column is called its “<b>retention time</b>”. Each compound has a
      characteristic retention time, which depends upon the length of the
      column, carrier gas flow rate, the temperature of the column, injection
      block temperature, and the nature of the stationary phase.
    </p>
    <p>
      In GC, as the name suggests, the mobile phase is a gas (usually N
      <sub>2</sub>, He, Ne, or Ar). The stationary phase is either a solid, or
      more often a liquid that is coated on solid particles. Usually, the
      stationary phase particles are packed into glass or stainless steel tubing
      and the mobile gas phase (carrier gas) flows through the tubing. This
      packed tubing is called the chromatography “column.” Nowadays, capillary
      columns are used. The most advantage of capillary GC column is the
      separation efficiency and sensitivity enhancement as against the normal
      packed columns due to the distance travelled by the analyte (sample
      injected). These columns are open tubular columns, made of fused silica
      with a polyimide coating on the outside surface. The stationary phase is
      coated inside the tubing as a very thin layer (usually micrometer
      thickness). The column length can be as long as 100 m. The internal
      diameter of the tubing can vary from 0.1 mm to 0.53 mm or slightly more.
      These columns will give much better separation for complex samples.
    </p>
    <p>
      As the gas flows out of the column, it passes through a detecting device,
      which senses the ability of the gas to conduct heat. When compounds other
      than the carrier gas are present, the conductivity of the gas mixture
      increases and the detector sends an increased signal to a recorder. The
      results of a separation such as that described for compounds A, B, and C
      is shown below.
    </p>
    <img src={cache["./Dehydration_prelabchart.png"]} alt="Dehydration Chart" />
    <p>
      The relative amount of each component (A, B, or C) can be determined by
      calculating the area under the peak corresponding to each component and
      applying an appropriate sensitivity factor for the ability of the detector
      to sense each compound.
    </p>
    <p>
      A simple and reasonably accurate method for determining the areas of peaks
      is to treat them as symmetric triangles. Using this method, the area of a
      peak is calculated by first measuring its vertical height and then the
      width of the peak at half its height. The area is the product of the
      height and the width at half-height.
    </p>
    <img src={cache["./Dehydration_PeakMathChart.png"]} alt="Peach Math Calculation" />
    <p>The mole % of each component can be determined as follows:</p>
    <p>
      (1) Multiply the areas by the appropriate molar sensitivity factors to get
      the corrected areas.
    </p>
    <p>
      (2) Calculate the % that each corrected area is of the sum of the
      corrected areas. (Note: Sensitivity factors are experimentally
      determined.)
    </p>
    <img
      src={cache["./Dehydration_PeakPercentageChart.png"]}
      alt="Peak Percentage Chart"
    />
    <p>
      Thus, the original mixture consisted of 42.5% A, 26.1% B, and 31.3% C.
    </p>
  </div>
);

const results = () => (
  <div>
    <ol>
      <li>
        Calculate the percent yield, assuming that the distillate is 100 percent
        mixed methylcyclohexenes.
      </li>
      <li>
        From the gas chromatography trace of the standard compounds distributed
        to you, identify each product (and solvent, if any) by retention times.
        Label the peaks on the both chromatograms and attach them to the report
        sheet. Be sure to note the conditions used to produce and record your
        chromatography trace.
      </li>
      <li>
        On your IR spectra, label the important peaks and draw the structure(s)
        of the compound(s).
      </li>
      <li>
        Based on the results obtained in your experiment, formulate a mechanism
        that will account for all observed products.
      </li>
    </ol>
  </div>
);

const study_questions = () => <div> To Do </div>;

const discussion = () => (
  <div>
    <p>
      Make sure to discuss the GC and IR results, as well as the % yield and the
      success of the separation. Discuss major and minor products of this
      reaction and the stability of the products and intermediates.
    </p>
    <p>
      If the IR spectrum of your product indicates the presence of any unreacted
      starting material, then this should be addressed as well.
    </p>
  </div>
);
const waste_disposal = () => (
  <div>
    <ol>
      <li>
        <u>One Piece Distillation Glassware</u>
        <ol type="I">
          <li>Rinse with acetone a couple times into a beaker.</li>
          <li>
            {" "}
            Transfer these rinsings into liquid non-halogenated waste bottle in
            your hood.
          </li>
        </ol>
      </li>
      <li>
        <u>RBF, Thermometer, and Magnetic stir bar</u>
        <ol type="I">
          <li>Rinse with acetone a couple times into a beaker.</li>
          <li>
            Transfer these rinsings into liquid non-halogenated waste bottle in
            your hood.
          </li>
        </ol>
      </li>
      <li>
        <u>Potassium Carbonate Drying Agent</u>
        <ol type="I">
          <li>
            Transfer into waste container labeled non-halogenated solid waste.
          </li>
          <li>
            Rinse centrifuge tube with acetone and transfer into the
            non-halogenated waste bottle in your hood.
          </li>
          <li>
            Wash the centrifuge tube with detergent and water. Then rinse it
            with distilled water.
          </li>
        </ol>
      </li>
      <li>
        <u>Product Vial</u>
        <ol type="I">
          <li>
            Rinse with acetone a few times and discard into the non-halogenated
            waste bottle in your hood.
          </li>
          <li>Keep vial and plastic cap in fume hood.</li>
        </ol>
      </li>
      <li>
        <u>Sand</u>
        <ol type="I">
          <li>Transfer sand into beaker and put it into labeled container.</li>
          <li>
            Remove residual sand from fume hood using broom and dust pan and
            discard into trash.
          </li>
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



const Experiment_11 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal()
};

export default Experiment_11;

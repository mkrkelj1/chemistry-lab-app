import React from "react";

const cache = {};
function importAll(r) {
  r.keys().forEach(key => (cache[key] = r(key)));
}
importAll(require.context("../assets/images/", false, /\.png$/));

const prelab_assignment = () => (
  <div>
    <p>
      In your notebook, prepare a Table of Physical Constants for n-hexane,
      dichloromethane, ethyl acetate, ferrocene, and acetyl ferrocene.
    </p>
  </div>
);

const background = () => (
  <div>
    <p>
      Thin Layer Chromatography is a rapid, easy method for analyzing mixtures
      of compounds. The theory of TLC and Column Chromatography will be
      discussed in lab lecture. TLC is limited to small samples (only a few
      milligrams). To handle larger amounts of material, more adsorbant is
      needed. One common approach to larger scale separations is column
      chromatography, where the adsorbant (usually silica gel or alumina) is
      packed into a tube, and a continuous flow of solvent (eluant) is passed
      through the adsorbant. As with TLC, the different compounds in the sample
      are carried along, going back and forth between solvent and adsorbant. The
      relative rates of these movements are dependent upon the relative
      strengths of the attraction of these compounds to the adsorbant and upon
      their solubilities in the eluant. With a polar adsorbant, the more polar
      compounds in the sample will be held more tightly to the stationary phase
      and move more slowly down the column. Therefore, when the same adsorbant
      and solvent system are used in both, TLC and column chromatography will
      yield the same order of elution for a given series of compounds. So, TLC
      is a valuable tool for rapidly devising appropriate solvent systems for
      column chromatography separations.
    </p>
    <p>
      Unlike TLC, column chromatography is not limited to only one solvent
      system for a given separation. Since the solvent is continuously supplied
      at the top of the column, it is possible to change the eluting solvent at
      any point in the separation. This advantage allows us to separate complex
      mixtures containing compounds of widely varying polarity. For separations
      of such samples, the column is prepared in a relatively non-polar solvent.
      As the less polar components are eluted from the column, the polarity of
      the solvent can be progressively increased, thus allowing selective
      removal of compounds in order of increasing polarity.
    </p>
    <p>
      In addition to this versatility for separating complex mixtures, column
      chromatography has the advantage that it can be used for preparative scale
      separations and purification, while TLC is usually limited to analytical
      procedures. The amount of material to be separated can be varied from
      milligrams to kilograms by increasing the size of the column and the
      amount of adsorbant. For convenience and economy, the separation of a
      mixture of ferrocene and acetyl ferrocene in our experiment will be done
      on a semi-micro scale.
    </p>
  </div>
);

const results = () => (
  <div>
    <p>Calculate the total % recovery, as in Experiment 3.</p>

    <ol>
      <li>
        Calculate R<sub>f</sub> values for all spots and record in a table in
        your notebook.
      </li>
      <li>Identify each spot.</li>
      <li>
        Find the weight of solid recovered from each fraction (ferrocene and
        acetylferrocene).
      </li>
      <li>
        Calculate the total percent recovery: Total % recovery = % ferrocene + %
        acetyl ferrocene
      </li>

      <strong>Sample Calculation:</strong>
      <p>
        % Ferrocene = (weight of ferrocene / weight of starting mixture) x 100
      </p>
    </ol>
  </div>
);

const study_questions = () => (
  <div>
    <p>
      The R<sub>f</sub> values of three compounds on TLC plates developed with
      10:1 hexane:acetone are (A) 0.33, (B) 0.91, and (C) 0.54.
    </p>

    <p>
      <ol>
        <li>
          {" "}
          What would be their order of elution from an alumina column which is
          eluted with 10:1 hexane:acetone (i.e., which would elute first, second
          and third)?{" "}
        </li>
        <li>Explain your reasoning. </li>
        <li>
          What difference if any would be seen if the compounds were eluted from
          the column with 7:1 hexane:acetone? Explain.
        </li>
      </ol>
    </p>
  </div>
);

const discussion = () => (
  <div>
    <ol>
      <li>
        Which of your fractions contained ferrocene? Which contained acetyl
        ferrocene? Explain, using your data.
      </li>
      <li>
        Did you isolate pure samples of ferrocene and acetyl ferrocene? What is
        your evidence?
      </li>
      <li>
        Which of the two compounds is more polar? Explain. (Give evidence from
        this experiment and from the structures.)
      </li>
      <li>
        If the column in this experiment had been packed and eluted with
        dichloromethane instead of hexane, which of the compounds would have
        been eluted first? Explain.
      </li>
      <li>
        Comment on % recovery, agreement of the experimental results to theory,
        etc. etc. (Please keep it brief!)
      </li>
    </ol>
  </div>
);

const waste_disposal = () => (
  <div>
    <strong>
      <p>1. Column</p>
    </strong>

    <ol>
      <li>
        Completely drain the eluting solvent into the waste beaker and air dry
        the alumina in the column.
      </li>
      <li>
        Transfer alumina into the waste container labeled with “Basic Alumina
        Activity I” as demonstrated.
      </li>
      <li>
        Disassemble the stop-cock. Rinse each part with acetone thoroughly into
        the designated waste bottle in your hood. Set aside all parts of the
        stop- cock in a safe place.
      </li>
      <li>
        Rinse the column with acetone into the designated waste bottle in your
        hood.
      </li>
      <li>Wash with detergent and water.</li>

      <li>
        Leave the column and the disassembled stop-cock parts in the designated
        area.
      </li>
    </ol>

    <strong>
      <p>2. All Left-Over Organic Liquids</p>
    </strong>
    <ol>
      <li>
        Transfer any liquids containing ferrocene and acetylferrocene into the
        designated waste bottle in your hood.
      </li>
      <li>
        Transfer remaining organic liquids into the designated waste bottle in
        your hood.
      </li>
    </ol>

    <strong>
      <p>3. TLC</p>
    </strong>
    <ol>
      <li>
        Dispose of the eluting solvent into the designated waste bottle in your
        hood.
      </li>
      <li>
        Dispose of the TLC plates in the solid waste container in the waste
        hood.
      </li>
      <li>Leave the developing jars open in your hood.</li>
    </ol>

    <strong>
      <p>4. Glassware</p>
    </strong>
    <ol>
      <li>Rinse with acetone into the designated waste bottle in your hood.</li>
      <li>Wash with detergent and water.</li>
      <li>Discard used capillary tubes into the broken glass bin.</li>
    </ol>

    <p>
      <strong>
        Leave the waste bottles in your hood at the end of the day.
      </strong>
    </p>
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
            On an analytical balance, weigh about 0.1500 g (note the exact
            amount to four decimal places) of starting material, a mixture of
            1:1 ferrocene and acetylferrocene, in a 20 mL beaker. Dissolve the
            sample in 1 mL of methylene chloride.
          </td>

          <td>
            <p>Wear lab coat, goggles, and gloves when in lab.</p>
            <p>Methylene chloride is suspected of causing cancer.</p>
            <p>Avoid exposure and inhalation of all solvents.</p>
          </td>
        </tr>
      </table>
    </div>
  );

  const procedure_2 = () => (
    <div>
      <p>
        <b>TLC Analysis of the 1:1 Mixture of Ferrocene and Acetylferrocene</b>
      </p>

      <table border="1">
        <tr>
          <th>Experimental Procedure</th>
          <th>Safety Precautions</th>
        </tr>

        <tr>
          <td width="60%">
            You are given two silica gel coated TLC plates; one TLC plate is
            narrow and the other is wide.
          </td>

          <td>
            <p>Use tweezers when handling your TLC plates.</p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Spot the sample solution on the narrow silica gel coated TLC plate,
            close to the left edge (about 0.5 cm from the edge). This is spot A.
          </td>

          <td>
            <p>
              Capillary tubes are fragile, be careful when handling them.
              Dispose of the used tubes in the broken glass container.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Spot the standard solution of ferrocene and acetylferrocene.
          </td>

          <td>
            <p>
              Capillary tubes are fragile, be careful when handling them.
              Dispose of the used tubes in the broken glass container.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Develop the plate with 1:1 hexane- ethyl acetate as the developing
            solvent.
          </td>

          <td>
            <p>
              Hexane is volatile. Avoid exposure to and inhalation of solvent
              fumes. Be sure to keep the developing jar capped at all times.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Carefully outline all spots and record the colors immediately after
            developing. (UV visualization, if needed, should be carried out
            immediately.)
          </td>

          <td>
            <p>Complete all work in your hood.</p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Draw an exact replica of the plate in your note book under
            observations.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Use your wider silica gel coated TLC plate for this step. Spot the
            sample solution on the wider silica gel coated TLC plate, close to
            the left edge (about 0.5 cm from the edge). This is spot A.
          </td>

          <td>
            <p>Complete all work in your hood.</p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Put this TLC plate away in a safe place. More spots will be added to
            it later. Set aside. It will be used in step 5g.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Add about 0.5 g alumina to the sample solution. (If your sample is
            dry, add 1 mL methylene chloride and dissolve the mixture to form a
            solution and then add alumina).
          </td>

          <td>
            <p>
              Alumina causes respiratory irritation as they are very fine
              particles. Sometimes it may cause skin irritation. Wear gloves
              while transferring alumina. Avoid inhalation and contact of
              alumina particles as well.
            </p>
          </td>
        </tr>
      </table>
    </div>
  );

  const procedure_3 = () => (
    <div>
      <p>
        <b>Column Preparation (Packing the Column)</b>
      </p>

      <table border="1">
        <tr>
          <th>Experimental Procedure</th>
          <th>Safety Precautions</th>
        </tr>

        <tr>
          <td width="60%">
            Obtain about 80mL of hexane in a clean and dry 125 mL Erlenmeyer
            flask.
          </td>

          <td>
            <p>
              Hexane is volatile. Avoid inhalation of and exposure to solvent
              fumes. Complete all work in your hood.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Obtain about 20-25mL of each of the other two other solvents (10:1
            hexane:ethyl acetate and 1:1 hexane-ethyl acetate) to be used for
            the elution of the column in clean and dry Erlenmeyer flasks.
          </td>

          <td>
            <p>
              Avoid inhalation of and exposure to solvent fumes. Complete all
              work in your hood.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Keep all these solvents covered using appropriately sized watch
            glasses or small beakers.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Place a small wad of glass wool at the bottom of the column.
          </td>

          <td>
            <p>
              Glass wool is fine woven glass fiber (like cotton candy made from
              spun sugar). It can cut your fingers/hands. Wear gloves when
              handling glass wool.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Add enough sand (~one scoopula) to cover the glass wool completely.
            Place a clean, dry beaker under the stopcock tip.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">Fill about 2/3 of the column with hexane.</td>

          <td>
            <p>
              Hexane is volatile. Avoid inhalation of and exposure to solvent
              fumes. Complete all work in your hood.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Measure 13 mL of basic alumina, activity I, in a dry 25 mL graduated
            cylinder. Alumina rapidly absorbs moisture from the air and this
            reduces its separating power, so{" "}
            <strong>
              {" "}
              alumina should be measured just before adding it to the column.
            </strong>
          </td>

          <td>
            <p>
              Alumina causes respiratory irritation as they are very fine
              particles. It may cause skin irritation. Wear gloves while
              transferring alumina. Avoid inhalation and contact of alumina
              particles as well.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Pour the measured alumina into the column using a powder funnel
            (funnel with wider neck). Tap the column gently as you pour the
            alumina.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            When all of the alumina has been added, open the stopcock and allow
            the solvent to drain until its level is about 1 cm above the top of
            the alumina. Use the excess solvent in the flask to wash down any
            alumina adhering to the inside column walls.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Add a little bit of sand to form a thin layer above the alumina.
            Adjust the solvent level so that it is just above the level of the
            sand and let the column walls dry for a couple of minutes.
          </td>

          <td>
            <p></p>
          </td>
        </tr>
      </table>
    </div>
  );

  const procedure_4 = () => (
    <div>
      <p>
        <b>Chromatography Procedure</b>
      </p>

      <p>
        <b>A. Loading the Sample</b>
      </p>

      <table border="1">
        <tr>
          <th>Experimental Procedure</th>
          <th>Safety Precautions</th>
        </tr>

        <tr>
          <td width="60%">
            Use a plastic powder funnel (funnel with wider neck) to transfer the
            sample prepared in step 1a to the column.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Rinse the beaker with a few drops of hexane, and add this to the
            column. Allow the sample to run onto the column.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Add a small amount of sand(~one scoopula) to form a thin layer above
            the sample.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Add small portions of hexane(~0.5 mL) and open the stopcock, to
            allow the sample to run onto the column.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Continue to add small portions of hexane (~0.5 mL) until the solvent
            above the sand (top layer sand) remains colorless.
          </td>

          <td>
            <p></p>
          </td>
        </tr>
      </table>

      <br />

      <p>
        <b>B. Eluting the Sample</b>
      </p>

      <table border="1">
        <tr>
          <th>Experimental Procedure</th>
          <th>Safety Precautions</th>
        </tr>

        <tr>
          <td width="60%">
            Label three 100 mL beakers as 1, 2, and 3. These beakers will be
            used to collect the components (fractions) of the mixture as they
            elute from the column.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            After the sample has been applied to the column, begin eluting as
            described below: Fill the top of the column with hexane. Open the
            stopcock and allow the column to run continuously. DO NOT CLOSE THE
            STOPCOCK and DO NOT ALLOW THE LEVEL OF ELUTING SOLVENT TO FALL BELOW
            THE SAND AT THE TOP OF THE COLUMN. (Add solvent as needed.)
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Collect the initial colorless eluent in a waste beaker.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            When the first colored band is about 1 cm from the bottom of the
            column, start collecting the fraction in the beaker labeled 1, and
            continue eluting with hexane until all of the first colored band has
            been eluted from the column.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Change the eluting solvent to 10:1 hexane-ethyl acetate and collect
            the intermediate fraction in the beaker labeled 2, until the second
            colored band is about 1 cm from the bottom of the column.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Change the eluting solvent to 1:1 hexane-ethyl acetate when the
            second colored band is about 1 cm from the bottom of the column, and
            change the collecting flask to the third beaker (labeled 3).
            Continue to collect this fraction until the glass wool at the bottom
            of the column is white.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Rinse any crystals that adhere to the tip of the column into the
            beaker, using a plastic pipette to squirt some solvent onto the tip
            of the column.
          </td>

          <td>
            <p></p>
          </td>
        </tr>
      </table>
    </div>
  );

  const procedure_5 = () => (
    <div>
      <p>
        <b>Isolation and Identification of Fractions</b>
      </p>

      <table border="1">
        <tr>
          <th>Experimental Procedure</th>
          <th>Safety Precautions</th>
        </tr>

        <tr>
          <td width="60%">
            Transfer fraction 1 to a pre-weighed round bottom flask (RBF).
            Choose the RBF so that the amount of solution will not be more than
            half the volume of the RBF.
          </td>

          <td>
            <p>
              Hexane is volatile. Avoid inhalation of and exposure to solvent
              fumes.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Rinse the beaker with small amounts (2 x 2 mL) of hexane.
          </td>

          <td>
            <p>
              Hexane is volatile. Avoid inhalation of and exposure to solvent
              fumes.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Transfer fraction 3 to another pre- weighed RBF, and rinse as above.
          </td>

          <td>
            <p>
              Hexane is volatile. Avoid inhalation of and exposure to solvent
              fumes.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Evaporate the solvent from both fractions using the RotoVap.
          </td>

          <td>
            <p>
              Once the RBF is under vacuum in the RotoVap, do not try to remove
              glassware until it is returned to ambient pressure.
            </p>

            <p>
              Dry ice and isopropanol (rubbing alcohol) is used in the cold
              finger. Be careful when adding dry ice to the cold finger.
              Isopropanol spills easily if too much dry ice is added at a time.
            </p>

            <p>
              Be very careful when handling dry ice; it can cause frostbite.
              Wear oven mitts and use the provided metal scoop and container to
              transfer the dry ice.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Weigh the two RBF’s containing the solids from fractions 1 and 3.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Dissolve the solid in each RBF in 2 mL of methylene chloride.
          </td>

          <td>
            <p>Methylene chloride is suspected of causing cancer.</p>
            <p>Avoid exposure and inhalation of all solvents.</p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Spot each of these solutions on your wider TLC plate stored safely
            from step 2.
          </td>

          <td>
            <p>
              Use tweezers when handling your TLC plates. Capillary tubes are
              fragile, be careful when handling them. Dispose of the used tubes
              in the broken glass container.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Spot standard ferrocene and acetylferrocene solutions on the same
            TLC plate.
          </td>

          <td>
            <p></p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Develop the plate with 1:1 hexane-ethyl acetate as the eluting
            solvent.
          </td>

          <td>
            <p>
              Avoid exposure to and inhalation of solvent fumes. Be sure to keep
              the developing jar capped at all times.
            </p>
          </td>
        </tr>

        <tr>
          <td width="60%">
            Draw (to scale) a replica of the TLC plate in your notebook in your
            observation section.
          </td>

          <td>
            <p>Use tweezers when handling your TLC plates.</p>
          </td>
        </tr>
      </table>
    </div>
  );

  const procedureArray = [
    procedure_1(),
    procedure_2(),
    procedure_3(),
    procedure_4(),
    procedure_5()
  ];
  return procedureArray;
};

const Experiment_6 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal()
};

export default Experiment_6;

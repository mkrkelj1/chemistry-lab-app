import React from "react";

const prelab_assignment = () => (
  <div>
    {" "}
    <ol>
      <li>
        Prepare a Table of Physical Constants for the following compounds:
        bromobenzene, diethyl ether, biphenyl, benzoic acid, phenol, and
        magnesium. Include molecular weights, formulae, and (except for Mg)
        structures, and other relevant properties. Include in your Table the
        structures and melting points of the following compounds:
        diphenylmethanol (benzhydrol), 1,1-diphenylethanol, triphenylmethanol
        (triphenylcarbinol), and 1-phenylcyclohexanol.
      </li>
      <li>
        Predict the 1H NMR pattern (approximate chemical shifts and
        multiplicities) for all of these above compounds (diphenylmethanol --
        1-phenylcyclohexanol).{" "}
      </li>
      <li>
        An unknown alcohol had a melting point of 63-66° C. The chromic acid
        test gave a green precipitate. The literature value for the melting
        point of diphenylmethanol is 69° C, while the literature melting point
        of 1-phenylcyclohexanol is 63° C. Which of these compounds is most
        likely to be the unknown alcohol? Explain your answer.{" "}
      </li>
    </ol>
  </div>
);
const background = () => (
  <div>
    {" "}
    <h1>Grignard Reaction: Synthesis of Alcohols from Carbonyl Compounds</h1>
    <p>
      <img src="./image10.png" alt="Overall Scheme" width="90%" />
    </p>
    <h1>Introduction</h1>
    <p>
      The objective of the experiment is to prepare an alcohol by a Grignard
      reaction of an unknown carbonyl compound and to identify the unknown
      carbonyl compound. You will watch a video showing the preparation of the
      Grignard reagent and read the procedure for the reaction with the unknown
      carbonyl compound. You will then be given data including melting points,
      NMR spectra, and GC-MS spectra with which you will identify your unknown.
    </p>
    <p>
      <img
        src="./image11.png"
        alt="Figure 1a: Synthesis of Grignard Reagent"
        width="90%"
      />
    </p>
    <p>
      <img
        src="./image12.png"
        alt="Figure 1b: Reaction with Carbonyl Compound"
        width="90%"
      />
    </p>
    <p>
      <strong>
        Figure 1. Synthesis of Grignard Reagent and Reaction with Carbonyl
        Compound
      </strong>
    </p>
    <p>
      The preparation of the Grignard reagent, RMgX, is represented in equation
      1, where RX represents an organic halide. The exact nature of the Grignard
      reagent in solution is unknown. It is believed to be a mixture of numerous
      species. These species are highly solvated by ether and are complexed with
      one another. It is customary to represent the Grignard reagent by the
      formula RMgX when writing chemical equations, but it should be kept in
      mind that the species in solution are of a much more complex nature.
    </p>
    <p>
      <img
        src="./image14.png"
        alt="Equation 1. Preparation of the Grignard reagent, RMgX"
        width="90%"
      />
    </p>
    <p>
      <strong>Equation 1. Preparation of the Grignard reagent, RMgX</strong>
    </p>
    <p>
      The ether solvent is an essential part of the Grignard reagent, for ether
      is known to form a complex with the magnesium which is present in the
      reagent. Several cases are known where the Grignard reagents have been
      prepared in the absence of ether, but the yields are not good.
      Satisfactory yields are usually obtained when the ether is present. The
      most common ether solvent is ethyl ether, (C<sub>2</sub>H<sub>5</sub>)
      <sub>2</sub>O, due to its low cost and ease of removal (its boiling point
      is 36 &deg;C). The organic halide may, in general, be of any organic
      moiety (alkyl or aryl) and the halide may be bromide, chloride, or iodide.
    </p>
    <p>
      The preparation of the Grignard reagent must be carried out under
      anhydrous conditions and, if possible, in the absence of oxygen. In the
      laboratory, we would have conducted this experiment in an inert N
      <sub>2</sub> atmosphere; however the video demonstration is conducted in
      the presence of oxygen. The procedure in the lab manual notes where and
      how N<sub>2</sub> should be used while conducting this experiment, but it
      should be noted that the video of the preparation of the Grignard reagent
      differs in this way.
    </p>
    <p>
      It is exceedingly important to maintain completely dry conditions
      throughout, for the presence of water inhibits the initiation of the
      reaction, as well as destroying the reagent once it is formed.
    </p>
    <p>
      The reaction that occurs when the Grignard reagent comes in contact with
      water is shown in equation 2.
    </p>
    <p style={{ paddingLeft: "90px" }}>
      RMgX + H<sub>2</sub>O &rarr; RH + HOMgX (2)
    </p>
    <p>
      The reagent is a strong base, as one of the carbon atoms bears substantial
      negative charge (R<sup>-</sup> Mg<sup>2+</sup>X<sup>-</sup>). The Grignard
      reagent, acting as a base, removes a proton from water, which acts as an
      acid. The overall effect is the destruction of the reagent, with the
      formation of a hydrocarbon (RH) and a basic magnesium salt. Other
      compounds, such as alcohols and carboxylic acids, also destroy the
      Grignard reagent by analogous acid-base reactions.
    </p>
    <p>
      In addition to the reaction with water (equation 2), there are other side
      reactions that may occur during formation of the Grignard reagent, as
      shown in equations 3-5.
    </p>
    <p>Reaction with Oxygen:</p>
    <p style={{ paddingLeft: "90px" }}>
      2RMgX + O<sub>2</sub> &rarr; 2 RO<sup>-</sup>+MgX (3)&nbsp;
    </p>
    <p>Reaction with Carbon Dioxide:</p>
    <p style={{ paddingLeft: "90px" }}>
      RMgX + CO<sub>2</sub> &rarr; RCO<sup>2-</sup> +MgX (4)&nbsp;
    </p>
    <p>Coupling:</p>
    <p style={{ paddingLeft: "90px" }}>
      RMgX + RX &rarr; R-R + MgX<sub>2</sub> (5)
    </p>
    <p>
      It is possible to minimize these reactions by taking certain precautions
      when carrying out the experimental work. The reactions with oxygen and
      with carbon dioxide may be avoided by carrying out the reaction under an
      inert atmosphere (such as nitrogen or helium gas). For many practical
      purposes, an insert gas is not essential since, when ethyl ether is used
      as a solvent, it excludes a certain amount of air from the reaction vessel
      due to its very high vapor pressure.
    </p>
    <p>
      The coupling reaction (equation 5) is an example of a Wurtz reaction. It
      is not possible to eliminate this coupling reaction completely, but it may
      be minimized by using dilute solutions so as to avoid localized high
      concentrations of halide. This can be done by using very efficient
      stirring and by slowly adding the halide to the magnesium in ether.
      Normally the rate of addition of halide (dissolved in ether) and the rate
      of reflux (when ethyl ether is used) should be adjusted so that they are
      about equal. Alkyl iodides are much more prone to coupling reactions than
      are the bromides and chlorides, so that the latter are preferable for
      preparing Grignard reagents even though they are less reactive. If water
      has been carefully excluded, the most important side reaction is the
      coupling process, but it is not a significant problem. Once the reagent is
      prepared, it is used directly in subsequent reactions. The small amount of
      by-product need not be separated from the reagent before adding the
      carbonyl compound.
      <br />
      <br />
    </p>
    <p>
      <strong>Videos:</strong>
    </p>
    <p>
      Set-up video:{" "}
      <a href="https://www.youtube.com/watch?v=X70AKnefB-4">
        https://www.youtube.com/watch?v=X70AKnefB-4
      </a>
    </p>
    <ul>
      <li>
        This video shows the set-up of apparatus as would be done in the lab.
      </li>
    </ul>
    <p>
      Video of preparation of Grignard reagent:{" "}
      <a href="https://www.youtube.com/watch?v=YsrB0wPmnVM">
        https://www.youtube.com/watch?v=YsrB0wPmnVM
      </a>
    </p>
    <ul>
      <li>
        Students should note that the video is done under oxygen atmosphere and
        uses drying tube.
      </li>
      <li>
        Students may start at the video at 4:11 (when reaction starts to happen,
        bromobenzene, Mg, and ether have been added to RBF). This is equivalent
        to Step 8 in the lab manual procedure. Students can stop watching at
        6:25.
      </li>
      <li>
        Students should note where video digresses from Lab Manual instructions
        in observations.
      </li>
    </ul>
    <h1>References</h1>
    <ol>
      <li>Handbook of Chemistry and Physics</li>
    </ol>{" "}
  </div>
);

const procedure = () => {
  const procedure_1 = () => <div> <p><strong>Procedure</strong>:</p>
<table >
<tbody>
<tr>
<td>
<p><strong>Preparation of Grignard Reagent</strong></p>
</td>
<td>
<p><strong>Safety</strong></p>
</td>
</tr>
<tr>
<td>
<p>1. The <em>day before </em>your laboratory session place the following items in a 110&deg; C drying oven: 250 mL beaker (labeled with your initials) containing about 25 pieces of magnesium turnings, 2 small vials, a condenser, and a 50 mL (or a 25 mL) 2-neck or 3-neck RBF</p>
</td>
</tr>
<tr>
<td>
<p>2. Remove the glassware from oven and immediately cap the vials. Put a magnetic stir bar in the RBF. Cool under nitrogen.</p>
</td>
<td>
<p>Handle glassware with care. You must wear oven mitts to remove hot RBF from the oven. Hot glassware can cause burns. Remove the oven mitts after you insert the stir bar into the RBF, clamped onto a ring stand and cover the RBF&rsquo;s using septum. Nitrogen lines have needles. While inserting nitrogen lines and vent needles on to the septa, be careful not to poke your skin.</p>
</td>
</tr>
<tr>
<td>
<p>3. As soon as possible, take the beaker containing the Mg to a balance. Weight about 12 millimoles of Mg. Use forceps to handle the Mg. (If the traffic is too heavy, do step 4 first.) Put the Mg on a weighing paper. Transfer the Mg to the RBF and continue to flush with nitrogen. Record the exact weight of Mg.</p>
</td>
</tr>
<tr>
<td>
<p>4. Fill one vial with about 20 mL of ANHYDROUS ether from the container in the hood and immediately cover the vial with a septum. This should be more than enough for the entire experiment. KEEP THE VIAL CAPPED with the septum, and use the DRY 1 mL syringe in the microscale kit exclusively for measuring portions of this ether.</p>
</td>
<td>
<p>Needle (18G) attached to a syringe of appropriate volume is used for transferring ether. Follow the instructions correctly as given to you for transferring air sensitive reagents/solvents. Be careful not to poke yourself while using needles. The plunger of syringes may malfunction and leakage can happen.</p>
<p>Inhalation of ether vapors and contact should be avoided.</p>
</td>
</tr>
<tr>
<td>
<p>5. Add 3 mL of anhydrous ether to the RBF.</p>
</td>
</tr>
<tr>
<td>
<p>6. Calculate the number of moles of Mg actually used (atomic weight of Mg = 24.31 g/mole) and the equivalent number of grams of bromobenzene (MW = 157.02 g/mole). This should amount to 6.46 x (wt. of Mg), since grams PhBr = (157.02 / 24.31) x (g of Mg used) for equilimolar amounts. (The abbreviation PhBr will be used for bromobenzene = phenyl bromide).</p>
</td>
</tr>
<tr>
<td>
<p>7. Weigh the calculated amount of dry bromobenzene in the second oven-dried vial. Add 4.2 mL of anhydrous ether, cover the vial with a septum, and reattach the nitrogen.</p>
</td>
<td>
<p>Take care when handling bromobenzene. Can cause skin irritation.</p>
</td>
</tr>
<tr>
<td>
<p>8. Take 1.2 mL of PhBr-ether solution in a 5 mL syringe, and add it to the RBF. Disconnect the nitrogen. With a DRY 6 mm stirring rod, crush the magnesium by pressing and twisting the rod with the bottom of the RBF resting on the bench top. (Try not to insert the grass rod through the bottom of the RBF or the palm of your hand.) Initiation of the reaction is indicated by a slight cloudiness in the solution and by bubbles on the surface of the Mg. As soon as the reaction starts, reconnect the nitrogen, and connect the RBF to the condenser. Begin stirring.</p>
</td>
<td>
<p>Handle glassware with care.</p>
</td>
</tr>
<tr>
<td>
<p>9. Take the remaining PhBr-ether solution in the same 5 mL syringe. Insert the needle of this syringe through the septum. Add the solution to the RBF dropwise over a period of about 10 minutes. (<em>In video, a dropping funnel is used instead of a syringe to add PhBr-ether dropwise). </em>Adjust the rate of addition to maintain a gentle reflux of the ether. If the reaction becomes too vigorous, cool the bottom of the RBF in a beaker of room temperature water. When the spontaneous boiling of the mixture becomes slow, immerse the bottom of the RBF in a beaker of warm water (about 40&deg; C), and reflux the mixture gently until nearly all of the Mg has disintegrated or no further change is seen (about 15 min). The solution of phenyl magnesium bromide should look brownish and may be slightly cloudy. If the volume of solution has decreased to less than about half the volume of the RBF, add enough anhydrous ether (with your either syringe through the vent needle) to bring the volume back to about half the RBF. Allow the solution to cool to room temperature.</p>
</td>
<td>
<p>Handle glassware with care. Glassware can break and can cause injury. Make sure cooling water inlet and outlet are securely fastened onto the condenser.</p>
</td>
</tr>
<tr>
<td>
<p>10. Meanwhile, obtain a vial of unknown carbonyl compound solution, and record the number of the unknown in your notebook.</p>
</td>
</tr>
<tr>
<td>
<p><strong>Reaction of the Unknown Carbonyl Compound</strong></p>
</td>
</tr>
<tr>
<td>
<p>1. Rinse the syringe used for addition of the PhBr with about 0.5 mL of anhydrous ether. (Squirt the ether into the vial used for mixing the PhBr and cap it for later disposal.)</p>
</td>
<td>
<p>Inhalation of ether vapours and contact should be avoided.</p>
</td>
</tr>
<tr>
<td>
<p>2. Remove all of the unknown solution from the vial with the syringe and add it dropwise to the Grignard solution, as before, at such a rate that GENTLE reflux is maintained. The reaction is very exothermic. The reaction can be controlled, if necessary, by cooling the RBF in a beaker of water (room temperature). It is very important to mix the solution thoroughly by stirring well after each drop is added. After the addition of a few drops, a precipitate may form that makes mixing very inefficient. Some of the carbonyl compounds produce heavy precipitates that make mixing difficult.</p>
</td>
<td>
<p>Take care with this exothermic reaction. If necessary, control by cooling in a beaker of water.</p>
</td>
</tr>
<tr>
<td>
<p>3. After all the unknown solution has been added, rinse the vial with a few drops of anhydrous ether, and add this rinse to the RBF with the addition syringe.</p>
</td>
<td>
<p>Inhalation of ether vapours and contact should be avoided.</p>
</td>
</tr>
<tr>
<td>
<p>4. Gently reflux the mixture for 15 minutes to complete the reaction. Use a beaker of warm water (about 40&deg; C) as the heat source. If any of the ether evaporates, replace it with anhydrous ether.</p>
</td>
<td>
<p>Wear oven mitts while handling hot plates and hot glassware.</p>
</td>
</tr>
<tr>
<td>
<p><strong>Isolation of the Crude Alcohol Product</strong></p>
</td>
</tr>
<tr>
<td>
<p>1. At the end of the 15-minute reflux, cool the RBF in ice water. Then pour the entire contents into a large test tube. Cool the test tube in ice water. Rinse the RBF with three 3 mL portions of 25% NH4Cl. Transfer as much solid as possible to the large test tube with each rinse. Then rinse with 3 mL of ether. (Technical ether may be used for this and all following procedures.) If solid material persists in the mixture, stir and add 1.0 mL portions of 25% NH4Cl or ether (whichever has the greatest effect) until the solid dissolves. The product is in the ether layer. Ignore any solid Mg and/or cloudiness in the bottom aqueous layer.</p>
</td>
<td>
<p>Inhalation of ether vapours and contact should be avoided.</p>
</td>
</tr>
<tr>
<td>
<p>2. Separate the layers by removing the lower layer with a Pasteur pipet held firmly against the test tube bottom. Fit the centrifuge tube from the microscale kil with a funnel, and decant the ether solution of reaction products into this centrifuge tube, leaving any remaining Mg in the large test tube.</p>
</td>
</tr>
<tr>
<td>
<p>3. Extract the ether layer with 3 mL of saturated sodium bisulfite solution. Separate the layers with a Pasteur pipet, and then extract with 6 mL of 10% sodium bicarbonate solution. Separate again, and finally extract with 3 mL of saturated sodium chloride solution. Separate the layers cleanly at this point.</p>
</td>
<td>
<p>Avoid contact with sodium bisulfite.</p>
</td>
</tr>
<tr>
<td>
<p>4. Dry the ether layer in the test tube with anhydrous potassium carbonate for about 15 minutes. Cap the test tube and invert it occasionally. Meanwhile, record the tare weight of a 50 mL dry Erlenmeyer flask.</p>
</td>
<td>
<p>Avoid contact with potassium carbonate.</p>
</td>
</tr>
<tr>
<td>
<p>5. Put a small, loose wad of cotton into the microscale kit plastic funnel and filter the ether solution into a tared flask. Use a dry pipet to transfer the solution and leave the drying agent in the tube. Rinse the drying agent with two small portions of ether, and add the washings to the product in the tared flask.</p>
</td>
</tr>
<tr>
<td>
<p>6. Remove the ether completely using the RotoVap. Cover the flask with a Kimwipe and store it in a beaker with a label.</p>
</td>
</tr>
<tr>
<td>
<p><strong>Clean-Up</strong></p>
</td>
</tr>
<tr>
<td>
<ol>
<li>Rinse any glassware that has a white film (magnesium hydroxide) with 3 M HCl, then with water, and finally with acetone</li>
</ol>
</td>
<td>
<p>HCl is corrosive and causes burns. Wear gloves while you dispense HCl.</p>
</td>
</tr>
<tr>
<td>
<p><strong>Recrystallization</strong></p>
</td>
</tr>
<tr>
<td>
<p>1. Test the solubility of a spatula-tip full of crude produce in hot and cold ligroine. If ligroine is not a suitable solvent for recrystallization, then try ethanol. If neither is suitable for recrystallization, try a mixed solvent of ethanol-water. A mixed solvent recrystallization is done as follows:</p>
<ol>
<ol>
<li>Add a few drops of the good solvent (ethanol) to the solid. Heat to boiling. Add more solvent until the solid dissolves.</li>
<li>Add drops of poor solvent (water) to the hot solution (stir), until a slight cloudiness persists.</li>
<li>Add drops of good solvent until the boiling solution becomes clear.</li>
<li>Cool and filter as usual.</li>
</ol>
</ol>
<p>As a last resort, a mixed solvent of ethyl acetate (good) and ligroine might be examined. Summarize the results of your solubility tests in tabular form in your notebook.</p>
</td>
<td>
<p>Hot plate used for heating solvents is HOT. Wear oven mitts while handling hot plates.</p>
</td>
</tr>
<tr>
<td>
<p>2. Set aside enough of the crude product for a melting point and to use for seed crystals in case your alcohol product is not easy to crystallize. Recrystallize the remainder from the most suitable solvent. Allow plenty of time for complete crystallization in the ice-cold solvent, since some of the alcohol products crystallize very slowly.</p>
</td>
</tr>
<tr>
<td>
<p>3. Collect the purified product by vacuum filtration with the microscale kit filter flask and Hirsch funnel. (Remember to clamp the flask.) Wash the product with ice-cold solvent. Spread the crystals on a filter paper. Crush any large lumps with a spatula to hasten the drying process.</p>
</td>
<td>
<p>Clamp the filter flask securely before placing Buchner funnel.</p>
</td>
</tr>
<tr>
<td>
<p>4. Weight your product when it is completely dry.</p>
</td>
</tr>
<tr>
<td>
<p><strong>Analysis of the Product</strong></p>
</td>
</tr>
<tr>
<td>
<p>1. Carefully determine the melting point ranges of your crude and purified products.</p>
</td>
</tr>
<tr>
<td>
<p>2. Take the <sup>1</sup>H, <sup>13</sup>C NMR, DEPT135, and GC-MS of your product.</p>
</td>
</tr>
</tbody>
</table> </div>;
  const procedureArray = [procedure_1()];
  return procedureArray;
};

const results = () => (
  <div>
    <h1>Report</h1>
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
        <a href="./grignard cover sheet.docx">
          Link to download report cover sheet
        </a>
      </strong>
    </p>{" "}
  </div>
);

const study_questions = () => <div> 
<ol>
<li>Write a reasonable mechanism for the Grignard Reaction. </li>
<li>There are two possible sites on 1-bromo-4-fluorobenzene for insertion of the Mg atom into a C-X bond, and thus two different Grignard reagents that could be formed. </li>
<br/><blockquote>a) Draw each of the possible Grignard reagents.<br/></blockquote>
</ol>
 </div>;

const discussion = () => (
  <div>
    {" "}
    <p>
      <em>Note</em>: This is Post-lab Assignment
    </p>
    <ol>
      <li>Identification and Calculations</li>
      <br />
      <blockquote>
        a. Identify your product based on its melting point and the NMR results.
        <br />
        b. Identify the ketone or aldehyde that must have been in the original
        unknown solution.
        <br />
        c. Calculate the theoretical yield of your product, the percent yield of
        crude product, and the percent yield of purified product. (Assume that
        magnesium is the limiting reagent.) Show work for your calculations.
        Prepare a yield table showing the weight used, molecular weight, and the
        number of moles for each substance used in the reaction.
        <br />
      </blockquote>
      <li>
        Write a lab report in the proper format including observations from the
        video.{" "}
      </li>
      <li>
        After watching the video (the synthesis of Grignard reagent), suggest
        two improved safety measures that the video did not mention or practice.
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

const Experiment_21 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal(),
};

export default Experiment_21;

import React from "react";

const cache = {};
function importAll(r) {
  r.keys().forEach(key => (cache[key] = r(key)));
}

importAll(require.context("../assets/images/", false, /\.png$/));
importAll(require.context("../assets/coversheets/", true, /\.docx$/));
        

const tableStyle = {
  borderCollapse: "collapse",
  marginLeft: "auto",
  marginRight: "auto",
  border: "all",
  cellPadding: "15",
};

const prelab_assignment = () => (
  <div>

    <ol>
      <ol>
        <ol>
          <li>
            Find a journal article from this year detailing the multistep
            synthesis of a natural product. The title of the paper will probably
            contain the words &ldquo;Total Synthesis of&hellip;&rdquo;. Good
            places to look are{" "}
            <em>Journal of the American Chemical Society,</em>{" "}
            <em>The Journal of Organic Chemistry</em>, <em>Organic Letters</em>,
            and <em>Tetrahedron Letters</em>. Count the total number of steps in
            the synthesis and calculate an overall yield for the longest linear
            sequence in the synthesis. Turn in a pdf of the paper with your
            pre-lab.
          </li>
          <li>
            You will run the following reaction this week and perform IR
            spectroscopy.&nbsp;
            <p>
              <img

              src={cache["./16_image8.png"]}
                alt="Acetanilide to p-Nitroaniline"
                width="90%"
              />
            </p>
          </li>
          <li>
            Describe the major change in IR spectra pattern when the reaction
            proceeds from acetanilide to <em>p</em>-nitroaniline.&nbsp;
          </li>
          <li>
            Perform computation of the vibrational frequency of acetanilide and{" "}
            <em>p</em>-nitroaniline by MOPAC/PM3 (scaling factor 0.9661) and
            examine characteristic peaks in the IR spectra. Identify the motion
            of each and note down the wave numbers. Use the given scaling factor
            for correction. Finally, look up the experimental wave numbers of
            each motion for comparison. You can use the following format for
            your answer.
          </li>
        </ol>
      </ol>
    </ol>

    <table style={tableStyle}>
      <tbody>
        <tr>
          <td style={{ width: "282px" }} colspan="4">
            <p style={{ textAlign: "center" }}>acetanilide</p>
          </td>

          <td style={{ width: "283px" }} colspan="4">
            <p style={{ textAlign: "center" }}>
              <em>p</em>-nitroaniline
            </p>
          </td>
        </tr>
        <tr>
          <td style={{ width: "48px" }}>
            <p>Motion</p>
          </td>
          <td style={{ width: "47px" }}>
            <p>PM3</p>
            <p>
              (cm<sup>-1</sup>)
            </p>
          </td>
          <td style={{ width: "47px" }}>
            <p>Scaled</p>
            <p>
              (cm<sup>-1</sup>)
            </p>
          </td>
          <td style={{ width: "47px" }}>
            <p>Exp.</p>
            <p>value</p>
            <p>
              (cm<sup>-1</sup>)
            </p>
          </td>
          <td style={{ width: "48px" }}>
            <p>Motion</p>
          </td>
          <td style={{ width: "47px" }}>
            <p>PM3</p>
            <p>
              (cm<sup>-1</sup>)
            </p>
          </td>
          <td style={{ width: "47px" }}>
            <p>Scaled</p>
            <p>
              (cm<sup>-1</sup>)
            </p>
          </td>
          <td style={{ width: "48px" }}>
            <p>Exp.</p>
            <p>value</p>
            <p>
              (cm<sup>-1</sup>)
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

const background = () => (
  <div>
    <h1>
      <strong>
        Synthesis of <em>p</em>-Nitroaniline
      </strong>
    </h1>
    <p>
      <img src={cache["./16_image10.png"]} alt="overall scheme" width="90%" />
    </p>
    <h1>Introduction</h1>
    <p>
      In this experiment you will synthesize p-nitroaniline starting from
      acetanilide (Figure 1). The initial step is a nitration reaction, a type
      of electrophilic aromatic substitution, in which a nitro group replaces
      one of the hydrogens on the benzene ring. Next, amide hydrolysis provides
      para-nitroaniline, which is separated from the ortho-isomer by
      recrystallization.
    </p>
    <p>
      <img
        src={cache["./16_image5.png"]} 
        alt="Figure 1: Summary of reactions to synthesize p-Nitroaniline"
        width="90%"
      />
    </p>
    <div>Figure 1: Summary of reactions to synthesize p-Nitroaniline</div>
    <p>
      The challenge of starting from simple materials to synthesize more complex
      molecules is central to organic chemistry. Your synthetic target,
      p-nitroaniline is commercially available for $4.56/g. Let us assume that
      this exorbitant price charged by Aldrich is beyond your means, but that
      you have access to cheap, readily available starting materials in your
      laboratory. The problem is to devise a step or a series of steps
      connecting your synthetic target to those starting materials. In planning
      this route, think initially in terms of an overall plan or strategy,
      leaving the operational details or tactics for later. A retrosynthetic
      approach is a synthetic strategy that involves starting the product and
      working backwards toward potential starting materials. Identify a key
      group in the molecule that you are trying to make, and ask yourself what
      precursors you could use to construct that key structural feature.
    </p>
    <p>
      <img
   
        src={cache["./16_image4.png"]} 
        alt="Figure 2. Retrosynthetic analysis of p-Nitroaniline"
        width="90%"
      />
    </p>
    <div>Figure 2. Retrosynthetic analysis of p-Nitroaniline</div>
    <p>
      For this experiment the target, p-nitroaniline, is a nitro- substituted
      aniline. Without worrying exactly how the aryl amine will be converted to
      the nitro compound, the chemist uses the retrosynthetic arrow to show that
      the nitro function in the target &ldquo;suggests as a starting
      material&rdquo; aniline (Figure 2). Given your knowledge of electrophilic
      aromatic substitution, a para-substituted nitroaniline suggests for its
      synthesis a nitration reaction, with the corresponding aniline as the
      starting material. Aniline is a common chemical found on a laboratory
      shelf. Aldrich sells aniline for about $0.06/g.
    </p>
    <p>
      The tactical aspects of the p-nitroaniline synthesis are left for you to
      consider. It is a matter of providing specific reagents and methods for
      making the synthetic connection between aniline and p-nitroaniline. This
      time, you will work in the forward direction. Finally, the detailed
      synthesis plan is put to the ultimate test in the laboratory. Few
      syntheses proceed exactly as planned. It is a measure of your skill as an
      organic chemist to overcome obstacles and bring a well-conceived synthetic
      scheme to a successful conclusion.
    </p>
    <div>
      <h2>Video</h2>
      <a href="https://www.youtube.com/watch?v=YKHUnHDphTc">
        https://www.youtube.com/watch?v=YKHUnHDphTc
      </a>
    </div>
    <div>
      <p>
        <strong>
          <em>Notes:</em>
        </strong>{" "}
        Usually, the reaction flask is heated in an oil bath or sand bath. In
        the video, sulfuric acid is added by pouring from a beaker. Is there a
        better way to add acid, given the various safety hazards? You can skip
        3:39-5:20 of the video as it is not related to the procedure. However,
        it does provide an explanation of the reaction mechanism which might be
        helpful. When adding water and hydrochloric acid to the reaction flask
        via a funnel (7:13), be sure to secure the funnel with a ring stand. DO
        NOT touch hot RBF (8:32). Let the reaction flask cool before
        transferring.
      </p>
    </div>
    <h1>References</h1>
    <ol>
      <li>
        Most, C. F. Experimental Organic Chemistry, John Wiley &amp; Sons, New
        York, 1988, pp 417-425
      </li>
      <li>
        {" "}
        Jones, M., Jr. Organic Chemistry, 3rd ed., W. W. Norton &amp; Company,
        New York, 2005, pp 686-687 (nitration, 697-699 (preparation and
        reactions or aryl diazonium salts), 720-726 and problem 14.35 (nitration
        of acetanilide), 1054-1055 (amide hydrolysis).
      </li>
    </ol>
  </div>
);

const procedure = () => {
  const procedure_1 = () => (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <p>
                <strong>Preparation of 4-nitro-acetanilide</strong>
              </p>
            </td>
            <td>
              <p>
                <strong>&nbsp;Safety Precautions</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                1. In an oven-dried RBF, glacial acetic acid (40 mL) is added to
                acetanilide (34g).
              </p>
            </td>
            <td>
              <p>
                Wear goggles, gloves and lab-coat. Handle glassware with care.
                Glassware can break and can cause injury. Glacial Acetic acid is
                corrosive. You must wear gloves while dispensing acid.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                2. The reaction flask is heated to about 65 ℃. After the
                acetanilide is fully dissolved, the reaction mixture is cooled
                to 50 ℃
              </p>
            </td>
            <td>
              <p>
                Hot plate used for heating is HOT. Wear oven mitts while
                handling hot plates as they can cause burns. If you have an
                injury or burn, immediately notify your instructors.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                3. Ice cold concentrated sulfuric acid (50 mL) is carefully and
                slowly added to the reaction flask. The reaction flask is placed
                in an ice bath and cooled to 5 ℃.
              </p>
            </td>
            <td>
              <p>
                Concentrated sulfuric acid is <strong>very corrosive. </strong>
                Concentrated sulfuric acid can cause severe burns including
                damage to eyes. Wear thick gloves while handling. If you have
                contact with it, wash immediately and thoroughly with cold
                running water. Notify the instructors while you continue to
                wash.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                4. Separately to a 125 mL Erlenmeyer Flask on ice, add
                concentrated nitric acid (20 mL) followed by concentrated
                sulfuric acid (30 mL).
              </p>
            </td>
            <td>
              <p>
                Concentrated sulfuric acid is <strong>very corrosive. </strong>
                Concentrated sulfuric acid can cause severe burns including
                damage to eyes. Wear thick gloves while handling.
              </p>
              <p>
                <strong>
                  It is very important that you add conc. Sulfuric acid to conc.
                  Nitric acid
                </strong>
              </p>
              <p>
                If you have contact with it, wash immediately and thoroughly
                with cold running water. Notify the instructors while you
                continue to wash.
              </p>
              <p>
                If you spill acid on the counter, notify the instructor
                immediately
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                5. Once ice cold, add the nitrating solution slowly to the
                reaction flask via pipette.&nbsp;
              </p>
            </td>
            <td>
              <p>
                The acid mixture is very corrosive. You must wear thick gloves
                and goggles adding the nitration mixture.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                6. After stirring for 40 minutes, the reaction flask is added to
                the 100 mL of ice water. The desired intermediate is isolated
                via filtration.
              </p>
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>Hydrolysis of Amide</strong>
              </p>
            </td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <p>
                7. In a 100 mL RBF, distilled water (100 mL) is added followed
                by concentrated hydrochloric acid (100 mL).
              </p>
            </td>
            <td>
              <p>
                Concentrated hydrochloric acid is{" "}
                <strong>very corrosive. </strong>Concentrated hydrochloric acid
                can cause severe burns including damage to eyes. Wear thick
                gloves while handling.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                8. The intermediate is added to the reaction flask. The reaction
                flask is subsequently refluxed for 15-20 min.
              </p>
            </td>
            <td>
              <p>
                Hot plates used for heating are HOT. Wear oven mitts while
                handling hot plates as it might cause burns. If you have an
                injury or burn, immediately notify you instructors.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                9. After refluxing, distilled water (200 mL) is added and the
                reaction mixture is left to cool to room temperature.
              </p>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <p>
                10. Ice-cold concentrated ammonium hydroxide solution (100 mL)
                is added to the reaction flask.&nbsp;
              </p>
            </td>
            <td>
              <p>
                Ammonium hydroxide is corrosive, and has a pungent odor. Beware
                that ammonia gas can evolve from solution. Avoid inhalation and
                exposure to ammonia.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                11. The precipitate is collected via vacuum filtration. The
                precipitate is rinsed with ice-cold distilled water (100
                mL).&nbsp;
              </p>
            </td>
            <td>
              <p>
                Clamp the filter flask securely before placing Buchner
                funnel.&nbsp;
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                <strong>Recrystallization</strong>
              </p>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <p>
                12. The crude product is dissolved in hot ethanol (150 mL) and
                allowed to cool to room temperature. After being cooled to room
                temperature. The beaker is placed in an ice bath.
              </p>
            </td>
            <td>
              <p>
                Avoid exposure and inhalation of all solvents. Use oven mitts
                when handling hot solvent and hot plates.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                13. The precipitate is collected via vacuum filtration, and
                washed with a couple portions of cold ethanol. The purity of the
                product is checked via melting point and thin layer
                chromatography (TLC).
              </p>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <p>
                14. A small amount (&lt; 5 mg) of the product is dissolved in
                methylene chloride and compared by TLC to authentic samples of{" "}
                <em>o</em>- and <em>p</em>-nitroaniline, using 1:1
                EtoOAc-hexanes as the developer. If necessary, the material is
                further purified by a second recrystallization.&nbsp;
              </p>
            </td>
            <td>
              <p>
                Methylene chloride is suspected of causing cancer. Avoid
                exposure and inhalation of all solvents. <em>p-</em>nitroaniline
                is toxic if swallowed, in contact with skin or inhaled.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                15. The product is characterized by melting point determination
                and IR spectroscopy.
              </p>
              <p>
                **You should think about why you see two N-H IR absorptions.
              </p>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>{" "}
    </div>
  );
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
        <a href={cache["./16_nitroaniline_coversheet.docx"]}>
          Link to download report cover sheet
        </a>
      </strong>
    </p>
  </div>
);

const study_questions = () => (
  <div>
    {" "}
    <ol>
      <li>
        Why is acetanilide, rather than aniline itself, used in this synthesis?
      </li>
      <li>
        Write the mechanism of nitration of acetanilide. Be sure to include
        structures to explain why the <em>ortho-</em> and <em>para-</em> isomers
        are predominantly formed.
      </li>
      <li>
        What is the role of ammonium hydroxide in the acid-catalyzed hydrolysis
        of <em>p</em>-nitroacetanilide to <em>p</em>-nitroaniline
      </li>
    </ol>
  </div>
);

const discussion = () => (
  <div>
    <ol>
      <li>
        Why is acetanilide, rather than aniline itself, used in this synthesis?
      </li>
      <li>
        Write the mechanism of nitration of acetanilide. Be sure to include
        structures to explain why the <em>ortho-</em> and <em>para-</em> isomers
        are predominantly formed.
      </li>
      <li>
        What is the role of ammonium hydroxide in the acid-catalyzed hydrolysis
        of <em>p</em>-nitroacetanilide to <em>p</em>-nitroaniline
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


const Experiment_16 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal(),
};

export default Experiment_16;

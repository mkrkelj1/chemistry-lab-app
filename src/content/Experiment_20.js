import React from "react";


const cache = {};
function importAll(r) {
  r.keys().forEach(key => (cache[key] = r(key)));
}

importAll(require.context("../assets/images/", false, /\.png$/));
importAll(require.context("../assets/coversheets/", true, /\.docx$/));
        

        
const prelab_assignment = () => (
  <div>
    <p>
      <em>Note</em>: <strong>Pre-Lab Assignment for Aldol Reaction </strong>
    </p>
    <ol>
      <li>
        Write the mechanism for both the acid- and base-catalyzed pathways for
        the Aldol Reaction.
      </li>
      <li>
        Write out the mechanism for the dehydration of a β-hydroxyketone in
        acid.
      </li>
    </ol>

    <p>
      <em>Note</em>:{" "}
      <strong>No Pre-Lab Assignment for Keto - Enol Equilibrium</strong>
    </p>
  </div>
);

const background = () => (
  <div>
    <p>
      <em>Note</em>:{" "}
      <strong>
        Carbonyl Chemistry Lab has two parts: Aldol Reaction and Keto-Enol
        Equilibrium Study
      </strong>
    </p>
    <h1>Part I - Introduction - Aldol Reaction</h1>
    <p>
      The Aldol Reaction is a reaction in which an &alpha;-carbon of an enol or
      enolate is nucleophilic and adds to a carbonyl compound. The result of
      this reaction is an aldol (&beta;-hydroxyaldehyde or &beta;-hydroxyketone)
      which is then followed by an essentially irreversible dehydration reaction
      to form a &alpha;-&beta; unsaturated carbonyl (Figure 1). The combined
      steps of aldol reaction and dehydration is called the aldol condensation.
    </p>
    <p>
      <img 

      
      src={cache["./20_image5.png"]}
      alt="Figure 1. Aldol Condensation"
      width="90%" />
    </p>
    <p style={{ textAlign: "center" }}>
      <strong>Figure 1. Aldol Condensation</strong>
    </p>
    <p>
      The aldol condensation is an important pathway for creating C-C bonds in
      organic synthesis. In addition, the &alpha;-&beta; unsaturated carbonyl
      can undergo further synthetic steps through nucleophilic addition.
    </p>
    <p>
      <strong>Video:</strong>
    </p>
    <p>
      <a href="https://www.youtube.com/watch?v=fbNf_guvK_0">
        https://www.youtube.com/watch?v=fbNf_guvK_0
      </a>
    </p>
    <h1>References</h1>
    <ol>
      <li>Handbook of Chemistry and Physics</li>
    </ol>
    <h1>Part II - Introduction - Keto - Enol Equilibrium</h1>
    <p>
      Keto-enol tautomerism is the enolization of a ketone or aldehyde to its
      corresponding enol or enolate and the equilibrium conditions between the
      two forms. Enolization can take place in either acidic conditions
      (resulting in an enol) or basic conditions (resulting in an enolate).
      Typically, the keto form dominates at equilibrium. However,
      &beta;-dicarbonyls are far more extensively enolized than molecules with
      isolated carbonyl groups because they are significantly more acidic.
    </p>
    <p>
      <img
       
         src={cache["./20_image4.png"]}
        alt="Figure 1. Keto-enol tautomerism of ethyl acetoacetate."
        width="90%"
      />
    </p>
    <p>
      <strong>Figure 1. Keto-enol tautomerism of ethyl acetoacetate.</strong>
    </p>
    <p>
      The equilibrium factor can be expressed in the Keq equation. In this
      assignment, you will visualize the enolization of ethyl acetoacetate and
      calculate the Keq for the keto-enol equilibrium using 1H NMR. In addition
      to illuminating the structure of a molecule, NMR spectra also provide the
      relative concentration of different species present at equilibrium. The
      integration of a peak of the enol form and one of the keto form can be
      used to calculate Keq. Note that weighting factors based on the number of
      protons being represented by the peak must be taken into account during
      calculations.
    </p>
    <p style={{ textAlign: "center" }}>
      <img src={cache["./20_image1.png"]} alt="Equilibrium constant equation" width="90%" />
    </p>
    <p>
      <strong>Video</strong>
    </p>
    <p>
      <a href="https://www.youtube.com/watch?v=Es6FE6NCj2k">
        https://www.youtube.com/watch?v=Es6FE6NCj2k
      </a>
    </p>
    <p>
      Watch the video and write down observations of what is occurring as if you
      were performing the experiment in the lab.{" "}
    </p>{" "}
  </div>
);

const procedure = () => {
  const procedure_1 = () => <h2> N/A </h2>;
  const procedureArray = [procedure_1()];
  return procedureArray;
};

const results = () => (
  <div>
    <p>
      <em>Note</em>:{" "}
      <strong>
        Carbonyl Chemistry Lab has two parts: Aldol Reaction and Keto-Enol
        Equilibrium Study
      </strong>
    </p>
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

    <p>Report - Aldol Reaction</p>
    <p>
      <strong>
        <a href={cache["./20_aldol_coversheet.docx"]}>
          Link to download report cover sheet
        </a>
      </strong>
    </p>

    <p>Problem Set - Keto - Enol Equilibrium </p>
    <p>
      <strong>
        <a href={cache["./20_keto_enol_coversheet.docx"]}>
          Link to download problem set cover sheet
        </a>
      </strong>
    </p>
  </div>
);

const study_questions = () => (
  <div>
    <p>
      <em>Note</em>: No study questions for this lab.
    </p>
  </div>
);

const discussion = () => (
  <div>
    {" "}
    <p>
      <em>Note</em>: This is Post-lab Assignment
    </p>
    <p>
      <em>Note</em>:{" "}
      <strong>
        Carbonyl Chemistry Lab has two parts: Aldol Reaction and Keto-Enol
        Equilibrium Study
      </strong>
    </p>
    <h1>Part I - Post-lab Assignment - Aldol Reaction</h1>
    <ol>
      <li>
        Using data given in video, write a lab report in the normal format. You
        must include procedure and observations from video written as if in the
        lab.
      </li>
      <li>
        After watching the video, suggest two improved safety measures that the
        video did not mention or practice.
      </li>
      <li>
        Go through the procedure and note all the waste you will produce and
        which of the waste disposal locations (halogenated waste,
        non-halogenated waste, solid waste, trash bin, glass/sharps) you would
        put them in.
      </li>
    </ol>
    <h1>Part II - Post-lab Assignment - Keto - Enol Equilibrium</h1>
    <p>
      <strong>Problem Set</strong>
    </p>
    <p>
      <em>Part 1:</em>
    </p>
    <p>
      Thermo Fisher Scientific published a paper showcasing the use of NMR in
      measuring chemical equilibrium. Figure 2 shows the <sup>1</sup>H NMR
      spectrum of ethyl acetoacetate measured from a neat sample at 82 MHz and
      32 &deg;C.&nbsp;
    </p>
    <p>
      The peaks have already been identified to their respective H atoms in
      either the keto or enol form of the molecule. The integration values for
      selected peaks are given in Table 1. Use those measurements to calculate
      two values for K<sub>eq</sub>. How do these values compare to each other?
    </p>
    <p>
      <img
        
        src={cache["./20_image3.png"]}
        alt="Figure 1: 1H NMR spectrum of ethyl acetoacetate"
        width="90%"
      />
    </p>
    <p>
      <strong>Figure 1. </strong>
      <sup>
        <strong>1</strong>
      </sup>
      <strong>H NMR spectrum of ethyl acetoacetate</strong>
    </p>
    <p>
      <strong>Table 1. Integration values for selected </strong>
      <strong>1</strong>
      <strong>H NMR peaks for ethyl acetoacetate&nbsp;</strong>
    </p>
    <table>
      <tbody>
        <tr>
          <td>
            <p>
              <strong>Peak</strong>
            </p>
          </td>
          <td>
            <p>
              <strong>Integration</strong>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>3</p>
          </td>
          <td>
            <p>0.70</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>15</p>
          </td>
          <td>
            <p>14.9</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>9</p>
          </td>
          <td>
            <p>2.1</p>
          </td>
        </tr>
        <tr>
          <td>
            <p>18</p>
          </td>
          <td>
            <p>21.9</p>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      Imagine you start with 1 mol of the keto-form of ethyl acetoacetate. How
      many moles of the keto and enol will there be at equilibrium at 32 &deg;C?
      What if 0.03 moles of Br<sub>2</sub> (aq) are added and reacted with the
      enol form to completion (as in the video)? How many moles of the enol and
      keto form will there be at the new equilibrium?
    </p>
    <p>
      <em>Part 2:</em>
    </p>
    <p>
      <sup>1</sup>H NMR can also highlight how the keto-enol equilibrium
      position is dependent on the solvent. The <sup>1</sup>H NMR of dimedone
      (Figure 3) was done in both CDCl<sub>3</sub> and CDCl<sub>3</sub> with a
      few drops of DMSO-d<sub>6</sub>. The <sup>1</sup>H NMR spectra for both
      solvent conditions with the integration values for peaks shown below the
      x-axis are linked in Table 2.
    </p>
    <p>
      <img
    
        src={cache["./20_image2.png"]}
        alt="Figure 2. Keto-enol tautomerism of dimedone"
        width="90%"
      />
    </p>
    <p>
      <strong>Figure 2. Keto-enol tautomerism of dimedone</strong>
    </p>
    <p>
      Identify which hydrogens each peak represents and then calculate the K
      <sub>eq</sub> values for both solvent conditions. Compare the K
      <sub>eq</sub> values for both conditions and explain why the equilibrium
      is different between the two solvent conditions.
    </p>
    <p>
      <strong>Table 2. Links for </strong>
      <strong>1</strong>
      <strong>H NMR spectra of dimedone in two solvent conditions</strong>
    </p>
    <table>
      <tbody>
        <tr>
          <td>
            <p>
              CDCl<sub>3</sub>
            </p>
          </td>
          <td>
            <p>
              <a href="https://drive.google.com/file/d/1sWe82w1W8KK4BrWaWD9Y3R-Aiymqh0DR/view?usp=sharing">
                dimedone_cdcl3.jpg
              </a>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>
              CDCl<sub>3</sub> + DMSO-d<sub>6</sub>
            </p>
          </td>
          <td>
            <p>
              <a href="https://drive.google.com/file/d/17XJeS86-pIhEabPBqmLstROl01bMJpEd/view?usp=sharing">
                dimedone_cdcl3+dmso.jpg
              </a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
const waste_disposal = () => (
  <div>
    <p>
      <em>Note</em>: No in-person laboratory work in Fall 2020.{" "}
    </p>
  </div>
);

const Experiment_20 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal(),
};

export default Experiment_20;

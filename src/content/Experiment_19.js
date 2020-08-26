import React from "react";

const prelab_assignment = () => (
  <div>
    {" "}
    <ol>
      <li>
        In your experiment, crude ester is separated from unreacted acid through
        extraction. Explain with the help of a flow diagram various steps
        involved in this separation of crude ester from unreacted acid. What is
        the purpose of each extraction step? (Use chemical equations wherever
        necessary).
      </li>
      <li>
        In the Safety Precautions, there is a suggestion to use sodium
        bicarbonate for cleaning. What is the rationale for this suggestion?
      </li>
      <li>
        Based on the nomenclature of the following esters, give the two
        compounds (a carboxylic acid and an alcohol) that would be used in its
        synthesis.
      </li>
      <p style={{ textAlign: "center" }}>
        <em>3-methylbutyl ethanoate</em>
      </p>
      <p style={{ textAlign: "center" }}>
        <em>2-methylpropyl propanoate</em>
      </p>
      <li>
        Aspirin (acetylsalicylic acid, figure 5) is an ester used for pain
        relief and fever reduction. Based on its structure, give the two
        compounds (a carboxylic acid and an alcohol) that can be used in its
        synthesis.{" "}
      </li>
      <p>
        <img src="./image14.png" alt="Aspirin" width="90%" />
      </p>
      <p style={{ textAlign: "center" }}>
        <strong>Figure 5. Structure of aspirin (acetylsalicylic acid)</strong>
      </p>
      <li>
        How will you identify the absence of starting materials from 1H NMR and
        13C NMR spectra of the product?
      </li>
      <li>
        Using structures and electron pushing arrows, explain the fragmentation
        pattern in the following mass spectrum of an ester. Mark and label
        molecular (parent) ion peak and base peak. Write the mechanism for the
        formation of the base peak and two other peaks of interest.{" "}
      </li>
      <p>
        <img
          src="./image9.png"
          alt="Figure 6. Mass spectrum of ethyl benzoate"
          width="90%"
        />
      </p>
      <p style={{ textAlign: "center" }}>
        <strong>
          Figure 6. Mass spectrum of ethyl benzoate (Mol. Formula: C9H10O2){" "}
        </strong>
      </p>
    </ol>
  </div>
);

const background = () => (
  <div>
    <h1>Synthesis of a Fragrant Ester from Carboxylic Acid and Alcohol</h1>
    <p>
      <img src="./image5.png" alt="overall scheme" width="90%" />
    </p>
    <h1>Introduction</h1>
    <p>
      In this experiment, a carboxylic ester is produced from a carboxylic acid
      (RCOOH) and an aliphatic alcohol (R&rdquo;OH) (Figure 1). This reaction is
      termed esterification reaction, a type of substitution reaction, in which
      the hydrogen in the RCOO<strong>H</strong> group is replaced by a
      hydrocarbon (<strong>R&rsquo; </strong>or <strong>Ar</strong>). Thus,
      carboxylic esters have the general formula RCOOR&rsquo; where R and
      R&rsquo; may be an alkyl or an aryl group. Naturally occurring esters in
      fruits and flowers give them their characteristic smell. For example,
      3-methylbutyl ethanoate is artificial banana flavor; octyl acetate is
      artificial orange flavor. Dietary fats are chemically triglycerides, an
      ester formed from fatty acids and glycerol (a tri-alcohol).
    </p>
    <p>
      <img
        src="./image7.png"
        alt="Figure 1: Esterification reaction"
        width="90%"
      />
    </p>
    <p style={{ textAlign: "center" }}>
      <strong>Figure 1. Esterification reaction</strong>
    </p>
    <p>
      The nomenclature for esters is based on the structure of its components;
      you must look at the section of the ester containing the carbonyl group
      (as coming from the carboxylic acid) and the section containing the oxygen
      atom and the remaining carbon atoms (as coming from the alcohol) (Figure
      2). Then, count the number of carbons in those two sections and assign the
      correct prefix based on the number of carbon atoms (meth-, eth-, prop-,
      etc.) (Figure 2). The nomenclature for esters is structured so that the
      alcohol-derived section is referenced first, with the ending -yl (ethyl)
      and the carbonyl section is referenced second, with the ending -oate
      (propanoate). In the example below (Figure 2), the carbonyl section has 2
      carbon atoms and the alcohol-derived section has 3 carbon atoms, so the
      formal nomenclature for this molecule is propyl ethanoate.
    </p>
    <p>
      <img
        src="./image10.png"
        alt="Figure 2: Diagram for determining nomenclature of esters"
        width="90%"
      />
    </p>
    <p style={{ textAlign: "center" }}>
      <strong>Figure 2. Diagram for determining nomenclature of esters</strong>
    </p>
    <p>
      When dealing with esters that are not simple carbon chains, the same
      method is employed. The ester is divided into the two sections and the
      structures are evaluated. A benzene ring in the alcohol-derived section is
      called phenyl; the ester shown in figure 3A is called phenyl ethanoate. A
      benzene ring as part of a carbonyl group (consisting of the 6 carbons of
      the benzene ring and the carbon of the C=O bond) is called benzoate; the
      ester shown in figure 3B is called ethyl benzoate.
    </p>
    <p>
      <img
        src="./image11.png"
        alt="Figure 3: A) Phenyl ethanoate B) Ethyl benzoate"
        width="90%"
      />
    </p>
    <p style={{ textAlign: "center" }}>
      <strong>Figure 3. A) Phenyl ethanoate B) Ethyl benzoate</strong>
    </p>
    <p>
      When dealing with esters with branched carbon chains, again the same
      method of dividing the ester is used along with a similar method to naming
      branched alkanes. The ester sections are divided and the longest chain of
      carbons in each section is numbered and given the appropriate prefix.
      Numbered carbons that have additional groups attached are identified and
      named according to their number in the chain and the group attached. For
      example, the ester shown in figure 4, the carbonyl section has a branched
      alkane. The longest chain is 4 carbons, so the base name is butanoate
      (but- because 4 carbons, -oate because it is the carbonyl section). The
      second carbon in that chain has an additional methyl group attached, so
      that entire section is named 2-methylbutanoate. The alcohol-derived
      section of the ester consists of a simple methyl group, so the name of the
      entire ester is methyl 2-methylbutanoate.
    </p>
    <p>
      <img
        src="./image13.png"
        alt="Figure 4: Diagram showing method of naming methyl 2-methylbutanoate"
        width="90%"
      />
    </p>
    <p style={{ textAlign: "center" }}>
      <strong>
        Figure 4. Diagram showing method of naming methyl 2-methylbutanoate
      </strong>
    </p>
    <p>
      Other groups that may be attached to esters are named in the same method
      and the group names are the same as in other nomenclature: an -OH group is
      referred to as hydroxy-, a chlorine atom is referred to as chloro-, and an
      =O is referred to as -oxo. For example, if the molecule above in figure 4
      had a chlorine atom attached to carbon 2 instead of a methyl group, the
      name would be methyl 2-chlorobutanoate. Molecules that have more than one
      group attached to the main carbon chain are named in sequential order of
      the carbons with groups. Methyl 4-chloro-5-oxoheptanoate would have a
      chlorine attached to carbon 4 and an oxygen atom attached to carbon 5 of
      the 7 carbon chain in the carbonyl section.
    </p>
    <p>
      In summary, the method for naming esters begins by dividing the molecule
      into a section containing the carbonyl group (assumed to be derived from
      the carboxylic acid) and a section containing the oxygen atom and
      remaining carbon chain (assumed to be coming from the alcohol component).
      The longest chains in both sections are numbered and named according to
      their length; the alcohol-derived section is given the suffix <em>-yl</em>{" "}
      and the carbonyl section is given the suffix <em>-onate</em>. Additional
      groups are added to the name in sequential order of the base chain.
    </p>
    <p>
      The nomenclature for an ester can be used to easily identify the
      carboxylic acid and alcohol from which the ester can be synthesized. The
      section containing the carbonyl group reflects the structure of the
      component carboxylic acid and the section containing the oxygen atom and
      remaining carbon atoms reflects the structure of the alcohol. The ester
      shown in figure 1 (propyl ethanoate) can be synthesized from an alcohol
      with 3 carbons (propanol) and a carboxylic acid with 2 carbons (formal
      nomenclature ethanoic acid, common name acetic acid).
    </p>
    <p>
      You will observe the typical synthesis and purification of an ester (butyl
      ethanoate) from a carboxylic acid and an alcohol in this experiment. The
      esterification of carboxylic acids with alcohols is slow and reversible,
      usually catalyzed by Lewis of Br&oslash;nstedt acids (Fischer
      esterification). The equilibrium may be influenced by either removing one
      product from the reaction mixture (for example, removal of the water by
      azeotropic distillation or absorption by molecular sieve) or by employing
      an excess of one reactant. In our experiment, this is accomplished by
      adding an excess of carboxylic acid. The unreacted acid is removed by
      extraction into an aqueous sodium bicarbonate solution (Scheme 1).
    </p>
    <p style={{ textAlign: "center" }}>
      2 RCOOH +2 NaHCO<sub>3</sub> &rarr; 2 RCOO<sup>-</sup> Na<sup>+</sup>+ H
      <sub>2</sub>O
    </p>
    <p style={{ textAlign: "center" }}>
      <strong>Scheme 1&nbsp;</strong>
    </p>
    <p>
      In your post-lab assignment, you will write a lab report based on the
      video synthesis of butyl ethanoate and answer theoretical questions on
      synthesis of other esters by esterification.
    </p>
    <p>
      <strong>Videos</strong>
    </p>
    <p>
      <a href="https://www.youtube.com/watch?v=3aq8iJUpW5w">
        https://www.youtube.com/watch?v=3aq8iJUpW5w
      </a>
    </p>
    <h1>References</h1>
    <ol>
      <li>Handbook of Chemistry and Physics</li>
    </ol>
  </div>
);

const procedure = () => {
  const procedure_1 = () => <div> N/A </div>;
  const procedureArray = [procedure_1()];
  return procedureArray;
};

const results = () => <div> 
<ol>
<li>All reports should be uploaded to Canvas under the appropriate heading in the Assignments section. Use only the pdf, doc, or docx file formats for your reports.</li>
<li>All reports should be written in JACS (Journal of American Chemical Society) format. A sample report is given on pg. 30 of laboratory manual (online edition, Fall 2020).</li>
</ol>
<p><strong><a href="./esterification cover sheet.docx">Link to download report coversheet</a></strong></p>

 </div>;



const study_questions = () => <div> <ol>
<li>Write a reasonable mechanism for the formation of RCOOR’.</li>
<li>Considering that esterification reaction is slow and reversible, how can one drive the reaction to the right? </li>
<li>What is retention time in Gas Chromatography? How will you identify an organic compound using Gas Chromatography?</li>
</ol>

</div>;


const discussion = () => <div> 

<p><em>Note</em>: This is Post-lab Assignment</p>

<ol>
<li>Using data given in video and spectra provided by instructors, write a lab report in the normal format for the synthesis of an ester. You must include procedure and observations from video written as if in the lab. </li>
<br/>
<blockquote>a. Note in your report how your calculated percent yield compares to the value given in the video.<br/></blockquote>
<li>After watching the video, suggest two improved safety measures that the video did not mention or practice.
</li>
<li>Go through the procedure and note all the waste you will produce and which of the waste disposal locations (halogenated waste, non-halogenated waste, solid waste, trash bin, glass/sharps) you would put them in. </li>
</ol>


</div>;



const waste_disposal = () => (
  <div>
    <p>
      <em>Note</em>: No in-person laboratory work in Fall 2020.{" "}
    </p>
  </div>
);

const Experiment_19 = {
  prelab_assignment: prelab_assignment(),
  background: background(),
  procedure: procedure(),
  results: results(),
  study_questions: study_questions(),
  discussion: discussion(),
  waste_disposal: waste_disposal(),
};

export default Experiment_19;

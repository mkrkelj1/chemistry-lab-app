import React from "react";
import Experiment_1 from "./content/Experiment_1";
import Experiment_2 from "./content/Experiment_2";
import Experiment_3 from "./content/Experiment_3";
import Experiment_4 from "./content/Experiment_4";
import Experiment_5 from "./content/Experiment_5";
import Experiment_6 from "./content/Experiment_6";
import Experiment_7 from "./content/Experiment_7";
import Experiment_8 from "./content/Experiment_8";
import Experiment_9 from "./content/Experiment_9";
import Experiment_10 from "./content/Experiment_10";
import Experiment_11 from "./content/Experiment_11";
import Experiment_12 from "./content/Experiment_12";
import Experiment_13 from "./content/Experiment_13";
import Experiment_14 from "./content/Experiment_14";
import Experiment_15 from "./content/Experiment_15";
import Experiment_16 from "./content/Experiment_16";
import Experiment_17 from "./content/Experiment_17";
import Experiment_18 from "./content/Experiment_18";
import Experiment_19 from "./content/Experiment_19";
import Experiment_20 from "./content/Experiment_20";
import Experiment_21 from "./content/Experiment_21";
import Experiment_22 from "./content/Experiment_22";
import Experiment_23 from "./content/Experiment_23";
import Experiment_24 from "./content/Experiment_24";
import Experiment_25 from "./content/Experiment_25";


const contentMap = {
  1: "prelab_assignment",
  2: "background",
  3: "procedure",
  4: "results",
  5: "study_questions",
  6: "discussion",
  7: "waste_disposal"
};

const experimentMap = {
  1: Experiment_1, 2: Experiment_2, 3: Experiment_3,
  4: Experiment_4, 5: Experiment_5, 6: Experiment_6,
  7: Experiment_7, 8: Experiment_8, 9: Experiment_9,
  10: Experiment_10, 11: Experiment_11, 12: Experiment_12,
  13: Experiment_13, 
  14: Experiment_14, 15: Experiment_15, 16: Experiment_16,
  17: Experiment_17, 18: Experiment_18, 19: Experiment_19,
  20: Experiment_20, 21: Experiment_21, 22: Experiment_22,
  23: Experiment_23, 24: Experiment_24, 25: Experiment_25
};

const Content = {
  get: function(experimentId, contentId) {
    const experiment = experimentMap[experimentId];
    const contentType = contentMap[contentId];
    const content = experiment[contentType];
    return content;
  }
};

export { Content };

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
  10: Experiment_10, 11: Experiment_11, 12: Experiment_12
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

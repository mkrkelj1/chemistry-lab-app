const CoursesAPI = {
  courses: [
    { id: 1, name: "Spectroscopy", instructor: "Smith" },
    { id: 2, name: "Organic Chemistry", instructor: "Williams" },
  ],
  all: function() { return this.courses},
  get: function(id) {
    const isCourse = c => c.id === id
    return this.courses.find(isCourse)
  }
}

const ExperimentsAPI = {
  experiments: [
    { experimentID: 1, courseID: 1, week: 1, name: "Spectroscopy Experiment 1", chemical_ids: [1, 2]},
    { experimentID: 2, courseID: 1, week: 2, name: "Spectroscopy Experiment 2", chemical_ids: [2, 3] },
    { experimentID: 3, courseID: 1, week: 3, name: "Spectroscopy Experiment 3", chemical_ids: [1, 2] },
    { experimentID: 4, courseID: 2, week: 1, name: "Organic Chemistry Experiment 1", chemical_ids: [1, 2, 3] },
    { experimentID: 5, courseID: 2, week: 2, name: "Organic Chemistry Experiment 2", chemical_ids: [3] },
    { experimentID: 6, courseID: 2, week: 3, name: "Organic Chemistry Experiment 3", chemical_ids: [1, 3] },
  ],
  all: function(_courseID) { return this.experiments},
  filtered: function(id) { return this.experiments.filter(e => e.courseID === id)},
  get: function(_courseID, _week) {
    const isExperiment = e => e.week === _week && e.courseID === _courseID
    return this.experiments.find(isExperiment)
  }
}

const ChemicalsAPI = {
  chemicals: [
    { chemicalID: 1, 
      name: "Acetone", 
      cas: "#67-64-1", 
      safety_guideline: "Safety guidelines for acetone ... Highly flammable ..etc.. ",
      pictogram_ids: [2, 5]
    },
    { chemicalID: 2, 
      name: "Diethyl ether", 
      cas: "#60-29-7", 
      safety_guideline: "... Highly flammable... corrosive..etc.",
      pictogram_ids: [3, 7, 9]
    },
    { chemicalID: 3, 
      name: "Trimyristin", 
      cas: "#555-45-3", 
      safety_guideline: null,
      pictogram_ids: [1, 2, 3]
    },
  ],
  all: function() { return this.chemicals},
  get: function(chemicalID) {
    const isChemical = c => c.chemicalID === chemicalID
    return this.chemicals.find(isChemical)
  },
  filtered: function(filterArray) {
    const Chemicals = this.chemicals
    const filteredChemicals = Chemicals.filter(function (chemical) {
      return filterArray.includes(chemical.chemicalID)
    });
    return filteredChemicals
  }
}

const PictogramsAPI = {
  // http://www.reach-compliance.ch/ghsclp/ghspictograms/index.html
  pictograms: [
    { pictogramID: 1, name: "Exploding bomb", filename: "GHS_01_Explosive.png" },
    { pictogramID: 2, name: "Flame", filename: "GHS_02_Flammable.png" },
    { pictogramID: 3, name: "Flame over circle", filename: "GHS_03_Oxidising.png" },
    { pictogramID: 4, name: "Gas cylinder", filename: "GHS_04_Compressed.png" },
    { pictogramID: 5, name: "Corrosion", filename: "GHS_05_Corrosion.png" },
    { pictogramID: 5, name: "Skulls and crossbones", filename: "GHS_06_Skull.png" },
    { pictogramID: 7, name: "Exclamation mark", filename: "GHS_07_Exclamation.png" },
    { pictogramID: 8, name: "Health hazard", filename: "GHS_08_Health-Hazard.png" },
    { pictogramID: 9, name: "Environment", filename: "GHS_09_Environment.png" },
  ],
  all: function() { return this.pictograms},
  filtered: function(filterArray) {
    const Pictograms = this.pictograms
    const filteredPictograms = Pictograms.filter(function (pictogram) {
      return filterArray.includes(pictogram.pictogramID)
    });
    return filteredPictograms
  },
  pictogramMap: function(chemicals) {
    const pictograms = this.pictograms
    const _pictogramMap = {}

    chemicals.forEach( function(chemical) {
    const pictogram_ids = chemical.pictogram_ids
    const pictogram_arr = []
    pictogram_ids.forEach(function(pictogram_id) {
      const pictogram = pictograms.find(({ pictogramID }) => pictogramID == pictogram_id)
            pictogram_arr.push(pictogram)
            _pictogramMap[chemical.chemicalID] = pictogram_arr
    });
  });
  return _pictogramMap
  }
}

const ExperimentProcedureAPI = {
  procedures: [
      { procedureID: 1, experimentID: 1, procedure: "" },
      { procedureID: 2, experimentID: 2, procedure: "" },
      { procedureID: 3, experimentID: 3, procedure: "" },
    ]
}

export {CoursesAPI, ExperimentsAPI, ChemicalsAPI, PictogramsAPI, ExperimentProcedureAPI}
















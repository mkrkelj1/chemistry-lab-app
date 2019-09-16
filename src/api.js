
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
    { experimentID: 1, courseID: 1, week: 1, name: "Spectroscopy Experiment 1", chemicals: "water" },
    { experimentID: 2, courseID: 1, week: 2, name: "Spectroscopy Experiment 2", chemicals: "helium" },
    { experimentID: 3, courseID: 1, week: 3, name: "Spectroscopy Experiment 3", chemicals: "acetone" },
    { experimentID: 4, courseID: 2, week: 1, name: "Organic Chemistry Experiment 1", chemicals: "chem 1" },
    { experimentID: 5, courseID: 2, week: 2, name: "Organic Chemistry Experiment 2", chemicals: "chem 2" },
    { experimentID: 6, courseID: 2, week: 3, name: "Organic Chemistry Experiment 3", chemicals: "chem 3" },
  ],
  all: function(_courseID) { return this.experiments},
  filtered: function(id) { return this.experiments.filter(e => e.courseID === id)},
  get: function(_courseID, _week) {
    const isExperiment = e => e.week === _week && e.courseID === _courseID
    return this.experiments.find(isExperiment)
  }
}


export {CoursesAPI, ExperimentsAPI}
import chemicals from './data/chemicals.json';
import courses from './data/courses.json';
import experiments from './data/experiments.json'
import pictograms from './data/pictograms.json'
import procedures from './data/procedures.json'


const ChemicalsAPI = {
  chemicals: chemicals,
  
  all: function() {
    return this.chemicals;
  },

  get: function(chemicalID) {
    const isChemical = c => c.chemicalID === chemicalID;
    return this.chemicals.find(isChemical);
  },

  filtered: function(filterArray) {
    const Chemicals = this.chemicals;
    const filteredChemicals = Chemicals.filter(function(chemical) {
      return filterArray.includes(chemical.chemicalID);
    });
    return filteredChemicals;
  }
};


const CoursesAPI = {
  courses: courses,
  all: function() {
    return this.courses;
  },

  get: function(id) {
    const isCourse = c => c.id === id;
    return this.courses.find(isCourse);
  }
};


const ExperimentsAPI = {
  // May need to add new primary key
  // experimentID --> might duplicate due to multiple weeks
  // Weeks --> might be better to call them "parts"
  experiments: experiments,

  all: function(courseID) {
    return this.experiments;
  },

  filtered: function(courseID) {
    return this.experiments.filter(e => e.courseID === courseID);
  },

  get: function(courseID, week) {
    const isExperiment = e => e.week === week && e.courseID === courseID;
    return this.experiments.find(isExperiment);
  }
};


const ProceduresAPI = {
  procedures: procedures,

  all: function() {
    return this.procedures;
  },

  filtered: function(experimentID) {
    return this.procedures.filter(e => e.experimentID === experimentID);
  }
};


const PictogramsAPI = {
  
  pictograms: pictograms,

  all: function() { 
    return this.pictograms
  },

  filtered: function(filterArray) {
    const Pictograms = this.pictograms
    const filteredPictograms = Pictograms.filter(function (pictogram) {
      return filterArray.includes(pictogram.pictogramID)
    });
    return filteredPictograms
  },

  pictogramMap: function (chemicals) {
    const pictograms = this.pictograms
    const _pictogramMap = {}

    chemicals.forEach(function (chemical) {
      const pictogram_ids = chemical.pictogram_ids
      const pictogram_arr = []

      pictogram_ids.forEach(function (pictogram_id) {
        const pictogram = pictograms.find(({ pictogramID }) => pictogramID === pictogram_id)
        pictogram_arr.push(pictogram)
        _pictogramMap[chemical.chemicalID] = pictogram_arr
      });
    });
    return _pictogramMap
  }
}


const ScheduleAPI = {
  // https://stackoverflow.com/questions/16590500/javascript-calculate-date-from-week-number
  get_date: function (w, y) {
    var simple = new Date(Date.UTC(y, 0, 1 + (w - 1) * 7));
    var dow = simple.getDay();
    var ISOweekStart = simple;
    if (dow <= 4)
      ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
    else
      ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
    return ISOweekStart;
  }
}





export {CoursesAPI, ExperimentsAPI, ProceduresAPI, ChemicalsAPI, PictogramsAPI }
















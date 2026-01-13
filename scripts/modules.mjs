// This block imports the byuiCourse object from course module and import the setSectionSelection function from the sections module.
import byuiCourse from './course.mjs';
import { setSectionSelection } from './sections.mjs';

// This block imports the named function exports from the output file.
import { setTitle, renderSections } from './output.mjs';


document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum);
  renderSections(byuiCourse.sections);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum, false);
  renderSections(byuiCourse.sections);
});

setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);
import Student from "./components/Student";

function App() {
  const students = [
    {
    name : "Neha",
    course : "CSE",
    year : "2nd Year",
    skill : "CSS"
  }, 
  {
    name : "Aparajita",
    course : "CSM",
    year : "2nd Year",
    skill : "JS"
  }, 
  {
    name : "Samvida",
    course : "CSE",
    year : "2nd Year",
    skill : "HTML"
  }, 
  {
    name : "Bhargavi",
    course : "CSD",
    year : "2nd Year",
    skill : "Python"
  },
];
  
  return (
    <div>
      <h1>College Portal</h1>
      
      <Student students = {students} />
    </div>
  );
}

export default App;
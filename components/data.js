//Schema - NEED TO CHANGE BASED ON ARI
// const EmployeeSchema = {
//     name: 'Employee',
//     primaryKey: 'key',
//     properties: {
//       key: 'string', //primary key
//       firstname:  'string',
//       middlename: 'string',
//       lastname: 'string',
//       nickname: 'string',
//       birthday: {type: 'date'},
//       gender: 'string',
//       address: 'string',
//       position: 'string',
//       salary: {type: 'double'},
//     }
//   };
  
  export default EmployeeSchema;
  
  //Enum Type options
  export const LANGUAGE_OPTIONS = {
    English: 'English',
    Spanish: 'Spanish'
    Chinese: 'Chinese'
    French: 'French'
    Farsi: 'Farsi'
  }
  
  //Codelisted type options
  //In actual apps this will be stored to a codelist table in DB
  export const PROFICIENCY_OPTIONS = {
    1: 'Elementary Proficiency',
    2: 'Limited Working Proficiency',
    3: 'Professional Working Proficiency',
    4: 'Full Professional Proficiency',
    5: 'Native / Bilingual Proficiency',
  }
/* === REPLACE API ===  */

const api = [
  { "name": "My Project", "description": "This is a ${placeholder} project.",
  "icons":  [
    {"title": "VueJS", "path": "/src/assets/icons/svg/vuejs.svg"}, 
    {"title": "HTML", "path": "${placeholder}html.svg"}
  ]
},
{ "name": "My Project 2", "description": "This is a ${placeholder} project.",
"icons":  [
  {"title": "VueJS", "path": "/src/assets/icons/svg/vuejs.svg"}, 
  {"title": "HTML", "path": "${placeholder}html.svg"}
]
},
]



/* == foreach== */

/* api.forEach(obj => {
  obj.description = obj.description.replace("${placeholder}", 'NEWPATHHERE')

  obj.icons.forEach(icon => {
    icon.path = icon.path.replace("${placeholder}", "NEWICONPATH")
  })
})

console.log(api) */

/* map */

const placeholderReplacement = "dynamic/";

const updatedApi = api.map(obj => ({
  ...obj,
  description: obj.description.replace("${placeholder}", placeholderReplacement),
  icons: obj.icons.map(icon => ({
    ...icon,
    path: icon.path.replace("${placeholder}", placeholderReplacement)
  }))
}))

console.log(updatedApi)


/* == reduce == */

// Define the placeholder replacement
const placeholderReplacement = "dynamic/";

// Using reduce() to create a new array with replaced values
const updatedApi = api.reduce((acc, obj) => {
  // Replace placeholders in description
  obj.description = obj.description.replace("${placeholder}", placeholderReplacement);
  
  // Replace placeholders in icon paths
  obj.icons.forEach(icon => {
    icon.path = icon.path.replace("${placeholder}", placeholderReplacement);
  });

  acc.push(obj);
  return acc;
}, []);

console.log(updatedApi);
import exploro from "../../../assets/images/exploro.png"
import tindog from "../../../assets/images/tindog.png"
import recipe from "../../../assets/images/recipe.png"
import todo from "../../../assets/images/todo.png"
const projectData =[

    {
        projectID : 1,
        projectName:"Exploro Weather Website",
        projectImg:exploro,
        projectTools:["JavaScript","HTML","CSS3","Angular","Public API","Firebase","BootStrap","Git"],
        projectAbout:["Exploro was born from the vision of aiding tourists in discovering the offerings of their current city. This platform empowers users to explore and make informed decisions based on real-time weather conditions, offering valuable insights for their upcoming adventures even before they step out the door",
        "The website features a weather card showcasing the day-long weather details of the current city. Additionally, tourists enjoy the privilege of exploring various cities in advance, accessing information about their attractions. Moreover, visitors can preview attractions and gain insights before planning their visit to the area"    
        ]
    },
    {
        projectID : 2,
        projectName:"Tindog Website",
        projectImg:tindog,
        projectTools:["JavaScript","TypeScript","HTML","CSS3","Git Static Pages","BootStrap", "Git"],
        projectAbout:["The concept behind Tindog originated from the idea that everyone deserves companionship – even our furry friends. This unique dating platform is tailored for dogs to discover their potential matches. Additionally, it facilitates humans in finding friends with pets, encouraging joint walks and fostering new connections for both humans and their canine companions",
        "This proof of concept aims to provide users with easy access to the Tindog app that will be available in future for download on both the App Store and Google Play Store. The website showcases user testimonials and fabricated profiles that have collaborated with us. Additionally, it offers insights into price ranges for potential matches across various breeds, aiding users in finding their preferred companions."    
        ]
    },
    {
        projectID : 3,
        projectName:"The Recipe-Book Website",
        projectImg:recipe,
        projectTools:["JavaScript","Firebase CI/CD pipeline","HTML","CSS3","TypeScript","FireBase database","BootStrap", "Git"],
        projectAbout:["The name of the website encapsulates its function. It serves as both a recipe book and a shopping basket, enabling users to discover delightful dishes and add recipe ingredients directly to their virtual shopping basket. This feature facilitates the seamless purchase and checking off of ingredients needed for the recipes. ",
        "The recipe website consists of two main pages. The first page, the recipe section, enables users to access their previously saved recipes. Additionally, users can store new recipes and ingredients, building a comprehensive repository of diverse recipes. The second page, the shopping list, displays all the ingredients with their respective quantities, simplifying the shopping experience by providing a comprehensive list for users to purchase items"    
        ]
    },
    {
        projectID : 4,
        projectName:"To-Do List Website",
        projectImg:todo,
        projectTools:["JavaScript","HTML","CSS3","TypeScript","NodeJS","ExpressJS","MongoDB","MongoAtlas","Heroku","BootStrap", "Git"],
        projectAbout:["The to-do list website serves as a solution for managing a multitude of tasks across various domains. Users can create, categorize, and organize their tasks according to different areas or groups. This functionality aids users in maintaining consistency, focus, and productivity, ensuring they stay on top of their commitments.",
        "The website leverages MongoDB to efficiently store and categorize user data. Users can seamlessly add tasks to their to-do lists by entering the task details and clicking the plus sign. Completed tasks can be easily removed by checking off the corresponding checkbox, streamlining task management and completion"    
        ]
    }

]

export default projectData;
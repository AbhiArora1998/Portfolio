import net from "../../assets/images/net.png"
import angular from "../../assets/images/angular.png"
import aws from "../../assets/images/aws.png"
import css from "../../assets/images/css.png"
import dart from "../../assets/images/dart.png"
import flutter from "../../assets/images/flutter.png"
import git from "../../assets/images/git.png"
import html from "../../assets/images/html.png"
import js from "../../assets/images/js.png"
import sql from "../../assets/images/sql.png"





const experience = [
    {
        id: 1,
        title: "Research Skilled Development Trainee",
        location: "Bussiness Intelgence Research Group, UNBC",
        content: [
       "I led the development of high-performance Single Page Application for client using Angular and primeNg, optimized an MS SQL database by 30%, and created a scalable RESTful API with .Net 6. I enhanced security with AWS IAM and Lambda, optimized image storage via AWS S3 integration, and collaborated on GitLab for a 20% reduction in bug-related inquiries."
        ],
        skills: ["Angular", "Flutter", ".Net6", "SQL", "AWS", "Javacript", "HTML", "CSS", "Dart", "Git"],
        icons: [angular,flutter,net,sql,aws,js,html,css,dart,git]
        // icons: ["../../../assets/images/angular.png", "../../../assets/images/flutter.png", "../../../assets/images/.net.png", "../../../assets/images/sql.png","../../../assets/images/aws.png","../../../assets/images/js.png","../../../assets/images/html.png","../../../assets/images/css.png","../../../assets/images/git.png"]
        
    },
    {
        id: 2,
        title: "Database Administrator Trainee",
        location: "Northern Hydrometeorology Group, UNBC",
        content: [
            "I Implemented an optimized Hydro-Meteorological Database in MS Access, reducing data retrieval time by 25% and enhancing data accessibility. Also, crafted a Python script using Pandas and NumPy to migrate 15 years of weather data from Excel. Researched AWS and Azure for a secure, cost-effective hosting solution, resulting in a detailed feasibility document for the organization's guidance. "

        ],
        skills: ["Python", "SQL", "AWS", "NumPY", "MS Access", "Excel", "Git"],
        icons: [net,net,net,net,net,net,net]
        // icons: ["../../../assets/images/aws.png","../../../assets/images/sql.png","../../../assets/images/aws.png","../../../assets/images/aws.png","../../../assets/images/aws.png","../../../assets/images/aws.png","../../../assets/images/aws.png"]

    }
]

export default experience;
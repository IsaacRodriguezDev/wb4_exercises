'use strict'
let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ]

   let numberOfCourse = courses.length

   for( let i = 0; i<numberOfCourse;i++){
    if(courses[i].CourseId ==='PROG200'){
        console.log(`the ${courses[i].CourseId} start date is ${courses[i].StartDate}`)
    }
    
        if(courses[i].CourseId ==='PROJ500'){
            console.log(`the ${courses[i].CourseId} title is Introduction to ${courses[i].Title}`)
        }
        if(courses[i].Fee <= 50){
            console.log(`the ${courses[i].CourseId} title is ${courses[i].Title} and is under ${courses[i].Fee}`)
        }
        if(courses[i].Location <= "Classroom 1"){
            console.log(`the ${courses[i].CourseId} title is ${courses[i].Title} and is ${courses[i].Location}`)
        }
        
   }
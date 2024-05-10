let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
   
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ]
   for(let i = 0; i < academyMembers.length;i++){
    if(academyMembers[i].memID === 187){
        console.log(`Who is the Academy Member whose ID is 187? ${academyMembers[i].name}`)
    }
    if(academyMembers[i].films.length >= 3){
        console.log(`  Who has have been in at least 3 films? ${academyMembers[i].name}`)
    }
    if(academyMembers[i].name.indexOf('Bob') === 0 ){
        // if(academyMembers[i].name !== "Bobbie Boots")
        console.log(`Who has a name that starts with "Bob"? ${academyMembers[i].name}`)
    }
    for(let j = 1; j<academyMembers[i].films.length; j++ ){
        
        if(academyMembers[i].films[j].indexOf('A') === 0){
            console.log(`Which Academy Members have been in a filmthat starts with "A"  is ${academyMembers[i].name}: [${academyMembers[i].films}]`)
        }
    }
    
   }

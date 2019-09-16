




alert("Hello there, Welcome to the Wonderful Game of Rock Paper Scissors");
   
var ranNum = Math.random(); 



var userChoice = prompt(" Choose rock, paper or scissors "); 
 


// statements to take in ran num and then set computers choice to the the string   
  
    if ( ranNum >= 0 && ranNum <= 0.34) { 

         var    computerChoice = "rock";
        
    } 
    
   else if ( ranNum  >= 0.35 && ranNum  <= 0.67) { 

        var  computerChoice = "scissors";
        
    }  


    else { 

    var computerChoice = "paper";
    
    } 

// logging out to 
 console.log(computerChoice); 
 console.log(userChoice);


// conditional statments for if user choice = computerChoice 

    if( userChoice === "rock" && computerChoice ==="scissors"){
        
        console.log("User wins with Rock")
    }

    else if (userChoice === "paper" && computerChoice ==="rock") {
        
        console.log("User wins with Paper")
    }
 
        else if (userChoice === "scissors" && computerChoice ==="paper") {
            
        console.log("User wins with Scissors")
        }


        else if (computerChoice == userChoice) {
           
            console.log (" It possibly just became a tie !!");
        } 

        else {
                console.log("User lost")
        }




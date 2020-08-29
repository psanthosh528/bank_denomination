 
 function count(){  
    var amount = document.getElementById("amount").value;
    const notes = [2000,500,200,100,50,20,10,5,2,1];
    const noteCounter = [];
     
    for(var i = 0; i<notes.length; i++){
        if (amount >= notes[i]) {
            noteCounter[i] = Math.floor(amount / notes[i]);
            amount = (amount - noteCounter[i] * notes[i]);
            noteCounter.push(amount);
        }
        else{
            noteCounter[i] = 0;
        }
    }

    for(var i=0; i<notes.length; i++){
        if(noteCounter[i] !=0){
           document.write(notes[i] + " : " + noteCounter[i] + "<br>"); 
        }else{
           document.write(notes[i] + " : " + noteCounter[i] + "<br>");    
        }
    }
}
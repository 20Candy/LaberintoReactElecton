function Movements(array: string[], key) {
    let row = 0
	let pos = 0
	let temp = ""
    let move = ""
    
    let replaceAt = function(string, index, replacement) {
        return string.substr(0, index) + replacement + string.substr(index + replacement.length);
    }

    if (key === 'ArrowUp') {
        move = "UP"
    } else if (key === 'ArrowDown') {
        move = "DOWN"
    } else if (key === 'ArrowLeft') {
        move = "LEFT"
    } else if (key === 'ArrowRight') {
        move = "RIGHT"
    }
	
    if (move != "") {
        let finished = false
        for (let i = 0; i < array.length; i++) {        
            if (array[i].includes("p")){
                finished = true
                pos = array[i].indexOf("p")
                row = i
            }
        }

        if (!finished) {
            alert("Ya has completado el juego")
            return array
        }

        if(move == "UP"){	
            temp = array[row - 1][pos]
        
            if (temp != "-" && temp != "+" && temp != "|"){
                if (temp == "g"){
                    array[row] = replaceAt(array[row], pos, " ")
                    alert("You Win!")
                } else {			
                    array[row-1] = replaceAt(array[row - 1], pos, "p")
                    array[row] = replaceAt(array[row], pos, " ")
                }
            } else {
                alert("Auch! A Wall!")
            }
        }
        
        else if(move == "DOWN"){
            temp = array[row +1][pos]
        
            if (temp != "-" &&  temp != "+" &&  temp != "|" ){
                if (temp == "g") {
                    array[row] = replaceAt(array[row], pos, " ")
                    alert("You Win!")
                } else {	
                    array[row + 1] = replaceAt(array[row + 1], pos, "p")
                    array[row] = replaceAt(array[row], pos, " ")
                }
            }else{
                alert("Auch! A Wall!")
            }
        } else if(move == "LEFT") {
            let temp = array[row][pos-1]
        
            if (temp != "-" &&  temp != "+" &&  temp != "|" ) {
                if (temp == "g") {
                    array[row] = replaceAt(array[row], pos, " ")
                    alert("You Win!")
                } else {				
                    array[row] = replaceAt(array[row], pos - 1, "p")
                    array[row] = replaceAt(array[row], pos, " ")
                }		
            } else {
                alert("Auch! A Wall!")
            }
        }
        else if (move  == "RIGHT") {
            let temp = array[row][pos + 1]
        
            if (temp != "-" &&  temp != "+" &&  temp != "|" ) {
                if (temp == "g") {
                    array[row] = replaceAt(array[row], pos, " ")
                    alert("You Win!")
                } else {				
                    array[row] = replaceAt(array[row], pos + 1, "p")
                    array[row] = replaceAt(array[row], pos, " ")
                }
            } else {
                alert("Auch! A Wall!")
            }
        }
    }
    return array
}

export default Movements;
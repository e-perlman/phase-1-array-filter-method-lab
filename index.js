function findMatching(array,string){
    return array.filter(element=>{
        let upElement=element.toUpperCase()
        let upString=string.toUpperCase()
        return upElement===upString
     }
    )
}

function fuzzyMatch(array,string){
    return array.filter(element=>{
        if (element.indexOf(string)===0){
            return element
        }
    })
}

function matchName(array,string){
    return array.filter(element=>element.name===string)
}
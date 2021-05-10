function MatchingDaysLogic(){

    var matchTemplateObjects = [{dayOfWeek : 'Sunday', color: ""}, {color: "", dayOfWeek : 'Monday'}, {color: "", dayOfWeek : 'Tuesday'}, {color: "", dayOfWeek : 'Wednesday'}, {color: "", dayOfWeek : 'Thursday'}, {color: "", dayOfWeek : 'Friday'}, {color: "", dayOfWeek : 'Saturday'}]

    var firstDay = undefined
    var secondDay = undefined
    var messageMatch = ""

    function setFirstDay(num){
        firstDay = num
    }
    
    function setSecondDay(num){
        secondDay = num
    }

    function getSetDays(){
        return {
            secondDay,
            firstDay
        }
    }

    function matchingDaysWithColor(){
        matchTemplateObjects = [{dayOfWeek : 'Sunday', color: ""}, {color: "", dayOfWeek : 'Monday'}, {color: "", dayOfWeek : 'Tuesday'}, {color: "", dayOfWeek : 'Wednesday'}, {color: "", dayOfWeek : 'Thursday'}, {color: "", dayOfWeek : 'Friday'}, {color: "", dayOfWeek : 'Saturday'}]
        if (secondDay == firstDay && secondDay !== undefined && firstDay != undefined){
            matchTemplateObjects[secondDay].color = "green"
        return matchTemplateObjects
        // messageMatch = 'They match and the color will be Green!'
        } if (secondDay !== undefined && firstDay === undefined ){
            matchTemplateObjects[secondDay].color = "blue"
        return matchTemplateObjects
    } if (secondDay === undefined && firstDay !== undefined ){
            matchTemplateObjects[firstDay].color = "red"
        return matchTemplateObjects
    }
        else {
            matchTemplateObjects[secondDay].color = "red"
            matchTemplateObjects[firstDay].color = "blue"
            return matchTemplateObjects
        }
    }

    function getMatchTemplate(){
        return matchTemplateObjects
    }

    function getMessage(){
        return messageMatch
    }

    return {
        getMatchTemplate,
        getMessage,
        getSetDays,
        matchingDaysWithColor,
        setFirstDay,
        setSecondDay
    }
}
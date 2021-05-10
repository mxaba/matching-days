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
        if (secondDay == firstDay){
            matchTemplateObjects[secondDay].color = "green"
            // messageMatch = 'They match and the color will be Green!'
        } else {
            matchTemplateObjects[secondDay].color = "red"
            matchTemplateObjects[firstDay].color = "blue"

        }
        return matchTemplateObjects
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
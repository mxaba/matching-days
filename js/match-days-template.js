document.addEventListener('DOMContentLoaded', function(){
    var initFunction = MatchingDaysLogic()
    var weekDays = document.querySelector('.week')

    var matchingDaysTemplate = document.querySelector('.matching-days-template').innerHTML
    var matchDaysCompiled = Handlebars.compile(matchingDaysTemplate)

    var matchTemplateObjects = [{dayOfWeek : 'Sunday'}, {dayOfWeek : 'Monday'}, {dayOfWeek : 'Tuesday'}, {dayOfWeek : 'Wednesday'}, {dayOfWeek : 'Thursday'}, {dayOfWeek : 'Friday'}, {dayOfWeek : 'Saturday'}]

    weekDays.innerHTML = matchDaysCompiled({daysOfTheWeek : matchTemplateObjects})
    // console.log(weekDays)

    function emptyHTML(){
        setTimeout(function(){
            weekDays.innerHTML = ''
        }, 2500)
    }

    var matchDays = function(){
        var first = document.querySelector('.firstdate').value
        var second = document.querySelector('.seconddate').value
        emptyHTML()
        if (first){
            var newDate = new Date(first)
            console.log(newDate.getDay())
            initFunction.setFirstDay(newDate.getDay())
            console.log( 'From Factory Function: ' + initFunction.getSetDays().firstDay)
        } if (second){
            var newDate = new Date(first)
            initFunction.setSecondDay(newDate.getDay())
        }

    }

    document.getElementById('firstdate').addEventListener('change', matchDays)
})

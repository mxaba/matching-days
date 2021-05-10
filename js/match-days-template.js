document.addEventListener('DOMContentLoaded', function(){
    var initFunction = MatchingDaysLogic()
    var weekDays = document.querySelector('.week')
    var message = document.querySelector('.message')

    var matchingDaysTemplate = document.querySelector('.matching-days-template').innerHTML
    var matchDaysCompiled = Handlebars.compile(matchingDaysTemplate)

    weekDays.innerHTML = matchDaysCompiled({daysOfTheWeek : initFunction.getMatchTemplate()})

    var matchDays = function(){
        var first = document.querySelector('.firstdate').value
        var second = document.querySelector('.secondate').value
        if (first ){
            console.log(typeof first)
            // emptyHTML()
            var newDate = new Date(first)
            initFunction.setFirstDay(newDate.getDay())
            console.log( 'firstdDay: ' + initFunction.getSetDays().firstDay)
            message.innerHTML = initFunction.getMessage()
            console.log('Message: ' + initFunction.getMessage())
            weekDays.innerHTML = matchDaysCompiled({daysOfTheWeek : initFunction.matchingDaysWithColor()})

        } if (second){
            var newDate2 = new Date(second)
            initFunction.setSecondDay(newDate2.getDay())
            weekDays.innerHTML = matchDaysCompiled({daysOfTheWeek : initFunction.matchingDaysWithColor()})
        }
    }

    document.getElementById('firstdate').addEventListener('change', matchDays)
    document.getElementById('secondate').addEventListener('change', matchDays)
})

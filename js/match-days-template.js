document.addEventListener('DOMContentLoaded', function(){
    var initFunction = MatchingDaysLogic()
    var weekDays = document.querySelector('.week')
    var message = document.querySelector('.message')

    var matchingDaysTemplate = document.querySelector('.matching-days-template').innerHTML
    var matchDaysCompiled = Handlebars.compile(matchingDaysTemplate)

    weekDays.innerHTML = matchDaysCompiled({daysOfTheWeek : initFunction.getMatchTemplate()})

    function emptyHTML(){
        setTimeout(function(){
            weekDays.innerHTML = ''
        }, 100)
    }

    var matchDays = function(){
        var first = document.querySelector('.firstdate').value
        var second = document.querySelector('.secondate').value
        if (first && second){
            // emptyHTML()
            var newDate = new Date(first)
            initFunction.setFirstDay(newDate.getDay())
            console.log( 'firstdDay: ' + initFunction.getSetDays().firstDay)

            var newDate2 = new Date(second)
            initFunction.setSecondDay(newDate2.getDay())
            console.log( 'secondDay: ' + initFunction.getSetDays().secondDay)
            message.classList.remove('message1')
            message.classList.add('succ')
            message.innerHTML = initFunction.getMessage()
            console.log('Message: ' + initFunction.getMessage())
            weekDays.innerHTML = matchDaysCompiled({daysOfTheWeek : initFunction.matchingDaysWithColor()})

            document.querySelector('.firstdate').value = ''
            document.querySelector('.secondate').value = ''

        } else {
            message.classList.remove("succ")
            message.classList.add('message1')
            message.innerHTML = "Please select the other date!"
            // setTimeout(function(){
            //     message.innerHTML = ''
            // }, 700)
            weekDays.innerHTML = matchDaysCompiled({daysOfTheWeek : initFunction.getMatchTemplate()})
        }
    }

    document.getElementById('firstdate').addEventListener('change', matchDays)
    document.getElementById('secondate').addEventListener('change', matchDays)
})

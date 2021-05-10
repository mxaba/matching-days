describe('Matchng Days Logic', function(){
    describe('Testing the value selected', function(){
        it('It should return the value of the first selected date', function(){
            var init = MatchingDaysLogic()
            var newDate = new Date('2021-04-01')
            init.setFirstDay(newDate.getDay())
            assert.equal(4, init.getSetDays().firstDay)
        })
        it('It should return the value of the second selected date', function(){
            var init = MatchingDaysLogic()
            var newDate = new Date('2021-05-08')
            init.setSecondDay(newDate.getDay())
            assert.equal(6, init.getSetDays().secondDay)
        })
    })
    describe('Testing the color for both dates', function(){
        it('It should return an array with an updated color for only the second date', function(){
            var up = [{dayOfWeek : 'Sunday', color: ""}, {color: "", dayOfWeek : 'Monday'}, {color: "", dayOfWeek : 'Tuesday'}, {color: "", dayOfWeek : 'Wednesday'}, {color: "", dayOfWeek : 'Thursday'}, {color: "", dayOfWeek : 'Friday'}, {color: "blue", dayOfWeek : 'Saturday'}]
            var init = MatchingDaysLogic()
            var newDate = new Date('2022-10-01')
            init.setSecondDay(newDate.getDay())
            assert.equal(6, init.getSetDays().secondDay)
            assert.deepEqual(up, init.matchingDaysWithColor())
        })
        it('It should return an array with an updated color for only the FIRST date', function(){
            var up = [{dayOfWeek : 'Sunday', color: ""}, {color: "red", dayOfWeek : 'Monday'}, {color: "", dayOfWeek : 'Tuesday'}, {color: "", dayOfWeek : 'Wednesday'}, {color: "", dayOfWeek : 'Thursday'}, {color: "", dayOfWeek : 'Friday'}, {color: "", dayOfWeek : 'Saturday'}]
            var init = MatchingDaysLogic()
            var newDate = new Date('2024-04-01')
            init.setFirstDay(newDate.getDay())
            assert.equal(1, init.getSetDays().firstDay)
            assert.deepEqual(up, init.matchingDaysWithColor())
        })
    })

    describe('Testing the color for both dates selected dates', function(){
        it('It should return an array with an updated color for both dates', function(){
            var up = [{dayOfWeek : 'Sunday', color: ""}, {color: "blue", dayOfWeek : 'Monday'}, {color: "red", dayOfWeek : 'Tuesday'}, {color: "", dayOfWeek : 'Wednesday'}, {color: "", dayOfWeek : 'Thursday'}, {color: "", dayOfWeek : 'Friday'}, {color: "", dayOfWeek : 'Saturday'}]
            var init = MatchingDaysLogic()
            var newDate = new Date('2024-04-01')
            var newDate1 = new Date('2020-09-01')
            init.setFirstDay(newDate.getDay())
            init.setSecondDay(newDate1.getDay())
            assert.equal(1, init.getSetDays().firstDay)
            assert.equal(2, init.getSetDays().secondDay)
            console.log(init.matchingDaysWithColor())
            assert.deepEqual(up, init.matchingDaysWithColor())
        })
    })

})
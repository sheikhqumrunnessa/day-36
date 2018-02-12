var vm = new Vue({
    el: '.my-div',
    data : {
        message : 'Hello Vue JS',
        votes: 0,
        name: '',

        firstName: '',
        lastName: '',
        fullName: '',

        firstNumber: 0,
        lastNumber: 0,
        Result: 0,

        courses : [
            {title:'HTML', instructor: 'Mosabber'},
            {title:'CSS', instructor: 'Fatima Munni'},
            {title:'Java Script', instructor: 'Joy'},
            {title:'PHP', instructor: 'Kornop'},
            {title:'Bootstrap', instructor: 'Mosabber'},
        ]
    },
    methods : {
        makeFullName : function () {
            this.fullName = this.firstName+' '+this.lastName;
        },

        additionFunction: function () {
            this.Result = Number(this.firstNumber) + Number(this.lastNumber) ;
        },
        subtractionFunction: function () {
            this.Result = this.firstNumber - this.lastNumber ;
        },
        divisionFunction: function () {
            this.Result = this.firstNumber / this.lastNumber ;
        },
        multiplicationFunction: function () {
            this.Result = this.firstNumber * this.lastNumber ;
        },
    }

});
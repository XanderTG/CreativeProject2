const value = "autumn";
var url = "https://cors-anywhere.herokuapp.com/";

url += "https://pixabay.com/api/?key=13888861-0d655992522f39f815bf7327f&q=" + value + "&orientation=horizontal" +
    "&image_type=photo" + "&category=nature" + "&safesearch=true";


fetch(url)
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log(json);

        var randomNum = Math.floor((Math.random() * 20), 0);
        //console.log(randomNum);

        let testImage = json.hits[randomNum].largeImageURL;
        document.getElementById("test").src = testImage;
        console.log(testImage);
    });


var myVue = new Vue({
    el: '#column2',
    data: {
        iAms: [{
                text: "Happy"
            },
            {
                text: "Smart"
            },
            {
                text: "A child of God"
            }
        ],
        nextIAm: '',
    },
    methods: {
        addIAm() {
            this.iAms.push({ text: this.nextIAm });
        },
        deleteItem(iAm) {
            var index = this.todos.indexOf(iAm);
            if (index > -1)
                this.todos.splice(index, 1);
        },
    }

});

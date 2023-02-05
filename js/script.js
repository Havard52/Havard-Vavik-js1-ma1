const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//Answer 1

const cat = {complain: function(){
    console.log("Meow!")
    }
};

cat.complain();


//Answer 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


//Answer 3

heading.style.fontSize = "2em";


//Answer 4

heading.classList.add ("subheading");


//Answer 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
};


//Answer 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p style = "background-color: yellow">New paragraph</p>`;


//Answer 7

function catList (list) {
    for (let i = 0; i < list.length; i++){
       console.log(list[i].name);
    }
};

catList (cats);


//Answer 8

function createCats (cats) {
   
    let html = "";

    for (let i = 0; i < cats.length; i++){

        let catAge = "Age unknown";

        if (cats[i].age) {
            catAge = cats[i].age;
        }
                
        html += `<div><h5>${cats[i].name}</h5></div>
        <div><p>Age: ${catAge}</p></div>`;
     }
     return html;
};

const catsContainer = document.querySelector(".cat-container");
const newHtml = createCats (cats);

catsContainer.innerHTML = newHtml;
console.log('News Project');

//initialize the news api parameter
// let source = "bbc-news";
// let apiKey = 'c7d486798fda42cf99b4e8b1462d68d7';
let apiKey = 'pub_2342dc6af295ca50ac111875740009661c4c';

//grab the news container
let newsAccordion = document.getElementById('newsAccordion');

//create an AJAX get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsdata.io/api/1/news?apikey=${apiKey}&category=technology&country=in`,true);
xhr.onload = function(){
        let json = JSON.parse(this.responseText);
        let results = json.results;//grabbing only headlines
        let newsHtml = "";//defining newsHtml
        // console.log(results);
        results.forEach(function(element, index){//jebe jebe ame for each loop use karu, setebele sabu array element gt gt kari element re store heithae. ame mane taku pare se array object name na neiki khali element. lekhiki use karipariba.
            // console.log(element, index);
                let news = `<div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}">
                <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse${index}"
                    aria-expanded="false"
                    aria-controls="collapse${index}"
                >
                    <b>Breaking News ${index+1}:&nbsp;</b>${element.title}
                </button>
                </h2>
                <div
                id="collapse${index}"
                class="accordion-collapse collapse"
                aria-labelledby="heading${index}"
                data-bs-parent="#newsAccordion"
                >
                <div class="accordion-body show">
                    ${element.description}.<a href="${element.link}" target="_blank">Read More...</a>
                </div>
                </div>
                </div>`
            newsHtml += news;//loop for populate
        });
        newsAccordion.innerHTML = newsHtml;//display in DOM
    }
xhr.send()

// 
export const cardsData = [
  {
    category: "Technology",
    title: "Revolutionizing Our Production Process",
    text: "Learn how our recent investment in new technology has revolutionized our production process, leading to improved efficiency and product quality.",
    author: "John Doe",
    date: "2022-08-15",
    authorImage: "./assets/test-img/author-1.jpeg",
    image: "./assets/test-img/cover-1.jpg"
  },
  {
    category: "Expansion",
    title: "Expanding Our Service Network",
    text: "Discover how our expansion investment has allowed us to enhance our service network, providing better support and customer experience.",
    author: "Jane Smith",
    date: "2022-09-02",
    authorImage: "./assets/test-img/author-2.jpeg",
    image: "./assets/test-img/cover-2.jpg"
  },

  {
    category: "Sustainability",
    title: "Sustainable Practices for a Greener Future",
    text: "Find out how our investment in sustainable practices is driving us towards a greener future, showcasing our commitment to environmental responsibility.",
    author: "Mie Johnson",
    date: "2022-09-20",
    authorImage: "./assets/test-img/author-3.jpeg",
    image: "./assets/test-img/cover-3.jpg"
  }
];

let cardsContainer=document.querySelector('.cards .container-wrapper');

createCard(cardsData);

function createCard(dataJSON){
  cardsContainer.innerHTML = "";
    dataJSON.forEach(dataElement => {
      
      let card = createElement( 'card','div', 'card')
     
        if(dataElement.image){
            let cardImg = createElement( 'cardImg','img', 'card-img');
            cardImg.src = dataElement.image;
            cardImg.alt = dataElement.title;

            card.appendChild(cardImg);
        }
        
        let cardText = createElement( 'cardText','div', 'card-text');
          cardText.innerHTML = `<h4>` + dataElement.category +`</h4>` + `<h2>`+ dataElement.title +`</h2>`+`<p>`+ dataElement.text +`</p>`;


        let authorInfo = createElement( 'authorInfo','div', 'card-author', 'author')
        let authorPhoto = createElement( 'authorPhoto','img', 'author-photo');
          authorPhoto.src = dataElement.authorImage;
          authorPhoto.alt = dataElement.author;

        let authorText = createElement( 'authorText','div', 'author-text');
          authorText.innerHTML = `<h3>` + dataElement.author +`</h3>` + `<p>`+ dataElement.date +`</p>`

        card.appendChild(cardText);
        cardText.appendChild(authorInfo);
        authorInfo.appendChild(authorPhoto);
        authorInfo.appendChild(authorText);
        cardsContainer.appendChild(card);
    });
}
function createElement(elementName,tagName, ...className){
   elementName = document.createElement(tagName);
   if(className){
    for(let i = 0; i < className.length; i++)
      elementName.classList.add(className[i]);
   }
   return elementName
}


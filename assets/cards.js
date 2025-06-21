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
    author: "Alex Johnson",
    date: "2022-09-20",
    authorImage: "./assets/test-img/author-3.jpeg",
    image: "./assets/test-img/cover-3.jpg"
  }
];

let cardsContainer=document.querySelector('.cards .container-wrapper');
console.log(cardsContainer);


createElement(cardsData);

function createElement(dataJSON){
    dataJSON.forEach(dataElement => {
        
        let card = document.createElement('div');
        card.classList.add('card')

        if(dataElement.image){
            let cardImg = document.createElement('img');
            cardImg.src = dataElement.image;
            cardImg.alt = dataElement.title;

            card.appendChild(cardImg);
        }
        
        
        cardsContainer.appendChild(card);
        return cardsContainer;
    });
}
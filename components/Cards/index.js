// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: 
//https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:

{/* <div class="card">
  <div class="headline">{Headline of article}</div>
  <div class="author">
    <div class="img-container">
      <img src={url of authors image} />
    </div>
    <span>By {authors name}</span>
  </div>
</div>

Create a card for each of the articles and add the card to the DOM. */}

    axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
	.then(response => {
        const artcls = response.data.articles;
        article(artcls);
	 })
	.catch(err => {
	    console.log('Error: ', err);
	});
	    function article (obj) {
         const b = document.querySelector('.cards-container');
          for (let topic in obj) {
            const arryTpcs = obj[topic];
	           arryTpcs.forEach((element) => {
            const card = document.createElement('div');
            const headline = document.createElement('div');
            const author = document.createElement('div');
            const imgContainer = document.createElement('div');
            const authImg = document.createElement('img');
            const authNme = document.createElement('span');
                    
            // Added classes
            card.classList.add('.card');
            headline.classList.add('headline');
            author.classList.add('author')
            imgContainer.classList.add('img-container');
            card.classList.add('card');
                  
            // Added the textContent
                    
            // card.dataset.obj = obj;
            headline.textContent = element.headline;
            author.textContent = element.authNme;
            authImg.src = element.authorPhoto;
            authNme.textContent = element.authNme;
        
            // Appended the required classes / selectors 
            
            card.appendChild(headline);
            card.appendChild(author);
            author.appendChild(imgContainer);
            author.appendChild(authNme);
            imgContainer.appendChild(authImg);
            b.appendChild(card);
          })
        }
        };
// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(function (rspns) {
        const b = rspns.data.topics;
        topics(b);
    })
    .catch(function(err) {
        console.log(err);
    })

function topics(topics) {
    const mntpnt = document.querySelector('.topics');
    const altpcs = document.createElement('div');
    altpcs.classList.add('tab');
    altpcs.textContent = 'ALL';
    altpcs.addEventListener('click', function() {
        console.log('something')
    })
        mntpnt.appendChild(altpcs);
        topics.forEach(element => {
            const topic = document.createElement('div');
            topic.classList.add('tab');
            topic.textContent = element;
            topic.addEventListener('click', function (event) {
                const tbsArry = [].slice.call(document.querySelectorAll('.tab'));
                const artcls = [].slice.call(document.querySelectorAll('.card'));
            const tpcKy = event.originalTarget.dataset.key;
            artcls.forEach(article => {
            })
            })
                // mntpnt.appendChild('.topics');
                mntpnt.appendChild(topic);
        });
}

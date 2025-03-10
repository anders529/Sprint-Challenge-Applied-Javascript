// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// Created Function
function Header() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');

    // Added classes

    header.classList.add('header');
    date.classList.add('date');
    h1.classList.add('h1')
    temp.classList.add('temp');
  
    // Added the textContent

    date.textContent = dates();
    h1.textContent = 'Lambda Times';
    temp.textContent = '98°';
    
    // Appended the required classes / selectors 

    header.appendChild(h1);
    header.appendChild(date);
    header.appendChild(temp);
    
    return header;
  }

  // Going to format it so that is shows Month, Day and Year in order.
  function dates() {
      const currentDate = new Date();
      const monthArray = ['Janurary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const months = monthArray[currentDate.getMonth()];
      const days = currentDate.getDate();
      const years = currentDate.getFullYear();
      const b = `${months} ${days} ${years}`;

      return b;
  }

  const headCntnr = document.querySelector('.header-container');
  headCntnr.appendChild(Header());

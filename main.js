const search = document.querySelector('.search input');
const searchbar = document.querySelector('.searchbar');
const signupButton = document.getElementById('signup');

const signupContainer = document.querySelector('.signupcontainer');
const signupBackdrop = document.querySelector('.signupbackdrop');

const loginButton = document.getElementById('login');

const loginBackdrop = document.querySelector('.loginbackdrop');
const loginContainer = document.querySelector('.logincontainer');
const closeContainer = document.querySelector('.closecontainer');
const closeContainerTwo = document.querySelector('.closecontainertwo');
const body = document.querySelector('body');

const darkMode = document.querySelector('.switch');

const signupForm = document.querySelector('.signupform');

// send a post request from the front end to the back end

signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = email.form.value;
  const password = password.form.value;

  // try {
  //   const res = await fetch('/', {
  //     method: 'POST', // we have to specify the method so on the server it knows its going to handle a post request
  //     body: JSON.stringify({ email, password }),
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  // } catch {}
});
loginButton.addEventListener('click', () => {
  loginBackdrop.style.display = 'flex';
});
signupButton.addEventListener('click', () => {
  signupBackdrop.style.display = 'flex';
});
closeContainer.addEventListener('click', () => {
  signupBackdrop.style.display = 'none';
  loginBackdrop.style.display = 'none';
});
closeContainerTwo.addEventListener('click', () => {
  loginBackdrop.style.display = 'none';
});

search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase(); // we store the term inputed in search bar into a variable which we can then use later
  searchbar.classList.add('show');
  filterShop(term);

  if (!term) {
    // if there is no term inside search then we remove the class that displays the list
    searchbar.classList.remove('show');
  }
});

const filterShop = (term) => {
  // this term is the term that we type in the input value of search
  // we turn the HTMLcollection we get from searchbar.children into an Array and then there we can use the .forEach and .filter method on the list
  Array.from(searchbar.children)
    // for this filter it means if the LI text content ! does not have the term of the search input field then we apply the id that does display:none;
    .filter((li) => !li.textContent.toLowerCase().includes(term)) // we take term here and check to see if that term is included here by typing .includes
    // we convert everything lowercase so that even if they type in caps it gets converted into lowercase and the comparison is true.
    .forEach((li) => li.setAttribute('id', 'filtered')); // here we loop through the array and apply the id
  Array.from(searchbar.children)
    .filter((li) => li.textContent.toLowerCase().includes(term)) // if term is included/inside in the lithen we remove the id. if term is on the input then we remove class because we want to show whatever is on term
    .forEach((li) => li.removeAttribute('id', 'filtered'));
};

darkMode.addEventListener('click', () => {
  darkMode.classList.toggle('active');
  body.classList.toggle('dark');
});

console.log(searchbar.children);

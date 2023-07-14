import 'regenerator-runtime'; 
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../DATA.json';

console.log(data);

const listResto = data => {
    const restElement = document.querySelector('#restolist');
    restElement.innerHTML=''
    data.forEach(resto => {
        const {name, description, pictureId, city, rating} = resto;
        const listResto = document.createElement('div');
        restElement.setAttribute('class','resto');

        listResto.innerHTML=`
        <article class="post-item">
        <span class="post-item_city">
             <b>${city}</b>
           </span>
        <img class="post-item_thumbnail"
             src="${pictureId}"
             alt="Gambar restaurant ${name}">
        <div class="post-item_content">
          <p class="post-item_rating"><span class="material-symbols-outlined">
          star</span>${rating}</p>
          <h1 class="post-item_title"><a href="#">${name}</a></h1>
          <p class="post-item_description">${description}</p>
        </div>
      </article>
        `
        restElement.appendChild(listResto);
    });
}

listResto(data.restaurants);

const toggleBtn = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');
toggleBtn.addEventListener('click', function() {
  for(var i=0; i<navbarLinks.length; i++)
  navbarLinks[i].classList.toggle('active');
});

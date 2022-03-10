// Your code here

const flatdandoApi = "http://localhost:3000/films/1"
const poster = document.getElementById("poster")
const filmItem = document.getElementById("film item")




fetch(flatdandoApi)
.then((response)=>response.json())
.then(seeMovie)

function seeMovie(movieData){
    poster.src = movieData.poster;
    poster.alt = movieData.title;
   document.querySelector('.meta').textContent = movieData. runtime
   document.querySelector('.title').textContent = movieData. title
   document.querySelector('#film-info').textContent = movieData. description
   document.querySelector('#showtime').textContent = movieData. showtime
   document.querySelector('#ticket-num').textContent = movieData. tickets
}

function menuMovie(movieAll){
    const createMovieList = document.createElement("li")
  createMovieList.classList.add("films")
  filmItem.append(createMovieList)

}




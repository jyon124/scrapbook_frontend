Hamburger Nav

input[type="checkbox"] {
  zoom: 1.5;
}

.nav-column {
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
}

.nav-column:hover {
  color: tomato;
}

#menuToggle {
  display: block;
  position: relative;
  top: 50px;
  left: 30px; 
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input{
  margin-left: 2em;
  display: block;
  width: 20px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
}

#menuToggle span {
  margin-left: 2em;
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: black;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}

#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #A60013;
}

#menuToggle input:checked ~ span:nth-last-child(3){
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2){
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  border-radius: 10%;
  position: absolute;
  width: 80px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li {
  padding: 10px 0;
  font-size: 22px;
}

#menuToggle input:checked ~ ul {
  transform: none;
}

/* end */

/* login & Sign up */

.form-container {
  margin-top: 15em;
  text-align: center;
}

/* end */

/* NewsLists */

.read-more {
  /* position: absolute; */
  bottom: 0;
  right: 0;
  margin-right: 8px;
  margin-bottom: 8px;

  position: absolute;
  /* bottom: 1rem; */
  /* right: 1rem; */
  font-size: 0.9em;
  font-weight: 600;
  text-decoration: none;
  color: #AD7D52;
  box-sizing: border-box;
} 

body, html {
    font-family: 'Roboto Slab', serif;
    margin: 0;
    width: 100%;
    height: 100%;
    padding: 0;
 }

 .nav-enter {
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
}

.nav-enter:hover {
  color: tomato;
}

  .head-img-banner {
    margin-left: 20.8em;
    width: auto;
    height: 24em;
    filter: grayscale(40%);
    /* filter: blur(1px); */
  }

 .header {
   padding: 1em 1em;
   background-color: white;
  }

 body {
   -webkit-align-items: center;
   justify-content: center;
   align-items: center;
 }

 .title {
   text-align: center;
 }

 .underline {
    border-bottom: 2px solid lightgrey;
    border-bottom-width: thin;
    margin-top: -1.5em;
    margin-left: 24em;
    margin-right: 24em;
 }
 
 /* .center {
   display: inline-block;
 } */

 /* .card {
  width: 480px;
  height: 175px;
  box-shadow: 0 6px 10px 4px rgba(0,0,0,0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;
} */

/* .card h3 {
  font-size: 1.1em;
  text-align: center;
  margin-left: 12em;
  margin-right: 2.3em;
} */

/* .card p {
  color: #4D3724;
  font-weight: 600;
  margin-left: 14em;
} */

.saveTag {
  transform: scale(0.1);
  position: absolute;
  top: -16.3em;
  left: -0.1em;
  /* left: 13.1em; */
}

/* .card:hover {
  color: #FF7538;
}

.card .additional {
  position: absolute;
  width: 185px;
  height: 100%;
  background: linear-gradient(#dE685E, #EE786E);
  transition: width 0.4s;
  overflow: hidden;
  z-index: 2;
}


.card:hover .additional {
  width: 42%;
  border-radius: 0 5px 5px 0;
}

.card .additional .user-card {
  width: 150px;
  height: 100%;
  position: relative;
  float: left;
}

.card .general .more {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 0.9em;
  font-weight: 600;
  text-decoration: none;
  color: #AD7D52;
  box-sizing: border-box;
} */

/* end */

/* News Display */

.scrapbooknews-display {
  box-sizing: border-box;
  border-right: 2px solid lightgrey;
  border-right-width: thin;
  /* border-right: black solid; */
  margin-left: 14em;
  margin-right: 38em;
  text-align: left;
  width: 43em;
  height: 80em;
  margin-bottom: -200em;
}

.scrapbooknews-img {
  width: 40em;
}

/* ########################### */

.author {
  font-size: 20px;
}

.collumn .figure {
  margin: 0 0 20px;
}

.collumn .figcaption{
  font-style: italic;
  font-size: 12px;
}

.media {
  -webkit-filter: sepia(80%) contrast(1) opacity(0.8);
  filter: sepia(80%) grayscale(1) contrast(1) opacity(0.8);
  mix-blend-mode: multiply;
  width: 100%;
  height: 40em;
}

.showNews-container {
  padding-top: 4em;
  margin-top: -4.2em;
  font-family: 'Droid Serif', serif;
  font-size: 14px;
  color: #2f2f2f;
  background-color: #f9f7f1;
  padding-bottom: 4em;
}

.newspaper {
  margin-left: 22em;
  margin-right: 21em;
}

.save-btn, .link-btn {
  font-size: 15px;
  border: none;
  margin-left: 14em;
  margin-top: 3em;
  margin-bottom: 3em;
  border-bottom: black 1px solid;
  background-color: #F9F7F1;
}

.saved-btn {
  pointer-events: none;
  color: #A60013;
  font-size: 15px;
  border: none;
  margin-left: 14em;
  margin-top: 3em;
  margin-bottom: 3em;
  border-bottom: black 1px solid;
  background-color: #F9F7F1;
}

.save-btn:hover, .link-btn:hover {
  border-radius: 8%;
  border: none;
  color: white;
  border-bottom: black 1px solid;
  background-color: grey;
}

header{
  font-family: 'Playfair Display', serif;
  font-weight: 900;
  font-size: 80px;
  text-transform: uppercase;
  display: inline-block;
  line-height: 72px;
  margin-bottom: 20px;
}

p {
  margin-top: 0;
  margin-bottom: 20px;
}

.head{
  text-align: center;
  position: relative;
}

.subhead{
  text-transform: uppercase;
  border-bottom: 2px solid #2f2f2f;
  border-top: 2px solid #2f2f2f;
  padding: 12px 0 12px 0;

}

.content{
  font-size: 0;
  line-height: 0;
  word-spacing: -.31em;
  display: inline-block;
  margin: 30px 2% 0 2%;
}

.collumn{
  font-size: 14px;
  line-height: 20px;
  width: 17.5%;
  display: inline-block;
  padding: 0 1% 0 1%;
  vertical-align: top;
  margin-bottom: 50px;
  transition: all .7s;
}

.collumn + .collumn { 
  border-left: 1px solid #2f2f2f;
}

.collumn .headline{
  text-align: center;
  line-height: normal;
  font-family: 'Playfair Display', serif;
  display: block;
  margin: 0 auto;
}

.collumn .headline.hl1{
  font-weight: 700;
  font-size: 30px;
  text-transform: uppercase;
  padding: 10px 0 10px 0;
}

.collumn .headline.hl3{
  font-weight: 400;
  font-style: italic;
  font-size: 36px;
  box-sizing: border-box;
  padding: 10px 0 10px 0;
}

.collumn .headline.hl4{
  font-weight: 700;
  font-size: 12px;
  box-sizing: border-box;
  padding: 10px 0 10px 0;
}

.news-content {
  font-family: 'PT Serif', serif;
  font-size: 16px;
}

.collumn .headline.hl4:before{
  border-top: 1px solid #2f2f2f;
  /* content: ''; */
  width: 100px;
  height: 7px;
  display: block;
  margin: 0 auto;
}

.collumn .headline.hl4:after{
  border-bottom: 1px solid #2f2f2f;
  /* content: ''; */
  width: 100px;
  height: 10px;
  display: block;
  margin: 0 auto;
}

@media only all and (max-width: 1800px) {
  .collumn{
      width: 100%;
  }
.collumn + .collumn {
      border-left: none;
      border-bottom: 1px solid #2f2f2f;
}
  header{
      max-width: 320px;
      font-size: 60px;
      line-height: 54px;
      overflow: hidden;
  }

}

/* end */

/* Notes */

  .notes-form {
    margin-bottom: -0.5em;
    list-style: none;
    margin-left: 2em;
    position: relative;
    top: -62em;
    left: 30px; 
    width: 28em;
    left: 44.2em;
    box-sizing: border-box;
  }

  .note {
    height: 48em;
    list-style: none;
    margin-right: 13.5em;
    position: relative;
    top: -62em;
    left: 30px; 
    left: 43em;
    overflow: scroll;
  }

  .single-note-content {
    overflow-x: auto;
    background-color: #fff;
    border-radius: 3%;
    padding: 2em;
    margin-top: 2em;
    margin-left: 0;
    margin-right: 2.4em;
    box-sizing: border-box;
    border: solid 1px grey;
    border-width: thin;
  }

/* end */


.wrapper {
  /* background-image: url('https://images.pexels.com/photos/1038674/pexels-photo-1038674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'); */
  /* background-size: 1200px; */
  margin-top: 3.5em;
  margin-bottom: 5em;
  margin-left: 12em;
  margin-right: 12em;
  height: 35em;
  /* overflow: scroll; */
}

.news-card-head{
	text-align: center;
	position: relative;
}

.news-card {
  background: #fff;
  padding: 30px;
  position: relative;
}

.news-card,
.news-card::before,
.paper::after {
  box-shadow: 1px 1px 1px rgba(0,0,0,0.25);
  border: 1px solid #bbb;
}

.news-card::before,
.news-card::after {
  content: "";
  position: absolute;
  height: 95%;
  width: 99%;
  background-color: #eee;
}

.news-card::before {
  right: 15px;
  top: 0;
  transform: rotate(-1deg);
  z-index: -1;
}

.news-card::after {
  top: 5px;
  right: -5px;
  transform: rotate(1deg);
  z-index: -2;
}

.news-card { 
    box-sizing: border-box;
    position: relative;
    width: 270px;
    height: 370px;
    font-size: 0;
    line-height: 0;
    word-spacing: -.31em;
    display: inline-block;
    margin-left: 180px;
    margin-bottom: 50px;
	  background-color: #f9f7f1;
}

.news-card-collumn{
    font-size: 15px;
    line-height: 20px;
    display: inline-block;
    padding: 0 1% 0 1%;
    vertical-align: top;
    margin-bottom: 50px;
    transition: all .7s;
}

.news-card-collumn + .news-card-collumn { 
  border-left: 1px solid #2f2f2f;
}

.news-card-collumn .news-card-headline{
    text-align: center;
    line-height: normal;
    font-family: 'Playfair Display', serif;
    display: block;
    margin: 0 auto;
}

.news-card-collumn .news-card-headline.hl5{
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    font-style: italic;
    box-sizing: border-box;
    padding: 10px 0 10px 0;
}
.news-card-collumn .news-card-headline.hl6{
    font-weight: 400;
    font-size: 12px;
    box-sizing: border-box;
    padding: 10px 0 10px 0;
}

.news-card-collumn .news-card-headline.hl6:before{
    border-top: 1px solid #2f2f2f;
    content: '';
    width: 70px;
    height: 7px;
    display: block;
    margin: 0 auto;
}
.news-card-collumn .news-card-headline.hl6:after{
    border-bottom: 1px solid #2f2f2f;
    content: '';
    width: 70px;
    height: 10px;
    display: block;
    margin: 0 auto;
}

.news-card-collumn .figure {
    margin: 0 0 24px;
}
.news-card-collumn .figcaption{
	font-style: italic;
	font-size: 12px;
}
.media-news-image {
    -webkit-filter: sepia(80%) contrast(1) opacity(0.8);
    filter: sepia(80%) grayscale(1) contrast(1) opacity(0.8);
    mix-blend-mode: multiply;
    width: 100%;
    height: 10em;
}

 */

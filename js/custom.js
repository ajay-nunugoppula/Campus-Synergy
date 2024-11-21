/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')

 //RECENT VIDEOS SECTION
 
const videoIds = ["6b9Za7KwD60","FCqQljef_3s","3P-TajlEg2A"];

const videoLink = "https://www.youtube.com/embed/";
const imgLink = "https://img.youtube.com/vi/";

setInitialVideos();

function setInitialVideos() {
  let otherVids = document.querySelectorAll(".other-videos div");
  for (let i = 0; i < otherVids.length; i++)
    otherVids[i].style.backgroundImage = `url(${imgLink}${ videoIds[i] }/0.jpg)`;
  document.getElementById("main-video").src = videoLink + videoIds[0];
}

function switchVideo(id) {
    let mainVid = document.getElementById("main-video");
    mainVid.src = videoLink + videoIds[id] + "?autoplay=1";
  }
    
    function youtube_parser(url) {
      var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
}
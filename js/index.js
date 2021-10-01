// Menu
{
  let outerBtn = document.querySelector("nav .container .icon"),
      innerBtn = document.querySelector(".menu .button"),
      menu = document.querySelector(".menu"),
      pageHolder = document.querySelector(".page-holder"),
      allClicks = document.querySelectorAll(".menu ul li a")

  outerBtn.addEventListener("click", () => {
    pageHolder.classList.add("active")
    menu.style.right = 0;
    for (let i = 0; i < allClicks.length ;i++){
      allClicks[i].addEventListener("click", () => {
        menu.style.right = -300 + "px"
        opacity.style.opacity = 1
      })
    }
  })
  innerBtn.addEventListener("click", () => {
    pageHolder.classList.remove("active")
    menu.style.right = -300 + "px";
  })
}
// End Menu

// Portfolio
{
  let picNums = 3;
  let btn = 
  document.querySelector(".portfolio .container .all-content button")
  let picToAdd = {
  one: {
      url: "imgs/portfolio/image-1.jpg",
      title: "Project Here",
      pargraph: 
      `My creative ability is very difficult to measure because 
      it can manifest in so many surprising and.`
    },
    two: {
      url: "imgs/portfolio/image-1.jpg",
      title: "Project Here",
      pargraph: 
      `My creative ability is very difficult to measure because 
      it can manifest in so many surprising and.`
    },
    three: {
      url: "imgs/portfolio/image-1.jpg",
      title: "Project Here",
      pargraph: 
      `My creative ability is very difficult to measure because 
      it can manifest in so many surprising and.`
    },
    four: {
      url: "imgs/portfolio/image-1.jpg",
      title: "Project Here",
      pargraph: 
      `My creative ability is very difficult to measure because 
      it can manifest in so many surprising and.`
    }
  }
  btn.addEventListener("click", () => {
    if (Object.keys(picToAdd).length > 0) {
      let i = 0;
      for (pic in picToAdd){
        addPort(picToAdd[pic].url, picToAdd[pic].title, picToAdd[pic].pargraph)
        delete picToAdd[pic]
        if (++i == 3) break;
      }
    } else {
      btn.style.display = "none"
    }
  })

  function addPort(url, title, pargraph) {
  let parentAdd = document.querySelector(".portfolio .container .all-content .all-port") 
  let add = document.createElement("div")
  add.classList.add("port")
  add.innerHTML = 
  `<img src= ${url} alt="Image-${++picNums}" />
  <div class="caption">
  <h4>${title}</h4>
  <p>
    ${pargraph}
  </p>`
  picNums++
  parentAdd.append(add)
  }

}
// End Portfolio 
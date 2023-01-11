function toggleInfo1(){
    let content = document.querySelector(".content")
    content.replaceChildren();
    let about = document.createElement('p')
    about.innerText = "Software Engineer with background in mathematics (BA in Math) and math education. My journey from math teacher to software engineer began with a love of technology and sports. Ambitious Flatiron School Software Engineering program and Penn State math graduate developing user-friendly websites with clean code. I bring the ability to work quickly, act readily, and have the willingness to push comfort zone boundaries. My experience includes working with nonprofits aiding families in need during the pandemic, providing math education for Latino immigrants, and making websites for small businesses."
    content.append(about)
}

function toggleInfo2(){
    let content = document.querySelector(".content")
    content.replaceChildren();
    let createTitle = document.createElement('p')
    createTitle.innerText = "Contact"
    let linkedin = document.createElement('a')
    linkedin.innerText = "Linkedin"
    linkedin.href = "https://www.linkedin.com/in/alejandro-marcano-b5267512a/"
    createTitle.innerText = "Contact info"
    let email = document.createElement('p')
    email.innerText = "Email: alejandromarcano98@gmail.com"
    let github = document.createElement('a')
    github.innerText = "Github"
    github.href = "https://github.com/amm7903"
    let p = document.createElement('p')
    content.append(createTitle)
    content.append(email)
    content.append(linkedin)
    content.append(p)
    p.append(github)
 }

 function toggleInfo3(){
    let content = document.querySelector(".content")
    content.replaceChildren();
    let createTitle = document.createElement('p')
    createTitle.innerText = "Projects"
    content.append(createTitle)
    let p = document.createElement('p')
    let a = document.createElement('a')
    a.href = "https://amm7903.github.io./"
    a.innerText = "Personal Website"
    content.append(p)
    p.append(a)
 }

//  function toggleInfo4(){
//     let linkedin = document.querySelector(".linkedin")
//     linkedin.href = ""
//     linkedin.innerHTML = ""
//     let content = document.querySelector(".info1")
//     content.innerText = "Resume"
//  }

 function toggleInfo4(){
    let content = document.querySelector(".content")
    content.replaceChildren();
    let createTitle = document.createElement('p')
    createTitle.innerText = "Resume"
    content.append(createTitle)


 }
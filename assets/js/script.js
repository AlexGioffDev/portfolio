link_work = document.getElementById("workLink");
link_about = document.getElementById("aboutLink");
section_work = document.getElementById("work");
section_about = document.getElementById("about");
header_element = document.querySelector("header");

link_work.addEventListener('click', (e) =>  {
    e.preventDefault()
    section_work.scrollIntoView({behavior: "smooth"})
})
link_about.addEventListener('click', (e) =>  {
    e.preventDefault()
    section_about.scrollIntoView({behavior: "smooth"})
})
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 47) {
        header_element.classList.add('active');
    }
    else{
        header_element.classList.remove('active')
    }
});
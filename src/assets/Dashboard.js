document.addEventListener("DOMContentLoaded", function(event) {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    // const links = document.querySelectorAll('nav-link')

    // links.forEach(link => {
    //     links.addEventListener('click', function() {
    //         links.forEach(a => a.classList.remove('active'));
    //     })
    //     this.classList.add('active');
    // })



    const showNavbar = (toggleId, navId, bodyId, headerId, logoID) =>{
    const logo = document.getElementById(logoID)
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd && logo){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon

    // toggle.classList.toggle('bx-x')
    const iconifySpan = toggle.querySelector('.iconify.t-icon');
    if (iconifySpan.getAttribute('data-icon') === 'mingcute:menu-fill') {
        iconifySpan.setAttribute('data-icon', 'heroicons-solid:x');
    }
    else {
        iconifySpan.setAttribute('data-icon', 'mingcute:menu-fill');
    }

    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })


    logo.addEventListener('click', ()=>{
        // show navbar
        nav.classList.toggle('show')
        // change icon

        // toggle.classList.toggle('bx-x')
        const iconifySpan = toggle.querySelector('.iconify.t-icon');
            if (iconifySpan.getAttribute('data-icon') === 'mingcute:menu-fill') {
                iconifySpan.setAttribute('data-icon', 'heroicons-solid:x');
            }
            else {
                iconifySpan.setAttribute('data-icon', 'mingcute:menu-fill');
            }

        // add padding to body
        bodypd.classList.toggle('body-pd')
        // add padding to header
        headerpd.classList.toggle('body-pd')
        })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header', 'logo-toggle')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active');
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });
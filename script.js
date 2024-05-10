const allData = [
    {
        "img": "./Assets/main-1.jpg",
        "title": "Ra",
        "tags": "Futuristic Fashion, Minimal Design",
        "description": "Exploring the intersection of minimalism and future fashion trends in web design."
    },
    {
        "img": "./Assets/main-2.jpg",
        "title": "Uptask",
        "tags": "Fashion Innovation, Graphic Simplicity",
        "description": "Innovative fashion-forward web design with a core focus on simplicity and elegance."
    },
    {
        "img": "./Assets/main-3.jpg",
        "title": "Genix",
        "tags": "Eco-Fashion, Sustainable Design",
        "description": "Sustainable fashion meets modern web aesthetics, highlighting eco-friendly apparel innovation."
    },
    {
        "img": "./Assets/main-4.jpg",
        "title": "Unor",
        "tags": "Digital Fashion, UI/UX",
        "description": "Digital-first fashion branding that merges cutting-edge UI/UX principles with style."
    },
    {
        "img": "./Assets/main-5.jpg",
        "title": "Xav",
        "tags": "Interactive Design, Fashion Tech",
        "description": "Tech-infused fashion experiences showcased through interactive web design elements."
    },
    {
        "img": "./Assets/main-6.jpg",
        "title": "Maxim Stark",
        "tags": "Futuristic Wearables, Web Graphics",
        "description": "Futuristic wearables and gear presented in a sleek, graphically rich web interface."
    },
    {
        "img": "./Assets/main-7.jpg",
        "title": "Pitcher",
        "tags": "Innovative Textiles, Web Presentation",
        "description": "Web presentation of innovative textiles that redefine the boundaries of modern fashion."
    },
    {
      "img": "./Assets/main-8.jpg",
      "title": "MindSpace",
      "tags": "Augmented Reality, Fashion Design",
      "description": "Augmented reality in fashion design, creating immersive web experiences for users.",
      },
      {    
      "img": "./Assets/main-9.jpg",
      "title": "The Athletix",
      "tags": "Virtual Fashion, Graphic Design",
      "description": "Virtual fashion collections displayed through stunning graphic design and web desthetics.",
      },
      {
      "img": "./Assets/main-10.jpg",
      "title": "All Work",
      "tags": "Minimalist Aesthetics, Fashion Forward",
      "description": "Fashion forward web design encapsulating the essence of minimalist aesthetics and innovatic"
      }  
];

allData.forEach((data)=>{
    document.querySelector('.items').innerHTML += `
    <div class="item"><p>${data.title}</p></div>
    `
})

document.querySelectorAll('.item').forEach((itm, index) => {
    itm.addEventListener('mouseenter', () => {
        if ((index + 1) % 2 === 0) {
            console.log("Even");
            gsap.to(['.img-1', '.img-2'], {
                width: "300px",
                opacity: 1,
                duration: 0.5,
                ease: "power3.easeInOut"
            });
        } else {
            gsap.to('.img-3', {
                height: "350px",
                opacity: 1,
                duration: 0.5,
                ease: "power3.easeInOut"
            });
        }
        gsap.to('.description, .title, .tag',{
            transform: "translateY(0%)",
            opacity: 1,
            duration: 0.5,
            ease: "power3.easeInOut"
        })
    });

    itm.addEventListener('mouseleave', () => {
        if ((index + 1) % 2 === 0) {
            console.log("Even");
            gsap.to(['.img-1', '.img-2'], {
                width: "0px",
                opacity: 0,
                duration: 0.5,
                ease: "power3.easeInOut"
            });
        } else {
            gsap.to('.img-3', {
                height: "0px",
                opacity: 0,
                duration: 0.5,
                ease: "power3.easeInOut"
            });
        }
        gsap.to('.description, .title, .tag',{
            transform: "translateY(120%)",
            opacity: 0,
            duration: 0.5,
            ease: "power3.easeInOut"
        })
    });
});


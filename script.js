const allData = [
    {
        "img": "./Assets/main-1.jpg",
        "title": "Ra",
        "tags": "Futuristic Fashion, Minimal Design",
        "description": "Exploring the intersection of minimalism and future fashion trends in web design.",
        "bgImg": "./Assets/bg-1.jpg"
    },
    {
        "img": "./Assets/main-2.jpg",
        "title": "Uptask",
        "tags": "Fashion Innovation, Graphic Simplicity",
        "description": "Innovative fashion-forward web design with a core focus on simplicity and elegance.",
        "bgImg": "./Assets/bg-2.jpg"
    },
    {
        "img": "./Assets/main-3.jpg",
        "title": "Genix",
        "tags": "Eco-Fashion, Sustainable Design",
        "description": "Sustainable fashion meets modern web aesthetics, highlighting eco-friendly apparel innovation.",
        "bgImg": "./Assets/bg-3.jpg"
    },
    {
        "img": "./Assets/main-4.jpg",
        "title": "Unor",
        "tags": "Digital Fashion, UI/UX",
        "description": "Digital-first fashion branding that merges cutting-edge UI/UX principles with style.",
        "bgImg": "./Assets/bg-4.jpg"
    },
    {
        "img": "./Assets/main-5.jpg",
        "title": "Xav",
        "tags": "Interactive Design, Fashion Tech",
        "description": "Tech-infused fashion experiences showcased through interactive web design elements.",
        "bgImg": "./Assets/bg-5.jpg"
    },
    {
        "img": "./Assets/main-6.jpg",
        "title": "Maxim Stark",
        "tags": "Futuristic Wearables, Web Graphics",
        "description": "Futuristic wearables and gear presented in a sleek, graphically rich web interface.",
        "bgImg": "./Assets/bg-6.jpg"
    },
    {
        "img": "./Assets/main-7.jpg",
        "title": "Pitcher",
        "tags": "Innovative Textiles, Web Presentation",
        "description": "Web presentation of innovative textiles that redefine the boundaries of modern fashion.",
        "bgImg": "./Assets/bg-7.jpg"
    },
    {
      "img": "./Assets/main-8.jpg",
      "title": "MindSpace",
      "tags": "Augmented Reality, Fashion Design",
      "description": "Augmented reality in fashion design, creating immersive web experiences for users.",
      "bgImg": "./Assets/bg-8.jpg"
      },
      {    
      "img": "./Assets/main-9.jpg",
      "title": "The Athletix",
      "tags": "Virtual Fashion, Graphic Design",
      "description": "Virtual fashion collections displayed through stunning graphic design and web desthetics.",
      "bgImg": "./Assets/bg-9.jpg"
      },
      {
      "img": "./Assets/main-10.jpg",
      "title": "All Work",
      "tags": "Minimalist Aesthetics, Fashion Forward",
      "description": "Fashion forward web design encapsulating the essence of minimalist aesthetics and innovatic",
      "bgImg": "./Assets/bg-10.jpg"
      }  
];

allData.forEach((data)=>{
    document.querySelector('.items').innerHTML += `
    <div class="item"><p>${data.title}</p></div>
    `
})

function getImages(){
    return allData.map((data) => {
        return data;
    });
}

let i = getImages();
console.log(i);

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

            gsap.to('#main',{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${i[index].bgImg})`,
                duartion: 0,
                // ease: "power3.easeInOut"
            });

            document.querySelector('.description').innerHTML = i[index].description;
            document.querySelector('.tag').innerHTML = i[index].tags;
            document.querySelector('.title').innerHTML = i[index].title;
            document.querySelector('.img-1').src = i[index].img;
            document.querySelector('.img-2').src = i[index].img;
        } else {
            document.querySelector('.description').innerHTML = i[index].description;
            document.querySelector('.tag').innerHTML = i[index].tags;
            document.querySelector('.title').innerHTML = i[index].title;
            document.querySelector('.img-3').src = i[index].img;

            gsap.to('#main',{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${i[index].bgImg})`,
                duration: 0,
                // ease: "power3.easeInOut"
            });

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
        });
    });

    itm.addEventListener('mouseleave', () => {
        // gsap.to('#main',{
        //     backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./Assets/bg-default.jpg)'
        // });

        if ((index + 1) % 2 === 0) {
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
        });
    });
});

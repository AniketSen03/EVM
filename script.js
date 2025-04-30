const candidates = [
    {
        index: ' 1.',
        name: "Narendra Modi",
        image: "https://pbs.twimg.com/profile_images/1833509376528945157/5AeMNn9f_400x400.jpg",
        partySymbol: "https://5.imimg.com/data5/SELLER/Default/2023/2/IB/ZV/GH/8142647/bjp-party-flag.png"
    },
    {
        index: ' 2.',
        name: "Rahul Gandhi",
        image: "https://bsmedia.business-standard.com/_media/bs/img/article/2025-02/21/full/1740123274-2784.jpg?im=FaceCrop,size=(826,465)",
        partySymbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Indian_National_Congress_Flag.svg/1200px-Indian_National_Congress_Flag.svg.png"
    },
    {
        index: ' 3.',
        name: "Amit Shah",
        image: "https://m.economictimes.com/thumb/msid-89143074,width-1200,height-900,resizemode-4,imgsize-67092/amit-shah-3.jpg",
        partySymbol: "https://5.imimg.com/data5/SELLER/Default/2023/2/IB/ZV/GH/8142647/bjp-party-flag.png"
    },
    {
        index: ' 4.',
        name: "Arvind Kejriwal",
        image: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTdmZGE3NmYwLWI4MjEtMTFlZi1hZWU4LWI5OWQ1NjM5ZjgzOS5qcGc=",
     partySymbol: "https://bsmedia.business-standard.com/_media/bs/img/article/2022-11/16/full/1668586087-9156.jpg"
    },
   
    {
        index: ' 5.',
        name: "Mamata Banerjee",
        image: "https://media.assettype.com/freepressjournal/2020-12/dad00431-e527-41c7-84d5-ad7dbd7456eb/mamata.jpg",
        partySymbol: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGe0yNeqFwLFfPP73Ngpsb-CWfy9YQohNRA&s"
    },
    {
        index: ' 6.',
        name: "Yogi Adityanath",
        image: "https://i0.wp.com/www.opindia.com/wp-content/uploads/2023/03/13.png?resize=696%2C424&ssl=1",
        partySymbol: "https://5.imimg.com/data5/SELLER/Default/2023/2/IB/ZV/GH/8142647/bjp-party-flag.png"
    },
    {
        index: ' 7.',
        name: "Akhilesh Yadav",
        image: "https://samajwadiparty.in/_assets/img/president.jpg",
        partySymbol: "https://www.flagcolorcodes.com/images/webp/samajwadi-party.webp"
    },
    {
        index: '8.',
        name: "Tejaswi Yadav",
        image: "https://etvbharatimages.akamaized.net/etvbharat/prod-images/05-06-2024/1200-675-21640383-thumbnail-16x9-cjjaja.jpg",
        partySymbol: "https://upload.wikimedia.org/wikipedia/en/2/27/RJD_Logo.jpg"
    },
    {
        index: '9.',
        name: "Uddhav Thackeray",
        image: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/22/full/1721635094-593.jpg?im=FitAndFill=(826,465)",
        partySymbol: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/SS%28UBT%29_flag.png/250px-SS%28UBT%29_flag.png"
    }
];

let main = document.querySelector('.main')


function box1() {
    let innerhtml = ''
    candidates.forEach(data => {
        innerhtml += ` <div class="pinkbox"> <span>${data.index}</span>
          <span>${data.name}</span>
          <img src=${data.image} alt="" class="candidate">
          <img src=${data.partySymbol} alt="" class="symbol"> </div>
          
          <div class="whitebox">
           <div class="light3"></div>
<button></button> </div>
          `
    });
    main.innerHTML = innerhtml
}
box1()


let vote = document.querySelector('.vote')
let who = document.querySelector('.who')
let btn = document.querySelectorAll('button')
who.classList.remove('who')
btn.forEach((button,index) => {
    button.addEventListener('click', () => {
        vote.innerHTML = 1
        setTimeout(() => {
            main.style.display = 'none'
        }, 1000);
        let data = candidates[index]
        who.classList.add('who')
            who.innerHTML = ` <span>${data.name}</span>
            <img src=${data.image} alt="" class="whocandidate">
            <img src=${data.partySymbol} alt="" class="whosymbol">`

            let light = document.querySelectorAll('.light3')
                light[index].style.boxShadow=' 0px 0px 20px 12px rgb(255, 71, 71)'
    })
});


setTimeout(() => {
    document.querySelector('.light1').style.display='block'
}, 1000);
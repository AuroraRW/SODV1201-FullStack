const cardData = [{name:'John', description:"This is John. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
                   level: 13, point: 15434, imageURL:"https://cdn-icons-png.flaticon.com/512/147/147144.png"},
                   {name:'Mary', description:"This is Mary. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
                   level: 10, point: 13423, imageURL:"https://cdn-icons-png.flaticon.com/512/147/147144.png"},
                   {name:'Lily', description:"This is Lily. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
                   level: 11, point: 14581, imageURL:"https://cdn-icons-png.flaticon.com/512/147/147144.png"},
                   {name:'Tom', description:"This is Tom. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
                   level: 15, point: 18904, imageURL:"https://cdn-icons-png.flaticon.com/512/147/147144.png"},
                   {name:'Lucy', description:"This is Lucy. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
                   level: 9, point: 12003, imageURL:"https://cdn-icons-png.flaticon.com/512/147/147144.png"},
                   {name:'Andrew', description:"This is Andrew. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a volutpat mauris, at molestie lacus. Nam vestibulum sodales odio ut pulvinar.",
                   level: 7, point: 10345, imageURL:"https://cdn-icons-png.flaticon.com/512/147/147144.png"},
                ]
//////////////////////DOM////////////////
/////////// different between HTMLCollection and NodeList

// let containerEle = document.getElementsByClassName("container")
// let containerEle = document.querySelector(".container")
// cardData.forEach((card)=>{
//     containerEle.innerHTML += `
//     <div class="card">
//         <div class="left-infor">
//             <p>LEVEL ${card.level}</p>
//             <img src=${card.imageURL} alt="">
//             <p>${card.point} POINTS</p>
//         </div>
//         <div class="right-infor">
//             <h1>${card.name}</h1>
//             <p>${card.description}</p>
//             <div class="linkedin-link">
//                 <a href="https://www.google.com/">LinkedIn</a>
//             </div>
//         </div>
//     </div>`
// })


////////////////////jQuery//////////////////
$(function(){
    cardData.forEach(function(card){
        let $newCard = $(`
            <div class="card">
                <div class="left-infor">
                    <p>LEVEL ${card.level}</p>
                    <img src=${card.imageURL} alt="">
                    <p>${card.point} POINTS</p>
                </div>
                <div class="right-infor">
                    <h1>${card.name}</h1>
                    <p>${card.description}</p>
                    <div class="linkedin-link">
                        <a href="https://www.google.com/">LinkedIn</a>
                    </div>
                </div>
            </div>`)
        $(".container").append($newCard)
    })
})
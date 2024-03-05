
import {addQuoteCardToContainer} from './function.js'
const quoteURL = 'https://type.fit/api/quotes'
const imageURL = 'https://picsum.photos/v2/list'

$(document).ready(()=>{
    $.getJSON(quoteURL, (quoteData)=>{
        // sort array
        // let tempArr = [24,25,23]
        // tempArr.sort() 

        // if return <0, sort a before b
        // if return >0, sort a after b
        // Ascending
        // tempArr.sort((a,b)=>a-b)
        // Descending
        // tempArr.sort((a,b)=>b-a)
        // console.log(tempArr)

        // sort by key
        // let temp = [{name: "Tom", age:24},{name: "Mary", age:25},{name: "Lucy", age:23}]
        // temp.sort((a,b)=>a.age-b.age)
        // console.log(temp)

        // sort by author
        quoteData.sort((a,b)=>a.author < b.author ? -1: 1);
        $.getJSON(imageURL,(imageData)=>{
            let dataLength = Math.min(quoteData.length, imageData.length)
            for (let i=0;i<dataLength;i++){
                addQuoteCardToContainer(quoteData[i].text, quoteData[i].author, imageData[i].download_url)
            }
        })
    })
})


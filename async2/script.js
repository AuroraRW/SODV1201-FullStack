
///////////////////////////Promise////////////////////////////

// const promiseFunction = (a) =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(a>4){
//                 resolve('sucess!')
//             }else{
//                 reject('fail')
//             }
//         }, 2000)
//     })
// }

// promiseFunction(2)
// .then((res)=>{
//     console.log(res)
// })
// .catch((rej)=>{
//     console.log(rej)
// })


//////////////////////Async function///////////////////////

// async function asyncFunc(a){
//     if(a>4){
//         return 'sucess'
//     }else{
//         return 'fail'
//     }
// }

// console.log(asyncFunc(5))
// asyncFunc(5)
// .then((res)=>{
//     console.log(res)
// })
// // .catch((rej)=>{
// //     console.log(rej)
// // })


//////////////////////Catch error in async function///////////
// async function asyncFunc(a){
//     if(a>4){
//         return 'sucess'
//     }else{
//         throw new Error('fail') 
//     }
// }
// asyncFunc(3)
// .then((res)=>{
//     console.log(res)
// })
// .catch((rej)=>{
//     console.log(rej)
// })

///////////////////////await//////////////////////////////

// const myfunc = ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('done')
//         }, 2000)
//     })
// }

// async function asyncFunc2(){
//     const result = await myfunc()
//     console.log(result)
//     const result1 = await myfunc()
//     console.log(result1)
//     console.log("bbbb")
// }
// asyncFunc2()


////////////////////catch error from await////////////

// const myfunc = (a)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(a>4){
//                 resolve('sucess!')
//             }else{
//                 reject('fail')
//             }
//         }, 2000)
//     })
// }
// async function asyncFunc2(){
//     try{
//         const result = await myfunc(4)
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }
// asyncFunc2()
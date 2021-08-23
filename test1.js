const fs=require('fs')
const path=require('path')
const fileName=path.resolve(__dirname,'data.txt')
//read file
// fs.readFile(fileName,(err,data)=>{
//     if(err){
//         console.log.error(err)
//         return
//     }
//     console.log(data.toString())//data是二进制类型，需要转为字符串
// })
//写入文件
const content='this is a new file.\n'
const opt={
    flag:'a'//追加写入，若覆盖用'w'
}
fs.writeFile(fileName,content,opt,(err)=>{
    if(err){
        console.error(err)
    }
})
//判断文件是否存在
fs.exists(fileName,(exist)=>{
    console.log('exist',exist)
})

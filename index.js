
let blogs=[]

const show = () => {
    document.getElementById("data").innerHTML=""
    for(let i=0; i<blogs.length; i++){
        let img = document.createElement("img")
        img.src = blogs[i].img

      let title = document.createElement("h1")
      title.innerHTML=blogs[i].title

      let content = document.createElement("p")
      content.innerHTML=blogs[i].content

      let category = document.createElement("p")
      category.innerHTML=blogs[i].category
      category.setAttribute("class","categoryy")
      
      let like=document.createElement("button")
      like.innerHTML="like"
      like.setAttribute("class","likee")
      
      like.addEventListener("click",()=>{
       
       alert("like a msg" )
        show();
       })

     
      let del=document.createElement("button")
      del.innerHTML="DELETE"

      del.setAttribute("class","dell")
      del.addEventListener("click",()=>{
        blogs.splice(i,1)
        // console.log(i)
        show();

      })
       
      let div=document.createElement("div")
      div.append(img,title,content,category,like,del)
      title.setAttribute("class","title")
      document.getElementById("data").append(div)

    }


}



const formdata = (e) => {
   e.preventDefault()

 let title=document.getElementById("title").value
 let img=document.getElementById("img").value
 let content=document.getElementById("content").value
 let category=document.getElementById("category").value
 let blog={
    title:title,
    img:img,
    category:category,
    content:content,
    }
blogs.push(blog)
show()
console.log(blogs);
}




 document.getElementById("form").addEventListener("submit",formdata);
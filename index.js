//비동기 통신 ex)친구랑 급식 먹으러 감 -> 친구랑 같이 가야됨 -> 친구가 화장실 간대 -> 기다리자
/*
const newPromise = new Promise(function(resolve , reject){
    //익명함수
    setTimeout(() => {
        reject("오류");
    }),5000
})
newPromise.then( v => {
    console.log(v);
}).catch(error => {
    console.log(error);
})
function sleep(ms) {
    return new Promise(resolve => setTimeout)
}
async  function example(){
    console.log("안녕하세요");
    await sleep(3000);
    console.log("3초");

}
example();*/
//fetch("https://jsonplaceholder.typicode.com/posts")
/*
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    */
function loadData(){
    fetch("https://jsonplaceholder.typicode.com/posts").then((response)=>
        response.json()
        ).then(json => {
            const articlse = document.querySelector(".articlse");
            for(let i = 0; i<30; i++){
                articlse.appendChild(makeArticle(json[i]));
            }
        })

    }    
function makeArticle(articlse){
    const dom = document.createElement("div");
    const title = document.createElement("div");
    const content = document.createElement("div");
   
    title.innerHTML = `${articlse.title}`;
    content.innerHTML = `${articlse.body}`;
    title.style.color = 'blue';
    dom.appendChild(title);
    dom.appendChild(content);
    return dom;
}
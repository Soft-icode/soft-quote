const qoute = document.getElementById("qoute")
const author = document.getElementById("author")
const api_url = 'https://api.quotable.io/random';
async function getqoute(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    qoute.innerHTML = data.content
   author.innerHTML = data.author
}
getqoute(api_url);

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + qoute.innerHTML ,"Tweet window", "width=600, height=300")
}


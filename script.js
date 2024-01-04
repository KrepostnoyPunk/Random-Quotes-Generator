const btnEl=document.getElementById('btn')
const quoteEl=document.getElementById('quote')
const authorEl=document.getElementById('author')
const apiURL='https://api.quotable.io/random'

async function getQuote(){
    try{
    btnEl.innerText="Loading...";
    btnEl.disabled=true
    quoteEl.innerText="Loading..."
    authorEl.innerText="Loading..."
    const response=await fetch(apiURL)
    const data=await response.json()
    //console.log(data);
    const quoteContent=data.content
    const quoteAuthor=data.author
    quoteEl.innerText=quoteContent
    authorEl.innerText="~ " + quoteAuthor
    btnEl.innerText="GET A QUOTE"
    btnEl.disabled=false
    } catch (error) {
        console.log(error);
        quoteEl.innerText="ERROR. Try again later."
        authorEl.innerText="ERROR. Try again later."
        btnEl.innerText="GET A QUOTE"
        btnEl.disabled=false
    }
}

getQuote()

btnEl.addEventListener('click', getQuote)
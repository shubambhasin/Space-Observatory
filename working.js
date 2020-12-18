var apodBtn = document.querySelector(".apod-btn")
var title = document.querySelector(".title")
var image = document.querySelector("#image")
var date = document.querySelector(".date")
var explain = document.querySelector(".explaination")
var copyright = document.querySelector(".copyright")
var clear = document.querySelector("#clear")
var explainTitle = document.querySelector(".explain-title")
var key = "J1fbRVDUcTcYu9bR1P4kE4abaolfftDvgzCcYraU"
var api = "https://api.nasa.gov/planetary/apod?api_key=J1fbRVDUcTcYu9bR1P4kE4abaolfftDvgzCcYraU"

apodBtn.addEventListener('click', function getApodInfo() {
    fetch(api).then(response => {
        return response.json()
    }).then(data => {
        console.log(data)
        console.log(data.date)
        date.innerHTML = `Date: ${data.date}`
        console.log(data.explanation)
        explain.innerHTML = `${data.explanation}`
        console.log(data.title)
        title.innerHTML = `Title: ${data.title}`
        console.log(data.copyright)
        copyright.innerHTML = `Copyright: ${data.copyright}`
        console.log(data.url)
        document.getElementById("image").src = data.url
        document.getElementById("image") = data.url


    })
    explainTitle.innerHTML = "Explaination"
})

clear.addEventListener("click", function clearEverything() {


    console.log("Everything cleared")
    date.innerHTML = ""
    explain.innerHTML = ""
    title.innerHTML = ""
    copyright.innerHTML = ""
    image.src = ""
    explainTitle.innerHTML = ""

})
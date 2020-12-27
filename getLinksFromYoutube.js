var links = document.querySelectorAll('#main-link') //id name for the html label [youtube chose it]
var urls = []
for (let index = 0; index < links.length; index++) {
    urls.push(links[index].href) //saving the href attribute to an array
}
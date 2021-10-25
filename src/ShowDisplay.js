/*prototype of ShowcaseDisplay main class
    manage showbox
*/
class ShowcaseDisplay {
    constructor(_parentID) {
        console.log(_parentID)
        this.parentID = _parentID

        this.parent = document.getElementById(this.parentID)
        console.log(this.parent)
        this.createShowBox = this.createShowBox.bind(this)

        this.boxStyle = "boxSizing: border-box, color:black , borderColor:black"
        this.showboxes = []
        this.addFromJsonFile = this.addFromJsonFile.bind(this)
    }

    /**
     * 
     * @param {*} path 
     */
    addFromJsonFile(path) {

        fetch(path)
            .then(response => response.json())
            .then(data => {
                for (var i=0;i<=data.length-1;i++){
                    let box= data[i]
                    console.log(i)
                    console.log(data[i])
                    console.log(box)
                    console.log(box.backcolor)
                    switch(box.type){
                        case"showbox":
                            this.createShowBox(box.title,box.gitLink,box.deployLink,box.descrip,box.backcolor)
                            break;
                        default:
                            let sep1 = document.createElement("br")
                            let sep2 = document.createElement("hr")
                            this.parent.appendChild(sep1)
                            this.parent.appendChild(sep2)
                            break;
                    }
                    //console.log(box.title)
                
                }
            })
    }

    createShowBox(title = "", gitHubUrl = null, playUrl = null, _description = "", backcolor = "#ff9822") {
        console.log("addd sghow box")
        let showbox = document.createElement("div")
        let sb_title = document.createElement("h2")
        sb_title.textContent = title
        console.log(backcolor)
        //style of the showbox
        showbox.style.background = backcolor
        showbox.style.minHeight = "64px"
        showbox.style.minWidth = "128px"
        showbox.style.border = "black 2px solid"
        showbox.style.boxSizing = "border-box"
        showbox.style.minHeight="fit-content"



        //links
        let gitLink = document.createElement("a")
        let playLink = document.createElement("a")
        let linkbar = document.createElement("div")
        linkbar.setAttribute("class","hbox")
        linkbar.appendChild(gitLink)
        linkbar.appendChild(playLink)


        gitLink.textContent = "Source Code/Git"
        playLink.textContent = "Play"

        gitLink.target = "_blank"
        playLink.target = "_blank"

        if (gitHubUrl != null) {
            gitLink.href = gitHubUrl
        }
        if (playUrl != null) {
            playLink.href = playUrl

        }

        showbox.appendChild(sb_title)

        //descriptiosn
        if (_description != "") {
            var descripBox = document.createElement("div")
            descripBox.textContent = _description
            showbox.appendChild(descripBox)
        }//


        linkbar.style.padding = "4px";
        showbox.appendChild(linkbar)



        this.parent.appendChild(showbox)
    }


    addShowBox(showbox) { }

}

//prototype of shobox class
class ShowBox {
    constructor(_id, _tittle, _gitHubUrl, _playUrl, _backcolor) {
        this.id = _ID
        this.title = _title
        this.gitHubUrl = _gitHubUrl
        this.playUrl = _playUrl
        this.backcolor = "#fff"

    }


    add_seach_tag(tagname = "") {
        let add = true
        let tname = tagname.toLowerCase()
        for (i = 0; i < this.seachTags.length; i++) {
            if (this.seachTags[i] == tname) {
                add = false
                i = this.seachTags.length
            }
        }

        if (add) {

        }
    }



}







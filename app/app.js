
import * as MODEL from "../model/model.js";



function init() {
    $("nav a").click(function(e){
        let btnID = this.id;
        let contentID = btnID + "Content";

        MODEL.getPageContent(contentID);
    });
}

$(document).ready(function() {
    init();
    MODEL.getPageContent("homeContent");
});



//dont forget to add #app in html
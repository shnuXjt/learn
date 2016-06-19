
/**
 * Created by Gene on 2016/6/19.
 */
function tabClick () {
    var tabs = $(".tab");
    var boxs = $(".box");
    tabs.click(function (){
        tabs.slideDown();
        boxs.html('');
        boxs.hide();
        var className = $(this).attr('class').split(' ')[1];
        $(this).parent().nextAll('ul').find("li:first-child").hide();
        var id = getRightUl(className);
        var txt = $(this).find(".discrip").html();
        var showDiv = $("#"+id);
        showDiv.append(createHtml("images/pictest.jpg",txt));
        $(this).slideUp(500);
        showDiv.slideDown();
        /*$(this).animate({
            top: "-355px",
            opacity: "0.2",
        },'slow',function () {
            $(this).hide();

        })*/
    });
}

function getRightUl(className) {
    var idNum = className.split('-')[1];
    switch(idNum) {
        case '0':
        case '1':
        case '2':
        case '3':
            return "box-a";
        case '4':
        case '5':
        case '6':
        case '7':
            return "box-b";
        case '8':
        case '9':
        case '10':
        case '11':
            return "box-c";
        case '12':
        case '13':
        case '14':
        case '15':
            return "box-d";
    }
}

function createHtml (imgurl, txt) {
    return "<div>"+
                "<div><img src='"+imgurl+"' alt=''></div>"+
                    "<div>"+txt+"</div>"+
               "</div>";
}

tabClick();
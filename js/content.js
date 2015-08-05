var appContent = appContent || {};

// Executing after the document is loaded with all the DOM elements.
$(document).ready(function () {

    //loading config json file on js load
    $.getJSON("assets/config.json", function (json) {
        appContent.JsonData = json;
        appContent.repoId = sessionStorage.repoId;
        appContent.loadContents();
    });

});


//loading contents
appContent.loadContents = function () {
    //clearing the contents before append
    $("#RepositoryMain").html('');

    // Content Heading 
    $("#RepositoryHeader").html(appContent.JsonData[appContent.repoId]['Heading']);

    // Appending the sub information
    for (var i = 0; i < appContent.JsonData[appContent.repoId]['Content'].length; i++) {

        var elements = appContent.JsonData[appContent.repoId]['Content'][i];
        var header = '<div id="' + elements['SubTitle'] + '"> <div class="row"> <div class="col-lg-4">'
                     + '<h3 class="page-header" style="font-family: cursive;font-style: italic; color: #777;font-weight: bolder;">'
                     + elements['Title'] + '<br/> '
                     + '<small style="font-family: cursive;font-style: italic; color: #585858;">'
                     + elements['SubTitle']
                     + '</small></h2></div></div>';


        var Content = '<div class="row"><div class="col-lg-12"><p style="font-family: cursive;font-size: initial;">'
                      + elements['Content']
                      + '</p></div></div> </div><hr>';

        var ElementContent = header + Content;
        $("#RepositoryMain").append(ElementContent);

    }
}



var appIndex = appIndex || {};

// On Repository image click handler
appIndex.repositoryOnClick = function (repoId) {
    sessionStorage.repoId = repoId;
    window.location.assign("content.html");
}




start();

function start(){
    chrome.runtime.sendMessage({operation:"deleteProject", helbidea:document.URL});
}
const reloadAll = tab => {
   chrome.tabs.query({}, tabs => {
       tabs.forEach(tab => {
           chrome.tabs.reload(tab.id, { bypassCache: true })
       })
   })
}

chrome.browserAction.onClicked.addListener(reloadAll)
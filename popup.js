const focusModeSwitchId = 'focusModeSwitch'
const focusModeSwitch = document.getElementById(focusModeSwitchId)
const messagingObject = {
  "currentFocusMode": false,
}

focusModeSwitch.addEventListener("change", (e) => {
  const currentFocusMode = e.target.checked
  messagingObject["currentFocusMode"] = currentFocusMode
  requestApplyCurrentFocusModeToContentScript(messagingObject)
})

async function requestApplyCurrentFocusModeToContentScript(request) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, request)
  })
}

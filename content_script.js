const remDefaultHeight = "40rem"
const remMinHeight = "96.2rem"
const Curriculum = document.querySelectorAll('[class^="curriculum-item-view--scaled-height-limiter--"]')
const AppDashboard = document.querySelector('[class^="app--dashboard-content--"]')
const UdFooter = document.querySelector('footer.ud-footer')

chrome.runtime.onMessage.addListener(function(request, _, _) {
  document.body.style.display
  if (request.currentFocusMode === true) {
    Curriculum[0].style.minHeight = remMinHeight
    Curriculum[1].style.minHeight = remMinHeight
    AppDashboard.style.display = "none"
    UdFooter.style.display = "none"
  }
  if (request.currentFocusMode === false) {
    Curriculum[0].style.minHeight = remDefaultHeight
    Curriculum[1].style.minHeight = remDefaultHeight
    AppDashboard.style.display = ""
    UdFooter.style.display = ""
  }
})

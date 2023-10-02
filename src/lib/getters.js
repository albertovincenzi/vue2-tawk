export default {
  getWindowType: () => window.Tawk_API.getWindowType(),
  getStatus: () => window.Tawk_API.getStatus(),
  isChatMaximized: () => window.Tawk_API.isChatMaximized(),
  isChatMinimized: () => window.Tawk_API.isChatMinimized(),
  isChatHidden: () => window.Tawk_API.isChatHidden(),
  isChatOngoing: () => window.Tawk_API.isChatOngoing(),
  isVisitorEngaged: () => window.Tawk_API.isVisitorEngaged(),
  onLoaded: () => window.Tawk_API.onLoaded,
  onBeforeLoaded: () => window.Tawk_API.onBeforeLoaded,
  widgetPosition: () => window.Tawk_API.widgetPosition(),
}
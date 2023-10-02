export default {
  onLoad: (callback) => {
    window.Tawk_API.onLoad = callback;
  },
  onStatusChange: (callback) => {
    window.Tawk_API.onStatusChange = callback;
  },
  onBeforeLoad: (callback) => {
    window.Tawk_API.onBeforeLoad = callback;
  },
  onChatMaximized: (callback) => {
    window.Tawk_API.onChatMaximized = callback;
  },
  onChatMinimized: (callback) => {
    window.Tawk_API.onChatMinimized = callback;
  },
  onChatHidden: (callback) => {
    window.Tawk_API.onChatHidden = callback;
  },
  onChatStarted: (callback) => {
    window.Tawk_API.onChatStarted = callback;
  },
  onChatEnded: (callback) => {
    window.Tawk_API.onChatEnded = callback;
  },
  onPrechatSubmit: (callback) => {
    window.Tawk_API.onPrechatSubmit = callback;
  },
  onOfflineSubmit: (callback) => {
    window.Tawk_API.onOfflineSubmit = callback;
  },
  onChatMessageVisitor: (callback) => {
    window.Tawk_API.onChatMessageVisitor = callback;
  },
  onChatMessageAgent: (callback) => {
    window.Tawk_API.onChatMessageAgent = callback;
  },
  onChatMessageSystem: (callback) => {
    window.Tawk_API.onChatMessageSystem = callback;
  },
  onAgentJoinChat: (callback) => {
    window.Tawk_API.onAgentJoinChat = callback;
  },
  onAgentLeaveChat: (callback) => {
    window.Tawk_API.onAgentLeaveChat = callback;
  },
  onChatSatisfaction: (callback) => {
    window.Tawk_API.onChatSatisfaction = callback;
  },
  onVisitorNameChanged: (callback) => {
    window.Tawk_API.onVisitorNameChanged = callback;
  },
  onFileUpload: (callback) => {
    window.Tawk_API.onFileUpload = callback;
  },
  onTagsUpdated: (callback) => {
    window.Tawk_API.onTagsUpdated = callback;
  },
}
export default {
  visitor: (data) => window.Tawk_API.visitor = data,
  setAttributes: (attribute, callback) => window.Tawk_API.setAttributes(attribute, callback),
  addEvent: (event, metadata, callback) => window.Tawk_API.addEvent(event, metadata, callback),
  addTags: (tags, callback) => window.Tawk_API.addTags(tags, callback),
  removeTags: (tags, callback) => window.Tawk_API.removeTags(tags, callback),
}
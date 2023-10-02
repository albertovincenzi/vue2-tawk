# Vue2-tawk

Vue2 wrapper for tawk.io

Vue2-tawk is a Vue.js plugin that seamlessly integrates tawk.io, a powerful live chat service, into your Vue applications. With Vue2-tawk, you can easily add real-time chat functionality to your website and interact with your visitors in a convenient and user-friendly manner.

## Installation

To get started, you can install the Vue2-tawk plugin via npm or yarn:

```bash
npm install vue2-tawk --save
# OR
yarn add vue2-tawk -D
```

## Usage

### Configuration

1. **Create a Tawk.to Account**: First, you need to have an account on [Tawk.to](https://www.tawk.to/).
2. **Register the Plugin**: Once you have your Tawk.to account, register the Vue2-tawk plugin. You will have to specify `TAWK_PROPERTY_ID` and `TAWK_WIDGET_ID` as options. You can retrieve them in your Tawk account.

```js
import Tawk from 'vue2-tawk'
  
Vue.use(Tawk, {
    propertyId: 'TAWK_PROPERTY_ID',
    widgetId: 'TAWK_WIDGET_ID'
})
```

By registering the plugin, a Tawk.io instance will be injected into all of your Vue instances.

The JS is not automaticall injected: this can allow you to decide in which moment the chat must be initialized.
Do to do, just call the following method:

```js
this.$Tawk.init();
```

### Actions

The following actions are supported:

```js
this.$Tawk.logout()
this.$Tawk.maximize()
this.$Tawk.minimize()
this.$Tawk.toggle()
this.$Tawk.popup()
this.$Tawk.showWidget()
this.$Tawk.hideWidget()
this.$Tawk.toggleVisibility()
this.$Tawk.endChat()
```

### Getters

You can control the status of Tawk using this methods:

```js
this.$Tawk.getWindowType()
this.$Tawk.getStatus()
this.$Tawk.isChatMaximized()
this.$Tawk.isChatMinimized()
this.$Tawk.isChatHidden()
this.$Tawk.isChatOngoing()
this.$Tawk.isVisitorEngaged()
this.$Tawk.onLoaded()
this.$Tawk.onBeforeLoaded()
this.$Tawk.widgetPosition()
```

### Setters

You can set and change some Tawk parameters with these methods:

```js
this.$Tawk.visitor()
this.$Tawk.setAttributes()
this.$Tawk.addEvent()
this.$Tawk.addTags()
this.$Tawk.removeTags()
```

Eg: You can set the visitor's name and email using the `setAttributes` method:

```js
this.$Tawk.setAttributes(user);
```

The `user` object should have the following structure:

```js
{
    name: 'user name',
    email: 'user email',
    hash: '' // Learn more: https://www.tawk.to/javascript-api/#securemode
}
```

### Listeners Callbacks

For event callbacks, please refer to the [Tawk.to JavaScript API documentation](https://developer.tawk.to/jsapi/) for more details. Vue2-tawk provides convenient methods to listen to these events:

```js
this.$Tawk.onLoad()
this.$Tawk.onStatusChange()
this.$Tawk.onBeforeLoad()
this.$Tawk.onChatMaximized()
this.$Tawk.onChatMinimized()
this.$Tawk.onChatHidden()
this.$Tawk.onChatStarted()
this.$Tawk.onChatEnded()
this.$Tawk.onPrechatSubmit()
this.$Tawk.onOfflineSubmit()
this.$Tawk.onChatMessageVisitor()
this.$Tawk.onChatMessageAgent()
this.$Tawk.onChatMessageSystem()
this.$Tawk.onAgentJoinChat()
this.$Tawk.onAgentLeaveChat()
this.$Tawk.onChatSatisfaction()
this.$Tawk.onVisitorNameChanged()
this.$Tawk.onFileUpload()
this.$Tawk.onTagsUpdated()
```

These callbacks allow you to respond to various chat-related events and enhance the user experience on your website.
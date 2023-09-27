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

### Initialization

1. **Create a Tawk.to Account**: First, you need to have an account on [Tawk.to](https://www.tawk.to/).

2. **Register the Plugin**: Once you have your Tawk.to account, register the Vue2-tawk plugin and provide the source of your JavaScript script in the `YOUR_TAWK_SRC` parameter.

```js
import Tawk from 'vue2-tawk'
  
Vue.use(Tawk, {
    tawkSrc: 'YOUR_TAWK_SRC'
})
```

By registering the plugin, a Tawk.io instance will be injected into all of your Vue instances.

To start the chat, use the following method:

```js
this.$Tawk.$startChat();
```

### Setting Visitor Information

You can set the visitor's name and email using the `$updateChatUser` method:

```js
this.$Tawk.$updateChatUser(user);
```

The `user` object should have the following structure:

```js
{
    name: 'user name',
    email: 'user email',
    hash: '' // Learn more: https://www.tawk.to/javascript-api/#securemode
}
```

### Ending a Chat

To end the current ongoing chat, use:

```js
this.$Tawk.$endChat()
```

### Widget Operations

You have control over the chat widget's visibility with the following commands:

```js
this.$Tawk.$toggleVisibility()
this.$Tawk.$showWidget()
this.$Tawk.$hideWidget()
```

### Chat Operations

You can perform various chat operations with these commands:

```js
this.$Tawk.$toggle()
this.$Tawk.$maximize()
this.$Tawk.$minimize()
```

To open the chat in a pop-up, use:

```js
this.$Tawk.$popup()
```

### Event Callbacks

For event callbacks, please refer to the [Tawk.to JavaScript API documentation](https://developer.tawk.to/jsapi/) for more details. Vue2-tawk provides convenient methods to listen to these events:

```js
this.$Tawk.$onChatStarted()
this.$Tawk.$onChatEnded()
this.$Tawk.$onChatHidden()
this.$Tawk.$onChatMinimized()
this.$Tawk.$onChatSatisfaction()
this.$Tawk.$onAgentJoinChat()
this.$Tawk.$onAgentLeaveChat()
```

These callbacks allow you to respond to various chat-related events and enhance the user experience on your website.
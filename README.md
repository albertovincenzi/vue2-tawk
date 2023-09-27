# Vue2-tawk

Vue2 wrapper for tawk.io

This Vue plugin injects a tawk.io instance into all of your vue instances

## Install

```bash
npm install vue2-tawk --save
or
yarn add vue2-tawk -D
```

## Usage

### Initialize

1. Create an account of https://www.tawk.to/
2. Register the plugin adding the source of your JS script in `YOUR_TAWK_SRC`

```js
import Tawk from 'vue2-tawk'
  
Vue.use(Tawk, {
    tawkSrc: 'YOUR_TAWK_SRC'
})
```

The chat is not automatically started. To do that, you must execute this:

```js
this.$Tawk.$startChat();
```

### Set the visitor name and email

```js
this.$Tawk.$updateChatUser(user)
the object of user should like that
{
    name: 'user name',
    email: 'user email',
    hash: '' // see more https://www.tawk.to/javascript-api/#securemode
}
```

### Ends the current ongoing chat.

When a user logout from the website, you should close the chat:

```js
this.$Tawk.$endChat()
```

### Widget Operations

You can toggle, hide and show widget with the following command:

```js
this.$Tawk.$toggleVisibility()
this.$Tawk.$showWidget()
this.$Tawk.$hideWidget()
```

### Chat Operations

You can toggle, minimize and maximize the chat with the following command:

```js
this.$Tawk.$toggle()
this.$Tawk.$maximize()
this.$Tawk.$minimize()
```

You can also open the chat in a pop-up this way:

```js
this.$Tawk.$popup()
```

### Events Callbacks

Please refer to https://developer.tawk.to/jsapi/ for further details

```js
this.$Tawk.$onChatStarted()
this.$Tawk.$onChatEnded()
this.$Tawk.$onChatHidden()
this.$Tawk.$onChatMinimized()
this.$Tawk.$onChatSatisfaction()
this.$Tawk.$onAgentJoinChat()
this.$Tawk.$onAgentLeaveChat()
```

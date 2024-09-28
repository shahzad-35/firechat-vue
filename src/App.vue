<template>
  <div
    class="view login"
    v-if="userName === '' || userName === null"
  >
    <form class="login-form" @submit.prevent="login">
      <div class="form-inner">
        <h1>Login for chat</h1>
        <label for="username">UserName</label>
        <input
          type="text"
          v-model="inputUserName"
          name="username"
          placeholder="Please enter your username...."
          id="username"
        />
        <input type="submit" value="login" />
      </div>
    </form>
  </div>
  <div class="view chat" v-else>
    <header>
      <button class="pointer logout" @click="Logout">Logout</button>
      <h1>Hello, {{ userName }}</h1>
    </header>
    <section class="chat-box">
      <div
        v-for="message in messages"
        :key="message.id"
        :class="
          message.userName == userName
            ? 'message current-user'
            : 'message'
        "
      >
        <div class="message-inner">
          <div class="username">
            {{ message.userName }}
          </div>
          <div class="content">
            {{ message.content }}
          </div>
        </div>
      </div>
    </section>
    <footer>
      <form @submit.prevent="SendMessage">
        <input
          type="text"
          v-model="inputMessage"
          placeholder="Write message..."
        />
        <input class="pointer" type="submit" value="Send" />
      </form>
    </footer>
  </div>
</template>

<script>
import { onMounted,computed ,ref } from "vue";
import { ref as firebaseRef, set, push, onValue } from "firebase/database";
import database from "./db";
import { useStore } from "vuex";

//Todo:: Need to use vuex to maintain state
export default {
  setup() {
    const store = useStore();

    const inputUserName = ref("");
    const inputMessage = ref("");
   
    const userName = computed(() => store.state.userName);
    const messages = computed(() => store.state.messages);

    const Logout = () => {
      store.dispatch("logout");
    };

    const login = () => {
      if (inputUserName.value) {
        store.dispatch("updateUserName", inputUserName.value);
        inputUserName.value = "";
      }
    };

    const SendMessage = () => {
      if (!inputMessage.value) return;

      const message = {
        userName: store.state.userName,
        message: inputMessage.value,
      };

      const messagesRef = firebaseRef(database, "/messages");
      push(messagesRef, message)
        .then(() => {
          inputMessage.value = "";
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
    };

    onMounted(() => {
      const messagesRef = firebaseRef(database, "/messages");
      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        const messages = Object.keys(data).map((key) => ({
          id: key,
          content: data[key].message,
          userName: data[key].userName,
        }));
        store.dispatch("fetchMessages", messages);
      });
    });
    return {
      inputUserName,
      inputMessage,
      login,
      SendMessage,
      Logout,
      userName,
      messages,
    };
  },
};
</script>

<style lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.pointer {
  cursor: pointer;
}

.view {
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #ea526f;

  &.login {
    align-items: center;
    .login-form {
      display: block;
      width: 100%;
      padding: 15px;

      .form-inner {
        display: block;
        background-color: #fff;
        padding: 50px 15px;
        border-radius: 16px;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);

        h1 {
          color: #aaa;
          font-size: 28px;
          margin-bottom: 30px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          color: #aaa;
          font-size: 16px;
          transition: 0.4s;
        }

        input[type="text"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;

          display: block;
          width: 100%;
          padding: 10px 15px;
          border-radius: 8px;
          margin-bottom: 15px;

          color: #333;
          font-size: 18px;

          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
          background-color: #f3f3f3;

          transition: 0.4s;

          &::placeholder {
            color: #888;
            transition: 0.4s;
          }
        }

        input[type="submit"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;

          display: block;
          width: 100%;
          padding: 10px 15px;
          background-color: #ea526f;
          border-radius: 8px;

          color: #fff;
          font-size: 18px;
          font-weight: 700;
        }

        &:focus-within {
          label {
            color: #ea526f;
          }

          input[type="text"] {
            background-color: #fff;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

            &::placeholder {
              color: #666;
            }
          }
        }
      }
    }
  }

  &.chat {
    flex-direction: column;

    header {
      position: relative;
      display: block;
      width: 100%;
      padding: 50px 30px 10px;

      .logout {
        position: absolute;
        top: 15px;
        right: 15px;
        appearance: none;
        border: none;
        outline: none;
        background: none;

        color: #fff;
        font-size: 18px;
        margin-bottom: 10px;
        text-align: right;
      }

      h1 {
        color: #fff;
      }
    }

    .chat-box {
      border-radius: 24px 24px 0px 0px;
      background-color: #fff;
      box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
      flex: 1 1 100%;
      padding: 30px;

      .message {
        display: flex;
        margin-bottom: 15px;

        .message-inner {
          .username {
            color: #888;
            font-size: 16px;
            margin-bottom: 5px;
            padding-left: 15px;
            padding-right: 15px;
          }

          .content {
            display: inline-block;
            padding: 10px 20px;
            background-color: #f3f3f3;
            border-radius: 999px;

            color: #333;
            font-size: 18px;
            line-height: 1.2em;
            text-align: left;
          }
        }

        &.current-user {
          margin-top: 30px;
          justify-content: flex-end;
          text-align: right;

          .message-inner {
            max-width: 75%;

            .content {
              color: #fff;
              font-weight: 600;
              background-color: #ea526f;
            }
          }
        }
      }
    }

    footer {
      position: sticky;
      bottom: 0px;
      background-color: #fff;
      padding: 30px;
      box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);

      form {
        display: flex;

        input[type="text"] {
          flex: 1 1 100%;

          appearance: none;
          border: none;
          outline: none;
          background: none;

          display: block;
          width: 100%;
          padding: 10px 15px;
          border-radius: 8px 0px 0px 8px;

          color: #333;
          font-size: 18px;

          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
          background-color: #f3f3f3;

          transition: 0.4s;

          &::placeholder {
            color: #888;
            transition: 0.4s;
          }
        }

        input[type="submit"] {
          appearance: none;
          border: none;
          outline: none;
          background: none;

          display: block;
          padding: 10px 15px;
          border-radius: 0px 8px 8px 0px;

          background-color: #ea526f;

          color: #fff;
          font-size: 18px;
          font-weight: 700;
        }
      }
    }
  }
}
</style>

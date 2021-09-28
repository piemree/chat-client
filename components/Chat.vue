<template>
  <div class="position-relative" style="min-height: 100vh;">
    <nav
      class="px-5 py-3 bg-primary text-light d-flex align-items-center fixed-top" id="chat-nav"
    >
      <h4><i class="bi bi-chat-fill"></i></h4>
      <p class="my-0 mx-3 font-weight-bold">Chat</p>
    </nav>
    <div class="d-flex flex-column justify-content-end p-2" style="min-height: 100vh;" id="chat-messages-box">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
    <div class="px-4 py-3 fixed-bottom bg-light">
      <div class="input-group">
        <input type="text" class="form-control" />
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" id="button-addon2">
            <i class="bi bi-cursor-fill"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#chat-messages-box::before {
 content:"";
 display: block;
 height:70px;
}
#chat-messages-box::after {
 content:"";
 display: block;
 height:70px;
}
</style>

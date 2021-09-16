<template>
  <div class="music-wrapper">
    <section class="remix-intro">
      <div class="remix-intro__body" style="background-image: url('images/remix-intro.jpg')">
        <div class="remix-intro__content">
          <div class="user-pane user-pane--big">
            <div class="user-pane__avatar">
              <img src="images/avatar.jpg" alt="avatar" />
            </div>
            <div class="user-pane__content">
              <div class="user-pane__title">Your Brand Collaborator Name</div>
              <div class="user-pane__name">Song Name</div>
            </div>
          </div>
          <h2 class="remix-intro__title">Make your remix</h2>
        </div>
      </div>
      <aside class="remix-intro__aside">
        <a class="remix-intro__logo" href="#">
          <img src="images/logo.svg" alt="logotype" />
        </a>
      </aside>
    </section>

    <!-- Main -->
    <main class="remix-page" role="main">
      <div class="container">
        <div class="remix-page__inner">

          <!-- Remix -->
          <Player genre-name="edm"></Player>

        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer__holder">
          <div class="footer__controls">
            <div class="footer__navigation">
              <a class="footer__prev" href="#">
                <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                          d="M10 9V5L3 12L10 19V14.9C15 14.9 18.5 16.5 21 20C20 15 17 10 10 9Z"
                          fill="white"
                          fill-opacity="0.45"
                  />
                </svg>
              </a>
              <a class="footer__next" href="#">
                <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                          d="M14 9V5L21 12L14 19V14.9C9 14.9 5.5 16.5 3 20C4 15 7 10 14 9Z"
                          fill="white"
                          fill-opacity="0.45"
                  />
                </svg>
              </a>
            </div>
            <a class="footer__to-home" href="#">
              <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 3L4 9V21H9V14H15V21H20V9L12 3Z" fill="white" />
              </svg>
            </a>
          </div>
          <a class="footer__share btn btn-square" href="#">
            <span>Share</span>
            <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
            >
              <path
                      d="M16 5L14.58 6.42L12.99 4.83V16H11.01V4.83L9.42 6.42L8 5L12 1L16 5ZM20 10V21C20 22.1 19.1 23 18 23H6C4.89 23 4 22.1 4 21V10C4 8.89 4.89 8 6 8H9V10H6V21H18V10H15V8H18C19.1 8 20 8.89 20 10Z"
                      fill="white"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>

    <!-- Email Button -->
    <a class="email-button" href="#">
      <img src="images/email.svg" alt="email" />
    </a>
  </div>
</template>

<script>

import Player from "../components/Player";
export default {
  name: 'Music',
  components: {Player}
}
</script>

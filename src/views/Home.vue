<template>
  <div class="home">
    <div class="slider">
      <img
        alt
        class="slider__item"
        src="https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
      />
      <div class="overlay"></div>
    </div>

    <router-link :to="{ name: 'LandingPage' }" class="logo-white">
      <span class="logo-white__text">
        White
        <br />Space
      </span>
    </router-link>

    <div class="info u__mb--10">
      <div class="info__social">
        <a href="#">
          <font-awesome-icon
            :icon="['fab', 'facebook-square']"
            class="icon info__icon"
          />
        </a>
        <a href="#">
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            class="icon info__icon"
          />
        </a>
      </div>
      <div class="info__contact">
        <a class="info__contact__item" href="#">
          <font-awesome-icon
            class="icon info__icon"
            icon="phone-alt"
          />02-17264937
        </a>
        <a class="info__contact__item" href="#">
          <font-awesome-icon
            class="icon info__icon"
            icon="envelope"
          />whitespace@whitespace.com.tw
        </a>
        <a class="info__contact__item" href="#">
          <font-awesome-icon
            class="icon info__icon"
            icon="home"
          />台北市羅斯福路十段30號
        </a>
      </div>
    </div>

    <div class="container">
      <div class="rooms">
        <a href="#" class="rooms__box">
          <div class="rooms__box__img"></div>
          <div class="rooms__box__content">
            <div class="rooms__box__name">Single Room</div>
            <div class="rooms__box__type">雙人房</div>
            <div class="rooms__box__price">
              <div class="rooms__box__price__left">
                <span class="num">NT.2460</span>平日
              </div>
              <div class="rooms__box__price__right">NT.2500 假日</div>
            </div>
          </div>
        </a>
        <a href="#" class="rooms__box">
          <div class="rooms__box__img"></div>
          <div class="rooms__box__content">
            <div class="rooms__box__name">Single Room</div>
            <div class="rooms__box__type">雙人房</div>
            <div class="rooms__box__price">
              <div class="rooms__box__price__left">
                <span class="num">NT.2460</span>平日
              </div>
              <div class="rooms__box__price__right">NT.2500 假日</div>
            </div>
          </div>
        </a>
        <a href="#" class="rooms__box">
          <div class="rooms__box__img"></div>
          <div class="rooms__box__content">
            <div class="rooms__box__name">Single Room</div>
            <div class="rooms__box__type">雙人房</div>
            <div class="rooms__box__price">
              <div class="rooms__box__price__left">
                <span class="num">NT.2460</span>平日
              </div>
              <div class="rooms__box__price__right">NT.2500 假日</div>
            </div>
          </div>
        </a>
        <a href="#" class="rooms__box">
          <div class="rooms__box__img"></div>
          <div class="rooms__box__content">
            <div class="rooms__box__name">Single Room</div>
            <div class="rooms__box__type">雙人房</div>
            <div class="rooms__box__price">
              <div class="rooms__box__price__left">
                <span class="num">NT.2460</span>平日
              </div>
              <div class="rooms__box__price__right">NT.2500 假日</div>
            </div>
          </div>
        </a>
        <a href="#" class="rooms__box">
          <div class="rooms__box__img"></div>
          <div class="rooms__box__content">
            <div class="rooms__box__name">Single Room</div>
            <div class="rooms__box__type">雙人房</div>
            <div class="rooms__box__price">
              <div class="rooms__box__price__left">
                <span class="num">NT.2460</span>平日
              </div>
              <div class="rooms__box__price__right">NT.2500 假日</div>
            </div>
          </div>
        </a>
        <a href="#" class="rooms__box">
          <div class="rooms__box__img"></div>
          <div class="rooms__box__content">
            <div class="rooms__box__name">Single Room</div>
            <div class="rooms__box__type">雙人房</div>
            <div class="rooms__box__price">
              <div class="rooms__box__price__left">
                <span class="num">NT.2460</span>平日
              </div>
              <div class="rooms__box__price__right">NT.2500 假日</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home"
};
</script>

<template>
  <div class="landing-page">
    <!-- 背景半透明 -->
    <div class="overlay"></div>

    <!-- 左上角Logo -->
    <div class="logo-white">
      <span class="logo-white__text">
        White
        <br />Space
      </span>
    </div>

    <!-- 選單 -->
    <ul class="menu">
      <li :key="i.num" @mouseenter="changeRoom(i)" @mouseleave="leave" class="menu__item" v-for="i in rooms">
        <a class="menu__item__link" href="#">{{i.title}}</a>
      </li>
    </ul>

    <!-- 聯絡資訊 -->
    <div class="info">
      <div class="info__social u__mb--5">
        <a href="#">
          <font-awesome-icon class="icon info__icon" :icon="['fab','facebook-square']"/>
        </a>
        <a href="#">
          <font-awesome-icon class="icon info__icon" :icon="['fab','instagram']" />
        </a>
      </div>
      <div class="info__contact">
        <a class="info__contact__item" href="#">
          <font-awesome-icon class="icon info__icon" icon="phone-alt" />02-17264937
        </a>
        <a class="info__contact__item" href="#">
          <font-awesome-icon class="icon info__icon" icon="envelope" />whitespace@whitespace.com.tw
        </a>
        <a class="info__contact__item" href="#">
          <font-awesome-icon class="icon info__icon" icon="home" />台北市羅斯福路十段30號
        </a>
      </div>
    </div>

    <!-- 房間資訊 -->
    <div :class="{active:isActive}" class="room">
      <div class="room__num u__mb--1">{{hoverNum}}</div>
      <h2 class="room__title">{{hoverTitle}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      rooms: [
        { num: "01", title: "Single Room" },
        { num: "02", title: "Deluxe Single Room" },
        { num: "03", title: "Double Room" },
        { num: "04", title: "Deluxe Double Room" },
        { num: "05", title: "Twin Room" },
        { num: "06", title: "Deluxe Twin Room" }
      ],
      hoverNum: "01",
      hoverTitle: "Single Room",
      isActive: false
    };
  },
  methods: {
    changeRoom(i) {
      this.isActive = true;
      this.hoverNum = i.num;
      this.hoverTitle = i.title;
    },
    leave() {
      this.isActive = false;
    }
  }
};
</script>


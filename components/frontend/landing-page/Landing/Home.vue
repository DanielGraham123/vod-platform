<template>
  <div>
    <!-- for background image-->
    <div id="background">
      <!-- overlay-->
      <div id="overlay"></div>

      <div id="caption">
        Boundless African Movies,<br />
        TV shows, and Expect<br />
        more...<br />
        <span style="font-size: 15px">
          Ready to watch? Start your journey with BBtv</span
        >
        <!--email signup-->
        <div id="email">
          <form class="d-flex justify-content-center">
            <input
              type="email"
              placeholder="Email address"
              style="height: 35px; color: black; width: 250px; font-size: 16px"
            />
            <a href="pass.html" class="btn btn-primary btn-link" id="em"
              >Sign Up <i class="fas fa-angle-right" style="font-size: 16px"></i
            ></a>
          </form>
        </div>
      </div>
    </div>

    <div class="divider"></div>
    <!-- <div  class="container"> -->
    <!--The advert section below the fisherman's dairy image-->
    <div id="cruise" class="row">
      <div class="col-md-6">
        <div class="" id="cruise1">
          Cruise on all devices<br />
          <span style="font-size: 15px"
            >Get access on Android, Iphone and Desktop</span
          >
        </div>
      </div>
      <div class="col-md-6">
        <img
          src="../../../../assets/css/landing-page/images/android.gif"
          width="200px"
        />
      </div>
    </div>

    <!-- </div> -->
    <div class="divider"></div>

    <div id="cruise" class="row">
      <div class="col-md-6">
        <img
          src="../../../../assets/css/landing-page/images/download.gif"
          width="200px"
        />
      </div>
      <div class="col-md-6" id="cruise1">
        Download shows to watch offline.<br /><span style="font-size: 15px">
          Save your favourites easily.</span
        >
      </div>
    </div>

    <div class="divider"></div>

    <div id="cruise">
      <div
        style="z-index: 10px; font-weight: bold; font-size: 25px; margin: 10px"
      >
        Frequently Asked<br />
        Question.
      </div>
      <!--frequently asked questions section-->
      <div id="faq">
        <div id="faq1" style="text-align: left">What is BBtv?</div>
        <span id="readmore" onclick="myHid()"> +</span>
      </div>
      <div id="Hide" style="display: none">
        It is important to Pray and ask God for understanding and a retentive
        memory before studying or you can pray for whatever else you like or at
        least Read the Bible. But remember not to pray only during the exam
        period but throughout.Do well to Study and not only pray because GOD
        only help those who help themselves.
      </div>

      <div id="faq">
        <div id="faq1" style="text-align: left">How much does BBtv Cost?</div>
        <span id="readmore1" onclick="myHid1()"> +</span>
      </div>

      <div id="Hide1" style="display: none">
        It is important to Pray and ask God for understanding and a retentive
        memory before studying or you can pray for whatever else you like or at
        least Read the Bible. But remember not to pray only during the exam
        period but throughout.Do well to Study and not only pray because GOD
        only help those who help themselves.
      </div>

      <div id="faq">
        <div id="faq1" style="text-align: left">What?</div>
        <span id="readmore2" onclick="myHid2()"> +</span>
      </div>
      <div id="Hide2" style="display: none">
        It is important to Pray and ask God for understanding and a retentive
        memory before studying or you can pray for whatever else you like or at
        least Read the Bible. But remember not to pray only during the exam
        period but throughout.Do well to Study and not only pray because GOD
        only help those who help themselves.
      </div>
      <div id="faq">
        <div id="faq1" style="text-align: left">What?</div>
        <span id="readmore3" onclick="myHid3()"> +</span>
      </div>
      <div id="Hide3" style="display: none">
        It is important to Pray and ask God for understanding and a retentive
        memory before studying or you can pray for whatever else you like or at
        least Read the Bible. But remember not to pray only during the exam
        period but throughout.Do well to Study and not only pray because GOD
        only help those who help themselves.
      </div>
      <div id="email1">
        <form class="d-flex justify-content-center">
          <input
            type="email"
            placeholder="Email address"
            style="height: 35px; color: black; width: 250px"
          />

          <a href="pass.html" class="btn btn-primary btn-link" id="em"
            >Sign Up <i class="fas fa-angle-right" style="font-size: 16px"></i
          ></a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "redirect",

  head() {
    return {
      script: [
        {
          src: "landing/main.js",
        },
      ],
    };
  },

  data() {
    return {
      email: "",
    };
  },

  methods: {
    submitEmail() {
      console.log("input email:", this.email);
      this.$router.push({ name: "signup-password" });
    },
  },
};
</script>

<style scoped>
@import url("../../../../assets/css/landing-page/design.css");
</style>
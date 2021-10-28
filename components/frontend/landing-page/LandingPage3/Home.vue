<template>
  <div id="next-body" class="choose-plan">
    <button
      style="
        height: 70px;
        width: 70px;
        border-radius: 50%;
        border-color: yellow;
        border: solid yellow 2px;
        background-color: white;
      "
    >
      <i
        class="fa fa-check"
        aria-hidden="true"
        style="color: yellow; font-size: 40px"
      ></i></button
    ><br />

    <span>STEP 1 0F 3 </span><br />
    <span><b> Choose your Plan.</b></span
    ><br />
    <div style="text-align: left; margin: auto; width: 370px; padding: 10px">
      <i
        class="fa fa-check"
        aria-hidden="true"
        style="color: yellow; font-size: 20px"
      ></i
      >No Commitments, Cancel Anytime.<br />
      <i
        class="fa fa-check"
        aria-hidden="true"
        style="color: yellow; font-size: 20px"
      ></i
      >Low Price Bundles<br />
      <i
        class="fa fa-check"
        aria-hidden="true"
        style="color: yellow; font-size: 20px"
      ></i
      >No ADDS and No extra fees<br />
      <router-link
        to="/pricing-plan"
        id="next-button"
        class="btn btn-primary btn-link"
        >next</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("../../../../assets/css/landing-page/design.css");
</style>
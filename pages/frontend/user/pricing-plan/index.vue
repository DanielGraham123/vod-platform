<template>
  <section class="m-profile">
    <b-container>
      <h4 class="main-title mb-4 text-center">Pricing Plan</h4>
      <b-row class="justify-content-center">
        <b-col lg="12">
          <div class="sign-user_card">
            <div class="table-responsive pricing pt-2">
              <table id="my-table" class="table">
                <thead>
                  <tr>
                    <th class="text-center prc-wrap"></th>
                    <th class="text-center prc-wrap">
                      <div class="prc-box">
                        <div class="h3 pt-4 text-white">
                          $19<small> / Per View</small>
                        </div>
                        <span class="type">Basic</span>
                      </div>
                    </th>
                    <th class="text-center prc-wrap">
                      <div class="prc-box active">
                        <div class="h3 pt-4 text-dark">
                          $39<small> / Per month</small>
                        </div>
                        <span class="type">Standard</span>
                      </div>
                    </th>
                    <th class="text-center prc-wrap">
                      <div class="prc-box">
                        <div class="h3 pt-4 text-white">
                          $119<small> / Per Year</small>
                        </div>
                        <span class="type">Premium</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="text-center" scope="row">New Movies</th>
                    <td class="text-center child-cell">
                      <i class="ri-check-line ri-2x"></i>
                    </td>
                    <td class="text-center child-cell active">
                      <i class="ri-check-line ri-2x"></i>
                    </td>
                    <td class="text-center child-cell">
                      <i class="ri-check-line ri-2x"></i>
                    </td>
                  </tr>
                  <tr>
                    <th class="text-center" scope="row">BBtv Special</th>
                    <td class="text-center child-cell">
                      <i class="ri-close-line i_close"></i>
                    </td>
                    <td class="text-center child-cell active">
                      <i class="ri-check-line ri-2x"></i>
                    </td>
                    <td class="text-center child-cell">
                      <i class="ri-check-line ri-2x"></i>
                    </td>
                  </tr>
                  <tr>
                    <th class="text-center" scope="row">African Tv Shows</th>
                    <td class="text-center child-cell">
                      <i class="ri-close-line i_close"></i>
                    </td>
                    <td class="text-center child-cell active">
                      <i class="ri-check-line ri-2x"></i>
                    </td>
                    <td class="text-center child-cell">
                      <i class="ri-check-line ri-2x"></i>
                    </td>
                  </tr>
                  <tr>
                    <th class="text-center" scope="row">Nollywood Movies</th>
                    <td class="text-center child-cell">
                      <i class="ri-check-line ri-2x"></i>
                    </td>
                    <td class="text-center child-cell active">
                      <i class="ri-check-line ri-2x"></i>
                    </td>
                    <td class="text-center child-cell">
                      <i class="ri-check-line ri-2x"></i>
                    </td>
                  </tr>
                  <tr>
                    <th class="text-center" scope="row">Video Quality</th>
                    <td class="text-center child-cell">SD (480p)</td>
                    <td class="text-center child-cell active">HD (720p)</td>
                    <td class="text-center child-cell">FHD (1080p)</td>
                  </tr>
                  <tr>
                    <th class="text-center" scope="row">
                      Ad Free Entertainment
                    </th>
                    <td class="text-center child-cell">
                      <i class="ri-close-line i_close"></i>
                    </td>
                    <td class="text-center child-cell active">
                      <i class="ri-close-line i_close"></i>
                    </td>
                    <td class="text-center child-cell">
                      <i class="ri-check-line ri-2x"></i>
                    </td>
                  </tr>
                  <tr>
                    <td class="text-center">
                      <!-- <i class="ri-close-line i_close"></i> -->
                    </td>
                    <td class="text-center">
                      <a href="#" class="btn btn-hover btn-primary mt-3"
                        >Purchase</a
                      >
                    </td>
                    <td class="text-center">
                      <a href="#" class="btn btn-hover btn-black shadow-sm mt-3"
                        >Purchase</a
                      >
                    </td>
                    <td class="text-center">
                      <a href="#" class="btn btn-hover btn-primary mt-3"
                        >Purchase</a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import { core } from "../../../../assets/app/app";
export default {
  layout: "default",
  name: "PricingPlan",
  components: {},
  mounted() {
    core.index();
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.text-dark {
  font-weight: 500;
  color: var(--iq-black) !important;
}

a.btn,
.type {
  color: var(--iq-dark) !important;
  font-weight: 500 !important;
}

.prc-box.active .type {
  background: #000000 !important;
  color: var(--iq-primary) !important;
}

.prc-box.active .text-dark {
  color: var(--iq-dark) !important;
}

.small,
small {
  font-weight: 500;
}

.m-profile {
  padding: 50px 50px;
  position: relative;
  background: url(../../../../assets/images/login/login.jpg) no-repeat scroll 0
    0;
  background-size: cover;
}

.btn {
  color: var(--iq-dark) !important;
}

.btn.btn-black {
  color: var(--iq-primary) !important;
  background-color: var(--iq-dark) !important;
  border-color: var(--iq-primary);
}

.btn-black:hover {
  background-color: var(--iq-body-bg) !important;
}
</style>
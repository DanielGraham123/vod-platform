<template>
  <!-- TOP Nav Bar -->
  <header id="main-header">
    <div class="main-header">
      <b-container fluid>
        <b-row>
          <b-col sm="12">
            <nav class="navbar navbar-expand-lg navbar-dark p-0">
              <a
                href="javascript:void(0)"
                class="navbar-toggler c-toggler collapsed"
                :class="!loggedInUser ? 'd-none' : ''"
                @click="openSidebar"
              >
                <div class="navbar-toggler-icon" data-toggle="collapse">
                  <span class="navbar-menu-icon navbar-menu-icon--top"></span>
                  <span
                    class="navbar-menu-icon navbar-menu-icon--middle"
                  ></span>
                  <span
                    class="navbar-menu-icon navbar-menu-icon--bottom"
                  ></span>
                </div>
              </a>
              <nuxt-link class="navbar-brand" :to="homeURL">
                <img class="img-fluid logo" :src="logo" alt="BBtv" />
              </nuxt-link>
              <!-- Navbar collapse -->
              <b-collapse id="navbarSupportedContent" :visible="sidebar" is-nav>
                <div class="menu-main-menu-container" v-if="loggedInUser">
                  <ul id="top-menu" class="navbar-nav ml-auto">
                    <li
                      v-for="(item, index) in items"
                      :key="index"
                      class="menu-item"
                    >
                      <nuxt-link :to="item.link">
                        {{ item.title }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
                <div class="menu-main-menu-container" v-else>
                  <ul id="top-menu" class="navbar-nav ml-auto">
                    <li class="menu-item">
                      <button
                        @click="$router.push('/auth/login')"
                        class="btn btn-primary btn-link"
                      >
                        Sign In
                      </button>
                    </li>
                  </ul>
                </div>
              </b-collapse>
              <!--  -->

              <div
                class="mobile-more-menu"
                :class="!loggedInUser ? 'd-none' : ''"
              >
                <b-navbar-toggle
                  target="dropdownMenuButton"
                  class="more-toggle"
                >
                  <i class="ri-more-line" />
                </b-navbar-toggle>
                <b-collapse id="dropdownMenuButton" class="more-menu">
                  <div class="navbar-right position-relative">
                    <ul
                      class="
                        d-flex
                        align-items-center
                        justify-content-end
                        list-inline
                        m-0
                      "
                    >
                      <li v-nav-toggle>
                        <a href="javascript:void(0)" class="search-toggle">
                          <i class="ri-search-line" />
                        </a>
                        <div class="search-box iq-search-bar">
                          <form action="javascript:void(0)" class="searchbox">
                            <div class="form-group position-relative">
                              <input
                                type="text"
                                class="text search-input font-size-12"
                                placeholder="type here to search..."
                              />
                              <i class="search-link ri-search-line" />
                            </div>
                          </form>
                        </div>
                      </li>
                      <li class="nav-item nav-icon" v-nav-toggle>
                        <a
                          href="javascript:void(0)"
                          class="search-toggle position-relative"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="22"
                            height="22"
                            class="noti-svg"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z"
                            />
                          </svg>
                          <span class="bg-danger dots" />
                        </a>
                        <div class="iq-sub-dropdown">
                          <div class="iq-card shadow-none m-0">
                            <div class="iq-card-body">
                              <a href="javascript:void(0)" class="iq-sub-card">
                                <div class="media align-items-center">
                                  <img
                                    src="../../../assets/images/frontend/notify/thumb-1.jpg"
                                    class="img-fluid mr-3"
                                    alt="BBtv"
                                  />
                                  <div class="media-body">
                                    <h6 class="mb-0">Boop Bitty</h6>
                                    <small class="font-size-12">
                                      just now</small
                                    >
                                  </div>
                                </div>
                              </a>
                              <a href="javascript:void(0)" class="iq-sub-card">
                                <div class="media align-items-center">
                                  <img
                                    src="../../../assets/images/frontend/notify/thumb-2.jpg"
                                    class="img-fluid mr-3"
                                    alt="BBtv"
                                  />
                                  <div class="media-body">
                                    <h6 class="mb-0">The Last Breath</h6>
                                    <small class="font-size-12"
                                      >15 minutes ago</small
                                    >
                                  </div>
                                </div>
                              </a>
                              <a href="javascript:void(0)" class="iq-sub-card">
                                <div class="media align-items-center">
                                  <img
                                    src="../../../assets/images/frontend/notify/thumb-3.jpg"
                                    class="img-fluid mr-3"
                                    alt="BBtv"
                                  />
                                  <div class="media-body">
                                    <h6 class="mb-0">The Hero Camp</h6>
                                    <small class="font-size-12"
                                      >1 hour ago</small
                                    >
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li class="nav-item nav-icon" v-nav-toggle>
                        <a
                          href="javascript:void(0)"
                          class="
                            iq-user-dropdown
                            search-toggle
                            p-0
                            d-flex
                            align-items-center
                          "
                          data-toggle="search-toggle"
                        >
                          <img
                            src="../../../assets/images/frontend/user/user.jpg"
                            class="img-fluid avatar-40 rounded-circle"
                            alt="user"
                          />
                        </a>
                        <div class="iq-sub-dropdown iq-user-dropdown">
                          <div class="iq-card shadow-none m-0">
                            <div class="iq-card-body p-0 pl-3 pr-3">
                              <a
                                href="/backend/dashboard"
                                class="iq-sub-card setting-dropdown"
                              >
                                <div class="media align-items-center">
                                  <div class="right-icon">
                                    <i class="ri-file-user-line text-primary" />
                                  </div>
                                  <div class="media-body ml-3">
                                    <h6 class="mb-0">Admin Dashboard</h6>
                                  </div>
                                </div>
                              </a>
                              <nuxt-link
                                to="/profile"
                                class="iq-sub-card setting-dropdown"
                              >
                                <div class="media align-items-center">
                                  <div class="right-icon">
                                    <i class="ri-file-user-line text-primary" />
                                  </div>
                                  <div class="media-body ml-3">
                                    <h6 class="mb-0">Manage Profile</h6>
                                  </div>
                                </div>
                              </nuxt-link>
                              <nuxt-link
                                to="/frontend/user/settings"
                                class="iq-sub-card setting-dropdown"
                              >
                                <div class="media align-items-center">
                                  <div class="right-icon">
                                    <i
                                      class="ri-settings-4-line text-primary"
                                    />
                                  </div>
                                  <div class="media-body ml-3">
                                    <h6 class="mb-0">Settings</h6>
                                  </div>
                                </div>
                              </nuxt-link>
                              <nuxt-link
                                to="/frontend/user/pricing-plan"
                                class="iq-sub-card setting-dropdown"
                              >
                                <div class="media align-items-center">
                                  <div class="right-icon">
                                    <i
                                      class="ri-settings-4-line text-primary"
                                    />
                                  </div>
                                  <div class="media-body ml-3">
                                    <h6 class="mb-0">Pricing Plan</h6>
                                  </div>
                                </div>
                              </nuxt-link>
                              <a
                                @click="logoutAction()"
                                v-if="loggedInUser"
                                class="iq-sub-card setting-dropdown"
                              >
                                <div class="media align-items-center">
                                  <div class="right-icon">
                                    <i
                                      class="ri-logout-circle-line text-primary"
                                    />
                                  </div>
                                  <div class="media-body ml-3">
                                    <h6 class="mb-0">Logout</h6>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </b-collapse>
              </div>

              <div class="mobile-sign-in" v-if="!loggedInUser">
                <ul id="top-menu" class="navbar-nav ml-auto pr-0">
                  <li class="menu-item">
                    <button
                      @click="$router.push('/auth/login')"
                      class="btn btn-primary btn-link"
                    >
                      Sign In
                    </button>
                  </li>
                </ul>
              </div>
              <div class="navbar-right menu-right" v-if="loggedInUser">
                <ul class="d-flex align-items-center list-inline m-0">
                  <li class="nav-item nav-icon" v-nav-toggle>
                    <a
                      href="javascript:void(0)"
                      class="search-toggle device-search"
                    >
                      <i class="ri-search-line" />
                    </a>
                    <div class="search-box iq-search-bar d-search">
                      <form action="javascript:void(0)" class="searchbox">
                        <div class="form-group position-relative">
                          <input
                            type="text"
                            class="text search-input font-size-12"
                            placeholder="type here to search..."
                          />
                          <i class="search-link ri-search-line" />
                        </div>
                      </form>
                    </div>
                  </li>
                  <li class="nav-item nav-icon" v-nav-toggle>
                    <a
                      href="javascript:void(0)"
                      class="search-toggle"
                      data-toggle="search-toggle"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        class="noti-svg"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                          d="M18 10a6 6 0 1 0-12 0v8h12v-8zm2 8.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0v8.667zM9.5 21h5a2.5 2.5 0 1 1-5 0z"
                        />
                      </svg>
                      <span class="bg-danger dots" />
                    </a>
                    <div class="iq-sub-dropdown">
                      <div class="iq-card shadow-none m-0">
                        <div class="iq-card-body">
                          <a href="javascript:void(0)" class="iq-sub-card">
                            <div class="media align-items-center">
                              <img
                                src="../../../assets/images/frontend/notify/thumb-1.jpg"
                                class="img-fluid mr-3"
                                alt="BBtv"
                              />
                              <div class="media-body">
                                <h6 class="mb-0">Boot Bitty</h6>
                                <small class="font-size-12"> just now</small>
                              </div>
                            </div>
                          </a>
                          <a href="javascript:void(0)" class="iq-sub-card">
                            <div class="media align-items-center">
                              <img
                                src="../../../assets/images/frontend/notify/thumb-2.jpg"
                                class="img-fluid mr-3"
                                alt="BBtv"
                              />
                              <div class="media-body">
                                <h6 class="mb-0">The Last Breath</h6>
                                <small class="font-size-12"
                                  >15 minutes ago</small
                                >
                              </div>
                            </div>
                          </a>
                          <a href="javascript:void(0)" class="iq-sub-card">
                            <div class="media align-items-center">
                              <img
                                src="../../../assets/images/frontend/notify/thumb-3.jpg"
                                class="img-fluid mr-3"
                                alt="BBtv"
                              />
                              <div class="media-body">
                                <h6 class="mb-0">The Hero Camp</h6>
                                <small class="font-size-12">1 hour ago</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item nav-icon" v-nav-toggle>
                    <a
                      href="javascript:void(0)"
                      class="
                        iq-user-dropdown
                        search-toggle
                        p-0
                        d-flex
                        align-items-center
                      "
                      data-toggle="search-toggle"
                    >
                      <img
                        src="../../../assets/images/frontend/user/user.jpg"
                        class="img-fluid avatar-40 rounded-circle"
                        alt="user"
                      />
                    </a>
                    <div class="iq-sub-dropdown iq-user-dropdown">
                      <div class="iq-card shadow-none m-0">
                        <div class="iq-card-body p-0 pl-3 pr-3">
                          <a
                            href="/backend/dashboard"
                            class="iq-sub-card setting-dropdown"
                          >
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="ri-file-user-line text-primary" />
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Admin Dashboard</h6>
                              </div>
                            </div>
                          </a>
                          <nuxt-link
                            to="/profile"
                            class="iq-sub-card setting-dropdown"
                          >
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="ri-file-user-line text-primary" />
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Manage Profile</h6>
                              </div>
                            </div>
                          </nuxt-link>
                          <nuxt-link
                            to="/frontend/user/settings"
                            class="iq-sub-card setting-dropdown"
                          >
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="ri-settings-4-line text-primary" />
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Settings</h6>
                              </div>
                            </div>
                          </nuxt-link>
                          <nuxt-link
                            to="/frontend/user/pricing-plan"
                            class="iq-sub-card setting-dropdown"
                          >
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="ri-settings-4-line text-primary" />
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Pricing Plan</h6>
                              </div>
                            </div>
                          </nuxt-link>
                          <a
                            @click="logoutAction()"
                            class="iq-sub-card setting-dropdown logout-link"
                            v-if="loggedInUser"
                          >
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="ri-logout-circle-line text-primary" />
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Logout</h6>
                              </div>
                            </div>
                          </a>
                          <nuxt-link
                            to="/auth/login"
                            class="iq-sub-card setting-dropdown logout-link"
                            v-else
                          >
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="ri-logout-circle-line text-primary" />
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Login</h6>
                              </div>
                            </div>
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="nav-overlay" />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </header>
  <!-- TOP Nav Bar END -->
</template>
<script>
import { core } from "../../../assets/app/app";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "FrontendNav",
  props: {
    homeURL: { type: String, default: () => "/" },
    logo: { type: String, default: require("../../../assets/images/logo.png") },
    // eslint-disable-next-line vue/require-default-prop
    items: { type: Array },
    // eslint-disable-next-line vue/require-default-prop
    userprofile: { type: String },
  },

  data() {
    return {
      sidebar: false,
    };
  },

  computed: {
    ...mapGetters(["getUserToken", "getUserInfo"]),

    loggedInUser() {
      if (typeof window !== "undefined") {
        return localStorage.getItem("userInfo")
          ? JSON.parse(localStorage.getItem("userInfo"))
          : this.getUserInfo;
      }
    },
  },

  mounted() {
    core.index();
    document.addEventListener("click", this.closeSidebar, true);
    console.log("this user:", this.loggedInUser);
  },

  destroyed() {
    document.removeEventListener("click", this.closeSidebar, true);
  },

  methods: {
    ...mapActions(["logoutAction"]),

    closeSidebar(e) {
      if (!e.target.classList.contains("navbar-toggler-icon")) {
        this.sidebar = false;
        document.getElementsByTagName("body")[0].classList.remove("nav-open");
      }
    },

    openSidebar() {
      document.getElementsByTagName("body")[0].classList.add("nav-open");
      this.sidebar = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.logout-link:hover {
  cursor: pointer;
}

header .navbar ul li.menu-item a:hover {
  color: var(--iq-primary) !important;
}

a {
  color: #fff;
  color: var(--iq-white) !important;
}

li.menu-item {
  button.btn-link {
    color: var(--iq-black);
    border-radius: 10px !important;
    background-color: var(--iq-primary);
    font-weight: 500;
    padding: 7px 15px;
    border-color: var(--iq-primary);
  }
}

.mobile-sign-in {
  li.menu-item {
    button.btn-link {
      color: var(--iq-black);
      border-radius: 10px !important;
      background-color: var(--iq-primary);
      font-weight: 500;
      padding: 5px 13px;
      border-color: var(--iq-primary);
    }
  }
}

@media (max-width: 991px) {
  img.logo {
    width: 145px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  header#main-header {
    padding: 0.5em;
  }

  #home-slider .slide {
    height: 60vh;
  }
}

@media (max-width: 768px) {
  img.logo {
    width: 190px;
  }
}

@media (max-width: 600px) {
  header#main-header {
    position: absolute !important;
  }
}
</style>

<template>
  <div class="container">
    <div id="accordion" class="accordion">
      <div class="card mb-0" v-for="(faq, index) in faqList" :key="index">
        <div
          class="
            card-header
            collapsed
            d-flex
            align-items-center
            justify-content-between
            py-2
          "
          data-toggle="collapse"
          :href="'#collapse-' + index"
        >
          <button class="btn text-left text-white p-1">{{ faq.title }}</button>
        </div>
        <div
          :id="'collapse-' + index"
          class="card-body collapse"
          data-parent="#accordion"
        >
          <p>
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "/landing/faq.js",
        },
      ],
    };
  },

  data() {
    return {
      faqList: [
        {
          title: "What is BBTV?",
          answer:
            "  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamusterry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.   Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. samus labore sustainable VHS.",
        },
        {
          title: "How much does BBTV cost?",
          answer:
            "  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamusterry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.   Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. samus labore sustainable VHS.",
        },
        {
          title: "Where can I watch?",
          answer:
            "  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamusterry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.   Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. samus labore sustainable VHS.",
        },
        {
          title: "How do I cancel?",
          answer:
            "  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamusterry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.   Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. samus labore sustainable VHS.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.accordion {
  width: 75%;
  margin: 2em auto;
}

.btn:focus {
  box-shadow: none;
}

.accordion .card-header:after {
  font-family: "Font Awesome\ 5 Free";
  content: "\f068";
  float: right;
}
.accordion .card-header.collapsed:after {
  /* symbol for "collapsed" panels */
  content: "\f067";
}

.accordion > .card {
  background-color: inherit;
}

.card-header,
.card-body {
  background-color: #303030 !important;
}

.accordion > .card > .card-header {
  margin-bottom: 8px;
  cursor: pointer;
}

.accordion > .card > .card-body {
  margin-bottom: 5px;
}

.btn {
  font-size: 1.4rem !important;
}

p {
  margin-bottom: 0;
  font-size: 19px;
  font-weight: 500;
  text-align: initial;
}

@media (max-width: 768px) {
  .accordion {
    width: 100%;
    margin: 2em 0;
  }
}

@media (max-width: 500px) {
  .accordion {
    width: 100%;
    margin: 2em auto;
  }

  .btn {
    font-size: 0.75rem !important;
  }

  .container {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
<template>
  <main class="yellow min-h-full">
    <div className="demo-sticker" title="Swich Light">
      <a href="/home-light">
        <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
      </a>
    </div>
    <!-- End Sticker -->

    <header class="header">
      <ul
        class="nav nav-tabs icon-menu d-lg-block revealator-slideup revealator-once revealator-delay1"
        id="myTab"
        role="tablist"
      >
        <li class="icon-box" role="presentation">
          <button class="active" data-bs-toggle="tab" data-bs-target="#home">
            <i class="fa fa-home"></i>
            <h2>HOME</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-toggle="tab" data-bs-target="#about">
            <i class="fa fa-user"></i>
            <h2>ABOUT</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-toggle="tab" data-bs-target="#portfolio">
            <i class="fa fa-briefcase"></i>
            <h2>PORTFOLIO</h2>
          </button>
        </li>
        <!-- End icon-box -->

        <li class="icon-box" role="presentation">
          <button data-bs-toggle="tab" data-bs-target="#contact">
            <i class="fa fa-envelope-open"></i>
            <h2>CONTACT</h2>
          </button>
        </li>
        <!-- End icon-box -->

       <!-- <li class="icon-box" role="presentation">
          <button data-bs-toggle="tab" data-bs-target="#blog">
            <i class="fa fa-comments"></i>
            <h2>BLOG</h2>
          </button>
        </li> -->
        <!-- End icon-box -->
      </ul>
    </header>
    <!-- End header -->

    <div class="tab-content tab-panel_list home" id="myTabContent">
      <!-- Start Hero content tabs -->
      <div class="tab-pane home fade show active" id="home">
        <div class="container-fluid main-container container-home p-0">
          <div class="color-block d-none d-lg-block"></div>
          <HeroBanner />
        </div>
      </div>
      <!-- End Hero content tabs -->

      <div class="tab-pane fade about" id="about">
        <div>
          <div class="title-section text-left text-sm-center">
            <h1>ABOUT <span>ME</span></h1>
            <span class="title-bg">RESUME</span>
          </div>
          <!-- {/* End title */} -->
          <IndexMain />
        </div>
      </div>
      <!-- End about content tabs -->

      <div class="tab-pane fade portfolio professional" id="portfolio">
        <div
          class="title-section text-left text-sm-center"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h1>MY <span>WORK</span></h1>
          <span class="title-bg">Portfolio</span>
        </div>
        <!-- {/* End title */} -->
        <PortfolioInfo />
      </div>
      <!-- End portfolio content tabs -->

      <div class="tab-pane fade contact" id="contact">
        <div class="title-section text-left text-sm-center">
          <h1>establish <span>CONNECTION</span></h1>
          <span class="title-bg">CONTACT</span>
        </div>
        <div class="container">
          <div class="row">
            <!-- {/* Left Side Starts */} -->
            <div class="col-12 col-lg-4">
              <h3 class="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                Do not be shy !
              </h3>
              <p class="open-sans-font mb-4">
                Feel free to contact me. I am always open to discuss new projects, creative ideas or opportunities to participate in your visions.
              </p>
              <AddressInfo />
              <!-- {/* End Address */} -->

              <SocialInfo />
              <!-- {/* End Social */} -->
            </div>
            <!-- {/* Left Side Ends */} -->

            <!-- {/* Contact Form Starts */} -->
            <div class="col-12 col-lg-8">
              <ContactInfo />
            </div>
            <!-- {/* Contact Form Ends */} -->
          </div>
        </div>
        <!-- {/* End .container */} -->
      </div>
      <!-- End contact content tabs -->

      <div class="tab-pane fade blog" id="blog">
        <div class="title-section text-left text-sm-center">
          <h1>my <span>blog</span></h1>
          <span class="title-bg">contributions</span>
        </div>
        <div class="container">
          <!-- {/* Articles Starts */} -->
          <div class="row pb-50">
            <BlogInfo />
          </div>
          <!-- {/* Articles Ends */} -->
        </div>
      </div>
      <!-- End blog content tabs -->
    </div>
  </main>
</template>

<script>
import HeroBanner from "@/components/hero/HeroBanner.vue";
import IndexMain from "@/components/about/IndexMain.vue";
import AddressInfo from "@/components/AddressInfo.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import SocialInfo from "@/components/SocialInfo.vue";
import BlogInfo from "@/components/blog/BlogInfo.vue";
import PortfolioInfo from "@/components/portfolio/PortfolioInfo.vue";

export default {
  components: {
    HeroBanner,
    IndexMain,
    AddressInfo,
    ContactInfo,
    SocialInfo,
    BlogInfo,
    PortfolioInfo,
  },
  data() {
    return {};
  },
};
</script>

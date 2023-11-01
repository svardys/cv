<template>
  <form ref="form" class="contactform" @submit.prevent="sendEmail">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="form-group">
          <input
            type="text"
            name="name"
            placeholder="YOUR NAME"
            v-model="name"
            required
          />
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12 col-md-6">
        <div class="form-group">
          <input
            type="email"
            name="email"
            placeholder="YOUR EMAIL"
            required
            v-model="email"
          />
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12 col-md-12">
        <div class="form-group">
          <input
            type="text"
            name="subject"
            placeholder="SUBJECT"
            required
            v-model="subject"
          />
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12">
        <div class="form-group">
          <textarea
            name="message"
            placeholder="YOUR MESSAGE"
            required
            v-model="message"
          ></textarea>
        </div>
      </div>
      <!-- {/* End .col */} -->

      <div class="col-12">
        <button type="submit" class="button">
          <span class="button-text">Send message</span>
          <span class="button-icon fa fa-send"></span>
        </button>
      </div>
      <!-- {/* End .col */} -->
    </div>
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_6jidjlc",
          "template_bshoesh",
          this.$refs.form,
          "bYZ-4uOv977VN7_HS",
          {
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
          }
        )
        .then(
          (result) => {
            console.log("The message has been sent!", result.text);
            alert("The message has been sent!");
          },
          (error) => {
            console.log("Sending failed", error.text);
            alert("Sending failed", error);
          }
        );
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    },
  },
};
</script>

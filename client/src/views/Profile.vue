<template>
  <div class="container-fluid" id="background-image">
    <navbar />
    <div class="row"></div>
    <div class="row">
      <div class="col-6">
        <img
          id="profile-picture"
          src="https://www.pinclipart.com/picdir/middle/211-2118971_happy-face-chalk-png-hope-you-enjoy-my.png"
          alt
        />
        <h5 style="color:white">Friends( )</h5>
        <h5 style="color:white">Invites( )</h5>
      </div>
      <div class="col-6 profileInfo">
        <h5 style="color:white">Name: {{ profile.name }}</h5>
        <h5 style="color:white">Age: {{ profile.age }}</h5>
        <h5 style="color:white">Address: {{ profile.address }}</h5>
        <h5 style="color:white">Phone: {{ profile.phone }}</h5>
        <h5 style="color:white">Take Me Home: {{ profile.tmh }}</h5>
        <div class="d-flex justify-content-center">
          <button class="btn editBtn" type="button" @click="showForm">Edit Profile</button>
        </div>
      </div>
      <div>
        <modal name="profileModal">
          <form class="form" @submit.prevent="editProfile">
            <div class="form-group">
              <input type="text" name="name" v-model="newProfile.name" placeholder="Change name" />
              <input type="text" name="age" v-model="newProfile.age" placeholder="Change age" />
              <input
                type="text"
                name="address"
                v-model="newProfile.address"
                placeholder="Change address"
              />
              <input type="text" name="phone" v-model="newProfile.phone" placeholder="Change phone" />
              <input type="text" name="tmh" v-model="newProfile.tmh" placeholder="Change tmh" />
            </div>
            <button @click="hideForm" class="btn formBtn" type="submit">Submit Changes</button>
          </form>
        </modal>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <h4 style="color:white">Top Drinks</h4>
        <div class="listSection"></div>
      </div>
      <div class="col-6">
        <h4 style="color:white">Top Bars</h4>
        <div class="listSection"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
export default {
  data() {
    return {
      newProfile: {
        name: "",
        age: "",
        phone: "",
        address: "",
        tmh: "",
        userId: this.$route.params.id
      }
    };
  },
  methods: {
    editProfile() {
      let editedProfile = {
        name: this._data.newProfile.name || this.$store.state.profile.name,
        age: this._data.newProfile.age || this.$store.state.profile.age,
        phone: this._data.newProfile.phone || this.$store.state.profile.phone,
        address:
          this._data.newProfile.address || this.$store.state.profile.address,
        tmh: this._data.newProfile.tmh || this.$store.state.profile.tmh,
        userId: this._data.newProfile.userId
      };
      this.$store.dispatch("editProfile", editedProfile);
      let newProfile = {
        name: "",
        age: "",
        phone: "",
        address: "",
        tmh: ""
      };
    },
    showForm() {
      this.$modal.show("profileModal");
    },
    hideForm() {
      this.$modal.hide("profileModal");
    }
  },
  mounted() {
    this.$store.dispatch("getProfileByUserId", this.$route.params.id);
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  },
  components: {
    Navbar
  }
};
</script>

<style>
body {
  height: 100vh;
}
#background-image {
  background-image: url("https://scottcoyneunderdev.files.wordpress.com/2015/02/dark-wood-high-quality-wallpaper-hd-resolution3.jpg");
  height: 100vh;
}
#profile-picture {
  height: 10em;
  border-radius: 50%;
}
.profileInfo {
  text-align: left;
}
.editBtn {
  color: white;
  border: 1px solid white;
  background-color: rgb(255, 255, 255, 0.3);
  padding: 2pt;
}
.listSection {
  height: 40vh;
  background-color: rgb(169, 169, 169, 0.4);
}
.form {
  width: 200px;
}
.v--modal {
  background-image: url("https://media.giphy.com/media/XVTk9sKWuEa88/giphy.gif");
  background-size: cover;
  width: 300px !important;
  left: 38rem !important;
  box-shadow: 0 4px 8px 0 rgba(209, 155, 7, 0.904),
    0 6px 20px 0 rgb(192, 121, 14) !important;
}
div.v--modal-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.formBtn {
  color: white;
  border: 1pt solid white;
  background-color: rgb(255, 255, 255, 0.3);
}
.formBtn:hover {
  cursor: pointer;
}
@media only screen and (max-width: 455px) {
  body div div.v--modal {
    background-image: url("https://media.giphy.com/media/XVTk9sKWuEa88/giphy.gif");
    background-size: cover;
    width: 300px !important;
    left: 3.5rem !important;
    box-shadow: 0 4px 8px 0 rgba(209, 155, 7, 0.904),
      0 6px 20px 0 rgb(192, 121, 14);
  }
  div.v--modal-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .formBtn {
    color: white;
    border: 1pt solid white;
    background-color: rgb(255, 255, 255, 0.3);
  }
}
</style>

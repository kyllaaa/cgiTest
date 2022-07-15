<template >
  <div style = "background: #E0E0E0" >
  <v-row>
    <v-col cols="12">
    </v-col>
  </v-row>
 <v-row>
    <v-col cols="12">
    </v-col>
  </v-row>

  <v-app-bar elevation="0" color="#E0E0E0">
        <v-spacer></v-spacer>
   <v-toolbar-items class="hidden-sm-and-down" >
    <!-- <a href="/welcome.vue">Home</a> -->
                <v-btn :to="{ name: 'home'}" exact text>
                    Home
                </v-btn>  
<!-- 
              <v-divider vertical></v-divider> -->
                

                <v-btn :to="{ name: 'personalInfo'}" exact text > 
                    Personal Information
                </v-btn>
<!-- 
<v-divider vertical></v-divider> -->
                <v-btn :to="{ name: 'educ'}" exact text >
                    Education
                </v-btn>
<!--                 
                <v-divider vertical></v-divider> -->

                <v-btn :to="{ name: 'research'}" exact text >
                    Research & Studies
                </v-btn>
<!--                   
                <v-divider vertical></v-divider> -->
                  
                <v-btn :to="{ name: 'skills'}" exact text >
                    Skills
                </v-btn>

                <!-- <v-divider vertical></v-divider> -->

                 <v-btn :to="{ name: 'expe'}" exact text >
                    Experience
                </v-btn>

                <!-- <v-divider vertical></v-divider> -->
                
                <v-row>
                    <v-col cols="1">
     </v-col>
       <v-col cols="1">
     </v-col>
        <v-col cols="1"  align="center">
       <!-- <img   
             class="mt-20"
            height="70px"
            width="70px"
            src="~/assets/fbLogo.png"
        /> -->
     </v-col>
     <v-col cols="1">
     </v-col>
     <v-col cols="1">
     </v-col>
     <v-col cols="1">
     </v-col><v-col cols="1">
     </v-col>
       <v-col cols="1">
     </v-col>
       <v-col cols="1">
     </v-col>
       <v-col cols="1">
     </v-col>
      <v-col cols="2" align-self="center">
        <!-- <img   
            
            height="50px"
            width="50px"
            src="~/assets/igLogo.png"
        /> -->
      </v-col>
                </v-row>
            </v-toolbar-items>
  </v-app-bar>
  <v-row>
     <v-col cols="12">
      </v-col>
</v-row>
<v-row>
     <v-col cols="12">
      </v-col>
</v-row>

      <v-row>
     <v-col cols="12">
      </v-col>
</v-row>
      
<v-container color="#E0E0E0">
  <v-row>
        <v-col cols="1">
      </v-col>
      <v-col cols="1">
      </v-col><v-col cols="1">
      </v-col>
      <v-col cols="1">
      </v-col><v-col cols="1">
      </v-col>
     <v-col cols="3"><h1>
      My Address
      </h1>
      </v-col>
</v-row>
  <v-row>
      <v-col cols="1">
      </v-col>
      <v-col cols="1">
      </v-col>

      <v-col cols="1">
        <img   
              class="secondary rounded-circle d-inline-block"
              height="100px"
              width="100px"
              src="~/assets/house.png"
              round
          />
    </v-col>
     <v-col cols="1">
      </v-col>
    
   
    <v-col cols="6" align-self="center" >
      
        <h4 class="font-weight-medium"
        style="font-family: Book Antiqua"> 
     B6 L19 Nixon Street Louisville Subd. Peñafrancia, Brgy. Cupang, Antipolo 
City, Rizal</h4>
    </v-col>
    </v-row>


    <v-row>
        <v-col cols="1">
      </v-col>
      <v-col cols="1">
      </v-col><v-col cols="2">
      </v-col>
     <v-col cols="6"><h1>
      You Can Connect with Me Through:
      </h1>
      </v-col>

</v-row>
 <v-row>
      <v-col cols="1">
      </v-col>
      <v-col cols="1" >
      </v-col>

      <v-col cols="1" style="padding-left:30px">
        <img   
              class="secondary rounded-circle d-inline-block"
              height="60px"
              width="60px"
              src="~/assets/phone.png"
              round
          />
    </v-col>
     <v-col cols="1">
      </v-col>
    
    <v-col cols="3" align-self="center" >
        <h4 class="font-weight-medium"
        style="font-family: Book Antiqua"> 
     0927 140 6550</h4>
    </v-col>
 <v-col cols="1">
      </v-col>
 <v-col cols="2">
        <button @click="goToFacebook()">
        <img 
              
              height="auto"
              width="60px"
              src="~/assets/fbLogo.png"
              round
          /></button>
    </v-col>
  </v-row>

   <v-row>
      <v-col cols="1">
      </v-col>
      <v-col cols="1" >
      </v-col>

      <v-col cols="1" style="padding-left:30px">
        <img   
              
              height="auto"
              width="60px"
              src="~/assets/gmail.png"
              round
          />
    </v-col>
     <v-col cols="1">
      </v-col>
    
    <v-col cols="1" align-self="center" >
        <h4 class="font-weight-medium"
        style="font-family: Book Antiqua"> 
     kyllaaamorfe@gmail.com</h4>
    </v-col>
     <v-col cols="3">
      </v-col>
 <v-col cols="2">
  <button @click="goToIG()">
        <img 
              
              height="auto"
              width="60px"
              src="~/assets/igLogo.png"
              round
          /></button>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
    </v-col>
  </v-row>
   <v-row>
    <v-col cols="12">
    </v-col>
  </v-row>
   <v-row>
    <v-col cols="12">
    </v-col>
  </v-row>
 
 </v-container>
  </div>
</template>



<script>
export default {
  name: "app",
  methods: {
    goToFacebook() {
      window.open("https://www.facebook.com/kyllaaa/");
    },
     goToIG() {
      window.open("https://www.instagram.com/kyllaaa.m/");
    },
  },
};
</script>
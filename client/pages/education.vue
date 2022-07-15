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

              <!-- <v-divider vertical></v-divider> -->
                

                <v-btn :to="{ name: 'personalInfo'}" exact text > 
                    Personal Information
                </v-btn>

<!-- <v-divider vertical></v-divider> -->
                <v-btn :to="{ name: 'educ'}" exact text >
                    Education
                </v-btn>
                
                <!-- <v-divider vertical></v-divider> -->

                <v-btn :to="{ name: 'research'}" exact text >
                    Research & Studies
                </v-btn>
                  
                <!-- <v-divider vertical></v-divider> -->
                  
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



<v-container color="#E0E0E0">
   <v-container style="background: #BCAAA4;
  box-shadow: 30px 25px 50px 10px #757575;border-radius: 50px;
  padding-top:100px;
  padding-left:55px;
  padding-right:50px;
  padding-bottom:70px;
  width:900px;height:510px">
    <div style="background: #F5F5F5; margin-top:-70px;
    width:800px;height:450px">
<v-row>
        <v-col cols="1">
      </v-col>
      
      <v-col cols="1">
      </v-col><v-col cols="1">
      </v-col>
     <v-col cols="6" style="margin-left:10px"><h1>
    I Finished my Degree at
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
              height="230px"
              width="230px"
              src="~/assets/olfu.png"
              round
          />
    </v-col>
      <v-col cols="1">
      </v-col>
      <v-col cols="1">
      </v-col>
      
     <v-col cols="1" style="padding-left:70px"> 
       <img   
              class="secondary rounded-circle d-inline-block"
              height="230px"
              width="230px"
              src="~/assets/ccs.jpg"
              round
          />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="1">
      </v-col>
      <v-col cols="1">
      </v-col>
      <v-col cols="1">
    </v-col>
  
    <v-col cols="8" style="margin-left:20px;margin-top:-20px">
        <h2 class="font-weight-black "
        style="font-family: Book Antiqua;"> 
     Our Lady of Fatima University</h2>

     <v-row>
    <v-col cols="12" style="margin-left:-5px;margin-top:0px">
      <h4 class="font-weight-black "
        style="font-family: Book Antiqua; "> 
     Bachelor of Science in Information Technology </h4>
       <h3 class="font-weight-black"
        style="font-family: Book Antiqua; margin-left:110px">
     Cum Laude</h3>
     <h4 class="font-weight-black"
        style="font-family: Book Antiqua; margin-left:125px">
     2018-2022</h4>
    </v-col>
  </v-row>
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
  
    </div>
   </v-container>
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
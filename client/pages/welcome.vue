<template >
  <div  style = "background: #E0E0E0">
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
                <v-btn :to="{ name: 'home'}"  text>
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





 <v-container >
  
  <v-container style="background: #BCAAA4;
  box-shadow: 30px 25px 50px 10px #757575;border-radius: 50px;
  padding-top:100px;
  padding-left:55px;
  padding-right:50px;
  padding-bottom:70px;
  width:900px">
    <div style="background: #F5F5F5; margin-top:-50px;
    margin-left:0px;
    width:800px">
  <v-row>
      <v-col cols="1">
      </v-col>

      <v-col cols="3">
        <img   style="margin-top:10px"
              class="secondary rounded-circle d-inline-block"
              height="300px"
              width="300px"
              src="~/assets/idPic.jpg"
              round
          />
    </v-col>
    
    <v-col cols="1">
    </v-col>
   <v-col cols="1">
    </v-col>
    <v-col cols="5" align-self="center">
      <h1>Riczhie Kylla Morfe</h1>
        <h4 class="
        font-italic
        font-weight-medium
        "
        style="font-family: Arial"> 
      Organize and a hard working person. Seeking for a platform that can make the best of 
      my potential and contribute to the organization’s growth. And to also upgrade my skills, learning, and 
      knowledge.</h4>
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
   <v-row>
    <v-col cols="12">
    </v-col>
  </v-row> <v-row>
    <v-col cols="12">
    </v-col>
  </v-row>


  
 </v-container>

  </div>
</template>


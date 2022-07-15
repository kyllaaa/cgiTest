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
 <v-container color="#E0E0E0">
  <v-container style="background: #BCAAA4;
  box-shadow: 30px 25px 50px 10px #757575;border-radius: 50px;
  padding-top:100px;
  padding-left:55px;
  padding-right:50px;
  width:900px; height:450px">
    <div style="background: #F5F5F5; margin-top:-50px;
    margin-left:0px;
    width:800px; height:350px">
<v-row>

        <v-col cols="1">
      </v-col>
      
      <v-col cols="1">
      </v-col><v-col cols="1">
      </v-col>
      
     <v-col cols="5" style="margin-left:100px"><h1>
    Work Expirience
      </h1>
      </v-col>
</v-row>
<v-row>
     <v-col cols="12">
      </v-col>
</v-row>
<v-row>
   <v-col cols="1">
      </v-col> <v-col cols="3">
      </v-col>
       <v-col cols="1">
        <img   
             
              height="auto"
              width="auto"
              src="~/assets/suiterus.png"
          />
    </v-col>
</v-row>




<v-row>
<v-col cols="1">
      </v-col>
      
    
         <v-col cols="1">
      </v-col> <v-col cols="1">
      </v-col>
       <v-col cols="1">
      </v-col>
    
   
    <v-col cols="6" align-self="center" >
        <h1 class="font-weight-black"
        style="font-family: Book Antiqua; margin-left:-50px"> 
    Suiterus Technologies Inc.</h1>
    <h2 class="font-weight-bold"
        style="font-family: Book Antiqua; margin-left:0px"> 
    Software Engineer Intern</h2>
    <h4 class="font-weight-regular"
        style="font-family: Book Antiqua; margin-left:20px;"> 
    February 03, 2022 - May 26, 2022</h4>
    </v-col>
      <v-col cols="1">
      </v-col>
      <v-col cols="1">
      </v-col>
    </v-row>


    </div></v-container>
    <v-row>
    <v-col cols="12">
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="12">
    </v-col>
  </v-row><v-row>
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
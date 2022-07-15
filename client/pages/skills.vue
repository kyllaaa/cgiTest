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
<v-row>

        <v-col cols="1">
      </v-col>
      
      <v-col cols="1">
      </v-col><v-col cols="1">
      </v-col>
      <v-col cols="1">
      </v-col>
      
     <v-col cols="5" style="padding-left:0px"><h1>
    My Programming Languages
      </h1>
      </v-col>
</v-row>
<v-row>
     <v-col cols="12">
      </v-col>
</v-row>
 <v-row>
   <v-col cols="1">
      </v-col>
    <v-col cols="1" style="margin-left:30px">
      <img   style="margin-left:25px;"
             
              height="150px"
              width="270px"
              src="~/assets/c.png"
          />
    </v-col>
    <v-col cols="1">
   
      </v-col><v-col cols="1">
      </v-col>
     <v-col cols="1">
      <img   style="margin-left:25px;"
             
              height="150px"
              width="270px"
              src="~/assets/css-html.png"
          />
    </v-col>
    <v-col cols="1">
      </v-col><v-col cols="1">
      </v-col>
     <v-col cols="1">
      <img   style="margin-left:25px;"
             
              height="150px"
              width="270px"
              src="~/assets/php.png"
          />
    </v-col>
</v-row>
        <v-row>
          <v-col cols="1">
      </v-col>
      
    <v-col cols="1" style="margin-left:80px; margin-top:-30px">
      <v-rating  v-model="c"
      background-color="cyan lighten-2"
     length="5"
      color="teal" 
       size="29"
         
         value="4.5"
         readonly></v-rating>
    </v-col>
    
 <v-col cols="1">
      </v-col>
      <v-col cols="1">
      </v-col>
      

    <v-col cols="1" style="margin-left:0px; margin-top:-30px">
      <v-rating v-model="css" 
      background-color="cyan lighten-2"
     length="5"
      color="teal" 
       size="29"
       value="3.5"
         readonly
         ></v-rating>
    </v-col>

     <v-col cols="1">
      </v-col>
      <v-col cols="1">
      </v-col>
      

    <v-col cols="1" style="margin-left:0px; margin-top:-30px">
      <v-rating v-model="php" 
      background-color="cyan lighten-2"
     length="5"
      color="teal" 
       size="29"
       value="3.5"
         readonly
         ></v-rating>
    </v-col>
  </v-row>
    <v-row>
    <v-col cols="1">
      </v-col>
    <v-col cols="1" style="margin-left:30px">
      <img   style="margin-left:25px;"
             
              height="150px"
              width="270px"
              src="~/assets/sql.png"
          />
    </v-col>
    <v-col cols="1">
      </v-col><v-col cols="1">
      </v-col>
     <v-col cols="1">
      <img   style="margin-left:25px;"
             
              height="150px"
              width="270px"
              src="~/assets/oracle.png"
          />
    </v-col>
    <v-col cols="1">
      </v-col><v-col cols="1">
      </v-col>
     <v-col cols="1">
      <img   style="margin-left:25px;"
             
              height="150px"
              width="270px"
              src="~/assets/python.png"
          />
    </v-col>
  </v-row>
  <v-row>
          <v-col cols="1">
      </v-col>
      
    <v-col cols="1" style="margin-left:80px; margin-top:-30px">
      <v-rating  v-model="sql"
      background-color="cyan lighten-2"
     length="5"
      color="teal" 
       size="29"
         
         value="4.5"
         readonly></v-rating>
    </v-col>
    
 <v-col cols="1">
      </v-col>
      <v-col cols="1">
      </v-col>
      

    <v-col cols="1" style="margin-left:0px; margin-top:-30px">
      <v-rating v-model="oracle" 
      background-color="cyan lighten-2"
     length="5"
      color="teal" 
       size="29"
       value="3.5"
         readonly
         ></v-rating>
    </v-col>

     <v-col cols="1">
      </v-col>
      <v-col cols="1">
      </v-col>
      

    <v-col cols="1" style="margin-left:0px; margin-top:-30px">
      <v-rating v-model="python" 
      background-color="cyan lighten-2"
     length="5"
      color="teal" 
       size="29"
       value="3.5"
         readonly
         ></v-rating>
    </v-col>
  </v-row>

          <v-row>
    <v-col cols="12">
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="1">
      </v-col>
    <v-col cols="1" style="margin-left:30px">
      <img   style="margin-left:25px;"
             
              height="150px"
              width="270px"
              src="~/assets/java.png"
          />
    </v-col>
       <v-col cols="1">
      </v-col><v-col cols="1">
      </v-col>
    <v-col cols="1">
      <img   style="margin-left:25px;"
             
              height="150px"
              width="270px"
              src="~/assets/laravel.png"
          />
    </v-col>
           <v-col cols="1">
      </v-col><v-col cols="1">
      </v-col>
    <v-col cols="1">
      <img   style="margin-left:25px;"
             
              height="150px"
              width="270px"
              src="~/assets/vue.png"
          />
    </v-col>
  </v-row>

  <v-row>
          <v-col cols="1">
      </v-col>
      
    <v-col cols="1" style="margin-left:80px; margin-top:-30px">
      <v-rating  v-model="java"
      background-color="cyan lighten-2"
     length="5"
      color="teal" 
       size="29"
         
         value="4.5"
         readonly></v-rating>
    </v-col>
    
 <v-col cols="1">
      </v-col>
      <v-col cols="1">
      </v-col>
      

    <v-col cols="1" style="margin-left:0px; margin-top:-30px">
      <v-rating v-model="laravel" 
      background-color="cyan lighten-2"
     length="5"
      color="teal" 
       size="29"
       value="3.5"
         readonly
         ></v-rating>
    </v-col>

     <v-col cols="1">
      </v-col>
      <v-col cols="1">
      </v-col>
      

    <v-col cols="1" style="margin-left:0px; margin-top:-30px">
      <v-rating v-model="vue" 
      background-color="cyan lighten-2"
     length="5"
      color="teal" 
       size="29"
       value="3.5"
         readonly
         ></v-rating>
    </v-col>
  </v-row>

 </v-container>



  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    c: 4,
    css: 3,
    php:3,
    sql:4,
    oracle:2,
    python:2,
    java:4,
    laravel:2,
    vue:2,
  }),
};
</script>
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
      Here's My Previous Projects
        </h1>
        </v-col>
  </v-row>
  <v-row>
    <v-col>
    </v-col>
  </v-row>

  <v-row>
      <v-col cols="1">
      </v-col>
      <div style = "background: #F5F5F5; 
                    padding-top:20px;
                    padding-left:10px;
                    padding-right:10px;
                    padding-bottom:100px;
                    margin-left:25px; height:400px;">
        <img   style="margin-left:25px;"
              class="secondary rounded-circle d-inline-block"
              height="150px"
              width="150px"
              src="~/assets/hydroid.png"
              round
          /><v-col cols="1">
      </v-col>
            <pre style="font-family: Arial; text-align:center; padding-top:20px;"
            class="font-weight-bold ">An Automated Water 
Consumption Management 
System With Water Leak 
Detection using Mobile 
Application</pre>
<br>
<h3 style="margin-left:80px">2022</h3>
          </div>
          
    <div style = "background: #F5F5F5; 
                    padding-top:20px;
                    padding-left:30px;
                    padding-right:30px;
                    margin-left:20px;">
        <img   style=""
              class="secondary rounded-circle d-inline-block"
              height="150px"
              width="150px"
              src="~/assets/pos.png"
              round
          /><v-col cols="1">
      </v-col>
          <pre class="font-weight-bold "
          style="font-family: Arial; text-align:center; padding-top:20px;">
A Sales and Inventory 
System with Barcode 
Scanner for KPantry 
Korean Store</pre>
<br><br>
<h3 style="margin-left:70px">2021</h3>
          </div>

      <div style = "background: #F5F5F5; 
                    padding-top:20px;
                    padding-left:30px;
                    padding-right:30px;
                    margin-left:20px;">
        <img   style=""
              class="secondary rounded-circle d-inline-block"
              height="150px"
              width="150px"
              src="~/assets/ticketing.png"
              round
          /><v-col cols="1">
      </v-col>
          <pre class="font-weight-bold "
          style="font-family: Arial; text-align:center; padding-top:20px;">
An Offline Movie 
Ticketing Systemn</pre><br><br><br><br>
<h3 style="margin-left:50px">2020</h3>
</div>
     <div  @mouseenter="hover = true"
    @mouseleave="hover = false"
    class="div"
    :class="{ 'div-hover': hover }"
     style = " background: #F5F5F5; 
                    padding-top:20px;
                    padding-left:20px;
                    padding-right:20px;
                    margin-left:20px;">
        <img   style="margin-left:15px"
              class="secondary rounded-circle d-inline-block"
              height="150px"
              width="150px"
              src="~/assets/reservation.png"
              round
          /><v-col cols="1">
      </v-col>
            <pre class="font-weight-bold "
            style="font-family: Arial; text-align:center; padding-top:20px;">An Automated Water 
A Web-Based 
Reservation System for 
Feliz Le Mirage Garden</pre><br><br>
<h3 style="margin-left:70px">2019</h3></div>

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



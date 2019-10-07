  ----------------------------------------background---------------------------------------------
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed; / scroll;
---------------------------------------border---------------------------------------------------------
  border-style: solid;
  border-left-style: solid;


  border: 1px solid black;
  outline: 1px solid red;
  outline-offset: 15px;
  -------------------------------------------link-------------------------------------------------
  The value  none;  is often used to remove underlines from links:
  a:visited  /a:hover  /a:active
  a:link {        
    color: red;
    }

  a {
    text-decoration: none;
    }



-----------------------------------------------list--------------------------------------------------
ul class="a"

ul.a {
  list-style-type: circle;  /list-style: none;
}
li {
  display: inline;
}


li a:hover:not(.active) {
  background-color: #555;
  color: white;
}

list-style-image: url('sqpurple.gif');
list-style-position: outside;

-----------------------------------------text-------------------------------------------------------
  text-transform: uppercase; /capitalize;
  text-indent: 50px;
  letter-spacing: -3px;
  line-height: 0.8;
  direction: rtl;
  word-spacing: 10px;
  vertical-align: bottom;
  ------------------------------------font----------------------------------------------------------
   font-variant: small-caps;
   --------------------------------------table--------------------------------------------------------
    #customers {
        border-collapse: collapse;
    }

    #customers td, #customers th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    #customers tr:nth-child(even){background-color: #f2f2f2;}
    #customers tr:hover {background-color: #ddd;}

    --------------------------------responsive table-----------------------------------------------
   To create a responsive table, add a container element (like div) with overflow-x:auto around the table element:
    <div style="overflow-x:auto;">
    <table>
        <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Points</th>
        <th>Points</th>
        </tr>
    </table>
    </div>
--------------------------------------------visibility-------------------------------------------
display:none;  removes its place
display:block;
visibility:hidden; still keeps its space
-------------------------------------------position-----------------------------------------------
    static
    relative
    fixed
    absolute
    sticky
   _________________________________________ absolute  

    An element with position: absolute; is positioned relative to the nearest positioned ancestor
    However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

    img {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;   image is behind the text
    }
                                                
    -----------------------------------------------overflow---------------------------------------
    scroll
    visible 
    hidden 
    auto  
    overflow-x: hidden;
    overflow-y: scroll;
    ----------------------------------------------float-------------------------------
      float: none;
      left /right

    ---------------------------------clear-------------------------------------
       clear: left;           No floating elements allowed on the left side
       none ; right; both; inherit

       .clearfix {
            overflow: auto;
        }

        .clearfix::after {
            content: "";
            clear: both;
            display: table;
        }
---------------------------------Align-------------------------------------
 transform: translate(-50%, -50%);

----------------------------------pseudo
p {
  display: none;
  background-color: yellow;
  padding: 20px;
}

div:hover p {
  display: block;
}

----------------------------------------
<p>I am a <i>strong</i> person. I am a <i>strong</i> person.</p>

p:first-child i {
  color: blue;
}

p i:first-child {
  color: blue;
} 

---------------------------------------navBar---------------------
ul {
  position: fixed;
  top: 0;
  width: 100%;
}

------------------------------------dropdown--------------------------
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
min-width: 160px;

.dropdown:hover .dropdown-content {
  display: block;
}

------------------------------------form
input[type=text]:focus {
  background-color: lightblue;
}
--------------------img
  background-image: url(img_flwr.gif), url(paper.gif);
  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat;

   background-size: contain;/ cover
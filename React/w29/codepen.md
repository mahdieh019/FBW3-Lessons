-----------------------------js------------------------------

<!-- this part should be part of app.js -->
function Person(props){
  return(
  //jsx code
    <div className="person">
      <h1>{props.name}</h1>
      <p><b>job: </b>{props.job}</p>
    </div>
  );
}
var app=(
  <div className="row">
    <Person name="Dan" job="React Developer"/>
    <Person name="Mahdieh" job="Vue js Developer"/>
    <Person name="Farhan" job="Vue js Developer"/>
  </div>

);

<!--this part should be part of index.js -->
ReactDOM.render(<Person name="Peter" job="React Developer"/>,document.querySelector('#result'));
ReactDOM.render(<Person name="Natalie" job="Vue js Developer"/>,document.querySelector('#result2'));

ReactDOM.render(app,document.querySelector('#result3'));


--------------------------------css---------------------------------
.person{
  border:1px solid #ccc;
  padding:20px;
  margin:10px;
  width:150px;
  box-shadow:0 2px 2px #ccc;
  display:inline-block;
  background:green;
}
.row{
  border:3px solid gray;
  
}
----------------------------------html-----------------------------
<div id="result"></div>
<div id="result2"></div>
<div id="result3"></div>
<div class="person">
  <h1>Mahsa</h1>
  <p><b>job:</b> web developer</p>
</div>
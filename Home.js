"use strict"

//Create a Home object.
function Home( path, layContent )
{
var self = this;
var scrollSpeed = 2; // adjust this value to control the scroll speed
var scrollY = 0;
var count= 0;
var dir =1;

this.MyScroll = function(){
var temp = "\r\n"+ txt.GetHtml()+"\r\n";
txt.SetHtml( temp );
}

this.ScrollText = function() {
  scrollY -= scrollSpeed;
  txt.SetPosition( 0, scrollY );
  //txt.SetY(scrollY);

  if (scrollY < -txt.GetHeight()) {
  
    scrollY = app.GetScreenHeight(  );
  }

  //app.RedrawLayout();
  setInterval(self.ScrollText, 1000);
//  app.PostDelayed(self.ScrollText, 50); // adjust the delay to control the animation smoothness
}
this.AnimText = function ()
{
	if(count < 10 && dir == 1) { 
		count+=1;
	/*	if(dir==1) {
			dir = 2;
		}else{
			dir = 1;
		}*/
		}else{
		count-=1;
		dir = 0;
		/*if(dir==2) {
			dir = 1;
		}else{
			dir = 2;
		}*/
		}
	if(count===1) txt.SetHtml( "<br />"+texto);
	if(count===2) txt.SetHtml( "<br /><br />"+texto);
	if(count===3) txt.SetHtml( "<br /><br /><br />"+texto);
	if(count===4) txt.SetHtml( "<br /><br /><br /><br />"+texto);
	if(count===5) txt.SetHtml( "<br /><br /><br /><br /><br />"+texto);
	if(count===6) txt.SetHtml( "<br /><br /><br /><br />"+texto+"<br />");
	if(count===7) txt.SetHtml( "<br /><br /><br />"+texto+"<br /><br />");
	if(count===8) txt.SetHtml( "<br /><br />"+texto+"<br /><br /><br />");
	if(count===9) txt.SetHtml( "<br />"+texto+"<br /><br /><br /><br />");
}


    //Get page states.
    this.IsVisible = function() { return lay.IsVisible() }
    this.IsChanged = function() { return false }
    
    //Show or hide this page.
    this.Show = function( show )
    {
        if( show ) {
        	lay.Animate("FadeIn");
        	var i = setInterval(self.AnimText, 750);
        	//var interval = setInterval(self.MyScroll, 1000)
        }else{
        	lay.Animate( "FadeOut" );
        }
    }
    
    //Create layout for app controls.
    var lay = app.CreateLayout( "Frame", "Top,FillXY,HCenter" );
    lay.Hide();
    layContent.AddChild( lay );
    
    //Add a logo.
	var video= app.CreateVideoView( 1, -1, "ShowControls, AutoPlay,Loop")
	lay.AddChild( video );
	video.SetOnReady( ()=>{video.Play()} )
	video.SetOnComplete( ()=>{video.Play()} )
	video.SetFile( "Misc/cecilia.webm" )
	
	var label = app.CreateLabelView( app.GetAppName() )
	label.SetTextColor( "#555555" )
	label.SetBackColor("#efefef");
  lay.AddChild( label )

	//Create a text with formatting.
    var text  = "<br/><br/><br/><br/><br/><br/><br/><br/><marquee behavior='scroll'><p><font color=#f4ea34><big>Welcome to Bike Tours</big></font></p>" + 
    "Todo: Put your home page controls here! </p>" + 
    "<p>You can add links too - <a href=https://www.biketours.com/?gad_source=1&gclid=Cj0KCQiAwOe8BhCCARIsAGKeD57kr9W4LwDTwXM0EBrsWVKnf67-hwrcocnMenEqCr0EX0E7E1RapAoaAquvEALw_wcB>Bike Tours</a></p>" +
    "<br><br><p><font color=lime><big><big><b>&larr;</b></big></big> Try swiping from the " + 
    "left and choosing the <b>'New File'</b> option</font></p></marquee>";
    var texto = text;
    var txt = app.CreateText(text, 1, -1, "Html, Link, Multiline");
    txt.SetTextColor( "#ffffff" );
    txt.SetTextShadow( 5, 0, 0, "#000000" )
    //txt.SetPosition( 0, 0, app.GetDisplayWidth(), app.GetDisplayHeight() )
    //alert("");
    txt.SetHtml( text )
    //alert("");
    //setTimeout(()=>{txt.SetHtml( "<br /><br />"+text )}, 7500);
    
    //app.Wait(15, true)
    /*
    "A long time ago in a galaxy far, far away...\n\n" +
    "Episode IV\n\n" +
    "STAR WARS\n\n" +
    "It is a period of civil war. Rebel spaceships, striking from a hidden base, " +
    "have won their first victory against the evil Galactic Empire.\n\n" +
    "During the battle, Rebel spies managed to steal secret plans to the Empire's " +
    "ultimate weapon", 1,-1, "Html,Link")
    */
    
lay.AddChild( txt )
//txt.SetGravity(Gravity.TOP | Gravity.CENTER_HORIZONTAL)
}
//__myText.SetGravity(Gravity.TOP | Gravity.CENTER_HORIZONTAL);
//2. Implement the Solling Animation To make the text scroll upwards, you can use a timer to continuously update the vertical position of the text object:
//javascript
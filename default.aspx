<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <title>Eurasia </title>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<BR/><BR/>
<BR/><BR/>
<BR/><BR/>
<div id="PageContainerOuter">
	<div id="PageContainer">
		<!-- Home Left Column Begins -->
		<div id="HomeColumn1">
			<div id="flashvideo2">
				<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="450" height="350" >
					<param name="movie" value="videoplayer.swf" />
					<param name="quality" value="best" />
					<param name="bgcolor" value="#ffffff" />
					<param name="play" value="true" />
					<param name="loop" value="true" />
					<param name="wmode" value="transparent" />
					<param name="scale" value="default" />
					<param name="allowFullScreen" value="true" />
					<param name="flashvars" value="videoPlayerWidth=450&amp;videoPlayerHeight=350&amp;autoplay=true&amp;v=media/11.flv&amp;img=Untitled-6.png&amp;repeat=true&amp;btnIcon=#6CFF00&amp;playIcon=#6CFF00&amp;controlsBgAlpha=0.5" />
					<param name="menu" value="true" />
					<param name="devicefont" value="false" />
					<param name="salign" value="" />
					<param name="allowScriptAccess" value="always" />
					<object type="application/x-shockwave-flash" data="videoplayer.swf" width="450" height="350">
						<param name="movie" value="videoplayer.swf" />
						<param name="quality" value="best" />
						<param name="bgcolor" value="#ffffff" />
						<param name="play" value="true" />
						<param name="loop" value="true" />
						<param name="allowFullScreen" value="true" />
						<param name="flashvars" value="autoplay=true&amp;v=media/11.flv&amp;img=Untitled-6.png&amp;repeat=true&amp;btnIcon=#6CFF00&amp;playIcon=#6CFF00&amp;controlsBgAlpha=0.5" />
						<param name="wmode" value="transparent" />
						<param name="scale" value="default" />
						<param name="menu" value="true" />
						<param name="devicefont" value="false" />
						<param name="salign" value="" />
						<param name="allowScriptAccess" value="always" />
					</object>
				</object>
			</div>
			<div id="flashvideo2holder"></div>	
				<div id="HomeGalleryDetailsContainer">
					<!-- Item 1 -->	
					<div id="">
						<br />
						<div class="newsdiv"><h2 style="text-decoration: underline">Global in the News</h2><br />
						<li onclick="TINY.box.show({url:'pdfviewer.html',animate:true,opacity:60})">Ajax, Advanced Functions</li>
						</div>
					</div>
				</div><!-- Home Left Column Ends -->

				<!-- Home Right Column Begins -->
		</div>
		<div id="HomeColumn2">
			<div id="HomeGalleryNavigation"> 
					<center></center> 
					<br /><br />
			</div>
			<div id="HomeGallery">
				<div id="Detail">
					<div id="DetailHeader"></div>
					<div id="DetailCopy">
						<span class="style1">
							Introduction - EURASIA
						</span>
						<br/><br />
						On May 17, 2013 at 12 PM in Las Vegas will start the 45 Hour Foundraiser with 15 three hour Cirque Style Production with Sports competition events. 
						This foundraiser will continue for antoher 80 hours during the ICSC RECon Convention in Las Vegas, where the Global Financial Trust, Ltd., the parent company of EURASIA and NeuroMama.com is an Exhibitor and there to lense the World Largest Shopping Mall in Eurasia Resort and sell advertising on NeuroMama.com Search Engine.
						<br/><br/>
						This Fundraising event will take place in 15 cities in 12 countries on 5 continents. This unprecedented fundraising event will mark the launch of this project. This fundraiser will be streamed live on NeuroMama.com and EurasiaLasVegas.com. This event will bring awareness to the light sentences given to drug dealers distributing drugs to children and help needy children. This event will bring awareness to global warming and will start the war against destroyers of our Planet. 
						This fundraising event will help families of victims of 9/11 terrorist attack on World Trade Center. This Global FUNDRAISING Event is Researched, Designed, Developed and Implemented by NeuroMama.com and EURASIA Hotel Casino Resort in Las Vegas. 
						<br/><br/>
						Andre Agassi will be asked to take charge of this fundraising marathon: NeuroMama.com will be issuing various Gift Certificates to donors, depending upon their contribution.
					</div>
				</div>
			</div>
			<div id="TwitterFeedHeader"></div>
			<div id="TwitterFeedContainer" style="width: 380px;  padding: 0px 0px 10px 70px; height: 87px; ">
			<!-- <a title="Live the M life" rel="lightbox[southchapel]" href="/peelad/interior_popup.swf?width=252&amp;height=525"><img src="images/home/Mlife-Banner.jpg" width="300" height="87" border="0" style="margin: 0px; float: left;"/></a> -->
			</div>
			<div class="HomePageRule"></div>
			<!-- Twitter Feed -->
			<div id="TwitterFeedContainer"><img src="images/btn-Twitter-on.jpg">
				<span id="lblDisplayTweet_LblTweet"> 
					<p>#FF #GlobalLtd @MarginInvestors @PennyStock @AcesOfACTS </p>
				</span>
			</div>
			<!-- /Twitter Feed -->	
			<div class="HomePageRule"><img src="images/spacer_002.gif" height="1" width="470"></div>
			<!-- Facebook Feed -->
			<div id="TwitterFeedContainer"></div>
			<!-- /Facebook Feed -->
			<div class="HomePageRule"></div>
			<div id="TwitterFeedViewAllNews" style="float: right;"></div>
		</div><!-- /Twitter Feed -->	
		<!-- Home Right Column Ends -->
		<div id="SpacerDiv" style="height: 2px; width: 710px;"></div>
	</div>
</div>
</asp:Content>


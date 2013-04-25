using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Xml.Linq;
// using System.Web;
using System.Xml;
using System.Data;
using System.Text;
using System.Data.Common;
using System.Web.Script.Serialization;
using System.Text.RegularExpressions; // for regex
/*
 * Json Includes
 * 
 * */
using NUnit.Framework;
using System.Net;
using System.IO;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Utilities;
using OAuth;

public partial class JSON : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
           DataClassesCrimeDataContext dbcrime = new DataClassesCrimeDataContext();
    public string sJSON = "error";

        string f = Request.Params.Get("f");

        if (f == null)
        {
            f = "";
        }
        if (f == "JGetTopPlayers3")
        {
            int Page = int.Parse(Request.Params.Get("Page"));
            sJSON = JGetTopPlayers3(Page);



        }
        else if (f == "JCheckUserID")
        {
            /* var fields = [opensocial.Person.Field.ABOUT_ME,
                       opensocial.Person.Field.AGE,
                       opensocial.Person.Field.BODY_TYPE,
                       opensocial.Person.Field.BOOKS,
                       opensocial.Person.Field.CHILDREN,
                       opensocial.Person.Field.CURRENT_LOCATION,
                       opensocial.Person.Field.DATE_OF_BIRTH,
                       opensocial.Person.Field.DRINKER,
                       opensocial.Person.Field.ETHNICITY,
                       opensocial.Person.Field.GENDER,
                       opensocial.Person.Field.HAS_APP,
                       opensocial.Person.Field.HEROES,
                       opensocial.Person.Field.ID,
                       opensocial.Person.Field.INTERESTS,
                       opensocial.Person.Field.JOBS,
                       opensocial.Person.Field.LOOKING_FOR,
                       opensocial.Person.Field.MOVIES,
                       opensocial.Person.Field.MUSIC,
                       opensocial.Person.Field.NAME,
                       opensocial.Person.Field.NETWORK_PRESENCE,
                       opensocial.Person.Field.NICKNAME,
                       opensocial.Person.Field.PROFILE_SONG,
                       opensocial.Person.Field.PROFILE_URL,
                       opensocial.Person.Field.RELATIONSHIP_STATUS,
                       opensocial.Person.Field.RELIGION,
                       opensocial.Person.Field.SEXUAL_ORIENTATION,
                       opensocial.Person.Field.SMOKER,
                       opensocial.Person.Field.STATUS,
                       opensocial.Person.Field.THUMBNAIL_URL,
                       opensocial.Person.Field.TV_SHOWS,
                       opensocial.Person.Field.URLS,
                       MyOpenSpace.Person.Field.MEDIUM_IMAGE,
                       MyOpenSpace.Person.Field.LARGE_IMAGE];
             * 
             * 
             *   User.prototype.constructParamForReq = function() {
       var l_params = {};
       outputDebug("User.prototype.constructParamForReq");
		
             * 
             * 

        
       l_params.NetworkID = this.m_userId;
       l_params.NetworkType = 2;
		
           l_params.City = "";
		
           
      l_params.gender = "0";
       l_params.thumbnail_url = "";;
       l_params.ProfileURL = "";;
        l_params.displayname ="";;
		
       //if (isValid(this.m_city))
		
        l_params.region = "";
        l_params.zipcode = "";
        l_params.country ="";
                
		
       if (isValid(this.m_age)) l_params.age = this.m_age;
       if (isValid(this.m_gender)) l_params.gender = this.m_gender;
       if (isValid(this.m_thumbnail_url)) l_params.thumbnail_url = this.m_thumbnail_url;
       if (isValid(this.m_profile_url)) l_params.ProfileURL = this.m_profile_url;
       if (isValid(this.m_name)) l_params.displayname = customEncoding(this.m_name);
		
       //if (isValid(this.m_city))
		 
       if (isValid(this.m_region)) l_params.region = this.m_region; 
       if (isValid(this.m_zipcode)) l_params.zipcode = this.m_zipcode;
       if (isValid(this.m_country)) l_params.country = this.m_country;
       //l_params.countrya = "eyg3";
   //	 l_params.wtf ="wtf";  
       //		this.m_city =a_osUserData.getField(opensocial.Person.Field.CITY);
   //	this.m_region = a_osUserData.getField(opensocial.Person.Field.REGION);
   //	this.m_zipcode = a_osUserData.getField(opensocial.Person.Field.POSTALCODE); 
   //	this.m_country = a_osUserData.getField(opensocial.Person.Field.COUNTRY);
		
       return l_params;
   }
             
@NetworkID varchar(50),
@NetworkType as bigint,
@Age as varchar(50),
@Gender as varchar(10),
@TN as varchar(350),
@PorfileURL as varchar(350), 
@DisplayName as nvarchar(100),
@City as nvarchar(100),
@Region as nvarchar(100),
@ZipCode as nvarchar(100),
@Country as nvarchar(100),
@Sign_in as nvarchar(100),


@parm1OUT xml OUTPUT
             * 
             * 
             * */


            /*
      * http://api.myspace.com/v1/users/152564710.json?oauth_consumer_key=C50CF2B2-B4E3-420a-9839-7966192982A1&oauth_nonce=633919745654034945&oauth_signature=HQV31PxOf3ZCcc1AoPN%2FhVJR7Vg%3D&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1256377765&oauth_version=1.0
      http://api.myspace.com/v1/users/152564710/mood.xml?oauth_consumer_key=C50CF2B2-B4E3-420a-9839-7966192982A1&oauth_nonce=633919818791661436&oauth_signature=VAM4i3abHoz5dCTwBs%2BoGhMMOwo%3D&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1256385079&oauth_version=1.0
      *    string opensocial_owner_id = Request.Params.Get("opensocial_owner_id");
     string oauth_consumer_key = Request.Params.Get("oauth_consumer_key");
     string oauth_nonce = Request.Params.Get("oauth_nonce");
     string oauth_signature = Request.Params.Get("oauth_signature");
     string oauth_signature_method = Request.Params.Get("oauth_signature_method");
     string oauth_timestamp = Request.Params.Get("oauth_timestamp");
     string oauth_version = Request.Params.Get("oauth_version");
     string session_id = Request.Params.Get("session_id");
      * 
      * * */
            /*  WebClient client = new WebClient();

              // Add a user agent header in case the 
              // requested URI contains a query.

              client.Headers.Add("user-agent", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.2; .NET CLR 1.0.3705;)");


              Stream data = client.OpenRead("http://api.myspace.com/v1/users/152564710.xml?oauth_consumer_key=http%3A%2F%2Fwww.myspace.com%2F399132525&oauth_nonce=1852299&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1256386191&oauth_version=1.0&oauth_signature=qnMgrEbMZMel%2BLM8Tn691uYtuhc%3D");

         //     Stream data = client.OpenRead("http://api.myspace.com/v1/users/152564710.xml?oauth_consumer_key=" + oauth_consumer_key + "&oauth_nonce=" + oauth_nonce + "&oauth_signature=" + oauth_signature + "&oauth_signature_method=HMAC-SHA1&oauth_timestamp=" + oauth_timestamp + "&oauth_version=1.0");
              StreamReader reader = new StreamReader(data);
             */
            //   string s = MakeRequest("/v1/users/" + opensocial_owner_id + ".xml");

            // Form the full REST request url
            /*  Uri url = new Uri(requestServer2 + "/JSonService.aspx");
            //  DataSet ds = new DataSet();

              // Instantiate OAuthBase and declare variables
              OAuthBase oAuth = new OAuthBase();
              string nonce = oauth_nonce;
              string timeStamp = oauth_timestamp;
              string normUrl = string.Empty;
              string normParams = string.Empty;
              string strRequest = string.Empty;

               string signature = oAuth.GenerateSignature(url,
             consumerKey, consumerSecret, string.Empty, string.Empty,
             "GET", timeStamp, nonce, OAuth.OAuthBase.SignatureTypes.HMACSHA1,
             out normUrl, out normParams);
             
         // Construct the OAuth authenticated REST url
      //   strRequest = normUrl + "?" + normParams + "&" + oAuth.UrlEncode("oauth_signature") + "=" + oAuth.UrlEncode(signature);

               sJSON += "signature:" + signature + "\n";
               sJSON += "oauth_signature:" + oauth_signature + "\n";

              sJSON += "opensocial_owner_id:" + opensocial_owner_id + "\n";
              sJSON += "oauth_consumer_key:" + oauth_consumer_key + "\n";
              sJSON += "oauth_nonce:" + oauth_nonce + "\n";
        
              sJSON += "oauth_signature_method:" + oauth_signature_method + "\n";
              sJSON += "oauth_timestamp:" + oauth_timestamp + "\n";
              sJSON += "oauth_version:" + oauth_version + "\n";
              //sJSON += "opensocial_owner_id:" + opensocial_owner_id + "\n";
             // sJSON += GenerateIFrameSignature(Request, consumerSecret); ;


             /// Label1.Text = s;

             // data.Close();
          //    reader.Close();
              */

            string NID = Request.Params.Get("NID");
            string NT = Request.Params.Get("NT");
            string Age = Request.Params.Get("Age");
            string Gender = Request.Params.Get("Gender");
            string TN = Request.Params.Get("TN");
            string ProfileURL = Request.Params.Get("ProfileURL");

            string DisplayName = Request.Params.Get("DisplayName");
            string City = Request.Params.Get("City");
            string Region = Request.Params.Get("Region");
            string ZipCode = Request.Params.Get("ZipCode");
            string Country = Request.Params.Get("Country");
            string Sign_in = Request.Params.Get("Sign_in");

            // if (NID == opensocial_viewer_id)
            //   {
            sJSON = JCheckUserID(NID, NT, Age, Gender, TN, ProfileURL, DisplayName, City, Region, ZipCode, Country, Sign_in);
            //}
            // else
            //  {
            //  sJSON += "error";
            // }
        }

        string JCheckUserID(string NID, string NT, string Age, string Gender,string TN, string ProfileURL, string DisplayName, string City, string Region, string ZipCode, string Country, string Sign_in)
    {
      




        if (NID == null || NT == null || Sign_in == null)
        {
            return "error";
        }
        XmlDocument dom = new XmlDocument();
        //   string sXML = "";

        XElement newXElem = new XElement("msgs");

        var GetXMLMsgs = dbcrime.CheckUserID(NID, long.Parse(NT), Age, Gender,TN, ProfileURL, DisplayName, City, Region, ZipCode, Country, Sign_in, ref newXElem);

        dom.LoadXml(newXElem.ToString());

        //dom.LoadXml(sXML);
        /*
        JavaScriptSerializer jss = new JavaScriptSerializer();
        */
        JavaScriptSerializer js = new JavaScriptSerializer();

        string jsonText = JsonConvert.SerializeXmlNode(dom);
        //  Newtonsoft.Json.JsonRaw ok;
        //ok.
        return jsonText;
    }

     string JGetTopPlayers3(int Page)
     {

         XmlDocument dom = new XmlDocument();
         string sXML = "";

         if (Page > 1000 || Page < 0)
         {
             return null;
         }
         var RankPages = (from RP in dbcrime.RankPages where RP.PageNumber == Page select RP).Take(1).Single();
         if (RankPages.PageXML != null)
         {
             sXML = RankPages.PageXML.ToString();
         }
         else
         {
             sXML = "<xml>none</xml>";
         }
         dom.LoadXml(sXML);
         /*
         JavaScriptSerializer jss = new JavaScriptSerializer();
         */
         JavaScriptSerializer js = new JavaScriptSerializer();

         string jsonText = JsonConvert.SerializeXmlNode(dom);
         //  Newtonsoft.Json.JsonRaw ok;
         //ok.
         return jsonText;
     }


    }
}

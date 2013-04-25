<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="contact-us.aspx.cs" Inherits="contact_us" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<div id="MediaContainer" >
<br /><br /><br /><br /><br />
<div id="MediaWindow"><div id="reg_form_box" class="large_form">
<table class="uiGrid editor" cellspacing="0" cellpadding="1">
<tbody><tr><td class="label"><label for="firstname">First Name:</label></td>
<td><div class="field_container"><input type="text" class="inputtext" id="firstname" name="firstname" /></div></td>
</tr>
<tr>
<td class="label"><label for="lastname">Last Name:</label></td>
<td><div class="field_container"><input type="text" class="inputtext" id="lastname" name="lastname" /></div></td></tr>
<tr><td class="label"><label for="reg_email__">Your Email please:</label></td>
<td><div class="field_container"><input type="text" class="inputtext" id="reg_email__" name="reg_email__" /></div></td>
</tr>
<tr><td class="label"><label for="reg_email__">Your Message:</label></td>
<td><div class="field_container"><input type="textarea" class="inputtext" id="message" name="message" /></div></td>
</tr>
</tbody>
</table>
</div>
<div class="reg_btn clearfix"><label class="uiButton uiButtonSpecial" for="u188088_1"><input value="Sign Up" onclick="RegistrationBootloader.bootloadAndValidate();" type="submit" id="u188088_1" /></label><span id="async_status" class="async_status" style="display: none"><img class="img" src="http://static.ak.fbcdn.net/rsrc.php/v1/yb/r/GsNJNwuI-UM.gif" alt="" width="16" height="11" /></span></div></div>




</div>



</div>


</asp:Content>


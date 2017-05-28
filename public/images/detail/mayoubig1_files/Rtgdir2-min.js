function CreateDiv(e) { var t = document.createElement("div"); t.id = "madv2014divrtg"; t.style.display = "none";t.appendChild(e);  document.body.appendChild(t) } 
function CreateIFrame(e) { var t = document.createElement("iframe"); t.id = "madv2014iframertg"; t.marginWidth = 0; t.marginHeight = 0; t.frameBorder = 0; t.scrolling = "no"; t.allowTransparency = true; t.width = 0; t.height = 0; t.style.position = "absolute"; t.style.bottom = "0px"; t.style.overflowX="hidden"; t.style.overflowY="hidden"; t.style.width="0px"; t.style.height="0px"; t.style.display = "none"; t.src = e + "&t=4"; CreateDiv(t) } function CreateScript(e) { var t = document.createElement("script"); t.id = "madv2014iframertg"; t.type = "text/javascript"; t.src = e + "&t=1"; CreateDiv(t) } function CreateImage(e) { var t = document.createElement("img"); t.id = "madv2014iframertg"; t.width = 1; t.height = 1; t.src = e + "&t=2"; CreateDiv(t) } function stripHTML(e) { var t = /<\S[^><]*>/g; for (i = 0; i < arguments.length; i++) return e.replace(t, "").substring(0, 600) } function getParm() { var e = ""; if (typeof rtgsettings != "undefined") { for (var t in rtgsettings) { if (rtgsettings.hasOwnProperty(t)) { if (rtgsettings[t] != "" && rtgsettings[t] != "undefined" && rtgsettings[t] != null && rtgsettings[t] != Object) e += "&" + t.toLowerCase() + "=" + encodeURIComponent(stripHTML(rtgsettings[t].toString().toLowerCase())) } } } return e } function TrafficCalculator() { var e = ""; if ("https:" == document.location.protocol) { e = "https://secureaud.solocpm.com/v2/DirectNewRtg.aspx?rnd=" + (new Date).getTime() } else { e = "http://secureaud.solocpm.com/v2/DirectNewRtg.aspx?rnd=" + (new Date).getTime() } if (document.URL && document.URL != "") { var t = getParm().replace("%24pdt_url%24", encodeURIComponent(document.URL)); } else { var t = getParm(); } if (t.indexOf("&layer=image") > 0) { CreateImage(e + t) } else if (t.indexOf("&layer=script") > 0) { CreateScript(e + t) } else { CreateIFrame(e + t) } }
function checkDuplicateScript(scriptname) { var nodes = document.getElementsByTagName("script"); var ids = {}; var totalNodes = nodes.length; for (var i = 0; i < totalNodes; i++) { var currentId = nodes[i].id ? nodes[i].id : "undefined"; if (currentId != "undefined" && currentId == scriptname) { if (isNaN(ids[currentId])) { ids[currentId] = 0 } ids[currentId]++ } } return ids[scriptname] ? ids[scriptname] : 1; }
TrafficCalculator();
//if (checkDuplicateScript("madv2014rtg") == "1") {
//    TrafficCalculator();
//}
//else {
//    if (document.getElementById("madv2014iframertg") == null) {
//        TrafficCalculator();
//    }
//}

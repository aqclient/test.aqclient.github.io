(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["wrapper"],{"009e":function(t,e,n){"use strict";var r=n("233e"),a=n.n(r);a.a},1:function(t,e){},"1a77":function(t,e,n){t.exports=n.p+"img/icon-large.53f00b7d.png"},"1e5e":function(t,e,n){t.exports=n.p+"img/search.8e085e9e.png"},"20d9":function(t,e,n){t.exports=n.p+"img/search_dark.012aee91.png"},"233e":function(t,e,n){},2917:function(t,e,n){"use strict";var r=n("5d04"),a=n.n(r);a.a},"2db4":function(t,e,n){"use strict";var r=n("4038"),a=n.n(r);a.a},"2f50":function(t,e,n){t.exports=n.p+"img/aquaria-menu.1a89fbab.svg"},"39b5":function(t,e,n){t.exports=n.p+"img/MS-01.f169151b.svg"},"3d75":function(t,e,n){},4038:function(t,e,n){},"47b0":function(t,e,n){"use strict";var r=n("d2c9"),a=n.n(r);a.a},"4b2b":function(t,e,n){},"50f1":function(t,e,n){"use strict";n.r(e),n.d(e,"hidePanel",(function(){return r})),n.d(e,"hidePanels",(function(){return a}));n("4160"),n("159b");function r(t,e){document.querySelector("#"+t).style.display="none",document.querySelector("#"+e).className="tab inactive"}function a(){document.querySelectorAll("div.dimmer").forEach((function(t){return t.remove()})),this.hidePanel("vis","Structures"),this.hidePanel("featurelist","Features"),document.querySelector("#Structures").className="tab",document.querySelector("#Features").className="tab"}},"5d04":function(t,e,n){},"5f14":function(t,e,n){"use strict";var r=n("d0b0"),a=n.n(r);a.a},"64e6":function(t,e,n){"use strict";var r=n("910e"),a=n.n(r);a.a},7829:function(t,e,n){},"79cf":function(t,e,n){},"7c9d":function(t,e,n){"use strict";n.r(e),n.d(e,"RenderMap",(function(){return i})),n.d(e,"updateCluster",(function(){return s})),n.d(e,"drawClusterContainer",(function(){return o})),n.d(e,"drawCluster",(function(){return l})),n.d(e,"drawResidues",(function(){return c})),n.d(e,"setConservation",(function(){return u}));n("4160"),n("159b");var r=n("5698"),a=n.n(r);function i(t,e){this.width=document.getElementById("structureviewer").offsetWidth/1.2-window.AQUARIA.margin.right-window.AQUARIA.margin.left,this.height=40-window.AQUARIA.margin.top-window.AQUARIA.margin.bottom+35;var n=window.AQUARIA.showMatchingStructures.sequence.length;this.xScale=a.a.scale.linear().domain([1,n]).range([1,this.width]),this.clustSize=0,this.rank=e,this.cluster=t;var r="#selectedCluster",i=this.drawClusterContainer(t,e,r);"undefined"!==typeof i&&this.drawCluster(t,e)}function s(t){var e=this;this.cluster=t,this.clustSize=t.cluster_size;var n=this.cluster.pdb_id.toLowerCase()+"_"+this.rank;"undefined"!==typeof this.nusvg&&this.nusvg.select("g#structure_"+n+" text").text((function(){return e.clustSize}))}function o(t,e,n){if(0!==t.secondary_structure.length&&0!==t.secondary_structure[0].length){var r=this.xScale(t.secondary_structure[0][0].start),i=this.xScale(t.secondary_structure[0][t.secondary_structure[0].length-1].end),s=t.pdb_id.toLowerCase()+"_"+e;this.clustSize=t.cluster_size;var o=0;this.clustSize>99&&(o=8),this.clustSize>999&&(o=18),this.clustSize<10&&(o=-6);var l=a.a.select(n).append("div").attr("id","out_"+s).attr("class","coverage_map_container");return this.nusvg=l.append("div").attr("id","c_"+s).attr("class","coveragemap").append("svg").attr("width","100vw").attr("height",this.height+30).attr("viewBox","0 0 "+(this.width-5)+" "+(this.height+30)).attr("preserveAspectRatio","none"),this.nusvg.append("rect").attr("width","100%").attr("height",1).attr("transform","translate(0,33)").attr("class","insertion"),this.nusvg.append("g").attr("id","structure_"+s).attr("transform","translate(1,20)"),this.nusvg.select("g#structure_"+s).append("g").attr("class","cluster").attr("height",26),this.nusvg.select("g#structure_"+s+" g.cluster").append("rect").attr("class","cluster").attr("width",i-r+3).attr("height",26).attr("rx",6),this.nusvg.select("g#structure_"+s).append("text").attr("text-anchor","end").attr("fill","white").attr("x",i-r+24+o).attr("y",13).attr("dx",-3).attr("dy",".35em"),l}console.log("ClusterRenderer.drawClusterContainer error: cannot draw cluster as it has no secondary structure: ",t)}function l(t,e){var n=this;t.secondary_structure[0].forEach((function(r,a){r.start=+r.start,r.end=+r.end,n.drawResidues(t,e,r)})),this.setConservation(t)}function c(t,e,n){for(var r=t.secondary_structure[0][0].start,a=0,i=n.start;i<=n.end;i++){var s=t.conservationArray[0][i];if(i===n.end||s!==t.conservationArray[0][i+1]){var o=this.nusvg.select("g#structure_"+t.pdb_id.toLowerCase()+"_"+e+" g.cluster").append("g").attr("class","residue "+n.type).attr("id","r_"+e+"_"+i).attr("transform","translate("+(i-r-a)*window.AQUARIA.srw+",8)").append("rect").attr("class",s).attr("width",window.AQUARIA.srw*(a+1)).attr("height",10);"SHEET"===n.type&&(o.attr("height",14).attr("transform","translate(0,-2)"),i===n.end&&(o.attr("width",window.AQUARIA.srw*a),this.nusvg.select("g.residue#r_"+e+"_"+i).append("svg:polygon").attr("class",s).attr("transform","translate("+window.AQUARIA.srw*a+",0)").attr("points",window.AQUARIA.srw+",0 0,-6 0,16 "+window.AQUARIA.srw+",10"))),"HELIX"===n.type&&this.nusvg.select("g.residue#r_"+e+"_"+i+" rect").attr("height",16).attr("class",s).attr("transform","translate(0,-3)"),a=0}else a++}}function u(t){for(var e=[],n=0;n<t.seq_end.length-1;n++){var r=[];r[0]=t.seq_end[n]+1,r[1]=t.seq_start[n+1]-1,e.push(r)}}},"7eb5":function(t,e,n){},"8f89":function(t,e,n){"use strict";var r=n("7829"),a=n.n(r);a.a},"910e":function(t,e,n){},"9db5":function(t,e,n){t.exports=n.p+"img/FT-01.e4a6c439.svg"},a392:function(t,e,n){"use strict";var r=n("4b2b"),a=n.n(r);a.a},ae0b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrapper"}},[n("Content"),n("Footer"),n("BadBrowser")],1)},a=[],i=(n("57aa"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"content"}},[n("Controls"),n("Center",{attrs:{id:"center"}})],1)}),s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"controls"}},[n("Logo"),n("Title3D",{staticClass:"item title",attrs:{id:"title"}})],1)},l=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"logo-intro"}},[r("div",{attrs:{id:"logo"}},["mobile"===t.$mq||"tablet"===t.$mq||"laptop"===t.$mq?r("img",{attrs:{src:n("1a77"),alt:"Aquaria Logo"},on:{click:function(e){return t.showAbout()}}}):t._e(),t._m(0)])])},u=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"wait"}},[r("img",{attrs:{id:"gif",src:n("6679"),alt:"Loading",title:"Loading data..."}})])}],d=n("4360"),p=n("1157"),m=n.n(p),h={name:"Logo",methods:{showAbout:function(){0===document.getElementsByClassName("dimmer").length?(m()("body").append('<div class="dimmer"></div>'),document.querySelector("#xr-button").click(),m()("div.dimmer").on("click",(function(){m()("div#about_overlay, div#help_overlay").hide(),m()("div.dimmer").remove()}))):m()("div.dimmer").remove(),m()("div#about_overlay").slideToggle("slow")},showExplanations:function(){m()("div.dimmer").remove(),m()("div#about_overlay, div#help_overlay").hide(),m()("div.container").first().hide(),m()("div.outer_container").first().append("<div id='tree_helper' class='chardinjs-helper-layer chardinjs-relative-position'></div>"),m()("#tree_helper").html('<img src="/images/tree-overlay.png" />'),m()("body").chardinJs("start")}},computed:{data:function(){return d["a"].state.message}}},f=h,v=(n("a392"),n("2877")),g=Object(v["a"])(f,c,u,!1,null,"b7646854",null),w=g.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"explanation",attrs:{id:"structureviewerexplanation"}},[n("div",{attrs:{id:"titlebar"}},[n("span",{staticClass:"titlepanel",attrs:{id:"uniprotpanel"},on:{click:t.showUniprotPanel}},[t._v(" "+t._s(t.organism_name)+" "),n("strong",[t._v(t._s(t.primary_accession))])]),n("span",{staticClass:"titlepanel",attrs:{id:"threeDexplanation"},on:{click:t.showthreeDexplanation}},[t._v(t._s(t.text)+" ")]),n("span",{staticClass:"titlepanel",attrs:{id:"pdbpanel"},on:{click:t.showPdbPanel}},[t._v(t._s(t.pdb))])])]),n("div",{attrs:{id:"contentPanel"}},[n("div",{staticClass:"contents",attrs:{id:"panel1"}},[n("SearchPanel",{attrs:{id:"searchByName"}}),n("AboutUniprot",{attrs:{id:"uniprot"}})],1),n("AboutPDB",{staticClass:"contents",attrs:{id:"gallery"}}),n("Explanation",{staticClass:"contents",attrs:{id:"explanation"}})],1)])},b=[],y=(n("4160"),n("c975"),n("498a"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"searchByName"}},[n("p",[t._v("Search proteins")]),n("form",{attrs:{id:"myform",name:"myform",ACTION:"#",method:"post"}},[n("img",{attrs:{src:t.search}}),t._m(0),t._m(1),n("p")])])}),A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{attrs:{id:"input2"}},[n("input",{staticClass:"search",attrs:{type:"text",id:"organism_syn_input",name:"organism_syn_input",placeholder:"Organism",autocomplete:"on","data-intro":"Enter an organism name (human is default).","data-position":"right"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{attrs:{id:"input1"}},[n("input",{staticClass:"search",attrs:{type:"text",id:"protein_syn_input",name:"protein_syn_input",placeholder:"Protein name/ID",autocomplete:"on","data-intro":"START HERE - specify a protein name (or UniProt identifier, or PDB ID), then press 'Enter'.","data-position":"right"}})])}],S={name:"SearchPanel",data:function(){return{search:n("20d9")}},methods:{fillin:function(t){document.getElementById("protein_syn_input").value=t,setTimeout((function(){window.location.href="/P04637"}),300)}}},x=S,q=(n("e8c9"),Object(v["a"])(x,y,A,!1,null,null,null)),C=q.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"about","data-intro":"UniProt summary of the specified protein's function.","data-position":"right"}},[t._m(0),n("div",{attrs:{id:"psyns"}},[n("p",[t._v("(example: "),n("a",{attrs:{href:"#"},on:{click:function(e){return t.fillin("p53")}}},[t._v("p53")]),t._v(" or "),n("a",{attrs:{href:"#"},on:{click:function(e){return t.fillin("P04637")}}},[t._v("P04637")]),t._v(")")])]),t._m(1),t._m(2),n("div",{attrs:{id:"uniProtDesc"}})])},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("About "),n("span",{staticClass:"explanation"},[t._v(" Uniprot ID")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"none"},attrs:{id:"gsyns"}},[n("p",[t._v("Genes: ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"osyns"}},[n("p")])}],I={name:"AboutUniprot"},P=I,R=(n("009e"),Object(v["a"])(P,k,E,!1,null,"ff9bd706",null)),D=R.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"gallery"}},[n("div",{attrs:{id:"description","data-intro":"PDB summary for the shown structure.","data-position":"bottom"}},[n("span",{staticClass:"content",attrs:{id:"description","data-intro":"PDB summary for the shown structure.","data-position":"bottom"}},[n("span",{staticStyle:{display:"none"},attrs:{id:"biounitDisplay"}},[n("span",{staticStyle:{display:"inline-block"},attrs:{id:"biounitLeft",title:"Navigate to other assemblies"}},[t._v("<")]),t._v(" "),n("span",{staticStyle:{display:"inline-block"},attrs:{id:"biounitType"}},[t._v("biounit")]),t._v(" "),n("span",{staticStyle:{display:"inline-block"},attrs:{id:"biounitCount"}},[t._v("x/x")]),t._v(" "),n("span",{staticStyle:{display:"inline-block"},attrs:{id:"biounitRight",title:"Navigate to other assemblies"}},[t._v(">")]),n("a",{attrs:{id:"helpBiounit",href:"https://pdb101.rcsb.org/learn/guide-to-understanding-pdb-data/biological-assemblies#Anchor-BioUnit",target:"_blank",title:"Go to PDB to view explanation of assembly"}},[n("span",{staticClass:"help roundButton"})])]),n("span",{staticStyle:{display:"none"},attrs:{id:"aboutPDBHider","data-intro":"PubMed Information about PDB structure","data-position":"left"}},[n("p",{attrs:{id:"classification"}},[t._v("Classification unavailable")]),n("h4",{attrs:{id:"reference_title"}},[t._v("Title unavailable")]),n("p",{attrs:{id:"reference_link"}},[n("a",{attrs:{href:"#"}},[t._v("PubMed Link unavailable")])]),n("p",{attrs:{id:"molecule",title:"View this structure in Aquaria","data-intro":"Information about currently focused PDB chain.","data-position":"left"}},[n("strong",[t._v("Molecule: ")]),n("span",{staticClass:"text"},[t._v("unavailable")])])]),n("p",{attrs:{id:"organism"}},[n("strong",[t._v("Organism: ")]),n("span",{staticClass:"text"},[t._v("unavailable")])]),n("p",{attrs:{id:"small_molecules"}},[n("strong",[t._v("Small molecules: ")]),n("span",{staticClass:"text"},[t._v("unavailable")])]),n("p",{attrs:{id:"method"}},[n("strong",[t._v("Method: ")]),n("span",{staticClass:"text"},[t._v("unavailable")])]),n("p",{attrs:{id:"resolution"}},[n("strong",[t._v("Resolution: ")]),n("span",{staticClass:"text"},[t._v("unavailable")])]),n("p",{attrs:{id:"pdb"}},[n("strong",[t._v("Protein Data Bank: ")]),n("span",{staticClass:"text"},[t._v("unavailable")])])])])])}],U={name:"AboutPDB"},M=U,N=(n("e1a6"),Object(v["a"])(M,B,F,!1,null,"e3aa90d4",null)),Q=N.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("What you see in the 3D viewer is the experimentally-determined structure of "+t._s(t.pdbName)+" from "),n("a",{attrs:{href:"http://www.rcsb.org/pdb/explore.do?structureId={{}}",target:"_blank"}},[t._v(" PDB entry "+t._s(t.pdbId))]),t._v("chain "+t._s(t.chainId)+". ")]),n("p",[t._v(" The full-length sequence of the protein you specified ("+t._s(t.uniprotName)+") has been aligned onto the sequence used to determine this PDB structure.")]),n("p",[t._v(" Overall, the two sequences align with "+t._s(t.score)+"% identity; any amino acid substitutions are indicated using dark coloring (see legend).")]),n("p",{staticClass:"quality"},[t._v(" This alignment has an HHblits E-value of "+t._s(t.evalueString)+" × "),n("nobr",[t._v("10"),n("sup",[t._v(t._s(t.power))])]),t._v(", which is considered to be "+t._s(t.quality)+". Based on cross-validation, the likelihood that your specified protein ("+t._s(t.uniprotName)+") adopts a structure similar to that shown is estimated to be "+t._s(t.precisiontxt)+"%.")],1),n("p",[t._v("Note that the structure shown is taken directly from the PDB; it has not been derived by ab-initio or comparative modeling.")])])},L=[],$=(n("d3b7"),n("ac1f"),n("25f0"),n("1276"),n("5698")),O=n.n($),j={name:"Explanation",data:function(){return{pdbName:null,pdbId:null,chainId:null,score:null,qualClass:null,evalueString:null,quality:null,uniprotName:null,precisiontxt:null,power:null}},beforeMount:function(){var t=this;window.AQUARIA.explainTitle=function(e,n,r,a,i,s,o){var l;t.pdbName=r,t.pdbId=a,t.chainId=i,t.score=s,t.uniprotName=n,l=-Math.log(o)/Math.LN10;var c=100*t.BioScience_PlantDisease_Weibull_model(l);c=Math.round(c),t.evalueString=o.toString().split("e")[0],t.power=o.toString().split("e")[1],t.precisiontxt=0===o&&1===c?"close to 100":"≥ "+c,o>1e-71?(t.quality="in the twilight zone",t.qualClass="twilight"):(t.quality="high quality",t.qualClass="high")}},methods:{BioScience_PlantDisease_Weibull_model:function(t){var e;e=0;var n=-2.903935098912483,r=7.984666145922813,a=.4478023883120025;return e=1-Math.exp(-1*Math.pow((t-n)/r,a)),e},showBubble:function(t){0===document.getElementsByClassName("dimmer").length&&window.AQUARIA.overlay(),m()("span#help3D.roundButton").css("background-position","0 -21px"),document.querySelector("div.dimmer").addEventListener("click",(function(){m()("div.popup, div.dimmer").fadeOut().remove(),m()("span#help3D.roundButton").css("background-position","0 0")}));var e="<div class='balloon'><h3>3D View Explained<span class='x'>&nbsp;</span></h3>";e=e+t+"</div>",O.a.select("body").append("div").attr("class","popup top").html(e);var n=m()("#help3D").offset(),r=parseInt(n.left-230),a=parseInt(n.top+30);m()("div.popup").css({left:r+"px",top:a+"px"}).draggable().fadeIn(600),m()("span.x").click((function(){m()("div.popup, div.dimmer").fadeOut().remove(),m()("span#help3D.roundButton").css("background-position","0 0")}))}}},z=j,H=Object(v["a"])(z,T,L,!1,null,null,null),V=H.exports,W={name:"Title3D",components:{AboutPDB:Q,SearchPanel:C,AboutUniprot:D,Explanation:V},data:function(){return{organism_name:null,primary_accession:null,text:null,pdb:null,search:n("1e5e")}},beforeMount:function(){var t=this;window.AQUARIA.update3DTitle=function(e,n,r,a,i){if(r&&a){var s=a;if(-1!==s.indexOf("(")&&(s=a.substring(0,a.indexOf("(")).trim()),window.AQUARIA.short_moleculeName=s,e&&n&&i){t.organism_name=window.AQUARIA.organismName,t.primary_accession=window.AQUARIA.Gene,t.text="aligned onto",t.pdb=n+"-"+r;var o=window.AQUARIA.currentMember.E_value;window.AQUARIA.explainTitle(e,window.AQUARIA.preferred_protein_name,s,n,r,i,o)}else t.organism_name=window.AQUARIA.organismName,t.primary_accession=s,t.text="structure from",t.pdb=n+"-"+r}else m()("#accession_link").text(window.AQUARIA.preferred_protein_name)}},methods:{resetSelection:function(){document.querySelectorAll("#titlebar span").forEach((function(t){t.className="titlepanel"})),document.querySelectorAll(".contents").forEach((function(t){t.style.display="none"}))},showUniprotPanel:function(t){0===document.getElementsByClassName("dimmer").length&&window.AQUARIA.overlay(),this.resetSelection(),t.target.className="titlepanel active",document.querySelector("#contentPanel").style.display="block",document.querySelector("#panel1").style.display="block",document.querySelector("#uniprot").style.display="block",document.querySelector("#searchByName").style.display="block",document.querySelector("div.dimmer").addEventListener("click",(function(){document.querySelectorAll("#titlebar span").forEach((function(t){t.className="titlepanel"})),document.querySelector("#uniprot").style.display="none",document.querySelector("#contentPanel").style.display="none",document.querySelector("#structureviewerexplanation").style.display="grid",document.querySelector("div.dimmer").remove()}))},showPdbPanel:function(t){0===document.getElementsByClassName("dimmer").length&&window.AQUARIA.overlay(),this.resetSelection(),t.target.className="titlepanel active",document.querySelector("#gallery").style.display="block",document.querySelector("#contentPanel").style.display="block",document.querySelector("div.dimmer").addEventListener("click",(function(){document.querySelectorAll("#titlebar span").forEach((function(t){t.className="titlepanel"})),document.querySelector("#contentPanel").style.display="none",document.querySelector("div.dimmer").remove()}))},showthreeDexplanation:function(t){0===document.getElementsByClassName("dimmer").length&&window.AQUARIA.overlay(),this.resetSelection(),t.target.className="titlepanel active",document.querySelector("#explanation").style.display="block",document.querySelector("#contentPanel").style.display="block",document.querySelector("div.dimmer").addEventListener("click",(function(){document.querySelectorAll("#titlebar span").forEach((function(t){t.className="titlepanel"})),document.querySelector("#contentPanel").style.display="none",document.querySelector("div.dimmer").remove()}))}},mounted:function(){this.resetSelection()},updated:function(){var t;t=document.querySelector("#organism_syn_input"),t.placeholder=window.AQUARIA.organismName,t.setAttribute("size",t.getAttribute("placeholder").length),t=document.querySelector("#protein_syn_input"),t.placeholder=window.AQUARIA.preferred_protein_name,t.setAttribute("size",t.getAttribute("placeholder").length)}},J=W,G=(n("ddb03"),Object(v["a"])(J,_,b,!1,null,null,null)),X=G.exports,Y={name:"Controls",components:{Logo:w,Title3D:X}},Z=Y,K=(n("d4d5"),Object(v["a"])(Z,o,l,!1,null,"ce8ae598",null)),tt=K.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"item",attrs:{id:"menu-btn"}},[n("a",{attrs:{href:"#Menu"}},[n("img",{attrs:{src:t.menu}})])]),n("Menu"),n("StructureViewer",{attrs:{id:"structureviewer"}}),n("AboutAquaria"),n("Tabs"),n("CoverageMap")],1)},nt=[],rt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{id:"map"}},[n("div",{attrs:{id:"selectedCluster"}}),n("div",{attrs:{id:"selectedFeature"}})])}],it={name:"CoverageMap"},st=it,ot=(n("bf11"),Object(v["a"])(st,rt,at,!1,null,"c2c57b3a",null)),lt=ot.exports,ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"aquariaWarning",attrs:{id:"updateJava3D"}},[n("p",[n("strong",[t._v("Aquaria needs to update your Java3D.")])]),n("form",{attrs:{action:"/downloads/AquariaSetupMac.dmg"}},[n("p",[t._v("1. "),n("button",{attrs:{id:"myButton",type:"submit"}},[t._v("Download Aquaria Setup")])])]),n("p",[t._v("2. After downloading, run AquariaSetupMac.dmg from your Downloads folder.")]),n("p",[t._v("3. Restart your browser once the setup is finished.")]),n("br"),n("p",[t._v("For more information see "),n("a",{attrs:{href:"https://docs.google.com/document/d/1waNOvw442Bwncx_FlMJAATH35aJxXpxu0iRcrZt8hrQ/pub",target:"_blank"}},[t._v("Aquaria help")]),t._v(".")])]),n("span",{staticClass:"threedcontent resizable",attrs:{id:"threeD"}},[n("span",{attrs:{id:"threeDSpan"}}),n("iframe",{attrs:{src:"/html/waiting.html",frameBorder:"0",name:"waitingFrame",id:"waitingFrame",scrolling:"no",allowtransparency:"true"}},[n("p",[t._v("Your browser does not support iframes.")])]),n("iframe",{staticStyle:{bottom:"20px",left:"20px"},attrs:{src:"/html/selectionText.html",frameBorder:"0",name:"selectionText",id:"selectionText",scrolling:"no",allowtransparency:"true"}},[n("p",[t._v("Your browser does not support iframes.")])])])])}],dt={name:"StructureViewer",mounted:function(){function t(){var t=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"];if(!navigator.platform)return!1;while(t.length)if(navigator.platform===t.pop()||screen.width>=300&&screen.width<=600)return!0}var e=t();e&&(window.outerHeight-window.innerHeight>=80?(m()("#structureviewer").css({height:"88vh"}),window.scrollTo(0,0)):(m()("#structureviewer").css({height:"103vh"}),window.scrollTo(0,0)),window.addEventListener("resize",(function(){window.outerHeight-window.innerHeight>=80?(m()("#structureviewer").css({height:"88vh"}),window.scrollTo(0,0)):(m()("#structureviewer").css({height:"103vh"}),window.scrollTo(0,0))})))}},pt=dt,mt=(n("2db4"),Object(v["a"])(pt,ct,ut,!1,null,"4a932558",null)),ht=mt.exports,ft=n("1ff0"),vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icons"},[n("div",{staticClass:"tabs"},[n("div",{staticClass:"tab",attrs:{id:"Structures"},on:{click:t.showMatches}},[n("a",{attrs:{href:"#Structures"}},[t._v("Matching Structures "),n("span",{staticClass:"icon"},[n("img",{attrs:{src:t.MS}})])])]),n("div",{staticClass:"tab",attrs:{id:"Features"},on:{click:t.showFeatures}},[n("a",{attrs:{href:"#Features"}},[n("span",{staticClass:"icon"},[n("img",{attrs:{src:t.FT}})]),t._v(" Features")])])]),n("MatchingStructures"),n("FeatureList")],1)},gt=[],wt=(n("caad"),n("2532"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),_t=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{id:"vis"}},[n("div",{attrs:{id:"allclusters","data-intro":"Visual summary of all structures in PDB matching the specified protein, grouped by region of match.","data-position":"left"}})])}],bt={name:"MatchingStructures",data:function(){return{clusters:window.AQUARIA.structures2match.clusters}}},yt=bt,At=(n("5f14"),Object(v["a"])(yt,wt,_t,!1,null,null,null)),St=At.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"featurelist"}})},qt=[],Ct={name:"FeatureList",methods:{}},kt=Ct,Et=(n("b165"),Object(v["a"])(kt,xt,qt,!1,null,null,null)),It=Et.exports,Pt=n("50f1"),Rt={name:"Tabs",components:{MatchingStructures:St,FeatureList:It},data:function(){return{MS:n("39b5"),FT:n("9db5")}},mounted:function(){window.location.hash.includes("Structures")&&this.showMatches(),window.location.hash.includes("Features")&&this.showFeatures()},methods:{showPanel:function(t,e){document.querySelector("#"+t).style.display="flex",document.querySelectorAll(".tab").className="tab inactive",document.querySelector("#"+e).className="tab active"},showMatches:function(){var t=this;t.showPanel("vis","Structures"),Pt["hidePanel"]("featurelist","Features"),0===document.getElementsByClassName("dimmer").length&&window.AQUARIA.overlay(),document.querySelector("div.dimmer").style.zIndex="0",document.querySelector("div.dimmer").addEventListener("click",(function(){document.querySelector("#center > div.icons").style.bottom="76px",Pt["hidePanels"]()}))},showFeatures:function(){var t=this;if(window.AQUARIA.panel3d){var e=window.AQUARIA.panel3d.embededJolecule.controller;e.clearSelectedResidues()}Pt["hidePanel"]("vis","Structures"),t.showPanel("featurelist","Features"),0===document.getElementsByClassName("dimmer").length&&window.AQUARIA.overlay(),document.querySelector("div.dimmer").style.zIndex="0",document.querySelector("div.dimmer").addEventListener("click",(function(){document.querySelector("#center > div.icons").style.bottom="76px",Pt["hidePanels"]()}))}}},Dt=Rt,Bt=(n("47b0"),Object(v["a"])(Dt,vt,gt,!1,null,null,null)),Ft=Bt.exports,Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel floating",attrs:{id:"Menu"}},[n("a",{staticClass:"close",attrs:{href:"#"}}),t._m(0),t._m(1),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selected=e.target.multiple?n:n[0]},function(e){return t.onChange(e)}]}},[n("option",{attrs:{id:"ribbon",selected:""}},[t._v("Ribbon")]),n("option",{attrs:{id:"sphere"}},[t._v("Sphere")]),n("option",{attrs:{id:"backbone"}},[t._v("Backbone")])])])},Mt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticClass:"lnk",attrs:{id:"print",href:"#"}},[t._v("Print")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticClass:"lnk",attrs:{id:"Sidechains",href:"#Menu"}},[t._v("Sidechains")]),n("a",{staticClass:"lnk",attrs:{id:"Neighbors",href:"#Menu"}},[t._v("Neighbors")]),n("a",{staticClass:"lnk active",attrs:{id:"Ligands",href:"#Menu"}},[t._v("Ligands")]),n("a",{staticClass:"lnk",attrs:{id:"Water",href:"#Menu"}},[t._v("Water")])])}],Nt={name:"Menu",data:function(){return{selected:"Ribbon"}},methods:{onChange:function(t){var e=t.target.value.toLowerCase();document.querySelector("#threeDSpan-inner-menu-"+e).click()}},mounted:function(){var t=function(t){"lnk active"===t.target.className?t.target.className="lnk":t.target.className="lnk active"};document.querySelector("#print").addEventListener("click",(function(t){t.preventDefault(),window.AQUARIA.screenshot()})),document.querySelector("#Sidechains").addEventListener("click",(function(e){e.preventDefault(),t(e),document.querySelector("#threeDSpan-inner > div.jolecule-embed-header.jolecule-embed-toolbar > span:nth-child(6)").click()})),document.querySelector("#Neighbors").addEventListener("click",(function(e){e.preventDefault(),t(e),document.querySelector("#threeDSpan-inner > div.jolecule-embed-header.jolecule-embed-toolbar > span:nth-child(7)").click()})),document.querySelector("#Ligands").addEventListener("click",(function(e){e.preventDefault(),t(e),document.querySelector("#threeDSpan-inner-menu-ligand").click()})),document.querySelector("#Water").addEventListener("click",(function(e){e.preventDefault(),t(e),document.querySelector("#threeDSpan-inner-menu-water").click()}))}},Qt=Nt,Tt=(n("2917"),Object(v["a"])(Qt,Ut,Mt,!1,null,"21af0c07",null)),Lt=Tt.exports,$t={name:"Center",components:{StructureViewer:ht,AboutAquaria:ft["a"],Tabs:Ft,Menu:Lt,CoverageMap:lt},data:function(){return{menu:n("2f50")}},mounted:function(){var t=window.innerWidth-75;m()("#structurematches").css({width:t}),m()("#threeDSpan-inner-sequence-widget-inner canvas").on("click",(function(){m()("#structurematches").show()}))}},Ot=$t,jt=(n("64e6"),Object(v["a"])(Ot,et,nt,!1,null,null,null)),zt=jt.exports,Ht={name:"Content",components:{Controls:tt,Center:zt}},Vt=Ht,Wt=(n("b318"),Object(v["a"])(Vt,i,s,!1,null,null,null)),Jt=Wt.exports,Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}})},Xt=[],Yt={name:"Footer"},Zt=Yt,Kt=Object(v["a"])(Zt,Gt,Xt,!1,null,null,null),te=Kt.exports,ee=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ne=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bad_browser"}},[n("p",{attrs:{id:"starter"}},[n("img",{staticStyle:{display:"none"},attrs:{src:"/images/logo-large.png",width:"605",height:"167",alt:"Aquaria"}})]),n("h2",{staticStyle:{color:"crimson",display:"none"}},[t._v("Sorry, but Aquaria will not work with your browser!")])])}],re={name:"BadBrowser"},ae=re,ie=Object(v["a"])(ae,ee,ne,!1,null,null,null),se=ie.exports,oe={name:"Wrapper",components:{Content:Jt,BadBrowser:se,Footer:te},mounted:function(){document.querySelector("#header")&&document.querySelector("#header").remove(),setTimeout((function(){document.querySelector(".matrixLoading")&&(document.querySelector(".matrixLoading").style.visibility="hidden",document.querySelector(".matrixLoading").style.display="none")}),1500)}},le=oe,ce=(n("8f89"),Object(v["a"])(le,r,a,!1,null,null,null));e["default"]=ce.exports},b165:function(t,e,n){"use strict";var r=n("e2e4"),a=n.n(r);a.a},b318:function(t,e,n){"use strict";var r=n("d1f0"),a=n.n(r);a.a},bf11:function(t,e,n){"use strict";var r=n("7eb5"),a=n.n(r);a.a},d0b0:function(t,e,n){},d1f0:function(t,e,n){},d2c9:function(t,e,n){},d4d5:function(t,e,n){"use strict";var r=n("3d75"),a=n.n(r);a.a},d9a5:function(t,e,n){},ddb03:function(t,e,n){"use strict";var r=n("f845"),a=n.n(r);a.a},e1a6:function(t,e,n){"use strict";var r=n("79cf"),a=n.n(r);a.a},e2e4:function(t,e,n){},e8c9:function(t,e,n){"use strict";var r=n("d9a5"),a=n.n(r);a.a},f845:function(t,e,n){},f99f:function(t,e,n){"use strict";n.r(e),n.d(e,"createFeatureMap",(function(){return u})),n.d(e,"createSVGforFeature",(function(){return d})),n.d(e,"drawTrack",(function(){return p})),n.d(e,"drawFeatures",(function(){return m})),n.d(e,"createMouseOverCallback",(function(){return h})),n.d(e,"mouseoverFeature",(function(){return v})),n.d(e,"mouseoutFeature",(function(){return g})),n.d(e,"moveTheDiv",(function(){return w})),n.d(e,"removeCurrentAnnotationFrom3DViewer",(function(){return _}));n("cb29"),n("4160"),n("caad"),n("d3b7"),n("ac1f"),n("2532"),n("1276"),n("159b");var r,a,i=n("5698"),s=n.n(i),o=n("1157"),l=n.n(o),c=n("50f1");function u(t){document.querySelectorAll("#selectedCluster [id*='r_'] rect").forEach((function(t){t.style.fill="#a5a5a5",t.style.stroke="#a5a5a5"})),document.querySelectorAll("#selectedCluster [id*='r_'] polygon").forEach((function(t){t.style.fill="#a5a5a5",t.style.stroke="#a5a5a5"})),this.width=document.getElementById("structureviewer").offsetWidth/1.2-window.AQUARIA.margin.right-window.AQUARIA.margin.left,this.height=40-window.AQUARIA.margin.top-window.AQUARIA.margin.bottom+35,this.datum=t;var e=s.a.select("#selectedFeature").append("div").attr("id","outerFeatureMap");this.drawTrack(this.datum,this.createSVGforFeature(e,"100vw",this.height+30,this.width+5)),s.a.select("#outerFeatureMap > svg").attr("class","loadedFeature")}function d(t,e,n,r){return this.nusvg=t.append("svg").attr("width",e).attr("height",n).attr("viewBox","0 0 "+r+" "+n).attr("preserveAspectRatio","none"),this.nusvg}function p(t,e){var n=this,r=t.Tracks;this.nusvg=e;var a=window.AQUARIA;for(var i in this.nusvg.on("click",(function(){if(s.a.select(this).attr("class").includes("loaded"))s.a.select("svg.loaded").classed("loaded",!1),a.panel3d.blankApplet(!0,"Removing feature..."),a.panel3d.blankApplet(!1),"function"===typeof a.onFeatureChange&&a.onFeatureChange(null,0),n.removeCurrentAnnotationFrom3DViewer(),document.querySelector("#outerFeatureMap").remove(),a.showMatchingStructures.showMap(a.showMatchingStructures.cluster),c["hidePanels"]();else{document.querySelector(".featureHeader.actived").click(),document.querySelector("#outerFeatureMap")&&document.querySelector("#outerFeatureMap").remove();var e=s.a.select(this).attr("id").split("_")[2];a.panel3d.blankApplet(!0,"Loading feature..."),a.panel3d.blankApplet(!1),"Added Features"!==t.Server&&(a.addedFeature=!1),a.passFeature(t,e,this),"function"===typeof a.onFeatureChange&&a.onFeatureChange(t,e),s.a.selectAll("svg.loaded rect.feature").attr("fill","#a4abdf"),s.a.select("svg.loaded").classed("loaded",!1),s.a.select(this).attr("class","loaded"),n.createFeatureMap(t),c["hidePanels"]()}})),this.nusvg.append("rect").attr("width",this.width+a.margin.left).attr("height",25).attr("class","bg").attr("fill","none"),r)this.nusg=this.nusvg.append("g").attr("transform","translate(0 ,0)"),this.nusg.append("rect").attr("width",this.width).attr("height",1).attr("transform","translate(0,13)").attr("class","insertion");for(var o in r[i])this.drawFeatures(o,i,r);s.a.selectAll("#selectedFeature rect.feature").attr("fill",(function(){return s.a.select(this).attr("color")}))}function m(t,e,n){this.nusg.append("rect").attr("width",(function(){return(n[e][t].size+1)*window.AQUARIA.srw>2?(n[e][t].size+1)*window.AQUARIA.srw:2})).attr("height",14).attr("id","r_"+e+"_"+t).attr("transform","translate("+n[e][t].start*(window.AQUARIA.srw-.0085)+",6)").attr("color",n[e][t].color).attr("fill","#a4abdf").attr("class","feature").on("mouseover",h(n[e][t])).on("mouseout",(function(){var t=s.a.select(this).attr("id");return s.a.select(this).call(g,t)}))}function h(t){return function(){var e=s.a.select(this).attr("id");s.a.select(this).call(v,t,e)}}function f(t,e){var n="";if(t.urls.length>0){n="<p>";for(var r=0;r<t.urls.length;r++)n+="<a href='"+t.urls[r].href+"' target='_blank'>"+t.urls[r].text+"</a><br>";n+="</p>"}l()("div.popup").remove();var i="<div class='balloon' id='balloon'><span class='x'>&nbsp;</span><p>"+t.label+" (";i=t.start===t.end?i+"Residue "+t.start:i+"Residues "+t.start+"-"+t.end,i=i+")<br/>"+t.desc+"</p>"+n+"</div>",s.a.select("body").append("div").attr("class","popup").html(i);var o=l()("div.popup").innerHeight(),c=l()("#"+e).offset(),u=l()("#"+e).attr("width"),d=parseInt(c.left+u/2-160),p=parseInt(c.top-o);l()("div.popup").css({left:d+"px",top:p+"px",width:"470px"}).fadeIn(600),l()("span.x").on("click",(function(){l()("div.popup").fadeOut()})),l()("div.popup").on("hover",(function(){clearTimeout(a)}),(function(){a=setTimeout((function(){l()("div.popup").fadeOut()}),500)}))}function v(t,e,n){r=setTimeout((function(){f(e,n)}),500),s.a.select("#"+n).attr("stroke-width","2px").attr("stroke","white")}function g(t,e){clearTimeout(r),s.a.select("#"+e).attr("stroke-width","0px"),a=setTimeout((function(){w().then((function(){l()("div.popup").fadeOut()})).catch((function(t){console.log(t)}))}),500)}function w(){return new Promise((function(t,e){var n=document.getElementById("superFamCharts_0_go");document.getElementById("superFamCharts").append(n)}))}function _(){var t=window.AQUARIA.currentAnnotationsIn3DViewer;if(void 0!==t){for(var e in t)window.AQUARIA.panel3d.removeAnnotation(t[e].id,t[e].annotationName);t.length=0}}}}]);
//# sourceMappingURL=wrapper.7c278748.js.map
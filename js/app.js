(() => {
const db=window.FIRS_DATA, entries=[];let nextId=1;
const $=(s,r=document)=>r.querySelector(s);
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function message(text,type="error"){const el=$("#message");el.textContent=text;el.className="message "+type;el.hidden=false;window.scrollTo({top:0,behavior:"smooth"});}
function clearMessage(){const el=$("#message");el.hidden=true;el.textContent="";}
function addEquipment(){entries.push({id:nextId++,tag:"",part:"",issue:"",reportType:"Finding",replacementStatus:"",oldSerial:"",newSerial:"",remark:""});render();}
function render(){
const host=$("#equipmentContainer"),tpl=$("#equipmentTemplate");host.innerHTML="";
entries.forEach((e,i)=>{
const f=tpl.content.cloneNode(true),card=$(".equipment",f),tag=$(".tag",f),list=$(".tag-list",f);
$(".equipment-index",f).textContent=String(i+1).padStart(2,"0");
$(".remove",f).disabled=entries.length===1;$(".remove",f).onclick=()=>{entries.splice(entries.findIndex(x=>x.id===e.id),1);render();};
const eq=db.equipment.find(x=>x.tag===e.tag),area=$("#area").value;
$(".equipment-type",f).textContent=eq?eq.type:"Select a tag number";$(".description",f).textContent=eq?eq.description:"";
tag.setAttribute("list","tags-"+e.id);tag.value=e.tag;list.id="tags-"+e.id;
list.innerHTML=db.equipment.filter(x=>x.area===area).map(x=>`<option value="${esc(x.tag)}">${esc(x.type)}</option>`).join("");
tag.onchange=()=>{e.tag=tag.value.trim();e.part="";e.issue="";render();};
const parts=eq?[...new Set(db.issues.filter(x=>x.type===eq.type).map(x=>x.part))]:[];
const ps=$(".part",f),is=$(".issue",f);ps.disabled=!eq;ps.innerHTML='<option value="">Select part</option>'+parts.map(x=>`<option ${x===e.part?"selected":""}>${esc(x)}</option>`).join("");
ps.onchange=()=>{e.part=ps.value;e.issue="";render();};
const issues=eq?db.issues.filter(x=>x.type===eq.type&&x.part===e.part).map(x=>x.issue):[];
is.disabled=!e.part;is.innerHTML='<option value="">Select issue</option>'+issues.map(x=>`<option ${x===e.issue?"selected":""}>${esc(x)}</option>`).join("");is.onchange=()=>e.issue=is.value;
const rt=$(".type",f);rt.value=e.reportType;$(".replacement",f).hidden=!["Replacement","Both"].includes(e.reportType);
rt.onchange=()=>{e.reportType=rt.value;if(!["Replacement","Both"].includes(e.reportType))e.replacementStatus="";render();};
const status=$(".status",f);status.value=e.replacementStatus;status.onchange=()=>e.replacementStatus=status.value;
$(".old",f).value=e.oldSerial;$(".old",f).oninput=ev=>e.oldSerial=ev.target.value;
$(".new",f).value=e.newSerial;$(".new",f).oninput=ev=>e.newSerial=ev.target.value;
$(".remark",f).value=e.remark;$(".remark",f).oninput=ev=>e.remark=ev.target.value;
host.appendChild(f);
});
$("#equipmentCount").textContent=entries.length+" equipment"+(entries.length===1?"":"s");
}
function validate(){
const reporter=$("#reporter").value.trim(),area=$("#area").value;
if(!db.employees.includes(reporter))return"Please select a valid reporter from the employee list.";
if(!area)return"Please select an area.";
for(let i=0;i<entries.length;i++){const e=entries[i],eq=db.equipment.find(x=>x.tag===e.tag&&x.area===area);
if(!eq)return`Equipment ${i+1}: select a valid tag number for the selected area.`;
if(!db.issues.some(x=>x.type===eq.type&&x.part===e.part&&x.issue===e.issue))return`Equipment ${i+1}: select a valid part and issue.`;
if(["Replacement","Both"].includes(e.reportType)&&!e.replacementStatus)return`Equipment ${i+1}: select replacement status.`;}
return"";
}
function submit(ev){ev.preventDefault();clearMessage();const error=validate();if(error)return message(error);
const reportId="FIRS-DEMO-"+Date.now().toString(36).toUpperCase();
const payload={reporter:$("#reporter").value.trim(),area:$("#area").value,equipment:entries.map(({id,...x})=>({...x}))};
console.info("FIRS prototype payload (not transmitted):",payload);
message(`Prototype submission successful. Demo Report ID: ${reportId}. ${entries.length} equipment record(s) validated. No data was sent to Google Sheets.`,"success");
$("#reporter").value="";$("#area").value="";entries.splice(0);addEquipment();
}
function init(){
$("#employeeList").innerHTML=db.employees.map(x=>`<option value="${esc(x)}"></option>`).join("");
$("#area").insertAdjacentHTML("beforeend",db.areas.map(x=>`<option value="${esc(x)}">${esc(x)}</option>`).join(""));
$("#area").onchange=()=>{entries.forEach(e=>{e.tag="";e.part="";e.issue="";});render();clearMessage();};
$("#addEquipmentButton").onclick=addEquipment;$("#reportForm").onsubmit=submit;addEquipment();
}
init();
})();
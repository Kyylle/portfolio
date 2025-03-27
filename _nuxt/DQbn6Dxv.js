import{_ as f,r as m,m as c,c as b,a as t,A as i,B as n,z as v,G as y,o as x}from"./BSEfEsO1.js";var g={};const k={class:"p-8"},A={__name:"aboutform",setup(E){const a=y(),o=m({full_name:"",introduction:"",description:"",profile_image:"",total_projects:0,certificates:0,years_experience:0}),s=g.API_BASE_URL||"http://localhost:8000",u=async()=>{try{const r=await fetch(`${s}/about`);r.ok&&(o.value=await r.json())}catch(r){console.error("Error fetching about info:",r)}},d=async()=>{try{const r=o.value._id?"PUT":"POST";(await fetch(`${s}/about`,{method:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(o.value)})).ok&&(alert("About section updated successfully!"),a.push("/portal"))}catch(r){console.error("Error updating about info:",r)}},p=async()=>{if(confirm("Are you sure you want to delete the About section?"))try{await fetch(`${s}/about`,{method:"DELETE"}),alert("About section deleted successfully!"),a.push("/portal")}catch(r){console.error("Error deleting about info:",r)}};return c(u),(r,e)=>(x(),b("div",k,[e[15]||(e[15]=t("h1",{class:"text-3xl font-semibold mb-6"},"Edit About Section",-1)),t("form",{onSubmit:v(d,["prevent"]),class:"space-y-4"},[t("div",null,[e[7]||(e[7]=t("label",{for:"full_name",class:"block font-medium"},"Full Name:",-1)),i(t("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>o.value.full_name=l),id:"full_name",type:"text",class:"input",required:""},null,512),[[n,o.value.full_name]])]),t("div",null,[e[8]||(e[8]=t("label",{for:"introduction",class:"block font-medium"},"Introduction:",-1)),i(t("textarea",{"onUpdate:modelValue":e[1]||(e[1]=l=>o.value.introduction=l),id:"introduction",class:"input",required:""},null,512),[[n,o.value.introduction]])]),t("div",null,[e[9]||(e[9]=t("label",{for:"description",class:"block font-medium"},"Description:",-1)),i(t("textarea",{"onUpdate:modelValue":e[2]||(e[2]=l=>o.value.description=l),id:"description",class:"input",required:""},null,512),[[n,o.value.description]])]),t("div",null,[e[10]||(e[10]=t("label",{for:"profile_image",class:"block font-medium"},"Profile Image URL:",-1)),i(t("input",{"onUpdate:modelValue":e[3]||(e[3]=l=>o.value.profile_image=l),id:"profile_image",type:"text",class:"input",required:""},null,512),[[n,o.value.profile_image]])]),t("div",null,[e[11]||(e[11]=t("label",{for:"total_projects",class:"block font-medium"},"Total Projects:",-1)),i(t("input",{"onUpdate:modelValue":e[4]||(e[4]=l=>o.value.total_projects=l),id:"total_projects",type:"number",class:"input",required:""},null,512),[[n,o.value.total_projects]])]),t("div",null,[e[12]||(e[12]=t("label",{for:"certificates",class:"block font-medium"},"Certificates:",-1)),i(t("input",{"onUpdate:modelValue":e[5]||(e[5]=l=>o.value.certificates=l),id:"certificates",type:"number",class:"input",required:""},null,512),[[n,o.value.certificates]])]),t("div",null,[e[13]||(e[13]=t("label",{for:"years_experience",class:"block font-medium"},"Years of Experience:",-1)),i(t("input",{"onUpdate:modelValue":e[6]||(e[6]=l=>o.value.years_experience=l),id:"years_experience",type:"number",class:"input",required:""},null,512),[[n,o.value.years_experience]])]),e[14]||(e[14]=t("button",{type:"submit",class:"bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"}," Save Changes ",-1)),t("button",{type:"button",onClick:p,class:"bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 ml-4"}," Delete About ")],32)]))}},w=f(A,[["__scopeId","data-v-6a7dd9c5"]]);export{w as default};

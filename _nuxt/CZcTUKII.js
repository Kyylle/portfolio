import{_ as c,r as i,c as u,a as o,x as d,t as y,z as w,d as p,A as f,B as v,o as s}from"./BSEfEsO1.js";const x={key:0},k={key:1,class:"error"},A={__name:"about",setup(g){const e=i(null),r=i(!1),n=i("");async function b(){r.value=!0,n.value="";try{const a=await fetch("http://localhost:8000/about/");if(!a.ok)throw new Error("Failed to fetch about info.");e.value=await a.json()}catch(a){n.value=a.message}finally{r.value=!1}}async function m(){try{if(!(await fetch("http://localhost:8000/about",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e.value)})).ok)throw new Error("Failed to update about info.");alert("About section updated!")}catch(a){alert(a.message)}}return(a,t)=>(s(),u("div",null,[t[7]||(t[7]=o("h1",null,"About Section (Test GET Request)",-1)),o("button",{onClick:b},"Fetch About Info"),r.value?(s(),u("div",x,"Loading...")):d("",!0),n.value?(s(),u("div",k,y(n.value),1)):d("",!0),e.value?(s(),u("form",{key:2,onSubmit:w(m,["prevent"])},[o("label",null,[t[3]||(t[3]=p(" Full Name: ")),f(o("input",{"onUpdate:modelValue":t[0]||(t[0]=l=>e.value.full_name=l),type:"text"},null,512),[[v,e.value.full_name]])]),o("label",null,[t[4]||(t[4]=p(" Introduction: ")),f(o("textarea",{"onUpdate:modelValue":t[1]||(t[1]=l=>e.value.introduction=l)},null,512),[[v,e.value.introduction]])]),o("label",null,[t[5]||(t[5]=p(" Description: ")),f(o("textarea",{"onUpdate:modelValue":t[2]||(t[2]=l=>e.value.description=l)},null,512),[[v,e.value.description]])]),t[6]||(t[6]=o("button",{type:"submit"},"Update About",-1))],32)):d("",!0)]))}},V=c(A,[["__scopeId","data-v-6c13d7ae"]]);export{V as default};

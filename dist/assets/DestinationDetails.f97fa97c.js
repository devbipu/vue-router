import{_,o as c,c as i,a as s,t as l,s as f,r as o,b as d,F as $,i as k,j as B,w as b}from"./index.05fb84cc.js";const x={name:"Places",props:{places:{type:Object,required:!0}}},y={class:"card"},w=["src"],C={class:"card-body"},D={class:"card-title"};function P(e,n,a,u,m,t){return c(),i("div",y,[s("img",{src:`/img/${a.places.image}`,class:"card-img-top",alt:"..."},null,8,w),s("div",C,[s("h5",D,l(a.places.name),1)])])}const S=_(x,[["render",P]]),j={},q={class:"py-2"};function F(e,n){return c(),i("div",q,[s("button",{class:"btn btn-outline-primary",onClick:n[0]||(n[0]=a=>e.$router.back())},"Go Back")])}const L=_(j,[["render",F]]),N={name:"DestinationDetails",components:{PlacesCard:S,BackBtn:L},props:{slug:{type:String,required:!0}},computed:{destination(){return f.destinations.find(e=>e.slug==this.slug)}}},V={class:"container"},E={class:"card mb-3"},G={class:"row g-0"},I={class:"col-md-4"},O=["src"],z={class:"col-md-8"},A={class:"card-body"},H={class:"card-title"},J={class:"card-text"},K=s("p",{class:"card-text"},[s("small",{class:"text-muted"},"Last updated 3 mins ago")],-1),M={class:"row"},Q={class:"pt-3 mt-4"};function R(e,n,a,u,m,t){const p=o("BackBtn"),h=o("PlacesCard"),g=o("router-link"),v=o("router-view");return c(),i("div",null,[s("div",V,[d(p),s("div",E,[s("div",G,[s("div",I,[s("img",{src:`/img/${t.destination.image}`,class:"img-fluid rounded-start",alt:"..."},null,8,O)]),s("div",z,[s("div",A,[s("h5",H,l(t.destination.name),1),s("p",J,l(t.destination.description),1),K])])])]),s("div",M,[(c(!0),i($,null,k(t.destination.experiences,r=>(c(),B(g,{class:"col-md-3",key:r.id,to:{name:"experience.show",params:{exprienceSlug:r.slug,destinationId:t.destination.id}}},{default:b(()=>[d(h,{places:r},null,8,["places"])]),_:2},1032,["to"]))),128))]),s("div",Q,[d(v)])])])}const U=_(N,[["render",R]]);export{U as default};

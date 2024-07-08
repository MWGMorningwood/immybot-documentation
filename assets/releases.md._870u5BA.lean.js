import{_ as a,c as n,o as s,U as i,m as e,a as t}from"./chunks/framework.Q7Se86sZ.js";const R=JSON.parse('{"title":"Releases","description":"","frontmatter":{},"headers":[],"relativePath":"releases.md","filePath":"releases.md"}'),o={name:"releases.md"},r=i("",103),l=e("ul",null,[e("li",null,"Fixed an issue where the user affinity job was assigning a primary person to a computer, even when the person was from a different tenant than the computer"),e("li",null,"Fixed an issue where an action's duration would continue to increment when a session was completed while the action was still running"),e("li",null,"Fixed an issue where the spinner icon in the Deployment Detection button was broken"),e("li",null,'Fixed an issue where loading a computer detail page would sometimes throw "InvalidOperationException: Sequence contains no elements"'),e("li",null,"Fixed an issue where schedules targeting CW Control secondary groups become could become borked when a CW Control company was renamed"),e("li",null,`Fixed an edge case issue where a scheduled job that's in "Pending Connectivity" status could run concurrently with a newly-created onboarding task of the agent is reinstalled with "automatic onboarding" enabled.`),e("li",null,"Fixed an issue where a software could incorrectly have a prereq on itself"),e("li",null,[t("Fixed a bug where it was possible to encounter a "),e("code",null,"Pipe is broken"),t(" exception while trying to execute scripts on a machine due to a possibility of the agent attempting to use a Powershell host that has faulted/exited recently before we could detect it.")]),e("li",null,[t("Fixed a bug that lead to User-context scripts to incorrectly use the System-context Environment variables (such as "),e("code",null,"TEMP"),t(", "),e("code",null,"USERPROFILE"),t(")")]),e("li",null,'Fixed an issue where the "show more" sidebar dropdown would collapse when selecting the notifications link'),e("li",{prompt:""},"Scripts no longer appends unwanted prompt query param values to your new-OAuthConsent -ExtraQueryParams @"),e("li",null,"Fixed an issue with re-ran actions incorrectly failing due to missing required parameters when they were present in a deployment"),e("li",null,"Fixed an issue where msp non-admins could not view cross-tenant deployments"),e("li",null,"Fixed an issue where msp non-admins could see access request notifications when it should have been admin only"),e("li",null,"Fixed an issue with incorrect breadcrumbs showing on the schedules list page"),e("li",null,'"User Action Trigger" dropdown have been removed in the Script Editor')],-1),d=i("",137),h=e("img",{src:"https://immybot.blob.core.windows.net/media-qa/f30cb597-3a97-49d9-b26a-7018b1dd5605","max-width":"100%"},null,-1),c=e("h3",{id:"oauth-parameters",tabindex:"-1"},[t("OAuth Parameters "),e("a",{class:"header-anchor",href:"#oauth-parameters","aria-label":'Permalink to "OAuth Parameters"'},"​")],-1),u=e("p",null,"Added the ability to create and select auto-refreshing OAuth tokens as script parameters",-1),p=e("img",{src:"https://immybot.blob.core.windows.net/media-qa/85259b64-917e-4676-9f44-8cde043e6fa6","max-width":"100%"},null,-1),m=e("hr",null,null,-1),g=e("img",{src:"https://immybot.blob.core.windows.net/media-qa/ec13e684-8bd3-479c-9c94-69ee21103dfc","max-width":"100%"},null,-1),w=e("hr",null,null,-1),b=e("img",{src:"https://immybot.blob.core.windows.net/media-qa/94275c46-2c78-4739-a0fb-43260f210f88","max-width":"100%"},null,-1),f=e("hr",null,null,-1),y=e("p",null,"Added a button to the Azure Partner Settings page to pre-consent customers to the default or custom app registration via the Partner Center API",-1),k=e("p",null,"This removes the need to provide consent for each customer manually using an admin account from the customer",-1),x=e("img",{src:"https://immybot.blob.core.windows.net/media-qa/8a3c312d-b8d4-4b94-8f1a-5c2c1cb13d65","max-width":"100%"},null,-1),v=e("hr",null,null,-1),q=e("p",null,"Added an OAuth Token Acquisition mechanism to allow Partner admins to give ImmyBot consent to use the Partner Center API",-1),F=e("img",{src:"https://immybot.blob.core.windows.net/media-qa/1d78a586-637b-49b5-9ec4-5a349a8c77b4","max-width":"100%"},null,-1),A=i("",319),P=[r,l,d,h,c,u,p,m,g,w,b,f,y,k,x,v,q,F,A];function I(E,C,S,B,T,_){return s(),n("div",null,P)}const M=a(o,[["render",I]]);export{R as __pageData,M as default};

"use strict";(self.webpackChunkwl_strapi_service=self.webpackChunkwl_strapi_service||[]).push([[9781],{69781:(a,e,r)=>{r.r(e),r.d(e,{default:()=>t});const t={"BoundRoute.title":"Bind rutt till","EditForm.inputSelect.description.role":"Den bifogar den nya autentiserade anv\xE4ndaren till den valda rollen.","EditForm.inputSelect.label.role":"Standardroll f\xF6r autentiserade anv\xE4ndare","EditForm.inputToggle.description.email":"Till\xE5t ej anv\xE4ndaren att skapa flera konton med samma e-postadress med olika autentiseringstj\xE4nster.","EditForm.inputToggle.description.email-confirmation":"N\xE4r aktiverat (P\xC5) f\xE5r nya registrerade anv\xE4ndare ett bekr\xE4ftelsemeddelande.","EditForm.inputToggle.description.email-confirmation-redirection":"N\xE4r du har bekr\xE4ftat din e-post v\xE4ljer du var du ska omdirigeras.","EditForm.inputToggle.description.email-reset-password":"URL:en till din applikations sida f\xF6r \xE5terst\xE4llning av l\xF6senord","EditForm.inputToggle.description.sign-up":"N\xE4r inaktiverad (AV) \xE4r registreringsprocessen f\xF6rbjuden. Ingen kan prenumerera l\xE4ngre oavsett vilken autentiseringstj\xE4nst som anv\xE4nds.","EditForm.inputToggle.label.email":"Ett konto per e-postadress","EditForm.inputToggle.label.email-confirmation":"Aktivera e-postbekr\xE4ftelse","EditForm.inputToggle.label.email-confirmation-redirection":"Omdirigerings-url","EditForm.inputToggle.label.email-reset-password":"\xC5terst\xE4ll l\xF6senordssidan","EditForm.inputToggle.label.sign-up":"Till\xE5t registreringar","EditForm.inputToggle.placeholder.email-confirmation-redirection":"t.ex: https://yourfrontend.com/email-confirmation-redirection","EditForm.inputToggle.placeholder.email-reset-password":"t.ex: https://yourfrontend.com/reset-password","EditPage.form.roles":"Rolldetaljer","Email.template.data.loaded":"E-postmallar har laddats","Email.template.email_confirmation":"Bekr\xE4ftelse av e-postadress","Email.template.form.edit.label":"Redigera en mall","Email.template.table.action.label":"h\xE4ndelse","Email.template.table.icon.label":"ikon","Email.template.table.name.label":"namn","Form.advancedSettings.data.loaded":"Data f\xF6r avancerade inst\xE4llningar har laddats","HeaderNav.link.advancedSettings":"Avancerade inst\xE4llningar","HeaderNav.link.emailTemplates":"E-postmall","HeaderNav.link.providers":"Autentiseringstj\xE4nster","Plugin.permissions.plugins.description":"Definiera alla till\xE5tna \xE5tg\xE4rder f\xF6r {name} plugin.","Plugins.header.description":"Endast \xE5tg\xE4rder som \xE4r bundna av en rutt listas nedan.","Plugins.header.title":"Beh\xF6righeter","Policies.header.hint":"V\xE4lj programmets \xE5tg\xE4rder eller plugins \xE5tg\xE4rder och klicka p\xE5 kugghjulsikonen f\xF6r att visa den bundna rutten","Policies.header.title":"Avancerade inst\xE4llningar","PopUpForm.Email.email_templates.inputDescription":"Om du \xE4r os\xE4ker p\xE5 hur du anv\xE4nder variabler, {link}","PopUpForm.Email.link.documentation":"Kolla in v\xE5r dokumentation.","PopUpForm.Email.options.from.email.label":"Avs\xE4ndarens e-postadress","PopUpForm.Email.options.from.email.placeholder":"kai@doe.com","PopUpForm.Email.options.from.name.label":"Avs\xE4ndarens namn","PopUpForm.Email.options.from.name.placeholder":"Kai Doe","PopUpForm.Email.options.message.label":"Meddelande","PopUpForm.Email.options.object.label":"\xC4mne","PopUpForm.Email.options.object.placeholder":"Bekr\xE4fta din e-postadress f\xF6r %APP_NAME%","PopUpForm.Email.options.response_email.label":"Svarsmail","PopUpForm.Email.options.response_email.placeholder":"kai@doe.com","PopUpForm.Providers.enabled.description":"Om inaktiverat kan anv\xE4ndarna inte anv\xE4nda den h\xE4r tj\xE4nsten.","PopUpForm.Providers.enabled.label":"Till\xE5t","PopUpForm.Providers.key.label":"Klient ID","PopUpForm.Providers.key.placeholder":"TEXT","PopUpForm.Providers.redirectURL.front-end.label":"Omdirigerings-URL: en till din front-end-app","PopUpForm.Providers.redirectURL.label":"Webbadressen f\xF6r omdirigering som ska l\xE4ggas till i {Provider} applikationskonfigurationer","PopUpForm.Providers.secret.label":"Klient hemlighet","PopUpForm.Providers.secret.placeholder":"TEXT","PopUpForm.Providers.subdomain.label":"Host URI (Subdom\xE4n)","PopUpForm.Providers.subdomain.placeholder":"min.subdoman.com","PopUpForm.header.edit.email-templates":"Redigera e-postmallar","PopUpForm.header.edit.providers":"Redigera tj\xE4nst","Providers.data.loaded":"Tj\xE4nster har laddats in","Providers.status":"Status","Roles.empty":"Du har inga roller \xE4n.","Roles.empty.search":"Inga roller matchar s\xF6kningen.","Settings.roles.deleted":"Roll borttagen","Settings.roles.edited":"Roll redigerad","Settings.section-label":"Roller och beh\xF6righeter","components.Input.error.validation.email":"E-postadressen \xE4r ogiltig","components.Input.error.validation.json":"Detta \xE4r inte giltig JSON","components.Input.error.validation.max":"V\xE4rdet \xE4r f\xF6r h\xF6gt.","components.Input.error.validation.maxLength":"V\xE4rdet \xE4r f\xF6r l\xE5ngt.","components.Input.error.validation.min":"V\xE4rdet \xE4r f\xF6r l\xE5gt.","components.Input.error.validation.minLength":"V\xE4rdet \xE4r f\xF6r kort.","components.Input.error.validation.minSupMax":"Minsta v\xE4rdet \xE4r st\xF6rre \xE4n maximalt v\xE4rde.","components.Input.error.validation.regex":"V\xE4rdet matchar inte regex-m\xF6nstret.","components.Input.error.validation.required":"V\xE4rdet \xE4r obligatoriskt.","components.Input.error.validation.unique":"Detta v\xE4rdet \xE4r redan anv\xE4nt.","notification.success.submit":"Inst\xE4llningar har uppdaterats","page.title":"Inst\xE4llningar - Roller","plugin.description.long":"Skydda ditt API med en fullst\xE4ndig autentiseringsprocess baserad p\xE5 JWT. Detta plugin har ocks\xE5 en ACL-strategi som l\xE5ter dig hantera beh\xF6righeterna mellan anv\xE4ndargrupperna.","plugin.description.short":"Skydda ditt API med en fullst\xE4ndig autentiseringsprocess baserad p\xE5 JWT","plugin.name":"Roller och beh\xF6righeter","popUpWarning.button.cancel":"Avbryt","popUpWarning.button.confirm":"Bekr\xE4fta","popUpWarning.title":"Var god bekr\xE4fta","popUpWarning.warning.cancel":"\xC4r du s\xE4ker att du vill avbryta dina \xE4ndringar?"}}}]);

module.exports = {
  template: `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>{{{styles}}}</style>
    <title>{{basics.name}}'s Resume</title>
  </head>
  <body class="bg-neutral-50 py-20 selection:bg-black selection:text-neutral-200 xl:py-40">
    <div class="mx-auto flex w-2/3 flex-col gap-12">
      {{! header section }}
      <header class="flex flex-col items-center py-8">
        <div class="flex flex-col items-center justify-center gap-5 py-5 md:flex-row">
          <img
            src={{basics.image}}
            alt="avatar"
            class="h-32 w-32 rounded-full object-cover object-center drop-shadow-md"
          />
          <div class="space-y-2">
            <h1 class="font-inter text-3xl font-bold md:text-5xl">{{basics.name}}</h1>
            <div class="flex items-center gap-2 text-sm text-neutral-500">
              <svg
                class="h-6 w-6 fill-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ><path
                  d="M12 10c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2m0-5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3m-7 2.602c0-3.517 3.271-6.602 7-6.602s7 3.085 7 6.602c0 3.455-2.563 7.543-7 14.527-4.489-7.073-7-11.072-7-14.527m7-7.602c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602"
                /></svg>
              {{basics.location.city}},
              {{basics.location.countryCode}}
            </div>
          </div>
        </div>
        <h2
          class="text-xl font-thin tracking-wide text-neutral-500 md:text-2xl"
        >{{basics.label}}</h2>
      </header>
      {{! contact info section}}
      <div class="grid md:grid-cols-2">
        <div class="flex flex-col">
          <a
            class="pt-1 text-sky-700 hover:underline"
            href="mailto: {{basics.email}}"
          >{{basics.email}}</a>
          <a
            class="pt-1 text-sky-700 hover:underline"
            href={{basics.website}}
            target="_blank"
          >{{basics.website}}</a>
          <a class="pt-1 text-sky-700" href="tel: {{basics.phone}}">{{basics.phone}}</a>
        </div>
        <div>
          {{#each basics.profiles}}
            <div class="flex pt-1 md:justify-end">
              <span class="font-light lowercase text-neutral-700">{{network}}/</span>
              <a class="text-sky-700 hover:underline" href={{url}} target="_blank">{{username}}</a>
            </div>
          {{/each}}
        </div>
      </div>
      <div class="divide-y-2">
        {{! Summary }}
        <div class="flex flex-col gap-3 py-5">
          <h2 class="font-inter text-3xl font-bold">Summary</h2>
          <p class="text-neutral-500">{{basics.summary}}</p>
        </div>
        {{! Skills }}
        <div class="flex flex-col gap-3 py-5">
          <h2 class="font-inter text-3xl font-bold">Skills</h2>
          <div class="justify-items grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {{#each skills}}
              <div>
                <h3 class="text-lg font-semibold">{{name}}</h3>
                <span class="font-light text-neutral-700">{{level}}</span>
                <div class="flex flex-wrap gap-1 py-3">
                  {{#each keywords}}
                    <div
                      class="w-fit rounded-full bg-neutral-800 px-3 py-1 text-sm font-semibold text-neutral-200"
                    >
                      {{this}}
                    </div>
                  {{/each}}
                </div>
              </div>
            {{/each}}
          </div>
        </div>
        {{! Work }}
        <div class="py-5">
          <h2 class="pb-3 font-inter text-3xl font-bold">Work</h2>
          <ul class="list-disc space-y-4">
            {{#each work}}
              <li class="ml-6 py-2">
                <div class="flex flex-col-reverse justify-between md:flex-row md:items-center">
                  <a
                    href={{url}}
                    target="_blank"
                    class="text-xl font-semibold hover:underline"
                  >{{company}}</a>
                  <div>
                    <span class="font-light text-neutral-600">{{startDate}}
                    </span>
                    {{#if endDate}}
                      <span class="font-light text-neutral-600">-
                        {{endDate}}
                      </span>
                    {{else}}
                      <span class="font-light text-neutral-600">
                        - present</span>
                    {{/if}}
                  </div>
                </div>
                <span class="text-lg font-thin text-neutral-700">{{position}}</span>
                <ul class="pt-3">
                  {{#each highlights}}
                    <li class="text-neutral-500">- {{this}}</li>
                  {{/each}}
                </ul>
              </li>
            {{/each}}
          </ul>
        </div>
        {{! Education }}
        <div class="flex flex-col gap-3 py-5">
          <h2 class="font-inter text-3xl font-bold">Education</h2>
          <ul class="list-disc">
            {{#each education}}
              <li>
                <div class="flex flex-col-reverse justify-between md:flex-row md:items-center">
                  <a
                    href={{url}}
                    target="_blank"
                    class="pb-1 text-xl font-semibold hover:underline"
                  >{{institution}}</a>
                  <div>
                    <span class="font-light text-neutral-600">{{startDate}}
                    </span>
                    {{#if endDate}}
                      <span class="font-light text-neutral-600">-
                        {{endDate}}
                      </span>
                    {{else}}
                      <span class="font-light text-neutral-600">
                        - present</span>
                    {{/if}}
                  </div>
                </div>
                <span class="text-lg font-thin text-neutral-700">{{studyType}}
                  {{#if area}}
                    in
                    {{area}}
                  {{/if}}
                </span>
                <div class="flex flex-wrap gap-1 py-1">
                  {{#each courses}}
                    <div
                      class="w-fit rounded-full bg-neutral-800 px-3 py-1 text-sm font-semibold text-neutral-200"
                    >
                      {{this}}
                    </div>
                  {{/each}}
                </div>
              </li>
            {{/each}}
          </ul>
        </div>
        {{! Projects }}
        <div class="py-5">
          <h2 class="pb-3 font-inter text-3xl font-bold">Projects</h2>
          <div class="grid gap-12 md:grid-cols-2 2xl:grid-cols-4">
            {{#each projects}}
              <div>
                <a
                  href={{url}}
                  target="_blank"
                  class="text-lg font-semibold hover:underline"
                >{{name}}</a>
                <p class="italic">{{description}}</p>
                <ul class="flex flex-wrap gap-1 py-3">
                  {{#each keywords}}
                    <li
                      class="w-fit rounded-full bg-neutral-800 px-3 py-1 text-sm font-semibold text-neutral-200"
                    >
                      {{this}}
                    </li>
                  {{/each}}
                </ul>
              </div>
            {{/each}}
          </div>
        </div>
        {{! Languages, Interests etc }}
        <div class="pt-5">
          <div class="grid gap-12 md:grid-cols-2 2xl:grid-cols-4">
            {{#if languages}}
              <div>
                <h3 class="pb-3 text-lg font-semibold">Languages</h3>
                <div class="space-y-2">
                  {{#each languages}}
                    <div>
                      {{language}}
                      {{#if fluency}}
                        <div class="font-light text-neutral-600">
                          -
                          {{fluency}}
                        </div>
                      {{/if}}
                    </div>
                  {{/each}}
                </div>
              </div>
            {{/if}}
            {{#if interests}}
              <div>
                <h3 class="pb-3 text-lg font-semibold">Interests</h3>
                {{#each interests}}
                  <div>
                    {{name}}
                  </div>
                  {{#each keywords}}
                    <div class="font-light text-neutral-600">
                      -
                      {{this}}
                    </div>
                  {{/each}}
                {{/each}}
              </div>
            {{/if}}
            {{#if awards}}
              <section>
                <h3 class="pb-3 text-lg font-semibold">Awards</h3>
                <div class="space-y-4">
                  {{#each awards}}
                    <div>
                      {{#if date}}
                        <div class="text-sm font-light text-neutral-600">
                          {{date}}
                        </div>
                      {{/if}}

                      {{#if awarder}}
                        <div class="text-sm font-light text-neutral-600">
                          Awarded by:
                          {{awarder}}
                        </div>
                      {{/if}}
                      <a href={{url}} target="_blank" class="hover:underline">
                        {{title}}
                      </a>
                      {{#if summary}}
                        <div class="pt-4 font-light text-neutral-600">
                          {{summary}}
                        </div>
                      {{/if}}
                    </div>
                  {{/each}}
                </div>
              </section>
            {{/if}}
            {{#if certificates}}
              <section>
                <h3 class="pb-3 text-lg font-semibold">Certificates</h3>
                <div class="space-y-4">
                  {{#each certificates}}
                    <div>
                      {{#if date}}
                        <div class="text-sm font-light text-neutral-600">
                          {{date}}
                        </div>
                      {{/if}}
                      {{#if issuer}}
                        <div class="text-sm font-light text-neutral-600">
                          Issued by:
                          {{issuer}}
                        </div>
                      {{/if}}
                      <a href={{url}} target="_blank" class="hover:underline">
                        {{name}}
                      </a>
                    </div>
                  {{/each}}
                </div>
              </section>
            {{/if}}
            {{#if publications}}
              <section>
                <h3 class="pb-3 text-lg font-semibold">Publications</h3>
                <div class="space-y-4">
                  {{#each publications}}
                    <div>
                      {{#if releaseDate}}
                        <div class="text-sm font-light text-neutral-600">
                          {{releaseDate}}
                        </div>
                      {{/if}}
                      {{#if publisher}}
                        <div class="text-sm font-light text-neutral-600">
                          Published in
                          {{publisher}}
                        </div>
                      {{/if}}
                      <a href={{url}} target="_blank" class="hover:underline">
                        {{name}}
                      </a>
                      {{#if summary}}
                        <div class="pt-4 font-light text-neutral-600">
                          {{summary}}
                        </div>
                      {{/if}}
                    </div>
                  {{/each}}
                </div>
              </section>
            {{/if}}
          </div>
        </div>
      </div>
    </div>
    <footer class="mx-auto h-10 w-fit pt-24 pb-8 px-20 text-sm text-neutral-400">
      CV Made with
      {{" "}}
      <a href="https://jsonresume.org/" class="hover:underline"> JSON Resume </a>
      using theme
      <a href="https://www.npmjs.com/package/jsonresume-theme-minyma" class="hover:underline">
        Minyma
      </a>
      {{" "}}by
      <a href="https://github.com/godraadam" class="hover:underline"> godraadam</a>
    </footer>
  </body>
</html>`,
  styles:
    '/*! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com*/*,:after,:before{box-sizing:border-box;border:0 solid #e5e7eb}:after,:before{--tw-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Roboto,sans-serif;font-feature-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:initial}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:initial;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:initial}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,::backdrop,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:#3b82f680;--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.mx-auto{margin-left:auto;margin-right:auto}.ml-6{margin-left:1.5rem}.flex{display:flex}.grid{display:grid}.h-32{height:8rem}.h-6{height:1.5rem}.h-10{height:2.5rem}.w-2\\/3{width:66.666667%}.w-32{width:8rem}.w-6{width:1.5rem}.w-fit{width:-moz-fit-content;width:fit-content}.list-disc{list-style-type:disc}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-12{gap:3rem}.gap-5{gap:1.25rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-1{gap:.25rem}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem*var(--tw-space-y-reverse))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem*var(--tw-space-y-reverse))}.divide-y-2>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-top-width:calc(2px*(1 - var(--tw-divide-y-reverse)));border-bottom-width:calc(2px*var(--tw-divide-y-reverse))}.rounded-full{border-radius:9999px}.bg-neutral-50{--tw-bg-opacity:1;background-color:rgb(250 250 250/var(--tw-bg-opacity))}.bg-neutral-800{--tw-bg-opacity:1;background-color:rgb(38 38 38/var(--tw-bg-opacity))}.fill-neutral-500{fill:#737373}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.py-20{padding-top:5rem;padding-bottom:5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-20{padding-left:5rem;padding-right:5rem}.pt-1{padding-top:.25rem}.pb-3{padding-bottom:.75rem}.pt-3{padding-top:.75rem}.pb-1{padding-bottom:.25rem}.pt-5{padding-top:1.25rem}.pt-4{padding-top:1rem}.pt-24{padding-top:6rem}.pb-8{padding-bottom:2rem}.font-inter{font-family:Inter,Open Sans,sans-serif}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem}.text-lg,.text-xl{line-height:1.75rem}.text-lg{font-size:1.125rem}.font-bold{font-weight:700}.font-thin{font-weight:100}.font-light{font-weight:300}.font-semibold{font-weight:600}.lowercase{text-transform:lowercase}.italic{font-style:italic}.tracking-wide{letter-spacing:.025em}.text-neutral-500{--tw-text-opacity:1;color:rgb(115 115 115/var(--tw-text-opacity))}.text-sky-700{--tw-text-opacity:1;color:rgb(3 105 161/var(--tw-text-opacity))}.text-neutral-700{--tw-text-opacity:1;color:rgb(64 64 64/var(--tw-text-opacity))}.text-neutral-200{--tw-text-opacity:1;color:rgb(229 229 229/var(--tw-text-opacity))}.text-neutral-600{--tw-text-opacity:1;color:rgb(82 82 82/var(--tw-text-opacity))}.text-neutral-400{--tw-text-opacity:1;color:rgb(163 163 163/var(--tw-text-opacity))}.drop-shadow-md{--tw-drop-shadow:drop-shadow(0 4px 3px #00000012) drop-shadow(0 2px 2px #0000000f);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.selection\\:bg-black ::-moz-selection{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.selection\\:bg-black ::selection{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.selection\\:text-neutral-200 ::-moz-selection{--tw-text-opacity:1;color:rgb(229 229 229/var(--tw-text-opacity))}.selection\\:text-neutral-200 ::selection{--tw-text-opacity:1;color:rgb(229 229 229/var(--tw-text-opacity))}.selection\\:bg-black::-moz-selection{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.selection\\:bg-black::selection{--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.selection\\:text-neutral-200::-moz-selection{--tw-text-opacity:1;color:rgb(229 229 229/var(--tw-text-opacity))}.selection\\:text-neutral-200::selection{--tw-text-opacity:1;color:rgb(229 229 229/var(--tw-text-opacity))}.hover\\:underline:hover{text-decoration-line:underline}@media (min-width:768px){.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:items-center{align-items:center}.md\\:justify-end{justify-content:flex-end}.md\\:text-5xl{font-size:3rem;line-height:1}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (min-width:1280px){.xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.xl\\:py-40{padding-top:10rem;padding-bottom:10rem}}@media (min-width:1536px){.\\32xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}',
};

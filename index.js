const handlebars = require("handlebars");

function render(input) {
  // const source = readFileSync('./src/template.hbs').toString();

  // have to inline markup, because jsonresume registry functions run on vercel edge functions
  // which do not support readFileSync
  const source = `<html lang="en">
                    <head>
                      <meta charset="UTF-8" />
                      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                      <link rel="stylesheet" href="styles.css" />
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
                  </html>`;


  const template = handlebars.compile(source);
  return template(input);
}

module.exports = { render };

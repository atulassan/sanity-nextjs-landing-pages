export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e2a8f0402049decea712729',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qq516suv',
                  apiId: 'c6e0c178-c299-4d36-a1da-25638f15db2e'
                },
                {
                  buildHookId: '5e2a8f038948eae944f6044c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7zqr3yzh',
                  apiId: 'c993d0c1-d450-4506-b6d1-4d59f07a888c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/atulassan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7zqr3yzh.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

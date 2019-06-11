export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5cff7de9bf8da30644537e4e',
                  title: 'Sanity Studio',
                  name: 'rvlog-sapper-studio',
                  apiId: '85fa455d-4187-4019-8a14-6871f44aa09d'
                },
                {
                  buildHookId: '5cff7de97f17cda9018725e7',
                  title: 'Blog Website',
                  name: 'rvlog-sapper',
                  apiId: '89d4a734-ec3a-47e0-b8c6-c8803ca9639b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rakhaviantoni/rvlog-sapper',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://rvlog-sapper.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

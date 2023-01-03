import * as prismic from '@prismicio/client'
export const repositoryName = 'ignewsdalastra'
export const client = prismic.createClient(repositoryName, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
//   routes: [
//     {
//       type: 'homepage',
//       path: '/',
//     },
//   ],
})
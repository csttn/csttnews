import Prismic from '@prismicio/client';

export default function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client(process.env.PRISMIC_API_URL, {
    req,
    accessToken: process.env.PRIMISC_ACCESS_TOKEN,
  });

  return prismic;
}

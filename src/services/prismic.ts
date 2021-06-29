import Prismic from "@prismicio/client";

export default function getPrismicClient() {
  const prismic = Prismic.client(process.env.PRIMISC_ACCESS_TOKEN, {
    accessToken: process.env.PRIMISC_ACCESS_TOKEN,
  });

  return prismic;
}

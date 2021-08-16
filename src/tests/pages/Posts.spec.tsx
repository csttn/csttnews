import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import Posts, { getStaticProps } from '../../pages/posts';
import getPrismicClient from '../../services/prismic';

jest.mock('../../services/prismic');

const posts = [
  {
    slug: 'my-new-post',
    title: 'My New Post',
    excerpt: 'Post excerpt',
    updatedAt: '2018-01-01T00:00:00.000Z',
  },
];
describe('Posts page', () => {
  it('renders correctly', () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText('My New Post')).toBeTruthy();
  });

  it('load initial data', async () => {
    const getPrimiscClientMocked = mocked(getPrismicClient);

    getPrimiscClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: 'my-new-posts',
            data: {
              title: [{ type: 'heading', text: 'My new Post' }],
              content: [{ type: 'paragraph', text: 'Post excerpt' }],
            },
            last_publication_date: '2018-01-01T00:00:00.000Z',
          },
        ],
      }),
    } as any);

    const response = await getStaticProps({});

    console.log(response);

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [
            {
              slug: expect.any(String),
              title: expect.any(String),
              excerpt: expect.any(String),
              updatedAt: expect.any(String),
            },
          ],
        },
      }),
    );
  });
});

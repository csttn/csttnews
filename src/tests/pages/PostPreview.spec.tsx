import { render, screen } from '@testing-library/react';
import { getSession, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { mocked } from 'ts-jest/utils';
import Post, { getStaticProps } from '../../pages/posts/preview/[slug]';
import getPrismicClient from '../../services/prismic';

jest.mock('../../services/prismic');

jest.mock('next-auth/client');

jest.mock('next/router');

const post = {
  slug: 'my-new-post',
  title: 'My New Post',
  content: '<p>My post content</p>',
  updatedAt: '2018-01-01T00:00:00.000Z',
};

describe('Post preview page', () => {
  it('renders correctly', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValue([null, false]);

    render(<Post post={post} />);
    expect(screen.getByText('My New Post')).toBeInTheDocument();
    expect(screen.getByText('Quer continuar lendo ?')).toBeInTheDocument();
  });

  it('redirect user to full post when authenticated', async () => {
    const useSessionMocked = mocked(useSession);
    const useRouterMocked = mocked(useRouter);

    const pushMock = jest.fn();

    useSessionMocked.mockReturnValue([{ activeSubscription: { user: 'fake user' } }, false] as any);
    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any);

    render(<Post post={post} />);

    expect(pushMock).toHaveBeenCalledWith('/posts/my-new-post');
  });

  it('loads initial data', async () => {
    const getSessionMocked = mocked(getSession);

    const getPrimiscClientMocked = mocked(getPrismicClient);
    getPrimiscClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [{ type: 'heading', text: 'My new Post' }],
          content: [{ type: 'paragraph', text: 'Post excerpt' }],
        },
        last_publication_date: '04-01-2021',
      }),
    } as any);

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: { a: 'test' },
    } as any);

    const response = await getStaticProps({
      params: {
        slug: 'my-new-post',
      },
    } as any);
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: expect.any(String),
            title: expect.any(String),
            content: expect.any(String),
            updatedAt: expect.any(String),
          },
        },
      }),
    );
  });
});

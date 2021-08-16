import { render, screen } from '@testing-library/react';
import { getSession } from 'next-auth/client';
import { mocked } from 'ts-jest/utils';
import Post, { getServerSideProps } from '../../pages/posts/[slug]';

jest.mock('../../services/prismic');

jest.mock('next-auth/client');

const post = {
  slug: 'my-new-post',
  title: 'My New Post',
  content: '<p>My post content</p>',
  updatedAt: '2018-01-01T00:00:00.000Z',
};

describe('Post page', () => {
  it('renders correctly', () => {
    render(<Post post={post} />);

    expect(screen.getByText('My New Post')).toBeTruthy();
  });

  it('redirect not subcription', async () => {
    const getSessionMocked = mocked(getSession);

    getSessionMocked.mockResolvedValueOnce(null);

    const response = await getServerSideProps({
      params: {
        slug: 'my-new-post',
      },
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: '/',
        }),
      }),
    );
  });

  it('loads initial data', () => {
    const getSessionMocked = mocked(getSession);

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: { a: 'test' },
    } as any);
  });
});

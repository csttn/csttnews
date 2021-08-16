import { render } from '@testing-library/react';
import { ActiveLink } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      };
    },
  };
});

describe(`ActiveLink`, () => {
  it('ActiveLink like renders correctly', () => {
    const { getByText } = render(
      <ActiveLink href='/' activeClassName='active'>
        <a>test</a>
      </ActiveLink>,
    );

    expect(getByText('test')).toBeInTheDocument();
  });

  it('activelink is receiving active class', () => {
    const { getByText } = render(
      <ActiveLink href='/' activeClassName='active'>
        <a>test</a>
      </ActiveLink>,
    );

    expect(getByText('test')).toHaveClass('active');
  });
});

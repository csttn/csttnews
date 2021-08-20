import { render, screen, waitFor } from '@testing-library/react';
import { Async } from '.';

test(' it renders correctly', async () => {
  render(<Async />);

  expect(screen.getByText('Hello Async Component')).toBeInTheDocument();

  //    o findByText('Hello Async Component') espera o botão para conseguir buscar o texto
  expect(await screen.findByText('Hello Async Component')).toBeInTheDocument();

  //   outra forma de executar testes assyncrnos é usando o waitFor

  await waitFor(() => {
    return expect(screen.getByText('Hello Async Component')).toBeInTheDocument();
  });
});

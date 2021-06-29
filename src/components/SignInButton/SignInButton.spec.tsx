import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";

import { useSession } from "next-auth/client";

import { SignInButton } from ".";

// especificando ao jest pra mocar essa referencia
jest.mock("next-auth/client");

describe("SignInButton component", () => {
  it("renders correctly when user is not autenticated", () => {
    // adicionando refrencia da função a ser mockada
    const useSessionMocked = mocked(useSession);

    // o valor mockado é somente aplicado a este caso de teste, pela função mockReturnValueOnce
    // para mockar todas as chamdas dessa função em outros testes nesse arquivo, seria necessario usar a função mockReturnValue
    useSessionMocked.mockReturnValueOnce([null, false]);

    render(<SignInButton />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });

  it("renders correctly when user is autenticated", () => {
    // adicionando refrencia da função a ser mockada
    const useSessionMocked = mocked(useSession);

    // mockando valor de usuario para validação
    useSessionMocked.mockReturnValueOnce([
      {
        user: { name: "John Doe", email: "email@email.com", image: null },
        expires: "fake-expires",
      },
      false,
    ]);

    const { debug } = render(<SignInButton />);

    debug();

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});

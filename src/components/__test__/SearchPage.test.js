import SearchPage from '../pages/SearchPage'
import { cleanup, fireEvent, getByText, queryByText, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

afterEach(() => {
    cleanup ();
});

test('Alert should render when button is clicked when search field is blank', () =>{
    const {getByText} = render(<SearchPage />)
    const buttonElement = getByText("Search")
    fireEvent.click(buttonElement)
    const alertElement = getByText("Search can't be blank")
    expect(alertElement).toBeTruthy()
});

test('Alert should not render when button is clicked when search field is not blank', () =>{
    const {getByText, getByTestId, queryByText} = render(<SearchPage />);
    const buttonElement = getByText("Search");
    const inputField = getByTestId("search-input");
    userEvent.type(inputField, "Lady Gaga");
    fireEvent.click(buttonElement);
    const alertElement = queryByText("Search can't be blank");
    expect(inputField).toHaveValue("Lady Gaga");
    expect(alertElement).not.toBeInTheDocument();
});
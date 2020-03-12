import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders correctly", () => {
  render(<ContactForm />);
});

test("form creates list", () => {
  const { getByLabelText, getByText, findAllByText } = render(<ContactForm />);

  // query for the form inputs
  const speciesInput = getByLabelText(/species/i);
  const ageInput = getByLabelText(/age/i);
  const notesInput = getByLabelText(/notes/i);

  // fireEvent function from RTL to fill in the inputs
  fireEvent.change(speciesInput, {
    target: { name: "species", value: "Elephant" }
  });
  fireEvent.change(ageInput, {
    target: { name: "age", value: "28" }
  });
  fireEvent.change(notesInput, {
    target: { name: "notes", value: "Really old, but very sweet" }
  });

  console.log(speciesInput.value);

  // query for the submit button
  const submitButton = getByText(/submit!/i);

  // clicking the button
  fireEvent.click(submitButton);
  fireEvent.click(submitButton);

  // assertion
  findAllByText(/elephant/i);
});

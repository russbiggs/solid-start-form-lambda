import {formAction} from '~/server';

export default function FormPage() {
  return (
    <main>
      <h1>Form</h1>
      <form action={formAction} method='post'>
        <label for="name">Name</label>
        <input type="text" name="name" id="name-input" />
        <label for="name">Password</label>
        <input type="password" name="name" id="password-input" />
        <button type="submit">
          Submit
        </button>
      </form>
    </main>
  );
}

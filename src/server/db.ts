'use server';

import { redirect } from "@solidjs/router";

export async function formTest(formData: FormData) {
    const name = String(formData.get('name'));
    const password = String(formData.get('password'));
    console.log(name, password);
    throw redirect('/');
}
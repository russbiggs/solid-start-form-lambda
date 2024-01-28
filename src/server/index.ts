import { action } from "@solidjs/router";
import {formTest} from './db';

export const formAction = action(formTest, 'form-test');